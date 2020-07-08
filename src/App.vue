<template>
  <div>
    <h1>Chart</h1>
    <v-container>
      <v-row justify="space-around">
        <v-col
          v-for="elevation in elevations"
          :key="elevation"
          cols="12"
          md="4"
          style="float:left; padding-left:30px"
        >
          <Chart />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'

export default {
  name: 'App',
  components: {
    Chart
  },
  data: () => ({
    elevations: [1, 2, 3, 4, 5, 6],
  }),
}
</script>