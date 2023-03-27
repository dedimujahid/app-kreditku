import React from "react";
import {View} from "react-native";
import {FlatGrid} from "react-native-super-grid";
import {DefaultEbookCard} from "../../../../components/Card/EbookCard";

export default function EbookTerkait(): React.ReactElement {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <FlatGrid
                data={[0, 1, 2]}
                itemDimension={90}

                renderItem={({}) => (
                    <DefaultEbookCard mini imgSource={require('../../../../../assets/images/book1.jpeg')}/>
                )}
            />
        </View>
    )
}