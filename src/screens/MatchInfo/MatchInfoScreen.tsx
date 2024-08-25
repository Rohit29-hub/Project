import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const MatchInfoScreen = ({navigation}) => {
    const {params: {name,venue}}: any = useRoute();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold'
            }}>{name}</Text>
            <TouchableOpacity style={{
                marginTop: 15,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#000'
            }} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={{
                    color: 'white'
                }}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MatchInfoScreen