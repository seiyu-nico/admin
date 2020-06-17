export default {
  methods: {
    getWorkingTime(attendance, break_times) {
      let times = [];
      // 勤務時間計算
      const to = this.$moment(attendance.start_date + ' ' + attendance.start_time, 'YYYY-MM-DD HH:mm:ss', true);
      const from = this.$moment(attendance.end_date + ' ' + attendance.end_time, 'YYYY-MM-DD HH:mm:ss', true);
     
      if (false == to.isValid() && false == from.isValid()) {
        return times;
      }

      if (0 == break_times.length) {
        // 休憩時間がない場合
        if (to.isValid() && from.isValid()) {
          times.push(this.diff(to, from));
        }
      } else {
        // 休憩時間がある場合
        times = this.existsBreakTime(attendance, break_times);
      }
      return times;
    },
    existsBreakTime(attendance, break_times) {
      // 休憩時間がある場合の計算
      let times = [];
      for (let i = 0; i <= break_times.length; i++) {
        if (0 == i) {
          // 最初のループbreak_time
          const to = this.$moment(attendance.start_date + ' ' + attendance.start_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(break_times[i].start_date + ' ' + break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        } else if (i == break_times.length) {
          // 最後のループ
          const to = this.$moment(break_times[i - 1].end_date + ' ' + break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(attendance.end_date + ' ' + attendance.end_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        } else {
          const to = this.$moment(break_times[i - 1].end_date + ' ' + break_times[i - 1].end_time, 'YYYY-MM-DD HH:mm:ss', true);
          const from = this.$moment(break_times[i].start_date + ' ' + break_times[i].start_time, 'YYYY-MM-DD HH:mm:ss', true);
          if (to.isValid() && from.isValid()) {
            times.push(this.diff(to, from));
          }
        }
      }
      return times;
    },
    diff(to, from) {
      let minutes = from.diff(to, 'minutes');;
      return minutes;
    },
    format(minutes_array) {
      if (0 == minutes_array.length) {
        // timesがないときは計算できないので00:00を返す
        return '00:00';
      } else {
        // 分の合計
        const minutes_sum = minutes_array.reduce((sum, v) => sum + v, 0);
        const hours = Math.floor(minutes_sum / 60);
        const minutes = Math.floor(minutes_sum % 60);
  
        return hours + ':' + ('00' + (minutes)).slice(-2);
      }
    },
    getBreakTimes(break_times) {
      console.log(break_times);
      const times = break_times.map((break_time, index, array) => {
        const to = this.$moment(break_time.start_date + ' ' + break_time.start_time, 'YYYY-MM-DD HH:mm:ss', true);
        const from = this.$moment(break_time.end_date + ' ' + break_time.end_time, 'YYYY-MM-DD HH:mm:ss', true);
        if (to.isValid() && from.isValid()) {
          return this.diff(to, from);
        }
        return 0;
      }) 
      return times;
    }
  }
}