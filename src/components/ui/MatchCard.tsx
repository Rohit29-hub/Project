import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '../../context/ModalContext'
import { useNavigation } from '@react-navigation/native'

type Props = {
    name: string,
    venue: string,
    image_url: string,
    yesValue: string,
    noValue: string
}

const MatchCard = ({ name, venue, image_url, yesValue, noValue }: Props) => {
    const { openModal } = useModal();
    const navigation = useNavigation();
    const handleOpenModal = (isYes: boolean) => {
        openModal({
            name,
            yesValue,
            noValue,
            isYes,
            image_url
        })
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={() =>
            // @ts-ignore
            navigation.navigate('MatchInfoScreen', {
                name,
                venue
            })
        } style={matchCardStyle.container}>
            <View style={matchCardStyle.leftContainer}>
                <View style={matchCardStyle.textContainer}>
                    <Text style={matchCardStyle.headingText}>{name}</Text>
                    <Text style={matchCardStyle.venueText}>{venue}</Text>
                </View>
                <View style={matchCardStyle.imgContainer}>
                    <Image
                        style={matchCardStyle.image}
                        source={{
                            uri: image_url,
                        }}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handleOpenModal(true)} style={matchCardStyle.yesButton}>
                    <Text style={matchCardStyle.buttonText}>Yes ₹ {yesValue}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal(false)} style={matchCardStyle.noButton}>
                    <Text style={matchCardStyle.buttonText}>No ₹ {noValue}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const matchCardStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        backgroundColor: '#222225',
        elevation: 3,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 8,
    },
    image: {
        width: 60,
        height: 60
    },
    yesButton: {
        flex: 1,
        backgroundColor: '#3464cd',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginRight: 10,
        elevation: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#3464cd',
    },
    noButton: {
        flex: 1,
        backgroundColor: '#06c270',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        elevation: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#06c270',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    leftContainer: {
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 8,
    },
    textContainer: {
        flex: 1,
    },
    headingText: {
        fontSize: 22,
        color: '#d2d2d2',
        fontWeight: 'bold'
    },
    venueText: {
        marginTop: 5,
        fontSize: 12,
        color: 'grey',
    },
    imgContainer: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        overflow: 'hidden',
        flexShrink: 0,
    }
})

export default MatchCard