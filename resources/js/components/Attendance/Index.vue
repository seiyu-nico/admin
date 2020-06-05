<template>
<div>
  <div class="row">
    <h2>勤怠管理</h2>
  </div>
  <form>
    <div class="row">
      <div class="col-sm-6 col-xs-12 form-group">
        <h3>出勤時間</h3>
        <div class="row">
          <div class="col">
            <Datepicker :value="date.start_date" 
                        input-class="form-control bg_color" 
                        monday-first 
                        bootstrap-styling
                        @selected="startDateUpdate"
                        format="yyyy/MM/dd"
                        ></Datepicker>
          </div>
          <div class="col">
            <vue-clock-picker :value="date.start_time | formatTime" 
                              @open="select('start_time')"
                              @timeset="update"
                              done-text="ok" cancel-text="close"
                              id="start_time" class="time"
                              input-class="form-control bg_color" 
                              close-on-esc
                              close-on-overlay
                            ></vue-clock-picker>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xs-12 form-group">
        <h3>退勤時間</h3>
        <div class="row">
          <div class="col">
            <Datepicker :value="date.end_date" 
                        input-class="form-control bg_color" 
                        monday-first 
                        bootstrap-styling
                        @selected="endDateUpdate"
                        format="yyyy/MM/dd"
                        ></Datepicker>
          </div>
          <div class="col">
            <vue-clock-picker :value="date.end_time | formatTime" 
              　　　　　　　　　@open="select('end_time')"
                　　　　　　　　@timeset="update"
              　　　　　　　　　done-text="ok" cancel-text="close"
                              id="end_time" class="time"
                              input-class="form-control bg_color" 
                              close-on-esc
                              close-on-overlay
            　　 　　　　　　 ></vue-clock-picker>
          </div>
        </div>
      </div>
    </div>
  </form>
  <div>
    <p>勤務時間: {{workingTimes()}}</p>
    <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <td>休憩時間</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(break_time, index) in break_times" :key="break_time.id">
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.start_date" @input="updateBreakTimeValue($event, 'start_date', index)" >
            </div>
            <div class="col">
              <input :value="break_time.start_time" @input="updateBreakTimeValue($event, 'start_time', index)" >
            </div>
          </div>
        </td>
        <td>
          <div class="row">
            <div class="col">
              <input :value="break_time.end_date" @input="updateBreakTimeValue($event, 'end_date', index)" >
            </div>
            <div class="col">
              <input :value="break_time.end_time" @input="updateBreakTimeValue($event, 'end_time', index)" >
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  </div>
</div>
</template>

<script>
import VueClockPicker from '@pencilpix/vue2-clock-picker';
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';
import Datepicker from 'vuejs-datepicker';
import { mapState, mapGetters} from 'vuex';
export default {
  components: {
    VueClockPicker,
    Datepicker,
  },
  data() {
    return {
    }
  },
  created () {
    this.getAttendance();
  },
  methods: {
    async getAttendance() {
      // 今日のデータ取得
      let date = this.$moment().format('YYYY-MM-DD');
      await this.$store.dispatch('attendance/getAttendance', date);
    },
    select(select) {
      this.$store.commit('attendance/setSelect', select);
    },
    async update(date) {
      this.$store.dispatch('attendance/store', date);
    },
    async startDateUpdate(date) {
      this.select('start_date');
      await this.$store.dispatch('attendance/store', this.$moment(date).format('YYYY-MM-DD'));
    },
    async endDateUpdate(date) {
      this.select('end_date');
      await this.$store.dispatch('attendance/store', this.$moment(date).format('YYYY-MM-DD'));
    }, 
    workingTimes() {
      // どれかが未入力なら計算しない
      if (!this.date.start_date || !this.date.start_time || !this.date.end_date || !this.date.end_time) {
            return '00:00';
      }

      let times = [];
      for (let i = 0; i <= this.break_times.length; i++) {
        console.log(i);
        if (0 == i) {

          // 最初のループ
          const to = this.$moment(this.date.start_date + ' ' + this.date.start_time);
          const from = this.$moment(this.break_times[i].start_date + ' ' + this.break_times[i].start_time);
          times.push(this.diff(to, from));
        } else if (i == this.break_times.length) {
          // 最後のループ
          const to = this.$moment(this.break_times[i - 1].end_date + ' ' + this.break_times[i - 1].end_time);
          const from = this.$moment(this.date.end_date + ' ' + this.date.end_time);
          times.push(this.diff(to, from));
        } else {
          const to = this.$moment(this.break_times[i - 1].end_date + ' ' + this.break_times[i - 1].end_time);
          const from = this.$moment(this.break_times[i].start_date + ' ' + this.break_times[i].start_time);
          times.push(this.diff(to, from));
        }
      }
      // 分の合計
      const minutes_sum = times.reduce((sum, v) => sum + v.minutes, 0);
      // 繰り上げ分計算
      const carry = Math.floor(minutes_sum / 60);
      // あまり(実際の分) 
      const minutes = Math.floor(minutes_sum % 60);
      // 時の合計と繰り上げ分を足す
      const hours = times.reduce((sum, v) => sum + v.hours, 0) + carry;

      return hours + ':' + ('00' + (minutes)).slice(-2);
    },
    diff(to, from) {
      let time = {
        'hours': 0, 'minutes': 0
      };
      let diff = from.diff(to, 'minutes');
      time['hours'] = Math.floor(diff / 60);
      time['minutes'] = Math.floor(diff % 60);
      return time;
    },
    async updateBreakTimeValue(event, key, index) {
      this.$store.dispatch('updateBreakTimeValue', { key: key, index:index, value: event.target.value });
    },
  },
  filters: {
    formatTime: (value) => {
      if (!value) {
        return '';
      }
      let time = value.split(':');
      return time[0] + ':' + time[1];
    }
  },
  computed: {
    ...mapState({
      date: state => state.attendance.date,
      break_times: state => state.attendance.break_times,
    }),
  },
}
</script>
<style>
.bg_color {
  background-color: #ffffff !important; 
}
.inpur_error_hidden {
  display: none;
}
</style>