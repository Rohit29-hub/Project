import { Bell, ChevronLeftIcon } from 'lucide-react-native';
import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

const Header = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={headerStyle.container}>
            <View style={headerStyle.leftContainer}>
                <Text style={headerStyle.textCategory}>Category</Text>
                <View style={{transform: 'rotate(270deg)'}}>
                    <ChevronLeftIcon color={'#fff'}/>
                </View>
            </View>
            <View style={headerStyle.rightContainer}>
                <View>
                    <Switch
                        style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                        trackColor={{ false: '#212426', true: '#212426' }}
                        thumbColor={isEnabled ? '#2b2929' : '#2b2929'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text style={headerStyle.textLive}>Live</Text>
                <View style={headerStyle.bellIcon}>
                    <Bell color={'#fff'} size={20}/>
                </View>
            </View>
        </View>
    )
}

export default Header


const headerStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#111'
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        columnGap:5,
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap:10,
        paddingVertical: 2,
    },
    textCategory: {
        fontSize: 20,
        fontWeight: 'semibold',
        fontFamily: 'sans-serif',
        color: '#fff'
    },
    textLive: {
        fontSize: 12,
        color: '#fff',
        textTransform: 'uppercase'
    },
    bellIcon: {
        padding: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderRadius: 100
    }
})