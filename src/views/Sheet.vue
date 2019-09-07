<template>
<div id="inspire">
<v-app>
  <v-toolbar class="success" dark fixed height="70" tabs> 
      <v-btn icon @click.stop="dialog = true" class="pt-1">
              <i class="material-icons" >
                highlight_off
                </i>
               </v-btn>  
    <v-layout row wrap>     
  <v-flex xs2 sm1 md2 lg2 offset-xs5>
    </v-flex>
      <v-flex xs5 sm5 md5 lg2 class="text-xs-right">
        <v-btn icon v-on:click="submit_data" class="pt-1">
              <i class="material-icons">
                send
                </i>
               </v-btn>
               </v-flex>
         </v-layout>
        </v-toolbar>

    <v-container fluid class="ma-0 pa-0">
      <v-layout row wrap  style="margin-top:44px" > 
        <v-flex xs12>
        <template>
        <v-tabs
          v-model="tab"
          color="primary"
          grow
          style="margin-top: 6%;">
          <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab style="color:white; font-family: 'Open Sans', sans- serif !important;">
           Red Knight
          </v-tab>
          <v-tab  style="color:white; font-family: 'Open Sans', sans- serif !important;">
            Kralot
          </v-tab>
          <v-tab  style="color:white; font-family: 'Open Sans', sans- serif !important;">
           Tooth Pick 2.0
          </v-tab>
          <v-tab  style="color:white; font-family: 'Open Sans', sans- serif !important;">
            Nuggs
          </v-tab>
          <v-tab  style="color:white; font-family: 'Open Sans', sans- serif !important;">
            Tyrannical Buc
          </v-tab>
        </v-tabs>
      </template>
        <v-flex xs12 lg12 sm12 md12>
                  <v-img
                    :src="require('../assets/logo-cigar.png')"
                    class="my-3"
                    contain
                    height="100"
                    ></v-img>
                </v-flex>
               
                  <v-flex xs12>
                    <v-alert
                    v-if="okay"
                    v-model="alert"
                    dismissible
                    color="green"
                    type="success">
                    Your order has been sent Successfully!
                  </v-alert>
                   <v-alert
                    v-if="not"
                    v-model="alert"
                    dismissible
                    color="red"
                    type="error">
                    You need to add atleast one product in cart.
                  </v-alert>
                  </v-flex>
              
              <v-tabs-items v-model="tab">
            <v-tab-item>
                      <v-card flat>
                       <v-card-text><v-data-table
                        :headers="headers"
                        :items="types"
                        :expand="expand"
                        item-key="name"
                        hide-actions
                        >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.size }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td> -->
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.msrp }}</td> -->
                            <td class="text-xs-center"> {{ props.item.quantity  }} </td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
                         </v-card>
                       </v-tab-item>
                      <v-tab-item>
                     <v-card flat>
                      <v-card-text><v-data-table
                        :headers="headers"
                        :items="type1"
                        :expand="expand"
                        item-key="name"
                        hide-actions
                        >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.size }}</td>
                            <!-- <td class="text-xs-center">7x50</td>
                            <td class="text-xs-center">20</td> -->
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <!-- <td class="text-xs-center">$14.00</td> -->
                            <td class="text-xs-center">{{ props.item.quantity  }}</td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                       <v-card-text><v-data-table
                        :headers="headers"
                        :items="type2"
                        :expand="expand"
                        item-key="name"
                        hide-actions
                        >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.size }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td> -->
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.msrp }}</td> -->
                            <td class="text-xs-center">{{ props.item.quantity  }}</td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
                      </v-card>
                    </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text> <v-data-table
                        :headers="headers"
                        :items="type3"
                        :expand="expand"
                        item-key="name"
                        hide-actions
                        >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.size }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td> -->
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.msrp }}</td> -->
                            <td class="text-xs-center">{{ props.item.quantity  }}</td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
                      </v-card>
                    </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text><v-data-table
                        :headers="headers"
                        :items="type4"
                        :expand="expand"
                        item-key="name"
                        hide-actions
                        >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                            <td>{{ props.item.size }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td> -->
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <!-- <td class="text-xs-center">{{ props.item.msrp }}</td> -->
                            <td class="text-xs-center">{{ props.item.quantity  }}</td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                  </v-flex> 
                      <!----------Tables Ends-------->
                    <v-form ref="form" v-model="valid" id="form" lazy-validation @submit.prevent="submit">
                       <v-flex xs12 sm4>
                                <span style=" color:#991934; 
                                font-size:15px;
                                font-family: 'Open Sans', sans- serif !important;
                                letter-spacing:2px;
                                padding-left:15px;">
                                Grand Total:</span>

                              <span ><strong  class="pl-3 pb-5">${{ onSum() }}</strong></span>
                            </v-flex> 
                    
                    <v-flex xs12 md12 sm12 lg12>
                      <v-toolbar flat color="white">
                              <v-toolbar-title>Shop Details</v-toolbar-title>
                              </v-toolbar>
                    <v-card flat>
                    <v-container grid-list-xl fluid>
                        <v-layout wrap class="mb-5">
                        <v-flex xs6 sm6>
                            <v-text-field
                            v-model="cname"
                            :rules="nameRules"
                            label="Contact name"
                            required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6 sm6>
                            <v-text-field
                            v-model="sname"
                            :rules="nameRules"
                            label="Store name"
                            required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                            v-model="address"
                            required
                            >
                            <div slot="label">
                                Address <small>(complete address)</small>
                            </div>
                            </v-textarea>
                        </v-flex>
                        <v-flex xs6 sm6>
                            <v-text-field
                            v-model="phone"
                            :rules="phoneRules"
                            :counter="12"                        
                            label="Phone"
                            required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6 sm6>
                           <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            required
                            ></v-text-field>
                            
                        </v-flex>
                        <v-flex xs6>
                           <v-text-field
                            v-model="paymentinfo"
                            label="Payment Info"
                            :rules="nameRules"
                            required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-model="cardnumber" 
                            :mask="mask" 
                            required
                            label="Card Number"></v-text-field>
                        </v-flex> 
                         <v-flex xs12>
                           <v-text-field
                            v-model="namecard"
                            label="Name on Card"
                            :rules="nameRules"
                            required
                            ></v-text-field>
                         </v-flex>
                         <v-flex xs12>
                            <v-textarea
                            v-model="instructions"
                            required
                            >
                            <div slot="label">
                                Special Instructions
                            </div>
                            </v-textarea>
                        </v-flex>
                         <v-flex xs12>
                        <v-checkbox
                        v-model="form.terms"
                        color="primary"
                        required
                        >
                        <div slot="label">
                            Check if correct information is given.
                           
                        </div>
                        </v-checkbox>
                    </v-flex>
                    </v-layout>
                    </v-container>  
                </v-card>
            </v-flex>
             </v-form>
             <v-layout row justify-center>
           

            <v-dialog
              v-model="dialog"
              max-width="290"
            >
              <v-card >
                <v-card-title class="headline" style="margin-left: 34%;">Alert!</v-card-title>

                <v-card-text>
                  Are You sure you want to move back? It will delete your cart data.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="green darken-1"
                    flat="flat"
                    @click="dialog = false"
                  >
                   Cancel
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    flat="flat"
                    @click="cut()"
                  >
                   Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-layout>
    </v-container>


<Footer/>
</v-app>
</div>
</template>


<script>

import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import Footer from "@/components/Footer";
export default {
    components: {
        Footer
    },
data() {
     const defaultForm = Object.freeze({
      
        cname: '',
        sname: '',
        address: '',
        instructions:'',
        phone: '',
        email: '',
        paymentinfo: '',
        cardnumber: '',
        namecard: '',
        grandtotal:'',
        cigar1:'',
        cigar2:'',
        cigar3:'',
        cigar4:'',
        cigar5:'',
        terms: false,
        
        })
  return {
    valid:false,
    cname: '',
    sname: '',
    address: '',
    instructions:'',
    phone: '',
    email: '',
    paymentinfo: '',
    cardnumber: '',
    namecard: '',
    mask:'',
    not:false,
    expand:'',
    dialog:false,
    okay:false,
    alert:true,
    tab:null,
    grandtotal:0,
    quantity:[],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
       phoneRules: [
        v => !!v || 'Phone is required',
        v => (v && v.length <= 12) || 'Phone must br correct'
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'It must be less than 20 characters'
      ],
      headers: [
          {
            text: 'Size',
            align: 'left',
            sortable: false,
            value: 'size'
          },
          // { text: 'Dimentions',align: 'left', value: 'dimentions' },
          // { text: 'Box Count',align: 'left', value: 'boxcount' },
          { text: 'Box Price',align: 'left', value: 'boxprice' },
          // { text: 'MSRP',align: 'left', value: 'msrp' },
          { text: 'Quantity',align: 'left', value: 'Quantity' }
         
        ],
        type1: [
         {
            id:'11',
            size: 'Robusto Extra',
            boxprice: '$140.00',
            quantity:'0'
           
          }
        ],
          type2: [
         {
            id: '21',
            size: 'Habano',
            boxprice: '$150.00',
            quantity:'0'
           
          },
          {
            id: '22',
            size: 'Maduro',
            boxprice: '$150.00',
            quantity:'0'
           
          }
        ],
          type3: [
         {
            id:'31',
            size: 'Short Robusto',
            boxprice: '$150.00',
            quantity:'0'
           
          }
        ],
         type4: [
         {
            id:'41',
            size: 'Magnum 48',
            boxprice: '$67.50',
            quantity:'0'
           
          },
          {
            id:'42',
            size: 'Generosos',
            boxprice: '$61.50',
            quantity:'0'
           
          },
          {
            id:'43',
            size: 'Golem Buc',
            boxprice: '$86.25',
            quantity:'0'
          },
          {
            id:'44',
            size: 'Dobles',
            boxprice: '$78.75',
            quantity:'0'
          }
         ],
        types: [
         {
           id:'01',
            size: 'Robusto',
            boxprice: '$85.00',
            quantity:'0'
           
          },
          {
            id:'02',
            size: 'Toro',
            boxprice: '$95.00',
            quantity:'0'
           
          },
          {
            id:'03',
            size: 'Lancero',
            boxprice: '$98.00',
            quantity:'0'
           
          },
          {
            id:'04',
            size: 'Lomsdale',
            boxprice: '$98.00',
            quantity:'0'
           
          },
        ],
        form: Object.assign({}, defaultForm),
        rules: {
          name: [val => (val || '').length > 0 || 'This field is required']
        },
       
        defaultForm
      }
    },

    methods:{
      onSum(){
      var sum =
       Number(localStorage.getItem("subtotal1")) +
        Number(localStorage.getItem("subtotal2")) +
         Number(localStorage.getItem("subtotal3")) +
          Number(localStorage.getItem("subtotal5")) +
           Number(localStorage.getItem("subtotal6"))
           this.grandtotal = sum
           //console.log(this.grandtotal)
            return sum
      },
   
       cut(){
        this.dialog = false
        localStorage.removeItem("quantity1")
        localStorage.removeItem("quantity2")
        localStorage.removeItem("quantity3")
        localStorage.removeItem("quantity5")
        localStorage.removeItem("quantity6")
        localStorage.removeItem("subtotal1")
        localStorage.removeItem("subtotal2")
        localStorage.removeItem("subtotal3")
        localStorage.removeItem("subtotal5")
        localStorage.removeItem("subtotal6")
        this.$router.go(-1)

      },
       submit_data(){
            var localstore = window.localStorage
            if(localstore.length>0)
            {
              if(this.$refs.form.validate()){
                 this.okay=true
                  var formData = new URLSearchParams;
                  formData.append('cname', this.cname)
                  formData.append('sname', this.sname)
                  formData.append('address', this.address)
                  formData.append('instructions', this.instructions)
                  formData.append('phone', this.phone)
                  formData.append('email', this.email)
                  formData.append('paymentinfo', this.paymentinfo)
                  formData.append('cardnumber', this.cardnumber)
                  formData.append('namecard', this.namecard)
                  formData.append('grandtotal', this.grandtotal)
                  formData.append('cigar1', this.cigar1)//toothpick
                  formData.append('cigar2', this.cigar2)//kralot
                  formData.append('cigar3', this.cigar3)//redknight
                  formData.append('cigar4', this.cigar4)//nuggs
                  formData.append('cigar5', this.cigar5)//tyrannical

            var config = {
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
                    },
            }; 
            axios.post('https://jassumkral.com/cigarapp/PdfConvert/index.php', formData, config) 
            
            .then(response => {
              localStorage.removeItem("quantity1")
              localStorage.removeItem("quantity2")
              localStorage.removeItem("quantity3")
              localStorage.removeItem("quantity5")
              localStorage.removeItem("quantity6")
              localStorage.removeItem("subtotal1")
              localStorage.removeItem("subtotal2")
              localStorage.removeItem("subtotal3")
              localStorage.removeItem("subtotal5")
              localStorage.removeItem("subtotal6")
            
             // console.log(response.data)
            })
            .catch(error => {
             // console.log(error.response)
            })
          }
             
       }
       else{
         this.not = true
       }
       }
    },
     mounted(){
       
//localStorage.clear()
     
     // console.log(window.localStorage)
      var localstor = window.localStorage
      if(localstor.length>0)
      { 
        var product = localStorage.getItem("quantity1")
        if(product!=null)
        {
            var str = product.split(",")
            this.cigar1 = str
            //console.log(this.cigar1)
            var data1 = this.type2
            Object.keys(data1).forEach(function(key) {

                  if(data1[key]['id'] == '21')
                  {
                    data1[key]['quantity'] = str[0]
                  }

                  if(data1[key]['id'] == '22')
                  {
                    data1[key]['quantity'] = str[1]
                  }
              }) 
            }
         var product1 = localStorage.getItem("quantity2")
         if(product1!=null){
            var str1 = product1.split(",")
            this.cigar2 = str1
            //console.log(this.cigar2)
            var data = this.type1
            Object.keys(data).forEach(function(key) {

                  if(data[key]['id'] == '11')
                  {
                    data[key]['quantity'] = str1[0]
                  }
              })
         }
        
          
         var product2 = localStorage.getItem("quantity3")
         if(product2!=null){
                var str2 = product2.split(",")
                this.cigar3 = str2
                //console.log(this.cigar3)
                var data = this.types
                Object.keys(data).forEach(function(key) {

                      if(data[key]['id'] == '01')
                      {
                        data[key]['quantity'] = str2[0]
                      }
                      if(data[key]['id'] == '02')
                      {
                        data[key]['quantity'] = str2[1]
                      }
                      if(data[key]['id'] == '03')
                      {
                        data[key]['quantity'] = str2[2]
                      }
                      if(data[key]['id'] == '04')
                      {
                        data[key]['quantity'] = str2[3]
                      }
                  }) 
                }
     

        var product3 = localStorage.getItem("quantity5")
         if(product3!=null){
              var str3 = product3.split(",")
              this.cigar4 = str3
              //console.log(this.cigar4)
              var data = this.type3
              Object.keys(data).forEach(function(key) {

                    if(data[key]['id'] == '31')
                    {
                      data[key]['quantity'] = str3[0]
                    }
                })
              }
       

        var product4 = localStorage.getItem("quantity6")
         if(product4!=null){
            var str4 = product4.split(",")
            this.cigar5 = str4
            //console.log(this.cigar5)
            var data = this.type4
            Object.keys(data).forEach(function(key) {

                  if(data[key]['id'] == '41')
                  {
                    data[key]['quantity'] = str4[0]
                  }
                  if(data[key]['id'] == '42')
                  {
                    data[key]['quantity'] = str4[1]
                  }
                  if(data[key]['id'] == '43')
                  {
                    data[key]['quantity'] = str4[2]
                  }
                  if(data[key]['id'] == '44')
                  {
                    data[key]['quantity'] = str4[3]
                  }
              }) 
            }
          }     
        }
}
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
#inspire{
  background: none;
}
.det{
    color:#991934; 
    font-size:15px;
    font-family: 'Open Sans', sans- serif !important;
    letter-spacing: 2px;
}

</style