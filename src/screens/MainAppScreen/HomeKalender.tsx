import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BukuSayaParamList, BukuSayaRoutes } from "../../navigation/types";
import { HeaderTabDefault } from "../../components/StyledHeader";
import { Colors } from "../../constants/Colors";
import Bulanini from "./kalender/BulanIni";
import MingguIni from "./kalender/MingguIni";

const EbookSayaTopNavigator = createMaterialTopTabNavigator<BukuSayaParamList>()
export default function HomeKalender(): React.ReactElement {
    return (
        <View style={{ flex: 1 }}>
            <HeaderTabDefault title="Kalender Kredit" />
            <EbookSayaTopNavigator.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        paddingHorizontal: 5,
                        justifyContent: 'center',
                        height: 50,
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
                <EbookSayaTopNavigator.Screen
                    name={BukuSayaRoutes.PinjamanSaya}
                    component={Bulanini}
                    options={{
                        tabBarLabel: "Bulan Ini"
                    }}
                />
                <EbookSayaTopNavigator.Screen
                    name={BukuSayaRoutes.WishListSaya}
                    component={MingguIni}
                    options={{
                        tabBarLabel: "Minggu Ini"
                    }}
                />
            </EbookSayaTopNavigator.Navigator>
        </View>
    )
}
