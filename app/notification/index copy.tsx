import { useState } from "react";
import { Alert } from "react-native";
import { InputField, View, Button, Text, Input } from "@gluestack-ui/themed";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  function showAlert() {
    let hourConverted = hours * 60 * 60 * 1000;
    let minutesConverted = minutes * 60 * 1000;
    let secondsConverted = seconds * 1000;
    setTimeout(() => {
      Alert.alert(
        "Surprise",
        `I Appearing after ${hours} Hour, ${minutes} minutes and ${seconds} seconds! `
      );
    }, 1000);
  }

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}
    >
      <Input>
        <InputField
          placeholder="Enter Text here"
          defaultValue="0"
          onChangeText={(text) => setHours(Number(text))}
        />
      </Input>
      <Input>
        <InputField
          placeholder="Minutos"
          defaultValue="0"
          onChangeText={(text) => setMinutes(Number(text))}
        />
      </Input>
      <Input>
        <InputField
          placeholder="Segundos"
          defaultValue="0"
          onChangeText={(text) => setSeconds(Number(text))}
        />
      </Input>
      <Button onPress={showAlert}>
        <Text>Display Alert</Text>
      </Button>
    </View>
  );
};

export default App;
