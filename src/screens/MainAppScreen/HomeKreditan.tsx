import React from "react";
import { View } from "react-native";
import { HeaderTabDefault } from "../../components/StyledHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { EbookTopBarParamList, EbookTopRoutes } from "../../navigation/types";
import EbookMain from "./kreditan/Terdekat";
import { Colors } from "../../constants/Colors";
import Lunas from "./kreditan/Lunas";
import BelumLunas from "./kreditan/BelumLunas";
const EbookTopBar = createMaterialTopTabNavigator<EbookTopBarParamList>()

export default function HomeKreditan(): React.ReactElement {
    return (
        <View style={{ flex: 1 }}>
            <HeaderTabDefault title="Ebook" />
            <EbookTopBar.Navigator
                initialRouteName={EbookTopRoutes.Terdekat}
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        paddingHorizontal: 5,
                        justifyContent: 'center',
                        height: 50
                    },
                    tabBarLabelStyle: {
                        fontFamily: "Roboto-Medium",
                        textTransform: "none"
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors.bg.bluemuda,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 10,
                        paddingHorizontal: 5,
                        marginLeft: 5,
                        marginRight: 10,
                    },
                }}
            >
                <EbookTopBar.Screen
                    name={EbookTopRoutes.Terdekat}
                    component={EbookMain}
                    options={{
                        tabBarLabel: 'Terdekat',
                    }}
                />
                <EbookTopBar.Screen
                    name={EbookTopRoutes.BelumLunas}
                    component={BelumLunas}
                    options={{
                        tabBarLabel: 'Belum Lunas',
                    }}
                />
                <EbookTopBar.Screen
                    name={EbookTopRoutes.Lunas}
                    component={Lunas}
                    options={{
                        tabBarLabel: 'Lunas',
                    }}
                />
            </EbookTopBar.Navigator>
        </View>
    )
}
