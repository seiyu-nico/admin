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
    <span>休憩1時間(12:00 ~ 13:00)</span>
  

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
      // 午前の計算
      let am_date_to = this.$moment(this.date.start_date + ' ' + this.date.start_time);
      let am_date_from = this.$moment(this.date.start_date + ' 12:00:00');
      let am_diff = am_date_from.diff(am_date_to, 'minutes');
      let am_hours = Math.floor(am_diff / 60);
      let am_minutes = Math.floor(am_diff % 60);
      // 午後の計算
      let pm_date_to = this.$moment(this.date.end_date + ' 13:00:00');
      let pm_date_from = this.$moment(this.date.end_date + ' ' + this.date.end_time);
      let pm_diff = pm_date_from.diff(pm_date_to, 'minutes');
      let pm_hours = Math.floor(pm_diff / 60);
      let pm_minutes = Math.floor(pm_diff % 60);
      
      let hours = am_hours + pm_hours;
      let minutes = ('00' + (am_minutes + pm_minutes)).slice(-2);
      let time = hours + ':' + minutes;
      return time;
    }
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