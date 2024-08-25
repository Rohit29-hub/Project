import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/Home/HomeScreen';
import { ModalProvider } from './context/ModalContext';
import MatchInfoScreen from './screens/MatchInfo/MatchInfoScreen';
import Aboutme from './screens/About/Aboutme';


const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <ModalProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    animation: 'flip',
                    animationDuration: 200,
                }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name='MatchInfoScreen' component={MatchInfoScreen}/>
                    <Stack.Screen name='AboutmeScreen' component={Aboutme}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ModalProvider>
    )
}

export default App;
