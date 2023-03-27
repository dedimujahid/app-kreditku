import { SafeAreaProvider } from 'react-native-safe-area-context';

import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from 'react-native';
import React from 'react';

export default function App(): React.ReactElement {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar translucent hidden />
        </SafeAreaProvider>

      </PersistGate>

    </Provider>
  );
}
