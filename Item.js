import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import styles from './styles'

const Item = ({ item, onPressAdd, onPressMinus, count}) => {
  const  { name, price, id } = item
  
  return (
    <View style={styles.itemContainer}>
      {/* Image Component */}
      <View style={styles.trapezoidItemImage} />
  
      {/* Price and Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.price}>
          ${price}
        </Text>
  
        <View style={styles.countContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressMinus}
            disabled={!count}
          >
            <Text>-</Text>
          </TouchableOpacity>
  
          <Text style={styles.price}>
            {count}
          </Text>
  
          <TouchableOpacity
            style={styles.button}
            onPress={onPressAdd}
          >
            <Text>+</Text>
          </TouchableOpacity>
  
        </View>
      </View>
    </View>
    )
}

export default Item