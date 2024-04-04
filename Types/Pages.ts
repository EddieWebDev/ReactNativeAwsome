import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type PagePropTypes = {
  Home: undefined;
  Profile: { name: string };
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostPageProps = NativeStackScreenProps<StackParamList, 'PostPage'>

export type StackParamList = {
  Home: undefined;
  PostPage: Post;
  Test: undefined
};


