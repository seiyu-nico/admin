<template>
<div>
  <h2>勤怠一覧</h2>

  <form>
    <div class="form-row">
      <div class="col">
        <div class="form-group">
          <label for="select_year">年</label>
          <select id="select_year" class="form-control" :value="select.year" @change="updateSelect('year', $event)">
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="select_month">月</label>
          <select id="select_month" class="form-control" :value="select.month" @change="updateSelect('month', $event)">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
          </select>
        </div>
      </div>
      <div class="col-7"></div>
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
      this.$store.commit('attendance/updateSelect', {'key': 'year', 'value': 2020,});
      this.$store.commit('attendance/updateSelect', {'key': 'month', 'value': '03',});

    },
    async updateSelect(key, event) {
      this.$store.commit('attendance/updateSelect', {'key': key, 'value': event.target.value,});
    }
  },
  computed: {
    ...mapState({
      select: state => state.attendance.select,
    }),
    ...mapGetters(
      { attendances: 'attendance/attendances'}
    ),
  },
}
</script>