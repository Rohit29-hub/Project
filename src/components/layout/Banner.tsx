import React from 'react'
import { StyleSheet, View } from 'react-native'

const Banner = () => {
    return (
        <View style={bannerStyle.container}>
            <View style={bannerStyle.imageContainer}>

            </View>
        </View>
    )
}

const bannerStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginTop: 20,
        paddingHorizontal: 10
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})

export default Banner