import React, { useCallback, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useReduxSelector, useReduxDispatch } from '../../redux'
import { selectLogin } from '../../redux/src/Users'
import { MainRoutes, RootStackScreenProps } from '../../navigation/types'
import useInterval from '../../hooks/useInterval'

type AppCheckScreenProps = {
    navigation: RootStackScreenProps<MainRoutes.login>
}

const AppCheckScreen = ({ navigation }: AppCheckScreenProps): React.ReactElement => {

    const dispatch = useReduxDispatch()
    const [count, setCount] = useState(0)
    const isLoggedIn = useReduxSelector(selectLogin)

    const getRoute = useCallback(
        () => (isLoggedIn ? MainRoutes.Home : MainRoutes.onboarding),
        [isLoggedIn],
    )

    useInterval(() => {
        if (count < 200) {
            setCount(count + 1)
        }
        if (count >= 200) {
            setCount(0)
        }
    }, 10)


    useEffect(() => {
        let checkLoaded = setInterval(() => {
            
        }, 100)
    }, [navigation, getRoute])


    return (
        <View>
        </View>
    )
}


export default AppCheckScreen
