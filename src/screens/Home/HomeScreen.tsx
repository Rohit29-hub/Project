import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import EventTile from '../../components/layout/EventTile'
import Banner from '../../components/layout/Banner'
import Matchs from '../../components/layout/Matchs'
import Header from '../../components/layout/Header'
import BetModal from '../Modal/BetModal'
import BottomNavigation from '../../components/layout/BottomNavigation'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView overScrollMode='never' style={{
                marginBottom: 130
            }}>
                <EventTile />
                <Banner />
                <Matchs />
                <BetModal/>
            </ScrollView>
            <BottomNavigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616'
    }
})

export default HomeScreen