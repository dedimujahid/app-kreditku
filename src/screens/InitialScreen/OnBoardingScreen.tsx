import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { MediumText } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import { BorderedButton, MainButton } from "../../components/StyledButton";
import { MainRoutes, RootStackScreenProps } from "../../navigation/types";
let windowWidth = Dimensions.get('window').width;

function useSwipe(onSwipeLeft?: any, onSwipeRight?: any, rangeOffset = 4) {

    let firstTouch = 0

    function onTouchStart(e: any) {
        firstTouch = e.nativeEvent.pageX
    }

    function onTouchEnd(e: any) {

        // get touch position and screen size
        const positionX = e.nativeEvent.pageX

        const range = windowWidth / rangeOffset

        // check if position is growing positively and has reached specified range
        if (positionX - firstTouch > range) {
            onSwipeRight && onSwipeRight()
        }
        // check if position is growing negatively and has reached specified range
        else if (firstTouch - positionX > range) {
            onSwipeLeft && onSwipeLeft()
        }
    }

    return { onTouchStart, onTouchEnd };
}

const onBoardingDta = [
    {
        title: "Tim yang Profesional dan Kreatif",
        description: "Quantum Book memiliki penulis dan juga editor yang sangat berdedikasi di bidangnya. Menerbitkan buku yang bermanfaat dan memiliki standar tinggi.",
    },
    {
        title: "Quality Control Terjamin",
        description: "Quantum Book memberikan jaminan garansi terbaik terhadap produk buku yang diterbitkan karena telah melewati Quality Control yang sangat ketat."

    },
    {
        title: "Pelayanan Terbaik Kepada Konsumen",
        description: "Quantum Book menerapkan sistem pelayanan profesionalitas dan kerjasama tim yang tinggi untuk memberikan pelayanan terbaik kepada konsumen. "
    }
]
type dotType = {
    length: number;
    active: number;
}

export function DotActive(props: dotType) {
    const { length, active } = props
    let array = []
    for (let i = 0; i < length; i++) {
        array.push(i)
    }
    return (
        <View style={{ flexDirection: "row" }}>
            {
                array.map((item, index) => {
                    return (
                        <View key={index} style={active == index ? styles.dotStyleActive : styles.dotStyleInActive} />
                    )
                })
            }
        </View>
    )
}

type OnBoardingScreenProps = {
    navigation: RootStackScreenProps<MainRoutes.onboarding>
}

export default function OnBoardingScreen({ navigation }: RootStackScreenProps<MainRoutes.onboarding>): React.ReactElement {
    const [onBoardingData, setOnBoardingData] = useState(onBoardingDta[0]);
    const [active, setActive] = useState(0);
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 4)
    function onSwipeLeft() {
        handleNext()
    }

    function onSwipeRight() {
        handlePrev()
    }
    const handleNext = () => {
        if (active < onBoardingDta.length - 1) {
            setActive(active + 1)
            setOnBoardingData(onBoardingDta[active + 1])
        } else {
            // navigation.navigation.navigate(MainRoutes.)
        }
    }

    const handlePrev = () => {
        if (active > 0) {
            setActive(active - 1)
            setOnBoardingData(onBoardingDta[active - 1])
        } else {
            return 0;
        }
    }
    useEffect(() => {
        StatusBar.setHidden(true)
    }, []);

    return (
        <View style={{ flex: 1 }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image source={require('../../../assets/images/bginit.png')}
                style={{ resizeMode: "cover", width: "100%", height: 300 }} />
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    height: "60%",
                }}

                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <View style={{ width: "100%", height: "67%", alignItems: 'center' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} >
                    <View style={{ height: "80%", width: "100%", alignItems: 'center' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} >
                        <MediumText
                            style={{ color: Colors.bg.main, marginBottom: 20 }}>{onBoardingData.title}</MediumText>
                        <MediumText style={{ textAlign: 'center' }}>{onBoardingData.description}</MediumText>

                    </View>
                    <View style={{ marginTop: 0 }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} >
                        <DotActive length={onBoardingDta.length} active={active} />
                    </View>

                </View>
                <View style={{ width: "100%", height: "28%", justifyContent: "space-between" }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <MainButton title={"BUAT AKUN"} onPress={() => navigation.navigate(MainRoutes.signup)} />
                    <BorderedButton title={"MASUK"} color={Colors.bg.main} borderWidth={2} onPress={() => {
                        navigation.navigate(MainRoutes.login)
                    }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dotStyleActive: {
        borderRadius: 40,
        backgroundColor: Colors.bg.main,
        width: 9,
        height: 9,
        margin: 3
    },
    dotStyleInActive: {
        borderRadius: 40,
        backgroundColor: Colors.bg.inactive,
        width: 9,
        height: 9,
        margin: 3
    },
})
