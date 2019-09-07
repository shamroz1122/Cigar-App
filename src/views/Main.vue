<template>
<div id="app">
<v-app id="inspire">
    <Navbar/>
        <v-container fluid
                    grid-list-md class="ma-0">

            <!---------- First Row Starts ----------> 
            
            <v-layout row wrap style="margin-top:17%;"> 
            <v-flex xs6 sm6 lg12 md12>
                <router-link :to="{ name: 'details', params: {id:1} }" style="text-decoration:none;">
                <v-card>
                    <v-img
                    :src="require('../assets/toothpick_1.jpg')"
                    height="24vh"
                    >
                <v-container fill-height
                                fluid
                                pa-2>
                    <v-layout row wrap text-xs-center style="margin: -12px;">
                        <v-flex xs12 lg6 md6>
                            <span class="title" >Toothpick 2.0</span>
                            
                            <v-flex xs7>
                            <p class="para pl-2">“Its not often you find a cigar that looks good smells this good and performs just as good as it looks and smells..
                            </p>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-actions>
                        
                                <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                        <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i>
                        
                    </v-card-actions>
                </v-card>
                    </router-link>
            </v-flex>  
            <v-flex xs6 sm6 lg12 md12>
                
                    <router-link :to="{ name: 'details', params: {id:2} }" style="text-decoration:none;">

                <v-card>
                    <v-img
                    :src="require('../assets/kralot_2.jpg')"
                    height="24vh"
                    >
                <v-container   fill-height
                                fluid
                                pa-2>
                    <v-layout row wrap text-xs-center style="margin: -12px;">
                        <v-flex xs12 lg6 md6>
                            <span class="title" >Kralot</span>
                            
                            <v-flex xs7>
                            <p class="para pl-2">Kralot (“The King”) introduces an elaborate marriage of gratifying astutely wrapped.. 
                            </p>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-actions>
                        
                                <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                        <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i>
                        
                    </v-card-actions>
                </v-card>
            </router-link>

            </v-flex> 

        </v-layout>

        <!---------- First Row Ends ----------> 
        
        <!---------- Second Row Starts ----------> 
        <v-layout row wrap>    
            <v-flex xs12 sm12 lg12 md12  >
                <router-link :to="{ name: 'details', params: {id:3} }" style="text-decoration:none;">
                <v-card>
                    <v-img
                    :src="require('../assets/red_knight_3.jpg')"
                    height="22vh"
                    >
                <v-container   fill-height
                                fluid
                                pa-2>
                    <v-layout row wrap style="margin:-12px;">
                        <v-flex xs12 lg6 md6>
                            <span class="title pl-2" >Red Knight</span>
                            
                            <v-flex xs7>
                            <p class="para pl-2">The Jas Sum Kral RED KNIGHT has everything needed to make a cigar wonderful in a full bodied cigar along with a dessert like creaminess that keeps your interest all the way to the last puff.
                            </p>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-actions>
                        
                    <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                        <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i> 
                    </v-card-actions>
                </v-card>
                </router-link>
            </v-flex>  

            </v-layout>
            
            <!---------- Second Row Ends ----------> 

            <!---------- Third Row Starts ----------> 
<!-- 
            <v-layout row wrap >    
            <v-flex xs6 sm6 lg12 md12>
            
            </v-flex>  
            <v-flex xs6 sm6 lg12 md12>
                <v-card>
                        <v-img
                    :src="require('../assets/zlatno_5.jpg')"
                    height="24vh"
                    >
                <v-container  fill-height
                                fluid
                                pa-2>
                <v-layout row wrap text-xs-center style="margin: -12px;">
                    <v-flex xs12 lg6 md6 >
                            <span class="title">Zlanto Sonce</span>
                            <v-flex xs7>
                            <p class="para1 pl-2">Nulla facilisi. Maecenas et ligula sit amet lectus rutrum varius. Nunc id feugiat ipsum.
                            </p>
                        </v-flex>
                    </v-flex>
                    </v-layout>

                    </v-container>
                    </v-img>
                        <v-card-actions>
                        
                        <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                            <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i>
                        
                    </v-card-actions>
                </v-card>
            </v-flex> 

        </v-layout> -->

        <!---------- Third Row Ends ----------> 

        <!---------- Fourth Row Starts ----------> 

            <v-layout row wrap >    
            <v-flex xs6 sm6 lg12 md12>
            <router-link :to="{ name: 'details', params: {id:5} }" style="text-decoration:none;">

                <v-card>
                    <v-img
                    :src="require('../assets/nuggs_6.jpg')"
                    height="24vh"
                    >
                <v-container   fill-height
                                fluid
                                pa-2>
                    <v-layout row wrap text-xs-center style="margin: -12px;">
                        <v-flex xs12 lg6 md6>
                            <span class="title" >Nuggs</span>
                            
                            <v-flex xs7>
                            <p class="para pl-2">The first ever Premium CBD Cigar 
                            </p>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    </v-img>
                    <v-card-actions>
                        
                                <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                        <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i>
                        
                    </v-card-actions>
                </v-card>
            </router-link>
            </v-flex>  
            <v-flex xs6 sm6 lg12 md12>
            <router-link :to="{ name: 'details', params: {id:6} }" style="text-decoration:none;">
                <v-card>
                        <v-img
                    :src="require('../assets/tyranical_7.jpg')"
                    height="24vh"
                    >
                <v-container  fill-height
                                fluid
                                pa-2>
                <v-layout row wrap text-xs-center style="margin: -12px;">
                    <v-flex xs12 lg6 md6 >
                            <span class="title">Tyrannical Buc</span>
                            <v-flex xs7>
                            <p class="para1 pl-2">Where bold becomes a thing of beauty.
                            </p>
                        </v-flex>
                    </v-flex>
                    </v-layout>

                    </v-container>
                    </v-img>
                        <v-card-actions>
                        
                        <v-spacer></v-spacer>
                        <span class="details">Details</span>
                        
                            <i style="color:#991934;" class="material-icons">
                            arrow_forward
                        </i>
                        
                    </v-card-actions>
                </v-card>
        </router-link>
    </v-flex> 
</v-layout>

        <!---------- Fourth Row Ends ----------> 

    </v-container>

    
</v-app>
</div>
</template>

<script>


import Navbar from "@/components/Navbar";
export default {
components: {
Navbar
}

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.details{
color:#991934; 
float:right;
font-size:15px;
font-family: 'Open Sans', sans- serif !important;
letter-spacing: 2px;

}
.title{
        background: -webkit-linear-gradient(left, #a96b2e 0%, #e4a54d 50%, #a96b2e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.para{
color:white;
font-size:10px; 
margin-top:8px; 
text-align:left;
font-family: 'Open Sans', sans- serif !important;

}
.para1{
color:black;
font-size:10px; 
margin-top:8px; 
text-align:left;
font-family: 'Open Sans', sans- serif !important;

}
</style>
