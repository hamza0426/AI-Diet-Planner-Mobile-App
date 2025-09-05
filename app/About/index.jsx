import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../shared/Colors";
import { AnalyticsUpIcon, CookBookIcon,ServingFoodIcon, WalletAdd01Icon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

export default function About() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        paddingTop: Platform.OS === "ios" ? 40 : 25,
      }}
    >
      <Text style={styles.title}>About AI Diet Planner</Text>

      {/* App Information */}
      <View style={[styles.card, { borderColor: Colors.PRIMARY }]}>
        <HugeiconsIcon icon={CookBookIcon} size={28} color={Colors.PRIMARY} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>App Information</Text>
          <Text style={styles.cardText}>
            AI Diet Planner is your smart companion for planning meals, tracking
            nutrition, and staying on top of your health goals.
          </Text>
        </View>
      </View>

      {/* Features */}
      <View style={[styles.card, { borderColor: Colors.BLUE }]}>
        <HugeiconsIcon icon={AnalyticsUpIcon} size={28} color={Colors.BLUE} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Features</Text>
          <Text style={styles.cardText}>• Personalized meal plans</Text>
          <Text style={styles.cardText}>• AI-powered recipe generation</Text>
          <Text style={styles.cardText}>• Nutrition tracking</Text>
          <Text style={styles.cardText}>• Progress monitoring</Text>
        </View>
      </View>

      {/* Version */}
      <View style={[styles.card, { borderColor: Colors.PINK }]}>
        <HugeiconsIcon icon={WalletAdd01Icon} size={28} color={Colors.PINK} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Version</Text>
          <Text style={styles.cardText}>1.0.0</Text>
        </View>
      </View>

      {/* Developers */}
      <View style={[styles.card, { borderColor: Colors.Green }]}>
        <HugeiconsIcon icon={ServingFoodIcon} size={28} color={Colors.Green} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>Developed By</Text>
          <Text style={styles.devName}>Muhammad Fahad</Text>
          <Text style={styles.devName}>Muhammad Hamza Owais</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 25,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    padding: 15,
    borderWidth: 0.2,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    elevation: 1,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: Colors.PRIMARY,
  },
  cardText: {
    fontSize: 15,
    color: Colors.Gray,
    lineHeight: 21,
  },
  devName: {
    fontSize: 16,
    fontWeight: 400,
  },
});

