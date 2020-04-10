<template>
<div>
  <h2>勤怠一覧</h2>
  <form>
    <div class="form-group row">
      <div class="col-2">
        <select id="select_year" class="form-control" :value="select.year" @change="updateSelect('year', $event)">
          <option v-for="year in years" :value="year" :key="year">{{year}}</option>
        </select>
      </div>
      <label for="select_year" class="col-1 col-form-label" style="padding-left: 0px;">年</label>
      <div class="col-2">
        <select id="select_month" class="form-control" :value="select.month" @change="updateSelect('month', $event)">
          <option v-for="month in months" :value="month" :key="month">{{month}}</option>
        </select>
      </div>
      <label for="select_month" class="col-1 col-form-label" style="padding-left: 0px;">月</label>
    </div>
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
export default {
  created () {
    this.getAttendances(); 
  },
  methods: {
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
  },
  computed: {
    ...mapState({
      attendances: state => state.attendance.list.attendances,
      select: state => state.attendance.list.select,
      months: state => state.common.date.months,
      years: state => state.common.date.years,
    }),
    ...mapGetters(
      { select_attendances: 'attendance/list/select_attendances'}
    ),
  },
}
</script>