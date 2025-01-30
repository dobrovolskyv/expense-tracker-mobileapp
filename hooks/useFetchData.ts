import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, QueryConstraint } from 'firebase/firestore'
import { firestore } from '@/config/firebase'

const useFetchData = <T>(
    collectionName: string,
    constraints: QueryConstraint[] = []
) => {

    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      if(!collectionName) return;
      const collectionRef = collection(firestore, collectionName)
      const q = query(collectionRef, ...constraints)

      const unsub = onSnapshot(q,(snapshot)=>{
        const fetchedData = snapshot.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc
            }
        }) as T[]
      })

      return ()=> unsub()
    }, [])
    

    return (
        <View>
        <Text>useFetchData </Text>
        </View>
    )
}

export default useFetchData

const styles = StyleSheet.create({})