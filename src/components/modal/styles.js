import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  modalContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(221,221,221,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '25%',
    left: '10%',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#212121',
  },
  selectedEvent: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});