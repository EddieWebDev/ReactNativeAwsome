import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  PostPage: Post;
  Test: undefined;
};

export type PostPageProps = NativeStackScreenProps<StackParamList, "PostPage">;

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
