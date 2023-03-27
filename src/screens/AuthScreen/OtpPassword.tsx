import { TouchableOpacity, View } from "react-native";
import { ViewAuth } from "../../components/StyleViewd";
import { MediumText, PoppinsMedium } from "../../components/StyledText";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
// @ts-ignore
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import React from "react";

export default function OtpPassword(): React.ReactElement {
    const [code, setCode] = useState("");
    return (
        <ViewAuth>
            <PoppinsMedium style={{ fontSize: 30, marginTop: 20, marginBottom: 10 }}>Verifikasi Kode</PoppinsMedium>
            <PoppinsMedium style={{ color: Colors.text.inactive }}>Silahkan masukkan verifikasi kode yang terkirim ke alamat
                email Anda</PoppinsMedium>
            <View style={{ width: "100%", marginTop: 30, alignItems: 'center' }}>
                <SmoothPinCodeInput
                    cellSize={65}
                    codeLength={4}
                    value={code}
                    cellSpacing={10}
                    cellStyle={{
                        // borderBottomWidth: 2,
                        borderWidth: 1,
                        borderColor: "#EEEEEE",
                        borderRadius: 10
                    }}
                    cellStyleFocused={{
                        borderColor: Colors.bg.main,
                    }}
                    textStyle={{
                        fontSize: 27,
                        color: Colors.bg.main,
                        fontFamily: "Roboto-Bold",
                    }}
                    onTextChange={(value: any) => {
                        if (value.length === 4) {
                            console.log(value)
                        }
                        setCode(value)
                    }}
                    onFulfill={() => {

                    }}
                />
                <View style={{ marginTop: 20, justifyContent: 'center', flexDirection: "row" }}>
                    <PoppinsMedium style={{ color: Colors.text.inactive, alignItems: 'center' }}>Saya tidak menerima
                        kode! </PoppinsMedium><TouchableOpacity><PoppinsMedium style={{ color: Colors.bg.main }}>Kirim
                            Ulang</PoppinsMedium></TouchableOpacity>

                </View>
            </View>
        </ViewAuth>
    );
}
