<template>
<div>
  <h2>勤怠一覧</h2>
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
export default {
  created () {
    this.getAttendances(); 
    this.selectInit();
  },
  methods: {
    async getAttendances() {
      // メモ取得
      await this.$store.dispatch('attendance/getAttendances');
    },
    async selectInit() {
      this.$store.commit('attendance/setYear', 2020);
      this.$store.commit('attendance/setMonth', '03');
    },
  },
  computed: {
    ...mapState({
      select_year: state => state.attendance.select_year,
      select_month: state => state.attendance.select_month,
    }),
    ...mapGetters(
      { attendances: 'attendance/attendances'}
    ),
  },
}
</script>