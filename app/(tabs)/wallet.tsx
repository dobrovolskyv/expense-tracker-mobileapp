import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Typograph from '@/components/Typograph'

import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router'
import { useAuth } from '@/contexts/authContext'
import useFetchData from '@/hooks/useFetchData'
import { WalletType } from '@/types'
import { orderBy, where } from 'firebase/firestore'
import Loading from '@/components/Loading'

import WalletItem from '@/components/WalletItem'

const Wallet = () => {
  const router = useRouter()
  const { user } = useAuth()

  const { data: wallets, error, loading } = useFetchData<WalletType>("wallets", [
    where("uid", "==", user?.uid),
    orderBy("created", "desc")
  ])

  const getTotalBalance = () => {
    return 2394
  }
  return (
    <ScreenWrapper style={{ backgroundColor: colors.black }}>
      <View style={styles.container}>
        {/* balance */}
        <View style={styles.balanceView}>
          <View style={{ alignItems: 'center' }}>
            <Typograph size={45} fontWeight={"500"}> ${getTotalBalance().toFixed(2)}</Typograph>
            <Typograph size={16} color={colors.neutral300}>Общий баланс</Typograph>
          </View>
        </View>

        {/* wallets */}
        <View style={styles.wallets}>
          <View style={styles.flexRow}>
            <Typograph size={20} fontWeight={"500"}>Мои кошелки</Typograph>
            <TouchableOpacity onPress={() => router.push('/(modal)/walletModal')}>
              <AntDesign name="pluscircle" size={verticalScale(33)} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* wallets list */}
          {loading && <Loading />}
          <FlatList
            data={wallets}
            renderItem={({ item, index }) => {
              return <WalletItem item={item} index={index} router={router} />
            }}
            contentContainerStyle={styles.lifeStyle}
          />

        </View>

      </View>
    </ScreenWrapper>
  )
}

export default Wallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  balanceView: {
    height: verticalScale(160),
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacingY._10
  },
  wallets: {
    flex: 1,
    backgroundColor: colors.neutral900,
    borderTopRightRadius: radius._30,

    borderTopLeftRadius: radius._30,
    padding: spacingX._20,
    paddingTop: spacingX._25
  },
  lifeStyle: {
    paddingVertical: spacingY._25,
    paddingTop: spacingY._15
  }
})

