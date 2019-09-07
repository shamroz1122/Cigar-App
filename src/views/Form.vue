<template>
  <div>
   <template >
        <v-tabs
          v-model="tab"
          color="primary"
          grow
        >
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab >
           Red Knight
          </v-tab>
          <v-tab>
            Kralot
          </v-tab>
          <v-tab>
           Tooth Pick 2.0
          </v-tab>
          <v-tab>
            Nuggs
          </v-tab>
          <v-tab>
            Tyrannical Buc
          </v-tab>
        </v-tabs>
      </template>

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
                            <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td>
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <td class="text-xs-center">{{ props.item.msrp }}</td>
                            <td class="text-xs-center">{{  }}</td>
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
                            <td>Robusto Extra</td>
                            <td class="text-xs-center">7x50</td>
                            <td class="text-xs-center">20</td>
                            <td class="text-xs-center">$140.00</td>
                            <td class="text-xs-center">$14.00</td>
                            <td class="text-xs-center">{{  }}</td>
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
                            <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td>
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <td class="text-xs-center">{{ props.item.msrp }}</td>
                            <td class="text-xs-center">{{  }}</td>
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
                            <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td>
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <td class="text-xs-center">{{ props.item.msrp }}</td>
                            <td class="text-xs-center">{{  }}</td>
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
                            <td class="text-xs-center">{{ props.item.dimentions }}</td>
                            <td class="text-xs-center">{{ props.item.boxcount }}</td>
                            <td class="text-xs-center">{{ props.item.boxprice }}</td>
                            <td class="text-xs-center">{{ props.item.msrp }}</td>
                            <td class="text-xs-center">{{  }}</td>
                            </tr>
                        </template>
                        </v-data-table></v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>

    <v-container>
    <v-form
    ref="form"
    v-model="valid"
    id="form"
    lazy-validation
    @submit.prevent="submit_data"
    >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="types"
      :rules="[v => !!v || 'Select any type']"
      label="Types"
      required
    ></v-select>
    <v-select
      v-model="select"
      :items="sizes"
      :rules="[v => !!v || 'Select any size']"
      label="Size"
      required
    ></v-select>
     <v-select
      v-model="select"
      :items="dimentions"
      :rules="[v => !!v || 'Select Dimentions']"
      label="Dimentions"
      required
    ></v-select>
    <v-select
      v-model="select"
      :items="boxcount"
      :rules="[v => !!v || 'Select Box Count']"
      label="Box Count"
      required
    ></v-select>
     <v-select
      v-model="select"
      :items="boxprice"
      :rules="[v => !!v || 'Select Box Price']"
      label="Box Price"
      required
    ></v-select> -->

    <!------------------Types------------------------>
  <v-layout row wrap>
    <v-flex xs12>
      <v-label>Select Types:</v-label><br />
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0 mt-2"
            v-model="checkbox"
            label="Red Knight"
            value="Red Knight"
            required
            ></v-checkbox>

            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0 mt-2"
            v-model="checkbox1"
            label="Toothpick 2.0"
            value="Toothpick 2.0"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

    <v-layout row wrap>
      <v-flex xs6>
        <v-checkbox class="pa-0 ma-0"
        v-model="checkbox2"
        label="Kralot"
        value="Kralot"
        required
        ></v-checkbox>
        </v-flex>
        <v-flex xs6>
        <v-checkbox class="pa-0 ma-0"
        v-model="checkbox3"
        label="Nuggs"
        value="Nuggs"
        required
        ></v-checkbox>
      </v-flex>
    </v-layout>

      <v-checkbox class="pa-0 ma-0"
      v-model="checkbox4"  
      label="Tyranical Buc"
      value="Tyranical Buc"
      required
      ></v-checkbox>
    <hr>
  </v-flex>

    <!---------------Size--------------->

    <v-flex xs12>
      <v-label>Select Sizes:</v-label><br />
        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0 mt-2"
            v-model="checkbox5"
            label="Robusto"
            value="Robusto"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0 mt-2"
            v-model="checkbox6"
            label="Toro"
            value="Toro"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox7"
            label="Lancero"
            value="Lancero"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox8"
            label="Lonsdale"
            value="Lonsdale"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

       <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox9"
            label="Habano"
            value="Habano"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox10"
            label="Maduro"
            value="Maduro"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

         <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox11"
            label="Robusto Extra"
            value="Robusto Extra"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox12"
            label="Short Robusto"
            value="Short Robusto"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

         <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox13"
            label="Magnum"
            value="Magnum"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox14"
            label="Generoses"
            value="Generoses"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

         <v-layout row wrap>
          <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox15"
            label="Golem Buc"
            value="Golem Buc"
            required
            ></v-checkbox>
            </v-flex>
            <v-flex xs6>
            <v-checkbox class="pa-0 ma-0"
            v-model="checkbox16"
            label="Dobles"
            value="Dobles"
            required
            ></v-checkbox>
          </v-flex>
        </v-layout>

      <hr>
    </v-flex>

    <!-------------------Dimentions------------------------->

    </v-layout>
    <v-btn
     type="submit"
     color="success"
     v-on:click="submit_data"
      >
      SUBMIT
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
      >
      Reset
    </v-btn>
    </v-form>
  </v-container>
  </div>
