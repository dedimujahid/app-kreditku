import React, { useEffect } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { MediumText, PoppinsMedium, PoppinsRegular, PoppinsBold } from "./StyledText";
import { HeaderHeight, HeaderHeightWithStatusBar } from "../constants/Config";
import { Colors } from "../constants/Colors";
import { MainRoutes } from '../navigation/types';

export const AuthHeader = (): React.ReactElement => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 8,
            }}
            onPress={() => {
                if (navigation.canGoBack()) {
                    navigation.goBack()
                }
            }}
        >
            <MaterialIcons name={"chevron-left"} size={27} />
        </TouchableOpacity>
    )
}

export const HeaderHomeTab = (): React.ReactElement => {
    useEffect(() => {
        console.log(StatusBar.currentHeight)
    }, []);
    const navigation = useNavigation();
    const headerHight = HeaderHeightWithStatusBar
    StatusBar.setBarStyle("light-content")
    return (
        <View style={{ width: "100%", height: headerHight, backgroundColor: "white" }}>
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#ffff" }}>

            </View>
            <View style={{ flexDirection: "row", height: HeaderHeight, paddingHorizontal: 10, alignItems: 'center' }}>
                <View style={{ width: "50%", marginTop: 5 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <PoppinsMedium style={{ fontSize: 20, marginLeft: 10, color: Colors.text.black }} >Hai</PoppinsMedium>
                        <PoppinsMedium style={{ marginTop: 70, marginLeft: -36, fontSize: 20, color: Colors.text.black }} >Jane Cooper</PoppinsMedium>

                    </View>
                </View>
                <View style={{ width: "40%" }} />
                <View
                    style={{
                        width: "20%",
                        flexDirection: "row",
                        height: "100%",
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        justifyContent: "space-between",
                    }}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(MainRoutes.Notificasion);
                        }}
                    >
                        <Fontisto name={"bell-alt"} size={22} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
interface Props {
    title: string
}
export const HeaderTabDefault = (props: Props, navigation): React.ReactElement => {
    useEffect(() => {
        console.log(StatusBar.currentHeight)
    }, []);
    const headerHight = HeaderHeightWithStatusBar - 20
    StatusBar.setBarStyle("light-content")
    return (
        <View style={{ width: "100%", height: headerHight, backgroundColor: "white" }}>
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#AE2503" }}>
            </View>
            <View
                style={{
                    marginLeft: 10,
                    marginTop: 20,
                    height: 60,
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name={'arrow-back'} size={27} />
                </TouchableOpacity>
                <PoppinsMedium style={{ fontSize: 18, marginLeft: 10 }}>{props.title}</PoppinsMedium>
            </View>
        </View>
    )
}

export const HeaderDetail = (): React.ReactElement => {
    const navigation = useNavigation()
    const headerHight = HeaderHeightWithStatusBar
    return (
        <View style={{ width: "100%", height: headerHight }}>
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#AE2503" }}>

            </View>
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                }}
                onPress={() => {
                    if (navigation.canGoBack()) {
                        navigation.goBack()
                    }
                }}
            >
                <MaterialIcons name={"chevron-left"} size={27} />
            </TouchableOpacity>

        </View>
    )
}

interface HeaderDefault extends Props {
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"]
}

export const HeaderDefault = (props: HeaderDefault): React.ReactElement => {
    useEffect(() => {
        console.log(StatusBar.currentHeight)
    }, []);
    const headerHight = HeaderHeightWithStatusBar - 10
    StatusBar.setBarStyle("light-content")
    return (
        <View style={{ width: "100%", height: headerHight, backgroundColor: "white" }}>
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#AE2503" }} />
            <View style={{ flexDirection: "row", height: HeaderHeight, paddingHorizontal: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onPress} style={{ width: "10%", justifyContent: 'center', borderWidth: 0 }}>
                    <Feather name={"chevron-left"} size={27} />
                </TouchableOpacity>
                <View style={{ width: "70%" }}>
                    <MediumText style={{ fontSize: 18 }}>{props.title}</MediumText>
                </View>
                <View
                    style={{
                        width: "20%",
                        flexDirection: "row",
                        height: "100%",
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        justifyContent: "space-between",
                    }}>
                    <TouchableOpacity

                        onPress={() => {
                            console.log("click")
                        }}
                    >
                        <Fontisto name={"search"} size={22} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log("click")
                        }}
                    >
                        <Fontisto name={"bell"} size={22} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}