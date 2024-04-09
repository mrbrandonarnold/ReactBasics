import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Code Comment */}

      {/* Inline Styles */}
      <Text style={{margin: 16, borderWidth: 1, borderColor: '#ff0000', padding: 16}}>First piece of text</Text>
      
      {/* Styles Object */}
      <Text style={styles.dummyText}>Second piece of text</Text>
      
      {/* Button Component */}
      <Button title='Tap me!' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
    borderWidth: 1, 
    borderColor: 'blue', 
    padding: 16
  }
});
