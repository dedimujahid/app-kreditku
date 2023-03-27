// import { ActivityIndicator, View } from 'react-native';
// import { ViewAuth } from '../../components/StyleViewd';
// import { MediumText } from '../../components/StyledText';
// import { StyledTextInput } from '../../components/StyledTextInput';
// import { useState } from 'react';
// import { BorderedButton, MainButton } from '../../components/StyledButton';
// import { MainRoutes, RootStackScreenProps } from '../../navigation/types';
// import React from 'react';
// import { useReduxDispatch } from '../../redux';
// import { setLogin } from '../../redux/src/LoginState';
// import { PublicHttpCall } from '../../api/CallApi';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { EndpointApi } from '../../constants/Endpoints';
// import { PesanError } from '../../helper/TransalateError';
// import { useToast } from 'react-native-toast-notifications';

// export default function SignInScreen({
//   navigation,
// }: RootStackScreenProps<MainRoutes.login>): React.ReactElement {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailFocus, setEmailFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const dispatch = useReduxDispatch();

//   const handleLogin = async () => {
//     try {
//       setIsLoading(true);
//       const { data } = await PublicHttpCall.post(EndpointApi.auth.login, {
//         email,
//         password,
//       });
//       console.log(data)
//       if (data.status === 'success') {
//         const response = JSON.stringify(data);

//         await AsyncStorage.setItem('loginData', response);
//         dispatch(setLogin(true));
//         navigation.reset({
//           index: 0,
//           routes: [{ name: MainRoutes.Home }],
//         });
//       }
//     } catch (e) {
//       toast.show(PesanError(e), { type: 'warning' });
//       setIsLoading(false);
//       return;
//     }
//   };

//   return (
//     <ViewAuth>
//       <MediumText style={{ fontSize: 30, marginTop: 20, marginBottom: 10 }}>
//         Masuk
//       </MediumText>
//       <View style={{ width: '100%', marginTop: 30 }}>
//         <StyledTextInput
//           placeholder="Email"
//           is_active={emailFocus}
//           onChangeText={value => setEmail(value)}
//           onFocus={() => setEmailFocus(true)}
//           onBlur={() => setEmailFocus(false)}
//           keyboardType={'email-address'}
//         />
//         <View style={{ height: 5 }} />
//         <StyledTextInput
//           placeholder="Kata Sandi"
//           is_active={passwordFocus}
//           onChangeText={value => setPassword(value)}
//           onFocus={() => setPasswordFocus(true)}
//           onBlur={() => setPasswordFocus(false)}
//           secureTextEntry={true}
//         />
//         <View style={{ marginTop: 10 }}>
//           {isLoading ? (
//             <ActivityIndicator size="large" />
//           ) : (
//             <MainButton title={'MASUK'} onPress={handleLogin} />
//           )}
//           <BorderedButton
//             title={'LUPA PASSWORD'}
//             color={'black'}
//             borderWidth={1}
//             onPress={() => {
//               navigation.navigate(MainRoutes.forgotPassword, { email });
//             }}
//           />
//         </View>
//       </View>
//     </ViewAuth>
//   );
// }
