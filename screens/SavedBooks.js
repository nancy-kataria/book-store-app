import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FONTS, COLORS, SIZES, icons } from "../constants";


  

export default function SavedBooks(){

    const [savedBooks, setSavedBooks] = React.useState([]);

    React.useEffect(()=>{
        getSavedBooks();
    },[]);

    async function getSavedBooks(){
        try {
          const value = await AsyncStorage.getItem('bookmarked_books');
          if(value !== null) {
            const books = JSON.parse(value);
            setSavedBooks(books);
          }
        } catch(e) {
        }
      }

    return(
        <View>
            <Text style={{...FONTS.h2}}>Saved Books Section</Text>
            <Text style={{...FONTS.h2}}>Total books save: {savedBooks.length}</Text>
        </View>
    )
}