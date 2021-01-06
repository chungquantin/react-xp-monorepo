import React from "react";
import { StyleSheet, Text, View } from "react-native";
import s from "@monorepo/shared";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const App = () => {
	return (
		<View style={styles.container}>
			<Text>{s}</Text>
		</View>
	);
};

export default App;
