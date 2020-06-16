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
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <td>出勤時間</td>
        <td>退勤時間</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="attendance in attendances" :key="attendance.id">
        <td>{{attendance.start_date}} {{attendance.start_time}}</td>
        <td>{{attendance.end_date}} {{attendance.end_time}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import { mapState, mapGetters} from 'vuex';
import DateRangePicker from 'vue2-daterange-picker';
//you need to import the CSS manually (in case you want to override it)
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
export default {
  components: { 
    DateRangePicker
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
    }
  },
  computed: {
    ...mapState({
      attendances: state => state.attendance.list.attendances,
    }),
  },
}
</script>