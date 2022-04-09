import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import AppText from '../component/AppText';
import colors from '../config/colors';

import ListItem from "../component/ListItem"
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket2.jpg")} />
            <View>
                <AppText style={styles.title} >Red jacket for sale</AppText>
                <AppText style={styles.price} >$100</AppText>
            </View>
            <View style={styles.userContainer}>
            <ListItem 
            image={require("../assets/user.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
            />
            </View>
            
        </View>
    );
}
 const styles = StyleSheet.create({
     image:{
         width:"100%",
         height:300,
     },
     title:{
         fontSize:24,
         fontWeight:"500",
     },
     price:{
         color: colors.secondary,
         fontWeight:"bold",
         fontSize:22,
         marginVertical:10
     },
     userContainer:{
         marginVertical: 30
     }
 })
export default ListingDetailsScreen;