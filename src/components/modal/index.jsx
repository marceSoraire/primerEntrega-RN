import { Button, Modal, Text, View } from 'react-native';

import { styles } from './styles';

const ModalEvents = ({modalVisibility, animationType, modalTitle, modalTextBody, selected, onHandlerCancelModal, onHandlerDeleteEvent }) => {

  return (
    <Modal visible={modalVisibility} animationType={animationType}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>{modalTextBody}</Text>
            <Text style={styles.selectedEvent}>{selected}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancel'
              color='#52528C'
              onPress={onHandlerCancelModal}
            />
            <Button
            title='Delete'
            color='#52528C'
            onPress={onHandlerDeleteEvent}
            />
          </View>
        </View>
      </Modal>
  )
}

export default ModalEvents