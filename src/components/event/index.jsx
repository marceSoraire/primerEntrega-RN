import { Text, TouchableOpacity } from 'react-native'

import Checkbox from 'expo-checkbox';
import { styles } from './styles'

const Events = ({ item, onPressHandler, onToggleCompleted }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPressHandler(item.id)}>
      <Checkbox 
        style={styles.checkbox}
        value={item.completed}
        onValueChange={onToggleCompleted}
        />
      <Text style={[styles.item, item.completed && styles.completedItem]}>{item.value}</Text>
    </TouchableOpacity>
  )
}

export default Events