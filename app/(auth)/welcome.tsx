import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, Image } from "react-native";
import { images } from "@/constants";

export default function Page() {
  const { user } = useUser();

  return (
    <View className="flex-1 bg-white relative">
      <Image
        source={images.background}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />
      <View className="flex-1 justify-center items-center">
        <SignedIn>
          <Text className="text-2xl font-bold text-black">
            Hello {user?.emailAddresses[0].emailAddress}
          </Text>
        </SignedIn>
        <SignedOut>
          <View className="flex items-center">
            <Link href="/sign-in">
              <Text className="text-lg text-blue-500">Sign In</Text>
            </Link>
            <Link href="/sign-up">
              <Text className="text-lg text-blue-500 mt-2">Sign Up</Text>
            </Link>
          </View>
        </SignedOut>
      </View>
    </View>
  );
}
