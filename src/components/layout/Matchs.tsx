import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MatchCard from '../ui/MatchCard'

type matchDataType = {
  id: number,
  name: string,
  venue: string,
  image_url: string,
  yes_value: string,
  no_value: string
}

const Matchs = () => {
  const [data, setData] = useState<null | Array<matchDataType>>(null)

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const res = await fetch('https://66c9be6659f4350f064d509c.mockapi.io/api/v1/matches?page=1&limit=3', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      setData(data);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return data ? (
    <View style={matchCompStyle.container}>
      {
        data.map((matchInfo: matchDataType) => (
          <MatchCard
            key={matchInfo.id}
            name={matchInfo.name}
            venue={matchInfo.venue}
            image_url={matchInfo.image_url}
            yesValue={matchInfo.yes_value}
            noValue={matchInfo.no_value}
          />
        ))
      }
    </View>
  ) : (
    <View style={{marginVertical: 15}}>
      <ActivityIndicator color={"#fff"} size={'large'} />
      <Text>Loading...</Text>
    </View>
  )
}

const matchCompStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 14,
    marginVertical: 10,
    paddingHorizontal: 10,
  }
})

export default Matchs