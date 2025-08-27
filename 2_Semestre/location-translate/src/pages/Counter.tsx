import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

export default function Counter() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const formattedCount = new Intl.NumberFormat(i18n.language).format(count);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {t("counter")}: {formattedCount}
      </Text>
      <View style={styles.buttons}>
        <Button title={`- ${t("decrease")}`} onPress={() => setCount(count - 1)} />
        <Button title={`+ ${t("increase")}`} onPress={() => setCount(count + 1)} />
      </View>
      <Button title={`${t("language")}`} onPress={toggleLanguage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  counter: { fontSize: 32, marginBottom: 20 },
  buttons: { flexDirection: "row", gap: 10, marginBottom: 20 },
});
