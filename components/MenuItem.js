import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    setQty((prevQty) => prevQty + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.menuCard}>
      <View>
        <Text style={styles.menuTitle}>{nama}</Text>
        <Text style={styles.menuPrice}>Rp {harga.toLocaleString()}</Text>
        <Text style={styles.menuQty}>Jumlah: {qty}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleTambah}>
        <Text style={styles.buttonText}>Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  menuPrice: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  menuQty: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#FB8500",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
