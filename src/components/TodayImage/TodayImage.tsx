import { FC } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { PostImage, RootStackParams } from '../../types/index'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Details'
>

const TodayImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const handleViewPress = () => {
    navigate('Details', { date, title, url, explanation })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.button}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    /* height: '40%', */
  },
  todayInfo: {},
  image: {
    width: '99%',
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    alignItems: 'flex-end',
  },
})

export default TodayImage
