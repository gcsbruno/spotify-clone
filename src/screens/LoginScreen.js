import React from 'react'
import theme from '../../theme'
import { View, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { Card, Text, } from 'react-native-paper'

export const LoginScreen = () => {
    return (
        <SafeAreaView style={Styles.content}>
            <View style={Styles.screen}>
                <Image source={require('../../assets/spotify.png')} style={Styles.imagem} />
                <Card.Content>
                    <Text style={Styles.title}> Faça Login para continuar. </Text>

                    <TextInput
                        style={Styles.inputLogin}
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        autoCapitalize='none'
                        placeholderStyle={{ margin: 2 }}
                    />
                    <TextInput
                        style={Styles.inputSenha}
                        secureTextEntry={true}
                        placeholder="Senha"
                        underlineColorAndroid="transparent"
                        placeholderTextColor='#fff'
                        autoCapitalize='none'
                    />
                    <TouchableOpacity
                        style={Styles.button}
                        uppercase={false}
                        mode='contained'

                    >
                    </TouchableOpacity>

                    <Text style={Styles.subtitle}>Não tem uma conta?</Text>
                    <Text style={Styles.subtitleUnder}>Inscreva-se</Text>
                </Card.Content>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    content: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#191414"
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191414'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8
    },
    subtitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
    },
    subtitleUnder: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    inputLogin: {
        marginTop: 20,
        height: 40,
        backgroundColor: 'transparent',
        borderColor: '#1ed760',
        borderWidth: 1,
        borderRadius: 10
    },
    inputSenha: {
        backgroundColor: 'transparent',
        marginTop: 20,
        height: 40,
        borderColor: '#1eD760',
        borderWidth: 1,
        borderRadius: 10
    },
    button: {
        alignSelf: 'center',
        width: 156,
        height: 38,
        margin: 40,
        borderRadius: 8,
        backgroundColor: '#1ED760'
    }
})