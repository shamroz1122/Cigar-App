<template>
    <div id="app">
        <v-app id="inspire">
           <v-toolbar class="success" dark fixed height="70">
            <span class="title">{{TypeData.title}}</span>
              <v-layout row wrap justify-center>
                <v-flex xs2>
            
              <v-spacer></v-spacer>  
              </v-flex>
              </v-layout>
              <v-btn icon v-on:click="cut">
              <i class="material-icons">
                      highlight_off
                      </i>
               </v-btn>
              </v-toolbar>
              <v-container fluid
                        grid-list-md
                        class="ma-0">
     
                <!---------- First Row Starts ----------> 
                <v-layout row wrap style="margin-top:17%;">    
                    <v-flex xs12 sm6 lg12 md12  >
                        <v-card> 
                            <v-img
                            v-bind:src="`https://jassumkral.com/cigarapp/${image}`"
                            height="26vh"
                            >
                        <v-container fill-height
                                        fluid
                                        pa-2>
                            <v-layout row wrap style="margin:-12px;">
                                <v-flex xs12 lg6 md6>
                                 <span class="headline pl-2" >{{TypeData.title}}</span>
                                    
                                    <v-flex xs7>
                                    <p class="para pl-2">Nulla facilisi.
                                        Maecenas et ligula
                                        sit amet lectus
                                        rutrum varius. Nunc
                                        id feugiat ipsum.
                                    </p>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                            </v-container>
                            </v-img>
                            <v-card-actions>
                                <v-layout row wrap>
                                <v-flex xs12>
                                <span class="details" style="float:left;">Details:</span>
                                </v-flex>
                                
                          <!---------------Select Options------------>
                              

                              </v-layout>
                            </v-card-actions>

                           <!-----------------Table Starts-------------->

                            <v-data-table
                                :headers="headers"
                                :items="types"
                                class="elevation-1"
                                hide-actions>
                                <template slot="items">
                                

                                <tr v-for="(prod,index) in product" :key="prod"> 
                                
                                <td >{{ prod }}</td>
                                <td class="text-xs-center">{{dimentions[index]}}</td>
                                <td class="text-xs-center">{{boxcount[index]}}</td>
                                <td class="text-xs-center">${{boxprice[index]}}</td>
                                <td class="text-xs-center">${{msrp[index]}}</td> 
                                
                                <td><v-text-field  name="index" v-model="quantity[index]" label="Quantity" ></v-text-field></td>
                                 
                                </tr> 
                                </template>
                                 
                            </v-data-table>

                                <!-----------------Table Ends-------------->
                                
                                <!---------------Quantity DropDown------------->

                            <v-flex xs12 sm4>
                              <v-btn small v-on:click="onAdd(index)" color="success">Calculate</v-btn>
                                <span style=" color:#991934; 
                                font-size:15px;
                                font-family: 'Open Sans', sans- serif !important;
                                letter-spacing:2px;">
                               Sub Total:</span>

                              <span><strong class="pl-3 pb-5">$ {{ subprice }}</strong></span>
                            </v-flex> 
                            <v-flex xs12 sm4 class="mb-5">
                              
                              <template>
                                <router-link :to="{name: 'main'}">
                                <v-btn block color="primary" dark>Proceed</v-btn>
                                </router-link>
                              </template>
                            </v-flex>      
                            <!---------------Quantity DropDown----->
                        </v-card>
                    </v-flex>  
                </v-layout>     
                    <!---------- First Row Ends ----------> 
            </v-container>
          <Footer/>
    </v-app>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

  export default {
    components: {
    Navbar,
    Footer
    },
    data() {
       
      return {
        subprice:0,
        quantity:[],
        boxprice:[],
        id:this.$route.params.id,
        TypeData:[],
        product:[],
        dimentions:"",
        boxcount:"",
        quantityId:"",
        image:[],
        msrp:"",
        headers: [
            {
            text: 'Size',
            align: 'left',
            sortable: false,
            value: 'size'
          },
          { text: 'Dimentions',align: 'left', value: 'dimentions' },
          { text: 'Box Count',align: 'left', value: 'boxcount' },
          { text: 'Box Price',align: 'left', value: 'boxprice' },
          { text: 'MSRP',align: 'left', value: 'msrp' },
           { text: 'Quantity',align: 'left', value: 'qunatity' }
         
        ],
        types: [
          {
            size: '',
            dimentions: '',
            boxcount: '',
            boxprice: '',
            msrp: '',
           
          }
          
        ]
      }
    },

    mounted(){

    var url = "https://jassumkral.com/cigarapp/index.php?id="+this.id
    axios.get(url)

    .then(response => {
         //console.log(response.data)
        
            this.TypeData = response.data
            this.product = response.data.sizes
            this.dimentions = response.data.dimentions
            this.boxcount = response.data.boxcount
            this.boxprice = response.data.boxprice
            this.msrp = response.data.msrp
            this.image = response.data.image
           // console.log(this.image)
            //console.log(response.data)
            var j
            for(j=0; j<this.dimentions.length; j++)
            {
              this.quantity[j] = 0
             // Vue.set(this.quantity,j,0)
            }
            //console.log(this.quantity,"quan",this.dimentions.length)
        
    })
  },

    methods: {

      cut(){
        this.$router.go(-1)
      },
        add(accumulator, a) {
          return accumulator + a;
      },
      onAdd(index){
      // alert(this.quantity[index])
        var pri = [];
        var i;
        for(i=0; i<this.boxprice.length;i++)
        {
          var price = (this.boxprice[i]*this.quantity[i])
          pri.push(price)
        }
        this.subprice=pri.reduce(this.add)
      
        
        localStorage.setItem("quantity" + this.id, this.quantity.toString())
        
        localStorage.setItem("subtotal"+ this.id, this.subprice)

        //console.log(window.localStorage)
      }
    }
  }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.details{
    color:#991934; 
    font-size:15px;
    font-family: 'Open Sans', sans- serif !important;
    letter-spacing: 2px;

}
.headline{
      background: -webkit-linear-gradient(left, #a96b2e 0%, #e4a54d 50%, #a96b2e 100%);
			-webkit-background-clip: text;
      background-clip: text;
			-webkit-text-fill-color: transparent;
}
.para{
    color:white;
     font-size:12px; 
     margin-top:8px; 
     text-align:left;
    font-family: 'Open Sans', sans- serif !important;

}
</style>
