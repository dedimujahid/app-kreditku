import React from "react";
import {View} from "react-native";
import {HeaderDefault} from "../../../components/StyledHeader";
import {MainRoutes, RootStackScreenProps} from "../../../navigation/types";
import {DefaultEbookCard} from "../../../components/Card/EbookCard";
import {FlatGrid} from "react-native-super-grid";

export default function EbookByCat({navigation,route}:RootStackScreenProps<MainRoutes.EbookByCategory>):React.ReactElement{
    return (
        <View style={{flex:1}}>
            <HeaderDefault title={route.params.title} onPress={()=>navigation.goBack()} />
            <FlatGrid
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                itemDimension={120}
                renderItem={({item, index}) => (
                    <DefaultEbookCard
                        mini
                        key={index + Math.random()}
                        imgSource={require("../../../../assets/images/book1.jpeg")}
                        onPress={() => {
                            navigation.navigate(MainRoutes.EbookDetail,{
                                id:index.toString()
                            })
                        }}
                    />
                )}
            />
        </View>
    )
}