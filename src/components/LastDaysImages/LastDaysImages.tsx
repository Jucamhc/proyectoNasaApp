import { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PostImage as PostImageTypes } from '../../types/index'
import PostImage from '../PostImage/PostImage'

const LastDaysImages: FC<{ postImage?: PostImageTypes[] }> = ({
  postImage,
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last five dayss</Text>
      <ScrollView>
        {postImage?.map((postImage) => (
          <PostImage {...postImage} key={`post-image-${postImage.title}`} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginVertical: 8 },
  content: { paddingHorizontal: 24 },
  title: { color: '#fff', fontSize: 16, margin: 10 },
})

export default LastDaysImages
