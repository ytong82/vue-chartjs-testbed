import {
  Bar,
  mixins
} from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}