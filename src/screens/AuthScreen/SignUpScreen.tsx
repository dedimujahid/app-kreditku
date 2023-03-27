import { View } from "react-native";
import { ViewAuth } from "../../components/StyleViewd";
import { MediumText } from "../../components/StyledText";
import { StyledTextInput } from "../../components/StyledTextInput";
import { useState } from "react";
import { MainButton } from "../../components/StyledButton";
import { Colors } from "../../constants/Colors";
import React from "react";

export default function SignUpScreen(): React.ReactElement {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [fullnameFocus, setFullnameFocus] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
    return (
        <ViewAuth>
            <MediumText style={{ fontSize: 30, marginTop: 20, marginBottom: 10 }}>Daftar</MediumText>
            <View style={{ width: "100%", marginTop: 30 }}>
                <StyledTextInput
                    placeholder="Nama Lengkap"
                    is_active={fullnameFocus}
                    onChangeText={(value) => setFullname(value)}
                    onFocus={() => setFullnameFocus(true)}
                    onBlur={() => setFullnameFocus(false)}
                    keyboardType={"default"}
                />
                <View style={{ height: 5 }} />
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
                <View style={{ height: 5 }} />
                <StyledTextInput
                    placeholder="Phone Number"
                    is_active={phoneNumberFocus}
                    onChangeText={(value) => setPhoneNumber(value)}
                    onFocus={() => setPhoneNumberFocus(true)}
                    onBlur={() => setPhoneNumberFocus(false)}
                    keyboardType={"phone-pad"}
                />
                <View style={{ marginTop: 10 }}>
                    <MainButton title={"DAFTAR"} onPress={() => {
                    }} />
                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <MediumText style={{ textAlign: "center" }}>Dengan mendaftar, Anda menyetujui <MediumText
                            style={{ color: Colors.bg.main }}>Persyaratan Layanan</MediumText> dan <MediumText
                                style={{ color: Colors.bg.main }}>Kebijakan Pribadi</MediumText>.</MediumText>
                    </View>
                </View>
            </View>
        </ViewAuth>
    );
}
