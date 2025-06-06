import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import { colors } from '../constants/colors'
import { category } from '../assets/data/category'

const Category = () => {
    //state management on select

    const [selectedCategory,setSelectedCategory]=useState("Smart Watch")
    const handleCategory=(category)=>{
        setSelectedCategory(category)
    }
  return (
    <FlatList 
    data={category} 
    renderItem={({item,index})=>(
        <TouchableOpacity
        onPress={()=>{
            handleCategory(item.name)
        }}
        >
            <Text style={[styles.categoryText,
                selectedCategory==item.name && {
                    color:colors.purple
                }
            ]}>{item.name}</Text>
            {selectedCategory==item.name &&<View style={styles.underline}/>}
        </TouchableOpacity>
    )}
    keyExtractor={(item)=>item.id}
    horizontal
    ItemSeparatorComponent={
        <View style={{paddingHorizontal:spacing.sm}}/>
    }
    />
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize:fontSize.md,
        fontFamily:fontFamily.SemiBold,
        color:colors.gray
    },
    underline:{
        borderBottomColor:colors.purple,
        borderBottomWidth:2,
        width:"50%",
        marginTop:spacing.sm
    }
})