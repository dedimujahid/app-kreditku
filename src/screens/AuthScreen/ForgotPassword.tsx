import { View } from "react-native";
import { ViewAuth } from "../../components/StyleViewd";
import { MediumText } from "../../components/StyledText";
import { StyledTextInput } from "../../components/StyledTextInput";
import { useState } from "react";
import { BorderedButton, MainButton } from "../../components/StyledButton";
import { Colors } from "../../constants/Colors";
import { MainRoutes, RootStackScreenProps } from "../../navigation/types";
import React from "react";

export default function ForgotPassword({ navigation }: RootStackScreenProps<MainRoutes.forgotPassword>): React.ReactElement {
    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    return (
        <ViewAuth>
            <MediumText style={{ fontSize: 30, marginTop: 20, marginBottom: 10 }}>Lupa Password</MediumText>
            <MediumText style={{ color: Colors.text.inactive }}>Silahkan masukkan alamat email Anda untuk melakukan reset kata sandi</MediumText>
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
                <View style={{ marginTop: 10 }}>
                    <MainButton title={"KIRIM SANDI BARU"} onPress={() => {
                        navigation.navigate(MainRoutes.otpPassword)
                    }} />
                </View>
            </View>
        </ViewAuth>
    );
}
