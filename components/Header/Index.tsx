import { View, ImageBackground, Text, Center } from "@gluestack-ui/themed";

export function Header() {
  const bgImage = require("@/assets/images/cover.png");
  return (
    <View height={182}>
      <ImageBackground source={bgImage}>
        <Text
          color="$white"
          textAlign="center"
          fontSize={24}
          marginTop={88}
          fontWeight="$bold"
        >
          Lista de Compras
        </Text>
      </ImageBackground>
    </View>
  );
}
