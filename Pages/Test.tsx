import { Text, View } from "react-native";
import { ENV_VAR } from "@env";

const Test = ({ route }: any) => {
  return (
    <View>
      <Text>
        This is {route.params.name} page and secret is: {ENV_VAR}
      </Text>
    </View>
  );
};

export default Test;
