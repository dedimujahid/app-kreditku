import { Text, TextProps } from './Themed';
import React from 'react';

import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
  });
}

loadFonts();

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function MediumText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-Regular' }]} />;
}

export function PoppinsLight(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-Light' }]} />;
}

export function PoppinsRegular(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-Regular' }]} />;
}

export function PoppinsMedium(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-Medium' }]} />;
}

export function PoppinsBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-Bold' }]} />;
}

export function PoppinsSemiBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-SemiBold' }]} />;
}

export function PoppinsExtraBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins-ExtraBold' }]} />;
}