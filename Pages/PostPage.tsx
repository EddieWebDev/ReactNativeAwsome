import { Text, View } from "react-native";
import { PostPageProps } from "../Types/Pages";

const PostPage = ({ route }: PostPageProps) => {
  const post = route.params;
  return (
    <View>
      <Text>Post title: {post.title}</Text>
      <Text>Post id: {post.id}</Text>
      <Text>Post body: {post.body}</Text>
    </View>
  );
};

export default PostPage;
