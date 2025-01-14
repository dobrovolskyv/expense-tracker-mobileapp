import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'
import Typograph from '@/components/Typograph'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()


    const handleSubmit = async () => {
        if(!emailRef.current || !passwordRef.current) {
            Alert.alert('Заполните все поля')
            return
        }

        console.log("email",emailRef.current);
        console.log("password",passwordRef.current);
        console.log("login success");
        
        
    }
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton />

                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typograph size={30} fontWeight={"800"}>
                        Привет,
                    </Typograph>
                    <Typograph size={30} fontWeight={"800"}>
                        С возвращением!
                    </Typograph>

                    {/* форма */}
                    <View style={styles.form}>
                        <Typograph size={16} color={colors.textLighter}>Зайди сейчас, чтобы отслеживать свои финансы</Typograph>

                        <Input
                            placeholder='Введите ваш email'
                            onChangeText={(value) => (emailRef.current = value)}
                        // icon={<Icons.At size={verticalScale(20)} color={colors.neutral300} weight='fill'/>}
                        />

                        <Input
                            placeholder='Введите ваш пароль'
                            secureTextEntry
                            onChangeText={(value) => (passwordRef.current = value)}
                        // icon={<Icons.At size={verticalScale(20)} color={colors.neutral300} weight='fill'/>}
                        />

                        <Typograph size={14} color={colors.text} style={{ alignSelf: 'flex-end' }}>
                            Забылим пароль?
                        </Typograph>

                        <Button onPress={handleSubmit} loading={isLoading}>
                            <Typograph fontWeight={'700'} color={colors.black} size={21}>Войти</Typograph>
                        </Button>
                    </View>



                    {/* footer */}
                    <View style={styles.footer}>
                        <Typograph size={15}>У вас нет аккаутна?</Typograph>
                        <Pressable onPress={() => router.navigate('/(auth)/register')}>
                            <Typograph size={15} fontWeight={'700'} color={colors.primary}>Регистрация</Typograph>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20
    },
    form: {
        gap: spacingY._20
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: "500",
        color: colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    }
})