import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#52528C',
    borderRadius: 5,
    marginVertical: 5,
  },
  item: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedItem: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    margin: 8,
  },
});