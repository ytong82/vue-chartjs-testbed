<template>
  <div style="padding-left:5px">
    <h1>Working Activities</h1>
    <v-container fluid>
      <v-row>
        <v-col>
          <Pie />
        </v-col>
        <v-col>
          <Pie />
        </v-col>
        <v-col>
          <Bar />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Bar />
        </v-col>
        <v-col>
          <Pie />
        </v-col>
        <v-col>
          <Pie />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Bar from './components/Bar.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: {
    Bar,
    Pie
  },
  data: () => ({
  }),
}
</script>
<style>
.wrapper v-col {
  display: flex;
  flex: 1;
}
</style>