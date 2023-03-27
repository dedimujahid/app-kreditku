import {TextInput} from "react-native";
import React from "react";
import {Colors} from "../constants/Colors";
type DefaultTextInputProps = TextInput["props"]
interface Props extends DefaultTextInputProps {
    style?:React.ComponentProps<typeof TextInput>["style"]
    is_active?:boolean
    is_disabled?:boolean
    keyboardTpe?:React.ComponentProps<typeof TextInput>["keyboardType"]
    secureTextEntry?:React.ComponentProps<typeof TextInput>["secureTextEntry"]
    placeholder?:React.ComponentProps<typeof TextInput>["placeholder"]
}
export const StyledTextInput = (Props:Props)=>{
    const {style,is_active,is_disabled,keyboardTpe,secureTextEntry,placeholder,...props} = Props
    return(
        <TextInput
            style={[{
                width: '100%',
                borderColor: is_active ?Colors.bg.main : "#999999",
                borderWidth: 1,
                color:"black",
                height:50,
                borderRadius:5,
                paddingHorizontal:10,
            },style]}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardTpe}
            placeholder={placeholder}
            {...props}
        />
    )
}
