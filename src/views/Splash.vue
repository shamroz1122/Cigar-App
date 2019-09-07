<template>
    <div id="inspire" >
      <div v-if="progressBar">
      <v-app>
        <v-container fluid fill-height class="back">
            <v-layout row wrap justify-center align-center>
                 <v-flex xs12 lg12 sm12 md12>
                  <v-img
                    :src="require('../assets/logo-cigar.png')"
                    class="my-2"
                    contain
                    height="200"
                    style="top:-25px"></v-img>
                </v-flex>
                <v-flex xs7 lg12 sm12 md12>
                  <v-progress-linear
                    v-model="value"
                    :active="show"
                    color="#a8844a"
                    :indeterminate="query"
                    :query="true"></v-progress-linear>
                </v-flex>
            </v-layout>
          </v-container>
        </v-app>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 0,
        query: false,
        show: true,
        interval: 0,
        progressBar:true,
      }
    },

    mounted () {
      this.queryAndIndeterminate()
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },
    beforeRouteLeave (to, from, next) {
      //const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
         clearInterval(this.interval)
         next()
    },

    methods: {
      queryAndIndeterminate () {
        this.query = true
        this.show = true
        this.value = 0

        setTimeout(() => {
          this.query = false

          this.interval = setInterval(() => {
            if (this.value === 100) {
              clearInterval(this.interval)
              this.show = false
              this.progressBar = false
              this.$router.push({path:'main'})              
              //return setTimeout(this.queryAndIndeterminate, 8000)
            }
            this.value += 1
          }, 100)
        }, 250)
      },
    }
  }
</script>

<style scoped>
.back {
  background-image: url(../assets/Header_1.jpg);
  background-size: cover;
  height: 100vh;
}
#inspire{
  background: none;
}
</style>
