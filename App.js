import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2px",
          color: "black",
        }}
      >
        wow I am a cool app dev
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
