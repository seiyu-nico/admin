<template>
<div>
  <h2>勤怠一覧</h2>
  <form>
    <date-range-picker
             ref="picker"
            :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd'}"
            :autoApply="true"
            :date-range="date_range"
            :date-format="format"
            opens="right"
            @select="rangeSelect"
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
      <tr v-for="attendance in select_attendances" :key="attendance.id">
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
      dateRange: [],
      dateFormat: 'YYYY-MM-DD',
      date_range: {"startDate": "2020-01", "endDate": '2020-06'},

    }
  },
  created () {
    this.getAttendances(); 
  },
  methods: {
    format() {
      return 'YYYY-MM-DD';
    },
    async getAttendances() {
      // メモ取得
      await this.$store.dispatch('attendance/list/getAttendances');
      // attendanceが返ってきてからじゃないとyearの最大値と最小値がわからないため
      // ここで実行
      await this.createYearSelector();
      await this.createMonthSelector();
      await this.selectInit();
    },
    async selectInit() {
      const today = new Date();
      const year = today.getFullYear();
      // 月は2桁表示
      const month = ("0" + (today.getMonth()+1)).slice(-2);
      this.$store.commit('attendance/list/updateSelect', {'key': 'year', 'value': year,});
      this.$store.commit('attendance/list/updateSelect', {'key': 'month', 'value': month,});
    },
    async updateSelect(key, event) {
      this.$store.commit('attendance/list/updateSelect', {'key': key, 'value': event.target.value,});
    },
    async createMonthSelector() {
      await this.$store.dispatch('common/date/createMonth');
    },
    async createYearSelector() {
      let dates = this.attendances.map(attendance => new Date(attendance.start_date));
      let maxDate=new Date(Math.max.apply(null, dates));
      let minDate=new Date(Math.min.apply(null, dates));
      const min_year = minDate.getFullYear();
      const max_year = maxDate.getFullYear();
      await this.$store.dispatch('common/date/createYear', {'min_year': min_year, 'max_year': max_year});
    },
    rangeSelect(value) {
      console.log(value);
    }
  },
  computed: {
    ...mapState({
      attendances: state => state.attendance.list.attendances,
      select: state => state.attendance.list.select,
      months: state => state.common.date.months,
      years: state => state.common.date.years,
    }),
    ...mapGetters(
      { select_attendances: 'attendance/list/selectAttendances'}
    ),
  },
}
</script>