import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function Stories({ item, navigation }){



function storiesItem({ item }){
return (
<View style={styles.stories_item}>
<Image
    style={styles.story}
    source={{uri: item.story}}
    />
<Text style={styles.story_label} numberOfLines={1}>{item.story_label}</Text>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default Stories;

const styles = StyleSheet.create({
    "story": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "story_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});