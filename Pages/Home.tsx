import { FlatList, Pressable, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { FetchPosts } from "../Queries/getDummyData";

const Home = ({ navigation }: any) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: FetchPosts,
  });

  if (isError) {
    return <Text>There was an error</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <View className="h-1/8 items-center justify-center">
        <Pressable
          className="bg-accent p-3 m-2 rounded-lg items-center text-white"
          onPress={() => navigation.navigate("Test", { name: "Testorono" })}
          android_ripple={{ color: "accentSecondary" }}
        >
          <Text className="uppercase text-[#ffffff] font-bold tracking-widest">
            Pressable
          </Text>
        </Pressable>
      </View>

      <FlatList
        className="h-7/7"
        data={data}
        renderItem={({ item: post }) => (
          <Pressable
            className="bg-accent p-3 m-2 rounded-lg items-center text-white"
            onPress={() => navigation.navigate("PostPage", post)}
            android_ripple={{ color: "accentSecondary" }}
          >
            <Text className="uppercase text-[#ffffff] font-bold tracking-widest text-xs">
              {post.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;
