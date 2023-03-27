import React, { useEffect } from "react";
import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, View, StatusBar } from "react-native";
import { HeaderHomeTab } from "../../components/StyledHeader";
import { HeaderHeightWithStatusBar } from "../../constants/Config";
import { MainRoutes, MainTabRoutes, RootStackScreenProps } from "../../navigation/types";
import { MediumText, PoppinsRegular, PoppinsBold, PoppinsExtraBold } from "../../components/StyledText";
import Feather from "react-native-vector-icons/Feather";
import { DefaultEbookCard } from "../../components/Card/EbookCard";
import { Colors } from "../../constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { EbookTopBarParamList, EbookTopRoutes } from "../../navigation/types";
import EbookMain from "./kreditan/Terdekat";
import EbookKat from "./kreditan/BelumLunas";
import EbookTerpopuler from "./kreditan/Lunas";


const { width, height } = Dimensions.get('window');
const EbookTopBar = createMaterialTopTabNavigator<EbookTopBarParamList>()
type TitleCardProps = {
    title: string,
    onPress?: React.ComponentProps<typeof TouchableOpacity>["onPress"]
}
const TitleCard = ({ title, onPress }: TitleCardProps): React.ReactElement => {
    return (
        <View style={{ width: "100%", paddingHorizontal: 10, height: 30, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: "90%" }}>
                <MediumText>{title}</MediumText>
            </View>
            <TouchableOpacity onPress={onPress} style={{ width: "10%", alignItems: 'flex-end' }}>
                <Feather name={"chevron-right"} size={22} />
            </TouchableOpacity>
        </View>
    )
}

export default function HomeDashBoard({ navigation }: RootStackScreenProps<MainRoutes.Home>): React.ReactElement {
    const [checked, setChecked] = React.useState(false);
    useEffect(() => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor("#AE2503")
    }, []);

    const handleChecked = () => {
        if (checked) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    };


    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <HeaderHomeTab />
            <View style={{ width: "100%", height: height - HeaderHeightWithStatusBar - 60 }}>
                <ScrollView>
                    <View>
                        <PoppinsBold style={{
                            marginTop: 10,
                            marginLeft: 10, fontSize: 20,
                            color: Colors.text.black
                        }} >Tagih Segera!</PoppinsBold>
                    </View>
                    <View
                        style={{ alignItems: 'center', width: "100%" }}
                    >
                        <Image
                            source={require("../../../assets/images/banner.jpeg")}
                            style={{
                                borderRadius: 8,
                                width: width - 20,
                                height: width / 2,
                                marginTop: 20
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <PoppinsBold style={{
                            marginTop: 10, marginLeft: 10, fontSize: 20,
                        }} >Laporan Kreditku</PoppinsBold>

                        {/* <View style={{ flex: 1 }}>

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
                                        fontFamily: "Poppins-Medium",
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
                                        tabBarLabel: 'Minggu ini',
                                    }}
                                />
                                <EbookTopBar.Screen
                                    name={EbookTopRoutes.BelumLunas}
                                    component={EbookKat}
                                    options={{
                                        tabBarLabel: 'Hari ini',
                                    }}
                                />
                                <EbookTopBar.Screen
                                    name={EbookTopRoutes.Lunas}
                                    component={EbookTerpopuler}
                                    options={{
                                        tabBarLabel: 'Semua',
                                    }}
                                />
                            </EbookTopBar.Navigator>

                        </View> */}
                    </View>




                    <View style={{ height: 20 }} />
                </ScrollView>

            </View>
        </View>
    )
}
