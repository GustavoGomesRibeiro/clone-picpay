import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons'


import PayButton from '../components/PayButton';
import Home from '../screens/Home';
import Pay from '../screens/Pay';
import Wallet from '../screens/Wallet';
import Notification from '../screens/Notifications';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const icons = { 
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notification: {
        lib: Ionicons,
        name: 'ios-notifications'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    },
} 

export default function Navigation() {

    return(
            <Tab.Navigator
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ size, color, focused}) => {
                        if(route.name === 'Pay') {
                            return <PayButton 
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                            />
                        }
                        const { lib: Icons, name} = icons[route.name]
                        return <Icons name={name} size={size} color={color}/>
                    } ,
                })}
                tabBarOptions={{
                    style: {
                        backgroundColor: '#131418',
                        borderTopColor: 'rgba(255,255,255,0.2)',
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#92929c',
                }}
            >
                <Tab.Screen name='Home' component={Home} options={{ title: 'Home' }} />
                <Tab.Screen name='Wallet' component={Wallet} options={{ title: 'Wallet' }} />
                <Tab.Screen name='Pay' component={Pay} options={{ title: '' }} />
                <Tab.Screen name='Notification' component={Notification} options={{ title: 'Notification' }} />
                <Tab.Screen name='Settings' component={Settings} options={{ title: 'Settings' }} />
        </Tab.Navigator>
    )
}
