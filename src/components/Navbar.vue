<template>

<v-app id="inspire">
  
  <v-toolbar class="success" dark fixed height="70">
    
    <v-layout row wrap>
      <v-flex xs2 sm1 md2 lg2 offset-xs5>
 
       <v-img
            :src="require('../assets/logo-cigar.png')"
            
            contain
        ></v-img>

    </v-flex>
    
    <v-flex xs5 sm5 md5 lg2 class="text-xs-right">
    <v-btn icon class="pt-4" :to="{name: 'sheet'}">
             <i class="material-icons" style="font-size:26x;">
                    description
                    </i>
     </v-btn>
               </v-flex>
    
            </v-layout>
   
  </v-toolbar>

</v-app>
</template>

<script>

export default {
methods:{
  cut(){
    this.$router.go(+1)
  }
},
data() {
  return {
    drawer: false,
  };
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.icon1{
font-size: 20px;
padding-top: 3px;
}
.icon12{
font-size: 15px;
padding-top: 3px;
}
</style>
