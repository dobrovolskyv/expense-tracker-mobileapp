import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import Typograph from './Typograph'

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


const HomeCard = () => {
    return (
        <ImageBackground
            source={require("../assets/images/card.png")}
            resizeMode='stretch'
            style={styles.bgImage}
        >
            <View style={styles.container}>
                <View>
                    <View style={styles.totalBalanceRow}>
                        <Typograph color={colors.neutral800} size={17} fontWeight={"700"}>
                            Общий баланс
                        </Typograph>
                        <Entypo name="dots-three-horizontal" size={verticalScale(23)} color={colors.black} />
                    </View>
                    <Typograph color={colors.black} size={30} fontWeight={"700"}>$243,33</Typograph>
                </View>

                {/* total expanse */}
                <View style={styles.stats}>
                    <View style={{ gap: verticalScale(5) }}>
                        <View style={styles.incomeExpense}>
                            <View style={styles.statsIcon}>
                                <AntDesign name="arrowdown" size={verticalScale(15)} color={colors.black} />
                            </View>
                            <Typograph size={16} color={colors.neutral700} fontWeight={"600"}>Доходы</Typograph>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Typograph size={17} color={colors.green} fontWeight={"600"}>2342</Typograph>
                        </View>
                    </View>

                    <View style={{ gap: verticalScale(5) }}>
                        <View style={styles.incomeExpense}>
                            <View style={styles.statsIcon}>
                                <AntDesign name="arrowup" size={verticalScale(15)} color={colors.black} />
                            </View>
                            <Typograph size={16} color={colors.neutral700} fontWeight={"600"}>Расходы</Typograph>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Typograph size={17} color={colors.rose} fontWeight={"600"}>28942</Typograph>
                        </View>
                    </View>


                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    bgImage: {
        height: scale(210),
        width: "100%",
    },
    container: {
        padding: spacingX._20,
        paddingHorizontal: scale(23),
        height: "87%",
        width: '100%',
        justifyContent: "space-between"
    },
    totalBalanceRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: spacingY._5
    },
    stats: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    statsIcon: {
        backgroundColor: colors.neutral350,
        padding: spacingY._5,
        borderRadius: 50
    },
    incomeExpense: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacingY._7
    }
})