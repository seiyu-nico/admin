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
  <p>勤務時間: {{workingTime()}}</p>
  <BreakTimes></BreakTimes>
</div>
</template>

<script>
import VueClockPicker from '@pencilpix/vue2-clock-picker';
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';
import Datepicker from 'vuejs-datepicker';
import { mapState, mapGetters} from 'vuex';
import BreakTimes from './BreakTime';
import attendanceMixin from '../../mixin/Attendance/index';
export default {
  props: ['id'],
  mixins: [attendanceMixin],
  components: {
    VueClockPicker,
    Datepicker,
    BreakTimes,
  },
  created () {
    this.getAttendance();
  },
  methods: {
    async getAttendance() {
      const params = this.createAttendanceParams();
      await this.$store.dispatch('attendance/getAttendance', params);
    },
    createAttendanceParams() {
      if (undefined === this.id) {
        // 今日のデータ取得
        const params = {
          'date': this.$moment().format('YYYY-MM-DD'),
        }
        return params;
      } else {
        const params = {
          'id': this.id,
        }
        return params;
      } 
    },
    select(select) {
      this.$store.commit('attendance/setSelect', select);
    },
    async update(date) {
      const response = await this.$store.dispatch('attendance/store', date);
      // console.log(response);
      // if (200 != response.status) {
      //   this.showToast('', '更新に失敗しました。', 'warning');
      // } else {
      //   this.showToast('', '更新に成功しました。', 'primary');
      // }
    },
    async startDateUpdate(date) {
      this.select('start_date');
      await this.$store.dispatch('attendance/store', this.$moment(date).format('YYYY-MM-DD'));
    },
    async endDateUpdate(date) {
      this.select('end_date');
      await this.$store.dispatch('attendance/store', this.$moment(date).format('YYYY-MM-DD'));
    }, 
    workingTime() {
      const times = this.getWorkingTime(this.attendance, this.break_times);
      return this.format(times);
    },
    showToast(title, body, variant) {
      this.$bvToast.toast(body, {
        title: title,
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 1000,
        solid: true,
        appendToast: true,
        variant: variant,
      })
    },コミット
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
  watch: {
    '$route' (to, from) {
      // ルートの変更の検知...
      this.getAttendance();
    }
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