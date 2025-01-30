import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typograph from './Typograph'
import { WalletType } from '@/types'
import { Router } from 'expo-router'
import { verticalScale } from '@/utils/styling'
import { colors, radius, spacingX } from '@/constants/theme'
import { Image } from 'expo-image'

import AntDesign from '@expo/vector-icons/AntDesign';
import Animated, { FadeIn } from 'react-native-reanimated'

const WalletItem = ({
    item,
    index,
    router
}: {
    item: WalletType,
    index: number,
    router: Router
}) => {

    const openWallet = () => {
        router.push({
            pathname: "/(modal)/walletModal",
            params: {
                id: item?.id,
                name: item?.name,
                image: item?.image
            }
        })
    }
    return (
        <Animated.View entering={FadeIn.duration(index * 100).delay(index * 50).damping(13)}>
            <TouchableOpacity style={styles.container} onPress={openWallet}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{ flex: 1 }}
                        source={item?.image}
                        contentFit="cover"
                        transition={100}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Typograph size={16}>{item?.name}</Typograph>
                    <Typograph size={14} color={colors.neutral400}>${item?.amount}</Typograph>
                </View>

                <AntDesign name="arrowright" size={verticalScale(20)} color="white" />
            </TouchableOpacity>

        </Animated.View>
    )
}

export default WalletItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(17)
    },
    imageContainer: {
        height: verticalScale(45),
        width: verticalScale(45),
        borderWidth: 1,
        borderColor: colors.neutral600,
        borderRadius: radius._12,
        borderCurve: 'continuous',
        overflow: 'hidden',
    },
    nameContainer: {
        flex: 1,
        gap: 2,
        marginLeft: spacingX._10
    }
})