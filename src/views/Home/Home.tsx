import { useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import Header from '../../components/Header/Header'
import fetchApi from '../../utils/fetch'
import TodayImage from '../../components/TodayImage/TodayImage'
import { PostImage } from '../../types'
import { format, sub } from 'date-fns'
import LastDaysImages from '../../components/LastDaysImages/LastDaysImages'

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImage>({})
  const [lasFiveDaysImagefa, setLasFiveDaysImagefa] = useState<PostImage>([])

  useEffect(() => {
    const loadingImage = async () => {
      try {
        const infoTodayApi = await fetchApi()
        setTodayImage(infoTodayApi)
        //console.log(infoTodayApi)
      } catch (error) {
        console.error(error)
        setTodayImage({})
      }
    }

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date()
        const todayDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`
        )

        setLasFiveDaysImagefa(lastFiveDaysImagesResponse)
      } catch (error) {
        console.error(error)
      }
    }

    loadingImage().catch(null)
    loadLast5DaysImages().catch(null)
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <LastDaysImages postImage={lasFiveDaysImagefa} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingHorizontal: 15,
    
  },
})
export default Home
