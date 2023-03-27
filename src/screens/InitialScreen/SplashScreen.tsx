import React, { useCallback, useEffect } from "react";
import { Image, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { MediumText } from "../../components/StyledText";
import VersionInfo from 'react-native-version-info'
import { MainRoutes, RootStackScreenProps } from "../../navigation/types";
import { useSelector } from "react-redux";
import { getLoginStatus } from "../../redux/src/LoginState";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { useReduxDispatch, useReduxSelector } from "../../redux";
import { selectIsRunning, setRunning } from "../../redux/src/AppState";

export default function ({ navigation }: RootStackScreenProps<MainRoutes.splash>): React.ReactElement {
    const isLogin = useReduxSelector(getLoginStatus)
    const dispatch = useReduxDispatch()
    const isAppRunning = useReduxSelector(selectIsRunning);
    const isFocused = useIsFocused();
    // console.log(isLogin);



    // useFocusEffect(
    //     useCallback(() => {
    //         setTimeout(() => {
    //             if(isLogin){
    //                 navigation.navigate(MainRoutes.Home)
    //             }else{
    //                 navigation.navigate(MainRoutes.onboarding)
    //             }
    //         }, 1000)
    //         setTimeout(() => {
    //             // navigation.navigate(MainRoutes.appcheck)
    //         }, 2000)
    //     }, [isLogin])
    // )


    useEffect(() => {
        if (isFocused) {
            console.log("isFocused");
            console.log(isLogin);

            if (isLogin) {
                navigation.navigate(MainRoutes.Home)
            } else {
                navigation.navigate(MainRoutes.onboarding)
            }

        }
        // setTimeout(() => {
        //     if(isLogin){
        //         navigation.navigate(MainRoutes.Home)
        //     }else{
        //         navigation.navigate(MainRoutes.onboarding)
        //     }
        // },1000)
    }, [isFocused])


    return (
        <View style={{ flex: 1, backgroundColor: Colors.bg.main, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "75%", alignItems: 'center' }}>
                <Image source={require("../../../assets/images/logo.png")} style={{ width: "100%", maxWidth: 300, height: 100, resizeMode: "center" }} />
                <MediumText style={{ color: "white", width: "100%", textAlign: 'center', letterSpacing: 4, fontSize: 14 }} >PERPUSTAKAAN DIGITAL</MediumText>
            </View>
            <View style={{ position: "absolute", bottom: 10 }}>
                <MediumText style={{ color: "white" }}>Versi {VersionInfo.appVersion}</MediumText>
            </View>
        </View>
    )
}
