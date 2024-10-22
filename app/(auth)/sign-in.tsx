import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link, useRouter } from "expo-router";
import { useState, useCallback } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import React from "react";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form.email, form.password]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpTop} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold top-2 left-5">
            Witaj ponownie!
          </Text>
        </View>
        <View className="p-10 mt-8">
          <InputField
            label="Email"
            placeholder="Wprowadź email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          <InputField
            label="Hasło"
            placeholder="Wprowadź hasło"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />

          <CustomButton
            title="Zaloguj się"
            onPress={onSignInPress}
            className="mt-6"
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-8"
          >
            <Text>Nie posiadasz konta? </Text>
            <Text className="text-primary-500">Stwórz konto</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
