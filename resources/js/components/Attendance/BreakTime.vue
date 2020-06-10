<template>
   <div>
    <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <td>
          休憩時間
          <button class="btn btn-primary btn-sm mx-2" @click="addBreakTime()">追加</button>
          <button class="btn btn-primary btn-sm mx-2" @click="addBreakTimeLunchTime()">お昼休憩追加</button>
        </td>
        <td></td>
        <td></td>
      </tr>
    </thead>
    <tbody v-if="break_times">
      <tr v-for="(break_time, index) in sortStartDate" :key="break_time.id">
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.start_date" @input="updateBreakTimeValue($event, 'start_date', break_time.id)" >
            </div>
            <div class="col">
              <input :value="break_time.start_time" @input="updateBreakTimeValue($event, 'start_time', break_time.id)" >
            </div>
          </div>
        </td>
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.end_date" @input="updateBreakTimeValue($event, 'end_date', break_time.id)" >
            </div>
            <div class="col">
              <input :value="break_time.end_time" @input="updateBreakTimeValue($event, 'end_time', break_time.id)" >
            </div>
          </div>
        </td>
        <td><button class="btn btn-primary btn-sm mx-2" @click="deleteBreakTime(break_time.id)">削除</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex';
export default {
  methods: {
    async updateBreakTimeValue(event, key, id) {
      const date_valid = this.$moment(event.target.value, 'YYYY-MM-DD', true).isValid();
      const time_valid = this.$moment(event.target.value, 'HH:mm:ss', true).isValid(); 
      // 日付 or 時間形式として正しければ送信
      if (date_valid || time_valid) {
        this.$store.dispatch('attendance/break_time/updateBreakTimeValue', { key: key, id: id, value: event.target.value });
      }
    },
    addBreakTime() {
      const param = {
        'id': '',
        'attendance_id': this.attendance.id,
        'start_date': this.attendance.start_date,
        'end_date': this.attendance.end_date,
      }
      this.$store.dispatch('attendance/break_time/addBreakTime',  param);
    },
    addBreakTimeLunchTime(){
      // お昼休憩追加
      const param = {
        'id': '',
        'attendance_id': this.attendance.id,
        'start_date': this.attendance.start_date,
        'start_time': '12:00:00',
        'end_date': this.attendance.end_date,
        'end_time': '13:00:00',
      }
      this.$store.dispatch('attendance/break_time/addBreakTime',  param); 
    },
    deleteBreakTime(id) {
      const param = {
        'id': id,
      }
      console.log('delete');
      this.$store.dispatch('attendance/break_time/deleteBreakTime',  param);
    },
  },
  computed: {
    ...mapState({
      attendance: state => state.attendance.attendance,
      break_times: state => state.attendance.break_time.break_times,
    }),
    sortStartDate(){
      // 休憩時間をソートする
      return this.break_times.sort((a,b) => (a.start_date + ' ' + a.start_time > b.start_date + ' ' + b.start_time  ? 1 : -1));
    }
  },
}
</script>