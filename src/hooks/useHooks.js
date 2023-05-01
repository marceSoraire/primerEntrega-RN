import { useState } from 'react';

export function useHooks() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const addEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
        completed: false
      }
    ]);
    setText('');
  };

  const handlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const cancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  };

  const handleCompletedEvent = (id) => {
    setEvents(events.map((event) => {
      if (event.id === id) {
        return { ...event, completed: true };
      }
      return event;
    }));
  };

  return {
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
  };
}