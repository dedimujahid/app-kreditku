import React, { useEffect, useState } from 'react';
import { StyledTextInput } from '../../components/StyledTextInput';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MediumText, PoppinsMedium } from '../../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MainRoutes, RootStackScreenProps } from '../../navigation/types';

export default function Notifications({
    navigation,
}: RootStackScreenProps<MainRoutes.Notificasion>): React.ReactElement {

    return (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <ScrollView>
                <View
                    style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: "row", }}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                            }
                        }}>
                        <MaterialIcons name={'chevron-left'} size={27} />
                    </TouchableOpacity>
                    <PoppinsMedium
                        style={{ fontSize: 24, textAlign: 'center', }}>
                        {' '}
                        Pemberitahuan
                    </PoppinsMedium>
                </View>
            </ScrollView>
        </View>
    );
};

