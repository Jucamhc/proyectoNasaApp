import { FC } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { PostImage as PostImageType, RootStackParams } from '../../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Details'
>

const PostImage: FC<PostImageType> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const handleViewPress = () => {
    navigate('Details', { date, title, url, explanation })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.button}>
        <Button title="View" onPress={handleViewPress}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,225)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
  button: {
    alignItems: 'flex-end',
  },
})

export default PostImage
