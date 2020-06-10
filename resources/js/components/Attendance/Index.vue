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
            <Datepicker :value="attendance.start_date" 
                        input-class="form-control bg_color" 
                        monday-first 
                        bootstrap-styling
                        @selected="startDateUpdate"
                        format="yyyy/MM/dd"
                        ></Datepicker>
          </div>
          <div class="col">
            <vue-clock-picker :value="attendance.start_time | formatTime" 
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
            <Datepicker :value="attendance.end_date" 
                        input-class="form-control bg_color" 
                        monday-first 
                        bootstrap-styling
                        @selected="endDateUpdate"
                        format="yyyy/MM/dd"
                        ></Datepicker>
          </div>
          <div class="col">
            <vue-clock-picker :value="attendance.end_time | formatTime" 
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
  <p>勤務時間: {{workingTimes()}}</p>
  <BreakTimes></BreakTimes>
</div>
</template>

<script>
import VueClockPicker from '@pencilpix/vue2-clock-picker';
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';
import Datepicker from 'vuejs-datepicker';
import { mapState, mapGetters} from 'vuex';
import BreakTimes from './BreakTime';
export default {
  components: {
    VueClockPicker,
    Datepicker,
    BreakTimes,
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
      if (!this.attendance.start_date || !this.attendance.start_time || !this.attendance.end_date || !this.attendance.end_time) {
            return '00:00';
      }

      let times = [];
      for (let i = 0; i <= this.break_times.length; i++) {
        if (0 == i) {
          // 最初のループbreak_time
          const to = this.$moment(this. attendance.start_date + ' ' + this.attendance.start_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(this.break_times[i].start_date + ' ' + this.break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        } else if (i == this.break_times.length) {
          // 最後のループ
          const to = this.$moment(this.break_times[i - 1].end_date + ' ' + this.break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(this.attendance.end_date + ' ' + this.attendance.end_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        } else {
          const to = this.$moment(this.break_times[i - 1].end_date + ' ' + this.break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(this.break_times[i].start_date + ' ' + this.break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
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
      attendance: state => state.attendance.attendance,
      break_times: state => state.attendance.break_time.break_times,
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