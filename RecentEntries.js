import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function RecentEntries({ item, navigation }){

const onPressViewEntry = () => {}

function recentEntriesItem({ item }){
return (
<View style={styles.recent_entries_item}>
<Image
    style={styles.entry_image}
    source={{uri: item.entry_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.entry_title} numberOfLines={1}>{item.entry_title}</Text>
<Text style={styles.entry_description}>{item.entry_description}</Text>
</View>
<TouchableOpacity  onPress={onPressViewEntry}>
    <View style={styles.view_entry}>{'View Entry'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.recent_entries}
    data={item}
    renderItem={recentEntriesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default RecentEntries;

const styles = StyleSheet.create({
    "view_entry": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "entry_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "entry_title": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "entry_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});