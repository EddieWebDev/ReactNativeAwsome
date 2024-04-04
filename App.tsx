import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import PostPage from "./Pages/PostPage";
import type {StackParamList}  from "./Types/Pages";

const Stack = createNativeStackNavigator<StackParamList>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome home" }}
          />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="PostPage" component={PostPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
