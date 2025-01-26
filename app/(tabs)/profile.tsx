import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { verticalScale } from '@/utils/styling'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import Header from '@/components/Header'

import AntDesign from '@expo/vector-icons/AntDesign';
import Typograph from '@/components/Typograph'
import { useAuth } from '@/contexts/authContext'

import { Image } from "expo-image"
import { getProfileImage } from '@/services/imageServices'
import { accountOptionType } from '@/types'
import Animated, { FadeIn } from 'react-native-reanimated'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useRouter } from 'expo-router'

const Profile = () => {
  const { user } = useAuth()
  const router = useRouter()


  const accountOptions: accountOptionType[] = [
    {
      title: "Редактировать",
      icon: <AntDesign name="edit" size={22} color="black" />,
      bgColor: "#6366f1",
      routeName: "/(modal)/profileModal"
    },
    {
      title: "Настройки",
      icon: <AntDesign name="setting" size={22} color="black" />,
      bgColor: "#059669",
      // routeName: "/(modal)/profileModal"
    },
    {
      title: "Пользовательское соглашение",
      icon: <AntDesign name="unlock" size={22} color="black" />,
      bgColor: colors.neutral600,
      // routeName: "/(modal)/profileModal"
    },
    {
      title: "Выход",
      icon: <AntDesign name="logout" size={22} color="black" />,
      bgColor: "#e11d48",
      // routeName: "/(modal)/profileModal"
    }
  ]

  const handleLogout = async () => {
    await signOut(auth)
  }

  const showLogoutAlert = () => {
    Alert.alert('Выход', 'Вы действительно хотите выйти?', [
      {
        text: 'Отмена',
        style: 'cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'Выйти',
        onPress: () => handleLogout(),
        style: 'destructive',
      }
    ])
  }

  const handlePress = (item: accountOptionType) => {
    if (item.title === "Выход") {
      showLogoutAlert()
    }

    if (item.routeName) router.push(item.routeName)
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title='Профиль'
          style={{ marginVertical: spacingY._10 }}
          leftIcon={<AntDesign name="arrowleft" size={24} color="black" />} />

        {/* userinfo */}
        <View style={styles.userInfo}>
          {/* avatar */}
          <View>
            {/* user image */}
            <Image source={getProfileImage(user?.image)}
              style={styles.avatar}
              contentFit='cover'
              transition={100} />
          </View>
          {/* email & name */}
          <View style={styles.nameContainer}>
            <Typograph size={24} fontWeight={"600"} color={colors.neutral100}>{user?.name}</Typograph>
            <Typograph size={15} color={colors.neutral400}>{user?.email}</Typograph>
          </View>
        </View>

        {/* account options */}
        <View style={styles.accountOptions}>
          {accountOptions.map((item, index) => {
            return (
              <Animated.View
                key={index.toString()}
                entering={FadeIn.duration(1000).delay(index * 50).springify().damping(14)}
                style={styles.listItem}>
                <TouchableOpacity style={styles.flexRow}
                  onPress={() => handlePress(item)}
                >
                  {/* icon */}
                  <View style={[
                    styles.listIcon,
                    { backgroundColor: item?.bgColor }
                  ]}>
                    {item.icon && item.icon}
                  </View>
                  <Typograph size={16} style={{ flex: 1 }} fontWeight={"500"}>
                    {item.title}
                  </Typograph>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </Animated.View>
            )
          }
          )}
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    gap: spacingY._15
  },
  avatarContainer: {
    position: 'relative',
    alignSelf: 'center'
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200,
    // overflow: 'hidden',
    // position: 'relative'
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 8,
    borderRadius: 50,
    backgroundColor: colors.neutral100,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: 5
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: 'center'
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.neutral500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius._15,
    borderCurve: 'continuous'
  },
  listItem: {
    marginBottom: verticalScale(17)
  },
  accountOptions: {
    marginTop: spacingY._35,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._10
  }
})