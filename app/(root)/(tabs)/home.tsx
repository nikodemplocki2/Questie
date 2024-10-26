import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";
import { images } from "@/constants";

export default function Page() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Image source={images.background} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <SignedIn>
          <Text style={styles.text}>
            Hello {user?.emailAddresses[0].emailAddress}
          </Text>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Text style={styles.text}>Sign In</Text>
          </Link>
          <Link href="/sign-up">
            <Text style={styles.text}>Sign Up</Text>
          </Link>
        </SignedOut>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
