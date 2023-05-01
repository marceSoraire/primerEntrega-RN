import { Events, Input, List, ModalEvents } from './components/index';

import { View } from 'react-native';
import { styles } from './styles';
import { useHooks } from './hooks/useHooks';

export default function App() {
  const {
    text,
    setText,
    events,
    addEvent,
    handlerEvent,
    modalVisible,
    selectedEvent,
    cancelModal,
    deleteEvent,
    handleCompletedEvent,
  } = useHooks();

  const renderItem = ({ item }) => (
    <Events
      item={item}
      onPressHandler={handlerEvent}
      onToggleCompleted={() => handleCompletedEvent(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Input
        buttonColor='#52528C'
        buttonTitle='Add'
        onChangeText={(text) => setText(text)}
        onHandlerButton={addEvent}
        placeholder='Enter your event'
        value={text}
      />
      <List item={renderItem} data={events} />
      <ModalEvents
        modalVisibility={modalVisible}
        animationType='slide'
        modalTitle='Event Detail'
        modalTextBody='Are you sure to delete this item?'
        selected={selectedEvent?.value}
        onHandlerCancelModal={cancelModal}
        onHandlerDeleteEvent={() => deleteEvent(selectedEvent.id)}
      />
    </View>
  );
}