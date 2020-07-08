<template>
  <div>
    <v-container>
      <v-row>
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-row>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="2">
          <Pie />
        </v-col>
        <v-col cols="2">
          <Pie />
        </v-col>
        <v-col cols="2">
          <Bar />
        </v-col>
        <v-col cols="2">
          <Bar />
        </v-col>
        <v-col cols="2">
          <Pie />
        </v-col>
        <v-col cols="2">
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