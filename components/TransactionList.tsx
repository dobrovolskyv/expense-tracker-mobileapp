import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { TransactionItemProps, TransactionListType } from '@/types'
import { verticalScale } from '@/utils/styling'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import Typograph from './Typograph'
import { FlashList } from "@shopify/flash-list"
import Loading from './Loading'
import { expenseCategories } from '@/constants/data'
import Animated, { FadeInDown } from 'react-native-reanimated'

const TransactionList = ({
    data,
    title,
    loading,
    emptyListMessage
}: TransactionListType) => {

    const handleClick = () => {

    }
    return (
        <View style={styles.container}>
            {
                title && (
                    <Typograph size={20} fontWeight={"500"}>{title}</Typograph>
                )
            }

            <View style={styles.list}>
                <FlashList
                    data={data}
                    renderItem={({ item, index }) => (<TransactionItem item={item} index={index} handleClick={handleClick} />)}
                    estimatedItemSize={60}
                />
            </View>

            {
                !loading && data.length == 0 && (
                    <Typograph
                        size={15}
                        color={colors.neutral400}
                        style={{ textAlign: 'center', marginTop: spacingY._15 }}
                    >
                        {emptyListMessage}
                    </Typograph>
                )
            }

            {
                loading && (
                    <View style={{ top: verticalScale(100) }}>
                        <Loading />
                    </View>
                )
            }
        </View>
    )
}

export default TransactionList

const TransactionItem = ({
    item,
    index,
    handleClick
}: TransactionItemProps) => {

    let category = expenseCategories['utilities']
    const IconComponent = category.icon

   
    return (
        <Animated.View entering={FadeInDown.delay(index * 80).springify().damping(14)}>
            <TouchableOpacity style={styles.row} onPress={()=>handleClick(item)}>
                <View style={[styles.icon, { backgroundColor: category.bgColor }]}>
                    {IconComponent && (
                        <IconComponent
                            size={verticalScale(25)}
                            color={colors.white}
                        />
                    )}
                </View>

                <View style={styles.categoryDate}>
                    <Typograph size={17}>{category.label}</Typograph>
                    <Typograph size={12} color={colors.neutral400} textProps={{ numberOfLines: 1 }}>paid wifi bill</Typograph>
                </View>

                <View style={styles.amountDate}>
                    <Typograph fontWeight={"500"} color={colors.rose}>- $23</Typograph>
                    <Typograph size={13} color={colors.neutral400}>23 янв</Typograph>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: spacingY._17
    },
    list: {
        minHeight: 3
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacingX._12,
        marginBottom: spacingY._12,

        backgroundColor: colors.neutral800,
        padding: spacingY._10,
        paddingHorizontal: spacingY._15,
        borderRadius: radius._17
    },
    icon: {
        height: verticalScale(44),
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: radius._12,
        borderCurve: "continuous"
    },
    categoryDate: {
        flex: 1,
        gap: 2.5
    },
    amountDate: {
        alignItems: "flex-end",
        gap: 3
    }
})