import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import tradingData from '../../data/trading_cards.json'
import sportsData from '../../data/sports_cards.json'
import ImageCard from '../ui/EventCard'

type sportDataType = {
  id: number,
  name: string,
  desc: string,
  image_url: string
}

type tradingDataType = {
  id: number,
  name: string,
  price: string,
  profit_loss: string
  image_url: string
}

const EventTile = () => {
  return (
    <ScrollView style={{flexGrow: 0}} horizontal showsHorizontalScrollIndicator={false} overScrollMode='never'>
      <View style={eventTileStyle.container}>
        {
          tradingData.map((data: tradingDataType) => (
            <ImageCard key={data.id}
              isTrading={true}
              price={data.price}
              name={data.name}
              profit_loss={data.profit_loss}
              image_url={data.image_url} />
          ))
        }
        {
          sportsData.map((data: sportDataType) => (
            <ImageCard key={data.id}
              isTrading={false}
              name={data.name}
              image_url={data.image_url}
              desc={data.desc}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}


const eventTileStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  }
})

export default EventTile