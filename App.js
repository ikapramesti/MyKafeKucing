import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import OrderSummary from "./components/OrderSummary";
import MenuItem from "./components/MenuItem";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahGlobal = () => {
    setTotalPesanan((prevTotal) => prevTotal + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Kafe Kucing</Text>
        <Text style={styles.headerSubtitle}>
          Silakan pilih menu favorit Anda
        </Text>
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <ScrollView contentContainerStyle={styles.menuList}>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahGlobal}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    paddingTop: 50,
  },
  header: {
    padding: 16,
    backgroundColor: "#FFB703",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  menuList: {
    paddingHorizontal: 16,
  },
});
