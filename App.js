import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'

import Item from './Item'
import styles from './styles'



const items = [
  { id: 1, name: 'Lebron XVI Low', price: 1200 },
  { id: 2, name: 'Lebron XVI Low', price: 1080 },
  { id: 3, name: 'Lebron XVI Low', price: 699 },
  { id: 4, name: 'Nike', price: 1200 },
  { id: 5, name: 'Nike', price: 1200 },
]
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      selected: {},
      count: 0,
    }
  }

  onPressAdd = (item) => {
    let { id, price } = item

    this.setState(prevState => {
      let selected = Object.assign({}, prevState.selected)
      selected[id] = (selected[id] || 0) + 1
      return { selected }
    })

    let total = this.state.total + price
    this.setState({
      total: total
    })
  }

  onPressMinus = (item) => {
    let { id, price } = item

    this.setState(prevState => {
      let selected = Object.assign({}, prevState.selected)
      selected[id] = selected[id] - 1
      return { selected }
    })

    let total = this.state.total - price
    this.setState({
      total: total
    })
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView
          contentContainerStyle={styles.container}
        >
          {items.map(item => {
            return (
              <Item
                key={item.id}
                item={item}
                count={this.state.selected[item.id] || 0}
                onPressAdd={() => this.onPressAdd(item)}
                onPressMinus={() => this.onPressMinus(item)}
              />
            )
          }
          )}
        </ScrollView>

        <View style={{ backgroundColor: '#F3F3F3' }}>
          <View style={styles.totalContainer}>
            <Text style={styles.name}>Total amount:</Text>
            <Text style={styles.price}>${this.state.total}</Text>
          </View>

          <TouchableOpacity
            style={styles.payButton}
            onPress={() => 
              this.setState({
                selected: {},
                total: 0,
              })
            }
          >
            <Text style={[styles.name, { color: 'white' }]}>Pay For</Text>
          </TouchableOpacity>
        </View>

      </React.Fragment>
    )
  }
}


export default App