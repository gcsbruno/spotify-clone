import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import App from './App'

const theme = {
    ...DefaultTheme,
    roudness: 2,
    colors: {
        ...DefaultTheme.colors,
        background: '#191414',
        primary: '#1ED760',
        secondary: '#fff',
        danger: '#ed1c24'
    },
};

export default function MainTheme() {
    return (
        <PaperProvider theme={theme}>
        <App/>
        </PaperProvider>
    )
}