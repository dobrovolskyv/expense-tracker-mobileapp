import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typograph from '@/components/Typograph'
import { verticalScale } from '@/utils/styling'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const welcome = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                //login button,image
                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Typograph fontWeight={500}>Вход</Typograph>
                    </TouchableOpacity>

                    <Animated.Image
                        entering={FadeIn.duration(1000)}
                        source={require('../../assets/images/welcome.png')}
                        style={styles.welcomeImage}
                        resizeMode="contain"
                    />
                </View>

                //footer

                <View style={styles.footer}>
                    <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)} style={{ alignItems: 'center' }}>
                        <Typograph size={30} fontWeight={"800"}>Всегда контролируй</Typograph>
                        <Typograph size={30} fontWeight={"800"}>свои финансы</Typograph>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(1000).delay(100).springify().damping(12)} style={{ alignItems: 'center' }}>
                        <Typograph size={17} color={colors.textLight}>Всегда контролируй</Typograph>
                        <Typograph size={17} color={colors.textLight}>свои финансы</Typograph>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(1000).delay(200).springify().damping(12)} style={styles.buttonContainer}>
                        <Button>
                            <Typograph size={22} color={colors.neutral900} fontWeight={"600"}>Начать</Typograph>
                        </Button>
                    </Animated.View>
                </View>

            </View>
        </ScreenWrapper>
    )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: spacingY._7
    },
    welcomeImage: {
        width: '100%',
        height: verticalScale(300),
        alignSelf: 'center',
        marginTop: verticalScale(100)
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: spacingX._20
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: 'center',
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: spacingX._25
    }
})