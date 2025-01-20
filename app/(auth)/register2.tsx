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

const Register = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()


    const handleSubmit = async () => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert('Заполните все поля, чтобы зарегестрироваться')
            return
        }

       


    }
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton />

                <View style={{ gap: 5, marginTop: spacingY._20 }}>
                    <Typograph size={30} fontWeight={"800"}>
                        Давайте
                    </Typograph>
                    <Typograph size={30} fontWeight={"800"}>
                        Начнем!
                    </Typograph>

                    {/* форма */}
                    <View style={styles.form}>
                        <Typograph size={16} color={colors.textLighter}>Создайте аккаунт, чтобы отслеживать свои финансы</Typograph>

                        <Input
                            placeholder='Введите ваше имя'
                            onChangeText={(value) => (nameRef.current = value)}
                        // icon={<Icons.At size={verticalScale(20)} color={colors.neutral300} weight='fill'/>}
                        />
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


                        <Button onPress={handleSubmit} loading={isLoading}>
                            <Typograph fontWeight={'700'} color={colors.black} size={21}>Зарегестрироваться</Typograph>
                        </Button>
                    </View>



                    {/* footer */}
                    <View style={styles.footer}>
                        <Typograph size={15}>У вас уже есть аккаунт?</Typograph>
                        <Pressable onPress={() => router.push('/(auth)/login')}>
                            <Typograph size={15} fontWeight={'700'} color={colors.primary}>Войти в аккаунт</Typograph>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20
    },
    form: {
        gap: spacingY._30
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
        gap: 8
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    }
})