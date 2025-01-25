import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typograph from './Typograph'
import { HeaderProps } from '@/types'

const Header = ({ title = '', style, leftIcon }: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      {title && <Typograph
        size={22}
        fontWeight={"600"}
        style={{
          textAlign: 'center',
          width: leftIcon ? '80%' : '100%'
        }}
      >{title}</Typograph>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftIcon: {
    alignSelf: "flex-start"
  }
})
