import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const TransactionModal = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>TransactionModal</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TransactionModal

const styles = StyleSheet.create({})