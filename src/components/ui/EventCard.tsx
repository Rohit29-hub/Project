import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {
    isTrading?: boolean,
    name: string,
    profit_loss?: string,
    desc?: string,
    price?: string,
    image_url: string
}

const ImageCard = ({ isTrading, name, profit_loss, desc, price, image_url }: Props) => {
    return (
        <View style={imageCardStyle.container}>
            <View style={imageCardStyle.leftContainer}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>{name}</Text>
                {
                    isTrading ? (
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: 5
                        }}>
                            <Text style={{color: 'grey'}}>${price}</Text>
                            <Text style={{color: 'green'}}>{profit_loss}</Text>
                        </View>
                    ) : (
                        <Text style={{color: 'grey'}}>{desc}</Text>
                    )
                }
            </View>
            <View>
                <Image
                    style={imageCardStyle.image}
                    source={{
                        uri: image_url,
                    }}
                />
            </View>
        </View>
    )
}

const imageCardStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        height: 70,
        padding: 10,
        backgroundColor: '#1c1c1e', 
        borderRadius: 10,
        columnGap: 10,   
        borderWidth: 1,
        borderBottomColor: '#262629',
        borderRightColor: '#262629',
        borderLeftColor: '#1c1c1e',
        borderTopColor: '#1c1c1e',
        borderStyle: 'solid',
        elevation: 5,
    },
    image: {
        width: 60,
        height: 60
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowGap: 4,
    }
})

export default ImageCard