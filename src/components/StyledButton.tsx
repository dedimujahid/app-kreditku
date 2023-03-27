import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MediumText, PoppinsMedium } from "./StyledText";
interface RootProps {
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"];
}
interface MainProps extends RootProps {
    title: string;
}
export function MainButton(props: MainProps) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.bg.bluemuda,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                borderRadius: 16,
                marginVertical: 1,

            }}
            onPress={props.onPress}
        >
            <PoppinsMedium style={{ color: "black" }} >{props.title}</PoppinsMedium>
        </TouchableOpacity>
    )
}

interface AkunProps extends RootProps {
    title: string;
}
export function AkunButton(props: AkunProps) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.bg.bluemuda,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                borderRadius: 16,
                marginVertical: 1,

            }}
            onPress={props.onPress}
        >
            <PoppinsMedium style={{ color: "black" }} >{props.title}</PoppinsMedium>
        </TouchableOpacity>
    )
}

interface BorderProps extends RootProps {
    title: string;
    color: string;
    borderWidth: number
}
export function BorderedButton(props: BorderProps) {
    const { color, borderWidth, title, onPress } = props;
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                borderWidth: borderWidth,
                borderColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                borderRadius: 6,
                marginVertical: 2,
            }}
            onPress={onPress}
        >
            <MediumText style={{ color: color }} >{title}</MediumText>
        </TouchableOpacity>
    )
}

type RadioButtonPlainProps = {
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"];
    checked: boolean;
};

export const RadioButtonPlain = ({ onPress, checked }: RadioButtonPlainProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons
                name={checked ? "md-radio-button-on" : "md-radio-button-off"}
                size={24}
                color={checked ? Colors.bg.bluemuda : "#707070"}
            />
        </TouchableOpacity>
    );
};

type RadioButtonProps = {
    caption: string;
    checked: boolean;
    onPress: React.ComponentProps<typeof TouchableOpacity>["onPress"];
};
export const RadioButton = ({
    caption,
    checked,
    onPress,
}: RadioButtonProps): React.ReactElement => {
    return (
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                marginBottom: 10,
                alignItems: "center",
            }}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons
                    name={
                        checked ? "md-radio-button-on" : "md-radio-button-off"
                    }
                    size={24}
                    color={checked ? Colors.bg.bluemuda : "#707070"}
                />
            </TouchableOpacity>
            <View style={{ marginLeft: 10, width: "90%" }}>
                <MediumText
                    style={{ fontSize: 12, color: Colors.text.black }}>
                    {caption}
                </MediumText>
            </View>
        </View>
    );
};

{/* <RadioButton
                            caption={
                                "data di atas adalah data yang sebenarnya dan dapat saya pertanggung jawabkan di kemudian hari"
                            }
                            checked={checked}
                            onPress={() => {
                                handleChecked(!checked);
                            }}
                        /> */}