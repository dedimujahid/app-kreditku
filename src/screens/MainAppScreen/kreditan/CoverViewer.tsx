import React from "react";
import { TouchableOpacity, View } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Colors } from "../../../constants/Colors";
import { MediumText } from "../../../components/StyledText";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { HeaderHeightWithStatusBar } from "../../../constants/Config";
import { MainRoutes, RootStackScreenProps } from "../../../navigation/types";

export default function CoverImageViewerScreen({
    navigation,
    route
}: RootStackScreenProps<MainRoutes.EbookDetailShowCover>): React.ReactElement {
    const images = [
        {
            url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
        }, {
            url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
        },
    ]
    return (
        <View style={{
            backgroundColor: "black",
            flex: 1,
        }}>

            <ImageViewer imageUrls={images} />
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
                style={{
                    position: 'absolute',
                    marginTop: HeaderHeightWithStatusBar - 30,
                    left: 15
                }}>
                <FontAwesome name={"close"} color={"white"} size={27} />
            </TouchableOpacity>
            <View
                style={{
                    width: "100%",
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: "90%",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: Colors.bg.main,
                        height: 50,
                        borderRadius: 25
                    }}
                >
                    <MediumText style={{ color: "white" }}>Tambahkan ke wishlist</MediumText>
                </TouchableOpacity>
            </View>
        </View>
    )
}