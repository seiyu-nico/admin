<template>
<div>
  <h2>勤怠一覧</h2>
  <form>
    <date-range-picker
             ref="picker"
            :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd'}"
            :autoApply="true"
            :date-range="attendance_date_range"
            opens="right"
            @select="getAttendances"
    >
    </date-range-picker>
  </form>
  <div class="row my-2">
    <div class="col-4">
      <p>勤務時間: {{ workingTimes() }}</p>
    </div>
    <div class="col-4">
      <p>休憩時間: {{ breakTimes() }}</p>
    </div>
    <div class="col-4">
    </div>
  </div>
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <td>出勤時間</td>
        <td>退勤時間</td>
      </tr>
    </thead>
    <tbody v-show="spinner">
      <tr v-for="attendance in attendances" :key="attendance.id">
        <td>{{attendance.start_date}} {{attendance.start_time}}</td>
        <td>{{attendance.end_date}} {{attendance.end_time}}</td>
      </tr>
    </tbody>
  </table>
  <div v-show="false == spinner">
    <Spinner />
  </div>
</div>
</template>
<script>
import { mapState, mapGetters} from 'vuex';
import DateRangePicker from 'vue2-daterange-picker';
//you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
import attendanceMixin from '../../mixin/Attendance/index';
import Spinner from '../Spinner/Index';
export default {
  mixins: [attendanceMixin],
  components: { 
    DateRangePicker,
    Spinner,
  },
  data: function () {
    return {
      attendance_date_range: {
        'startDate': '',
        'endDate': '',
      },
    }
  },
  created () {
    this.selectInit();
  },
  methods: {
    async selectInit() {
      const today = this.$moment();
      this.attendance_date_range.startDate = today.startOf('month').format('YYYY-MM-DD');
      this.attendance_date_range.endDate = today.endOf('month').format('YYYY-MM-DD');
      this.getAttendances(this.attendance_date_range);
    },
    async getAttendances(value) {
      const start = this.$moment(value.startDate, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
      const end = this.$moment(value.endDate, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
      await this.$store.dispatch('attendance/list/getAttendances', {'start': start, 'end': end });
    },
    workingTimes() {
      // TODO: 一覧での勤務時間の計算から
      const minutes = this.attendances.map((attendance, index, array) => {
        return this.getWorkingTime(attendance, attendance.break_time).reduce((sum, v) => sum + v, 0);
      });
      return this.format(minutes);
    },
    breakTimes() {
       const minutes = this.attendances.map((attendance, index, array) => {
        return this.getBreakTimes(attendance.break_time).reduce((sum, v) => sum + v, 0);
      });
      return this.format(minutes);
    }
  },
  computed: {
    ...mapState({
      attendances: state => state.attendance.list.attendances,
      spinner: state => state.attendance.list.spinner, 
    }),
  },
}
</script>