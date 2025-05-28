import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fontSize, iconSize, spacing } from '../constants/dimensions'
import { colors } from '../constants/colors'
import { fontFamily } from '../constants/fonts'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now.</Text>
      {/* search input */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          {/* icon */}
          <Image source={require('../assets/Search.png')} style={styles.logo} />
          {/* Input Container */}
          <TextInput style={styles.textInput} placeholder='Search Product'/>

        </View>
        {/* category container */}
        <View style={styles.categoryContainer}>
          <Image source={require("../assets/Category.png")} style={styles.logo}/>

        </View>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background,
        padding:spacing.md,
    },
    headline:{
        fontSize:fontSize.xxl,
        color:colors.black,
        fontFamily:fontFamily.Bold
    },
    mainInputContainer:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:spacing.md

    },
    inputWrapper:{
      flex:1,
      borderWidth:1,
      flexDirection:"row",
      alignItems:"center",
      borderColor:colors.placeholderText,
      borderRadius:44,
      paddingHorizontal:spacing.md

    },
    logo:{
      height:iconSize.md,
      width:iconSize.md,
    },
    textInput:{
      flex:1,
      paddingHorizontal:spacing.md,
      fontSize:fontSize.md,
      color:colors.black,
      fontFamily:fontFamily.Medium

    },
    categoryContainer:{
      paddingHorizontal:spacing.sm

    }
})