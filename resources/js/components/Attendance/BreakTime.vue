<template>
   <div>
    <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <td>休憩時間<button class="btn btn-primary btn-sm mx-2" @click="addBreakTime()">追加</button></td>
        <td></td>
      </tr>
    </thead>
    <tbody v-if="break_times">
      <tr v-for="(break_time, index) in break_times" :key="break_time.id">
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.start_date" @input="updateBreakTimeValue(break_time.start_date, $event, 'start_date', break_time.id)" >
            </div>
            <div class="col">
              <input :value="break_time.start_time" @input="updateBreakTimeValue(break_time.start_time, $event, 'start_time', break_time.id)" >
            </div>
          </div>
        </td>
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.end_date" @input="updateBreakTimeValue(break_time.end_date, $event, 'end_date', break_time.id)" >
            </div>
            <div class="col">
              <input :value="break_time.end_time" @input="updateBreakTimeValue(break_time.end_date, $event, 'end_time', break_time.id)" >
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex';
export default {
  methods: {
    async updateBreakTimeValue(old_value, event, key, id) {
      const date_valid = this.$moment(event.target.value, 'YYYY-MM-DD', true).isValid();
      const time_valid = this.$moment(event.target.value, 'HH:mm:ss', true).isValid(); 
      // 日付 or 時間形式として正しければ送信
      console.log(event);
      if (date_valid || time_valid) {
        this.$store.dispatch('attendance/break_time/updateBreakTimeValue', { key: key, id: id, value: event.target.value });
      } else {
        // 元の値に戻す処理
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
    }
  },
  computed: {
    ...mapState({
      attendance: state => state.attendance.attendance,
      break_times: state => state.attendance.break_time.break_times,
    }),
  },
}
</script>