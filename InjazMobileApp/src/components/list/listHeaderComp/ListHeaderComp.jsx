import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ListHeaderComp = ({titleCars,titleViewAll}) => {
  return (
    
   <View>
      <View style={styles.titleContainer}>
    <Text style={styles.titlePopularCars}>{titleCars}</Text>
    <Text style={styles.titleViewAll}>{titleViewAll}</Text>

   </View>
  </View>
  )
}

export default ListHeaderComp