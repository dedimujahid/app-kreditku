import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { ViewLainnya } from "../../components/StyleViewd";
import { MediumText, PoppinsBold, PoppinsMedium } from "../../components/StyledText";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../constants/Colors";
import { MainButton, AkunButton } from "../../components/StyledButton";
import { useReduxDispatch } from "../../redux";
import { setLogin } from "../../redux/src/LoginState";
import { FlatGrid } from "react-native-super-grid";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MainRoutes, RootStackScreenProps } from '../../navigation/types';
import { DefaultEbookCard } from "../../components/Card/EbookCard";
import { AutHttpCall } from '../../../src/api/CallApi';
import { EndpointApi } from '../../constants/Endpoints';
import { useEffect, useState } from 'react';

type RowProps = {
    hasBorder?: boolean,
    hasIcon?: boolean,
    icon?: React.ComponentProps<typeof FontAwesome5>["name"],
    title: string,
    onPress?: React.ComponentProps<typeof TouchableOpacity>["onPress"],
    isBold?: boolean,
}
const RowProfile = ({ hasBorder, hasIcon, icon, title, onPress, isBold }: RowProps): React.ReactElement => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderBottomWidth: hasBorder ? 0.6 : 0,
                borderColor: "gray",
                paddingHorizontal: 15,
                justifyContent: 'center',
                height: 50,
                width: "100%",
                marginBottom: 2,

            }}
            disabled={!onPress}
        >
            {
                hasIcon ?
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name={icon as string} size={22} color={Colors.text.dark} />
                        {
                            isBold
                                ?
                                <PoppinsMedium style={{ marginLeft: 15 }}>{title}</PoppinsMedium>
                                :
                                <PoppinsMedium style={{ marginLeft: 15 }}>{title}</PoppinsMedium>
                        }
                        {/*<MediumText style={{marginLeft: 15}}>{title}</MediumText>*/}
                    </View>
                    :
                    isBold
                        ?
                        <PoppinsMedium>{title}</PoppinsMedium>
                        :
                        <PoppinsMedium>{title}</PoppinsMedium>
                // <MediumText>{title}</MediumText>
            }
        </TouchableOpacity>
    )
}
export default function HomeAkun(navigation): React.ReactElement {

    const dispatch = useReduxDispatch()
    const handleKeluar = () => {
        dispatch(setLogin(false))
    }
    const [loading, setLoading] = useState(true);
    const [dataProfil, setDataProfil] = useState([]);

    // const getProfil = async () => {
    //     try {
    //         const { data } = await AutHttpCall.get(EndpointApi.kredit);
    //         setDataProfil(data.data);
    //         setLoading(false);
    //         console.log(data.data)
    //     } catch (e) {
    //         console.log(e);
    //         // console.log('errorType', typeof e);
    //         //   toast.show(PesanError(e), { type: 'warning' });
    //         //     setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     getProfil();
    // }, []);

    return (

        <ScrollView>
            <View
                style={{
                    width: "100%",
                    backgroundColor: "#01AEEB",
                    marginTop: 25,

                }}
            >
                <TouchableOpacity
                    style={{
                        marginLeft: 15,
                        marginTop: 10,
                        flexDirection: 'row',
                    }}
                    onPress={() => {

                        navigation.goBack();

                    }}>
                    <MaterialIcons name={'arrow-back'} size={32} color={'black'} />
                    <PoppinsMedium style={{ marginLeft: 10, marginTop: 6 }}>Kembali</PoppinsMedium>
                </TouchableOpacity>

                <View
                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                    }}
                >
                    <Image source={require("../../../assets/images/profile.jpeg")}
                        style={{ width: 120, height: 120, borderRadius: 80 }} />


                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        {/* <PoppinsBold style={{ fontSize: 24, textAlign: 'center', color: '#fff' }}>{dataProfil?.name}</PoppinsBold> */}
                        <PoppinsBold style={{ fontSize: 24, textAlign: 'center', color: '#fff' }}>dedi</PoppinsBold>
                        <PoppinsMedium style={{ textAlign: 'center' }}>08234517689</PoppinsMedium>
                        <PoppinsMedium style={{ textAlign: 'center' }}>jane@gmail.com</PoppinsMedium>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "white", width: "100%", }}>
                <RowProfile title={"Laporan Kredit Bulan ini"} isBold hasBorder />
                {/* <FlatGrid
                    data={[0, 1, 2, 3, 4]}
                    itemDimension={100}
                    renderItem={({ item, index }) => (
                        <View style={{
                            width: "100%", marginLeft: 10,
                            backgroundColor: Colors.bg.bluemuda,
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 100,
                            borderRadius: 5,
                            marginVertical: 10,
                        }}>
                            <MediumText style={{ marginLeft: 10, fontSize: 24 }} >4</MediumText>
                            <MediumText style={{ marginLeft: 15, fontSize: 12 }}>Nasabah Penyetoran </MediumText>
                        </View>
                    )}
                /> */}
            </View>

            <View style={{ backgroundColor: "white", width: "100%", }}>
                <RowProfile title={"Profil"} isBold hasBorder />
                <RowProfile title={"Edit Profile"} hasBorder hasIcon icon={"user-edit"} onPress={() => { }} />
                <RowProfile title={"Ubah Password"} hasIcon icon={"lock"} onPress={() => { }} />
            </View>
            <View style={{ backgroundColor: "white", width: "100%", }}>
                <RowProfile title={"Tentang"} isBold hasBorder />
                <RowProfile title={"Syarat dan Ketentuan"} hasBorder hasIcon icon={"file-alt"} onPress={() => { }} />
                <RowProfile title={"Kebijakan Privasi"} hasIcon icon={"user-shield"} onPress={() => { }} />
            </View>
            <View style={{ backgroundColor: "white", width: "100%", }}>
                <RowProfile title={"Langganan dan Pembelian"} isBold hasBorder />
                <RowProfile title={"Paket Langganan"} hasBorder hasIcon icon={"file-alt"} onPress={() => { }} />
                <RowProfile title={"Paket Aktif"} hasBorder hasIcon icon={"calendar-check"} onPress={() => { }} />
                <RowProfile title={"Riwayat Transaksi"} hasIcon icon={"file-alt"} onPress={() => { }} />
                <View style={{ marginTop: 40, paddingHorizontal: 10, marginBottom: 10 }}>
                    <MainButton title={"KELUAR"} onPress={handleKeluar} />
                </View>
            </View>



        </ScrollView>

    )
}
