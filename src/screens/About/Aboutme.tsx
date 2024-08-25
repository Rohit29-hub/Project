import React from 'react'
import { Text, View } from 'react-native'

const Aboutme = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#111',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 22,
                textAlign: 'center',
                fontWeight: 'medium',
                lineHeight: 35,
            }}>
                Hii, I am Rohit, A passionate Full stack developer.
                and I am Looking for a Job. I will give my 100% 🔥 on that position you give me. : )
            </Text>
            <Text style={{
                marginTop: 17,
                color: 'white',
                fontSize: 100,
                textAlign: 'center',
                fontWeight: 'bold',
                transform: 'rotate(80deg)'
            }}> : )</Text>
        </View>
    )
}

export default Aboutme