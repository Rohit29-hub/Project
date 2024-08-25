import { useNavigation } from '@react-navigation/native'
import { BookTextIcon, Home, User, Wallet } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const BottomNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 130,
            backgroundColor: 'black',
            elevation: 4,
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen' as never)} activeOpacity={1} style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 8,
            }}>
                <View style={{
                    padding: 10,
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: 100,
                }}>
                    <Home size={20} color={'white'} />
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'semibold'
                }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('AboutmeScreen' as never)} style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 8,
            }}>
                <View style={{
                    padding: 10,
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: 100,
                }}>
                    <BookTextIcon size={20} color={'white'} />
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'semibold'
                }}>Portfolio</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 8,
            }}>
                <View style={{
                    padding: 10,
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: 100,
                }}>
                    <Wallet size={20} color={'white'} />
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'semibold'
                }}>Wallet</Text>

            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 8,
            }}>
                <View style={{
                    padding: 10,
                    borderWidth: 1.5,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: 100,
                }}>
                    <User size={20} color={'white'} />
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'semibold'
                }}>Profile</Text>
            </View>
        </View>
    )
}

export default BottomNavigation