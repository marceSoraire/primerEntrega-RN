import { Button, TextInput, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Input = ({ placeholder, value, onChangeText, buttonColor, buttonTitle, onHandlerButton}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        <Button title={buttonTitle} color={buttonColor} onPress={onHandlerButton}/>
      </View>
    )
}
export default Input;