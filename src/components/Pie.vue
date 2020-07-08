<template>
  <div>
    <pie :chart-data="datacollection">
    </pie>
  </div>
</template>

<script>
import Pie from "./Pie.js"
export default {
  components: {
    Pie
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "Red",
          "Yellow",
          "Blue"
        ],
        datasets: [
          {
            backgroundColor: ["#f87979", "#f9ff33", "#3368ff"],
            data: [60, 60, 60]
          }
        ]
      };
    },
  }
};
</script>