</template>

<script>

import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

  export default {
    data () {
      return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      tab: null,
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
          { text: 'Quantity',align: 'left', value: 'Quantity' }
         
        ],
        type1: [
         {
            size: '',
            dimentions: '',
            boxcount: '',
            boxprice: '',
            msrp: '',
           
          }
        ],
          type2: [
         {
            size: 'Habano',
            dimentions: '5x50',
            boxcount: '50',
            boxprice: '$150.00',
            msrp: '$6.00',
           
          },
          {
            size: 'Maduro',
            dimentions: '5x50',
            boxcount: '50',
            boxprice: '$150.00',
            msrp: '$6.00',
           
          }
        ],
          type3: [
         {
            size: 'Short Robusto',
            dimentions: '4.5x48',
            boxcount: '25',
            boxprice: '$150.00',
            msrp: '$12.00',
           
          }
        ],
         type4: [
         {
            size: 'Magnum 48',
            dimentions: '4x48',
            boxcount: '15',
            boxprice: '$67.50',
            msrp: '$9.00',
           
          },
          {
            size: 'Generosos',
            dimentions: '5.5x40',
            boxcount: '15',
            boxprice: '$61.50',
            msrp: '$8.20',
           
          },
          {
            size: 'Golem Buc',
            dimentions: '5.5x60',
            boxcount: '15',
            boxprice: '$86.25',
            msrp: '$11.50',
           
          },
          {
            size: 'Dobles',
            dimentions: '6.5x50',
            boxcount: '15',
            boxprice: '$78.75',
            msrp: '$10.50',
           
          }
         ],
        types: [
         {
            size: 'Robusto',
            dimentions: '5x50',
            boxcount: '20',
            boxprice: '$85.00',
            msrp: '$8.50',
           
          },
          {
            size: 'Toro',
            dimentions: '6x52',
            boxcount: '20',
            boxprice: '$95.00',
            msrp: '$9.50',
           
          },
          {
            size: 'Lancero',
            dimentions: '7x38',
            boxcount: '20',
            boxprice: '$98.00',
            msrp: '$9.80',
           
          },
          {
            size: 'Lomsdale',
            dimentions: '6.5x42',
            boxcount: '20',
            boxprice: '$98.00',
            msrp: '$9.80',
           
          },
        ],
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false
      }
    },

    methods: {
    
      reset () {
        this.$refs.form.reset()
      },

      submit_data(){
        if (this.$refs.form.validate()) { 

        // var form = document.getElementById('form');
        // var formData = new FormData(form)
        // formData.append("data", this.form)
        // var config = {
        //   header: {
        //     "Content-Type": "multipart/form-data"
        //     },
        //   };

        //var formData = new FormData()
        var formData = new URLSearchParams;
          formData.append('name', this.name)
          formData.append('email', this.email)
          formData.append('checkbox', this.checkbox)
          formData.append('checkbox_1', this.checkbox1)
          formData.append('checkbox_2', this.checkbox2)
          formData.append('checkbox_3', this.checkbox3)
          formData.append('checkbox_4', this.checkbox4)
          formData.append('checkbox_5', this.checkbox5)
          formData.append('checkbox_6', this.checkbox6)
          formData.append('checkbox_7', this.checkbox7)
          formData.append('checkbox_8', this.checkbox8)
          formData.append('checkbox_9', this.checkbox9)
          formData.append('checkbox_10', this.checkbox10)
          formData.append('checkbox_11', this.checkbox11)
          formData.append('checkbox_12', this.checkbox12)
          formData.append('checkbox_13', this.checkbox13)
          formData.append('checkbox_14', this.checkbox14)
          formData.append('checkbox_15', this.checkbox15)
          formData.append('checkbox_16', this.checkbox16)


        var config = {
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
                },
        }; 
        // console.log(formData) 
        axios.post('http://localhost/pdfConvert/generate-pdf.php', formData, config) 
        
        .then(response => {
          console.log(response)
          
        })
        .catch(error => {
          console.log(error.response)
        })

        }         
      }
    }
  }
</script>