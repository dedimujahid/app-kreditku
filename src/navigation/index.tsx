import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable } from 'react-native';

import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/InitialScreen/ModalScreen';
import NotFoundScreen from '../screens/InitialScreen/NotFoundScreen';
import TabOneScreen from '../screens/InitialScreen/TabOneScreen';
import TabTwoScreen from '../screens/InitialScreen/TabTwoScreen';
import {
    EbookTopBarParamList, EbookTopRoutes,
    MainRoutes,
    MainTabRoutes,
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps
} from './types';
import SplashScreen from "../screens/InitialScreen/SplashScreen";
import OnBoardingScreen from "../screens/InitialScreen/OnBoardingScreen";
import SignInScreen from "../screens/AuthScreen/SignInScreen";
import SignUpScreen from "../screens/AuthScreen/SignUpScreen";
import ForgotPassword from "../screens/AuthScreen/ForgotPassword";
import OtpPassword from "../screens/AuthScreen/OtpPassword";
import HomeEbook from "../screens/MainAppScreen/HomeKreditan";
import HomeDashBoard from "../screens/MainAppScreen/HomeDashBoard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EbookDetailScreen from "../screens/MainAppScreen/kreditan/EbookDetail";
import CoverImageViewerScreen from "../screens/MainAppScreen/kreditan/CoverViewer";
import EbookByCat from "../screens/MainAppScreen/kreditan/EbookCat";
import { useSelector } from 'react-redux';
import { getLoginStatus } from '../redux/src/LoginState';
import HomeKreditan from '../screens/MainAppScreen/HomeKreditan';
import HomeAkun from '../screens/MainAppScreen/HomeAkun';
import HomeKalender from '../screens/MainAppScreen/HomeKalender';
import Notifications from '../screens/InitialScreen/Notificasion';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const isLogin = useSelector(getLoginStatus)
    return (
        <Stack.Navigator>
            <Stack.Screen name={MainRoutes.splash} component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name={MainRoutes.onboarding} component={OnBoardingScreen} options={{ headerShown: false }} />
            {/*<Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>*/}


            {/*//main app*/}
            {
                isLogin
                    ?
                    <>
                        <Stack.Screen name={MainRoutes.Home} component={BottomTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.EbookDetail} component={EbookDetailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.EbookDetailShowCover} component={CoverImageViewerScreen} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.EbookByCategory} component={EbookByCat} options={{ headerShown: false }} />

                        <Stack.Screen
                            name={MainRoutes.Notificasion}
                            component={Notifications}
                            options={{ headerShown: false }}
                        />
                    </>
                    :
                    <>
                        <Stack.Screen name={MainRoutes.login} component={SignInScreen} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.signup} component={SignUpScreen} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.otpPassword} component={OtpPassword} options={{ headerShown: false }} />
                        <Stack.Screen name={MainRoutes.forgotPassword} component={ForgotPassword} options={{ headerShown: false }} />
                    </>

            }



            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName={MainTabRoutes.HomeDashboard}
            screenOptions={{
                tabBarActiveTintColor: Colors.bg.main,
                tabBarInactiveTintColor: "#888888",
                tabBarLabelStyle: {
                    // fontFamily: "Poppins-Medium",
                    fontSize: 12,
                    marginBottom: 5,
                },
                tabBarStyle: {
                    height: 60,
                    paddingVertical: 5
                },
                headerShown: false,

            }}>
            <BottomTab.Screen
                name={MainTabRoutes.HomeDashboard}
                component={HomeDashBoard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? require('../../assets/icon/home_active.png') : require('../../assets/icon/home.png')}
                            style={{ width: 20, height: 20 }} />
                    ),
                }}
            />
            <BottomTab.Screen
                name={MainTabRoutes.HomeKreditan}
                component={HomeKreditan}
                options={{
                    title: 'Kreditan',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? require('../../assets/icon/history_active.png') : require('../../assets/icon/history.png')}
                            style={{ width: 15, height: 20 }} />
                    ),
                }}
            />
            {/* <BottomTab.Screen
                name={MainTabRoutes.HomeKalender}
                component={HomeKalender}
                options={{
                    title: 'Kalender',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? require('../../assets/icon/calender_active.png') : require('../../assets/icon/calender.png')}
                            style={{ width: 20, height: 20 }} />
                    ),
                }}
            /> */}
            <BottomTab.Screen
                name={MainTabRoutes.HomeKalender}
                component={HomeKalender}
                options={{
                    title: 'Kalender',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? require('../../assets/icon/calender_active.png') : require('../../assets/icon/calender.png')}
                            style={{ width: 20, height: 20 }} />
                    ),
                }}
            />
            <BottomTab.Screen
                name={MainTabRoutes.HomeAkun}
                component={HomeAkun}
                options={{
                    title: 'Akun',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? require('../../assets/icon/account_active.png') : require('../../assets/icon/account.png')}
                            style={{ width: 20, height: 20 }} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const EbookTopBar = createMaterialTopTabNavigator<EbookTopBarParamList>()

export function TopBarEbookSection() {
    return (
        <EbookTopBar.Navigator
            initialRouteName={EbookTopRoutes.Terdekat}
        >
            <EbookTopBar.Screen
                name={EbookTopRoutes.Terdekat}
                component={HomeEbook}
                options={{
                    tabBarLabel: 'Ebook',
                }}
            />
            <EbookTopBar.Screen
                name={EbookTopRoutes.BelumLunas}
                component={HomeEbook}
                options={{
                    tabBarLabel: 'Kategori',
                }}
            />
            <EbookTopBar.Screen
                name={EbookTopRoutes.Lunas}
                component={HomeEbook}
                options={{
                    tabBarLabel: 'Terpopuler',
                }}
            />
        </EbookTopBar.Navigator>
    )
}
