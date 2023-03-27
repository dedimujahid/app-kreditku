import React from "react";
import {Image, TouchableOpacity} from "react-native";
type DefaultProps = {
    imgSource:React.ComponentProps<typeof Image>["source"],
    onPress?: React.ComponentProps<typeof TouchableOpacity>["onPress"],
    mini?:boolean
}
export const DefaultEbookCard = ({imgSource,onPress,mini}:DefaultProps):React.ReactElement=>{
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Image source={imgSource} style={{width:mini ? "100%" : 150, height:200,borderRadius:10,marginRight:10 }} />
        </TouchableOpacity>
    )
}

