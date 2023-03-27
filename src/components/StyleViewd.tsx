import React from "react";
import { Image, StatusBar, View } from "react-native";
import { AuthHeader } from "./StyledHeader";

type Props = {
    children: React.ReactNode;
};
export const ViewAuth = ({ children }: Props): React.ReactElement => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white"
            }}
        >
            <View
                style={{ width: "100%" }}
            >
                <Image
                    source={require("../../assets/images/bgauth.png")}
                    style={{ width: "100%", height: 100, resizeMode: 'contain', marginTop: -10 }}
                />
            </View>
            <View style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                paddingVertical: 10,
                paddingHorizontal: 15
            }}>
                <View style={{
                    marginTop: 20
                }}>
                    <AuthHeader />

                </View>
                {children}

            </View>
        </View>
    )
}

export const ViewLainnya = ({ children }: Props): React.ReactElement => {
    StatusBar.setBarStyle("light-content")
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View style={{ height: StatusBar.currentHeight, backgroundColor: "#01AEEB" }} />
            <View
                style={{ width: "100%" }}
            >
                {/* <Image
                    source={require("../../assets/images/bgauth.png")}
                    style={{ width: "100%", height: 100, resizeMode: 'contain', marginTop: -2 }}
                /> */}
            </View>
            <View style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: StatusBar.currentHeight,
                paddingVertical: 10,
            }}>
                {children}

            </View>
        </View>
    )
}
