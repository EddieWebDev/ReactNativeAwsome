import { Text, View } from "react-native";

const Test = ({route}: any) => {
  return (
    <View>
      <Text>This is {route.params.name} page</Text>
    </View>
  );
};

export default Test;
