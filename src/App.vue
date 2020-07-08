<template>
  <div style="padding-left:5px">
    <h1>Working Activities</h1>
    <v-container fluid>
      <v-row>
        <v-col>
          <Bar />
        </v-col>
        <v-col>
          <Bar />
        </v-col>
        <v-col>
          <Bar />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Bar from './components/Bar.vue'

export default {
  name: 'App',
  components: {
    Bar
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