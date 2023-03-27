import React from "react";
import { Dimensions, Image, ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { MediumText, } from "../../../components/StyledText";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MainRoutes, RootStackScreenProps } from "../../../navigation/types";
import { Colors } from "../../../constants/Colors";
import { HeaderHeightWithStatusBar, StatusBarHeight } from "../../../constants/Config";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EbookTerkait from "./detail/Terkait";
import UlasanEbookScreen from "./detail/Ulasan";

export default function EbookDetailScreen({ navigation }: RootStackScreenProps<MainRoutes.EbookDetail>): React.ReactElement {
    let tinggi = Dimensions.get('window').height - HeaderHeightWithStatusBar + 64;
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#AE2503" }}>

            </View>
            <View style={{ width: "100%", height: tinggi }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: Colors.bg.main, width: "100%", height: 220 }}>
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                marginTop: 10,
                                marginLeft: 10,
                            }}
                            onPress={() => {
                                if (navigation.canGoBack()) {
                                    navigation.goBack()
                                }
                            }}
                        >
                            <MaterialIcons name={"chevron-left"} size={32} color={"white"} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: "100%", alignItems: 'center' }}>

                        <View
                            style={{
                                width: "100%",
                                backgroundColor: "white",
                                padding: 10,
                                paddingTop: 60,
                                alignItems: 'center'
                            }}
                        >
                            <MediumText style={{ textAlign: 'center' }}>Teknologi Layanan Jaringan (C3) Kelas
                                XII</MediumText>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Feather name={"users"} size={20} color={Colors.text.inactive} />
                                    <MediumText style={{ marginLeft: 10, color: Colors.text.inactive, fontSize: 12 }}>Quantum
                                        Book</MediumText>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 10 }}>
                                    <Feather name={"eye"} size={20} color={Colors.text.inactive} />
                                    <MediumText style={{ marginLeft: 10, color: Colors.text.inactive, fontSize: 12 }}>1.000
                                        kali</MediumText>
                                </View>

                            </View>

                            <TouchableOpacity
                                style={{
                                    width: "90%",
                                    height: 50,
                                    borderRadius: 25,
                                    backgroundColor: Colors.bg.main,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    marginBottom: 20
                                }}

                            >
                                <View
                                    style={{
                                        width: 25,
                                        height: 25,
                                        borderRadius: 20,
                                        backgroundColor: "white",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: 10
                                    }}
                                >
                                    <Feather name={"arrow-down"} size={18} color={Colors.bg.main} />
                                </View>
                                <MediumText style={{ color: Colors.text.main }}>Pinjam</MediumText>
                            </TouchableOpacity>

                            <View style={{ width: "100%" }}>
                                <MediumText style={{ color: Colors.text.inactive, fontSize: 12 }}>
                                    Buku Teknologi Layanan Jaringan (C3) Kelas XII disusun sebagai sumber belajar
                                    peserta didik
                                    Sekolah Menengah Kejuruan (SMK) kelas XII Program keahlian Teknik Komputer dan
                                    Informatika.
                                    Buku ini telah disesuaikan...
                                </MediumText>
                                <MediumText
                                    style={{ fontSize: 12, color: Colors.bg.main, textAlign: 'center', marginTop: 5 }}
                                >
                                    Baca Selengkapnya
                                </MediumText>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: -150,
                                width: 150,
                                height: 200
                            }}
                            onPress={() => {
                                navigation.navigate(MainRoutes.EbookDetailShowCover, {
                                    cover: "",
                                    back_cover: ""
                                })
                            }}
                        >
                            <Image
                                source={require("../../../../assets/images/book1.jpeg")}
                                style={{ width: "100%", height: '100%' }}
                                borderRadius={10}
                            />
                            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                                <Feather name={"zoom-in"} size={27} color={"white"} />
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                        backgroundColor: "white",
                        height: 300
                    }}>
                        <DetailTabNavigaor />
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const DetailTab = createMaterialTopTabNavigator()
const DetailTabNavigaor = () => {
    return (
        <DetailTab.Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 0
                },
                tabBarLabelStyle: {
                    textTransform: "none"
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.bg.main
                }
            }}
        >
            <DetailTab.Screen
                name="Terkait"
                component={EbookTerkait}
                options={{
                    tabBarLabel: 'Ebook Terkait',
                }}
            />
            <DetailTab.Screen
                name="Ulasan"
                component={UlasanEbookScreen}
            />
        </DetailTab.Navigator>
    )
}