import { FlatList, View } from 'react-native';

import { styles } from './styles';

const List = ({ data, item }) => {

  return (
    <View style={styles.listContainer}>
      <FlatList
        renderItem={item}
        data={data}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  )
}

export default List