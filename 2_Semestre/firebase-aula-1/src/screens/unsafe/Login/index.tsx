import React from "react";
import { useTheme } from "hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { ButtonSSection, Form, HeaderSection, HeroSection } from "./sections";
import { Keyboard } from "components/Keyboard";

export default function Login() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme?.colors?.background
    }}>
      <Keyboard>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 10,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <HeaderSection />
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <HeroSection />
            <View style={{ gap: 30 }}>
              <Form />
              <ButtonSSection />
            </View>
          </View>
        </ScrollView>
      </Keyboard>
    </SafeAreaView>
  );
}