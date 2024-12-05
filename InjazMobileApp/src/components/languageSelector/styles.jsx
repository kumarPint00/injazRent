// styles.js

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Main component container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Button to open the language modal
  openModalButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  openModalButtonText: {
    color: 'white',
    fontSize: 16,
  },

  // Language modal container
  languageModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  // Language modal content
  languageModalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  // Close button in the language modal
  languageModalCloseButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  languageModalCloseButtonText: {
    color: 'blue',
    fontSize: 16,
  },

  // Language options in the modal
  languageModalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  languageModalOptionText: {
    fontSize: 16,
  },
});

export default styles;
