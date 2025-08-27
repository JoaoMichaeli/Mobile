import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { getLocales, getCalendars } from 'expo-localization';
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";


const LanguageSelector = () => {
  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
  ]

  function changeLanguage(languageCode: string) {
    i18n.changeLanguage(languageCode)
  }


  return (
    <View>
      <Text>Linguagens</Text>

      {languages.map(item => (
        <TouchableOpacity
          key={item.code}
          style={[
            styles.languageButton,
            i18n.language === item.code && styles.activeLanguage
          ]}
          onPress={() => changeLanguage(item.code)}
        >
          <Text
            style={[
              styles.languageText,
              i18n.language === item.code && styles.activeLanguage
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}


    </View>
  )
}

export default function WelcomeScreen() {
  const { t } = useTranslation();

  function getLocalization() {
    try {
      const locales = getLocales();

      return locales[0].languageTag;
    } catch (error) {
      console.log(error)
    }
  }

  const formatDateIOS = (date, locale) => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  const formatCurrencyIOS = (amount, locale = getLocalization()) => {
    const currencyCode = locale.startsWith('pt') ? 'BRL' : 'USD';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  };

  const formatNumberIOS = (number, locale = getLocalization()) => {
    return new Intl.NumberFormat(locale).format(number);
  };

  const formatDate = (date: Date, locale = getLocalization()) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthNames = {
      'pt-BR': [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
      ],
      'en-US': [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
    }

    const months = locale.startsWith('pt') ? monthNames["pt-BR"] : monthNames["en-US"];

    return `${day} ${months[month]} ${year}`
  }

  const formatCurrency = (amount: number, locale = getLocalization()) => {
    const isBR = locale.startsWith("pt");
    const currency = isBR ? "R$" : "$";
    const formatted = amount
      .toFixed(2) // duas casas
      .replace(".", isBR ? "," : "."); // vírgula para BR

    // separadores de milhar
    const parts = formatted.split(isBR ? "," : ".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, isBR ? "." : ",");

    return `${currency} ${parts.join(isBR ? "," : ".")}`;
  };

  const formatNumber = (num: number, locale = getLocalization()) => {
    const isBR = locale.startsWith("pt");
    return num
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, isBR ? "." : ",");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome")}</Text>
      <Text style={styles.greeting}>{t("hello", { name: 'Lucas' })}</Text>

      <Text style={styles.button}>
        {t("buttons.save")}
      </Text>

      <Text>Data: {formatDate(new Date())}</Text>
      <Text>Preço: {formatCurrency(12818)}</Text>


      <LanguageSelector />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  languageButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
  },
  activeLanguage: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  languageText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
