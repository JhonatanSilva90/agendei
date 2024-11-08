import { Text, View } from "react-native";
import { styles } from "./abaprofile.style.js";

function AbaProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Jhonatan Silva</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>jhonatan.dev90@gmail.com</Text>
      </View>
    </View>
  );
}

export default AbaProfile;
