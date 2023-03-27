import { View } from "react-native";
import { ViewAuth } from "../../components/StyleViewd";
import { MediumText } from "../../components/StyledText";
import { StyledTextInput } from "../../components/StyledTextInput";
import { useCallback, useEffect, useState } from "react";
import { BorderedButton, MainButton } from "../../components/StyledButton";
import { MainRoutes, RootStackScreenProps } from "../../navigation/types";
import React from "react";
import { useReduxDispatch } from "../../redux";
import { getLoginStatus, setLogin } from "../../redux/src/LoginState";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function SignInScreen({ navigation, route }: RootStackScreenProps<MainRoutes.login>): React.ReactElement {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const dispatch = useReduxDispatch();
    const isLogin = useSelector(getLoginStatus)
    const handleLogin = () => {
        setTimeout(() => {
            dispatch(setLogin(true));
            navigation.navigate(MainRoutes.Home)
        }, 1000)
    }
    useEffect(() => {
        console.log(isLogin);

        if (isLogin) {
            navigation.navigate(MainRoutes.Home)
        }
    }, [isLogin])

    return (
        <ViewAuth>
            <MediumText style={{ fontSize: 30, marginTop: 20, marginBottom: 10 }}>Masuk</MediumText>
            <View style={{ width: "100%", marginTop: 30 }}>
                <StyledTextInput
                    placeholder="Email"
                    is_active={emailFocus}
                    onChangeText={(value) => setEmail(value)}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    keyboardType={"email-address"}
                />
                <View style={{ height: 5 }} />
                <StyledTextInput
                    placeholder="Kata Sandi"
                    is_active={passwordFocus}
                    onChangeText={(value) => setPassword(value)}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 10 }}>
                    <MainButton title={"MASUK"} onPress={handleLogin} />
                    <BorderedButton title={"LUPA PASSWORD"} color={"black"} borderWidth={1} onPress={() => {
                        navigation.navigate(MainRoutes.forgotPassword, { email })
                    }} />
                </View>
            </View>
        </ViewAuth>
    );
}
