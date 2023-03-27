import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../constants/Colors";
import { PoppinsBold, PoppinsMedium } from "../../../components/StyledText";
import Feather from "react-native-vector-icons/Feather";

export default function Terdekat(): React.ReactElement {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <FlatList
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 5 }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        key={index}
                        style={{
                            height: 100,
                            width: "100%",
                            borderWidth: 0.4,
                            backgroundColor: "#FDDD9F",
                            borderColor: Colors.text.inactive,
                            marginBottom: 5,
                            borderRadius: 4,
                            flexDirection: "row",
                            paddingVertical: 5,
                            paddingHorizontal: 5
                        }}
                    >
                        <View style={{ width: "20%" }}>
                            <Image
                                source={require('../../../../assets/images/book1.jpeg')}
                                style={{ width: "100%", height: "100%", borderRadius: 4 }}
                            />
                        </View>
                        <View style={{ width: "70%", marginLeft: 10, justifyContent: 'space-between' }}>
                            <PoppinsMedium style={{ fontSize: 13, color: Colors.text.inactive }}>17 Feb 2023</PoppinsMedium>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Feather name={"users"} size={20} color={Colors.text.inactive} />
                                <PoppinsBold style={{ marginLeft: 10, }} >Esther Howard</PoppinsBold>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <PoppinsBold style={{ marginLeft: 8, color: Colors.text.inactive }} >Motor Beat</PoppinsBold>
                                <PoppinsMedium style={{ marginLeft: 6, color: Colors.text.inactive }} >3X Tenor</PoppinsMedium>
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            right: 0,
                            top: 5,
                        }}>
                            <Feather name={"more-vertical"} size={20} color={Colors.text.inactive} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

// import React from "react";
// import { View } from "react-native";
// import { FlatGrid } from "react-native-super-grid";
// import { DefaultEbookCard } from "../../../components/Card/EbookCard";
// import { MainRoutes, RootStackScreenProps } from "../../../navigation/types";

// export default function Terdekat({ navigation, route }: RootStackScreenProps<MainRoutes.Home>): React.ReactElement {
//     return (
//         <View style={{ flex: 1 }}>
//             <FlatGrid
//                 data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
//                 itemDimension={120}
//                 renderItem={({ item, index }) => (
//                     <DefaultEbookCard
//                         mini
//                         key={index + Math.random()}
//                         imgSource={require("../../../../assets/images/book1.jpeg")}
//                         onPress={() => {
//                             navigation.navigate(MainRoutes.EbookDetail, {
//                                 id: index.toString()
//                             })
//                         }}
//                     />
//                 )}
//             />
//         </View>
//     )
// }
