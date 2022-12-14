import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img.jpg')}
        style={styles.imagem}
      />
      <Text style={styles.texto}>Débora de Jesus Silva</Text>
      <StatusBar style="auto" />
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

  imagem:{
    width: 250,
  },

  texto:{
    fontWeight: 'bold',
    marginTop: 25,
  },
});
