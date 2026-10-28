import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promoText}>
          Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: "#FFE6A7",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  promoText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#D90429",
  },
});
