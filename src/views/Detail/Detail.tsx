import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../types'
import Header from '../../components/Header/Header'

const Detail = () => {
  const {
    params: { date, explanation, title, url },
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Details'>['route']>()

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image}></Image>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationOfContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingHorizontal: 15,
  },
  content: {
    backgroundColor: '#2C449D',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 32,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanationOfContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 16
  },
})

export default Detail
