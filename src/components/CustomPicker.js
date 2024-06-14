import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, RadioButton, Text } from 'react-native-paper';

export default function CustomPicker({ label, value, setValue, options }) {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Button mode="outlined" onPress={showDialog} style={styles.button}>
        {options.find(option => option.value === value)?.label || "Select"}
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title> Select </Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group onValueChange={setValue} value={value}>
              {options.map((option) => (
                <View key={option.value} style={styles.option}>
                  <RadioButton value={option.value} style={styles.radioButtonContainer} color='#e94560' uncheckedColor='#fff' />
                  <Text>{option.label}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  button: {
    borderColor: '#fff',
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  radioButtonContainer: {
    height: 30, // Increase size for better visibility and alignment
    width: 30,
    borderRadius: 15, // Half of height and width to make it circular
    borderWidth: 1,
    borderColor: '#e94560', // Change this color as needed
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 2 // Adjust padding to ensure the inner circle fits within the border
  },
});
