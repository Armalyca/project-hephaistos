<template>
  <v-row>
    <v-col>
      <v-textarea
        v-model="model"
        :filled="filled"
        :outlined="outlined"
      ></v-textarea>
    </v-col>
    <v-col>
    </v-col>
  </v-row>
  <v-row>
    <v-btn large color="primary" v-on:click="save()">Save</v-btn>
    <v-btn large color="secondary" v-on:click="sandbox()">Run sandbox code</v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Exercise',
  data: () => ({
    newExercise: {
      instructions,
      lang,
      title,
      tests,
      solution,
      template_regions,
      template_regions_rw,
      difficulty,
      score,
      id
    }
  }),
  methods: {
    async save (next) {
      const { instructions, lang, title, tests, solution, template_regions, template_regions_rw, difficulty, score } = this
      try {
        const result = await this.axios.post('http://localhost:3000/api/v1/exercise', {
          instructions,
          lang,
          title,
          tests,
          solution,
          template_regions,
          template_regions_rw,
          difficulty,
          score
        })
        this.$root.user = result.data
        next('/exercise')
      } catch (err) {
        this.errorLogin = err
      }
    },
    sandbox(){}
  }
}
</script>
