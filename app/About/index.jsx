import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../shared/Colors";

// Use icons you already have in the project:
import {
    AnalyticsUpIcon,
    CookBookIcon, // Version
    ServingFoodIcon, // Features
    WalletAdd01Icon, // Version
} from "@hugeicons/core-free-icons";
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
    fontWeight: "500",
  },
});



// import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
// import React from "react";
// import Colors from "../../shared/Colors";

// export default function About() {
//   return (
//     <ScrollView
//       contentContainerStyle={{
//         padding: 20,
//         paddingTop: Platform.OS === "ios" ? 50 : 30,
//       }}
//     >
//       <Text style={styles.title}>About AI Diet Planner</Text>

//       <Text style={styles.text}>
//         AI Diet Planner is your smart companion for planning meals, tracking
//         nutrition, and staying on top of your health goals. Using AI-powered
//         recipe suggestions and meal planning tools, we make healthy eating
//         simple and personalized.
//       </Text>

//       <Text style={styles.sectionTitle}>Features:</Text>
//       <Text style={styles.text}>• Personalized meal plans</Text>
//       <Text style={styles.text}>• AI-powered recipe generation</Text>
//       <Text style={styles.text}>• Nutrition tracking</Text>
//       <Text style={styles.text}>• Progress monitoring</Text>

//       <Text style={styles.sectionTitle}>Version</Text>
//       <Text style={styles.text}>1.0.0</Text>

//       <Text style={styles.sectionTitle}>Developed By</Text>
//       <Text style={styles.text}>Muhammad Fahad</Text>
//       <Text style={styles.text}>Muhammad Hamza Owais</Text>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: Colors.PRIMARY,
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20,
//     marginBottom: 5,
//     color: Colors.PRIMARY,
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 22,
//     color: Colors.Gray,
//     marginBottom: 5,
//   },
// });
