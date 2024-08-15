import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function TripItem({ fromCity, toCity, date, price, icon }){
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>
				<View style={styles.cityContainer}>
					<Text>{fromCity}</Text>
					<MaterialIcons name="arrow-forward" size={20} style={styles.icon} />
					<Text>{toCity}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.date}>{date}</Text>
					<Text style={styles.price}>{price}</Text>
				</View>
			</View>
			<MaterialIcons name={icon} size={24} style={styles.moreIcon} />
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 10,
		margin: 10,
	},
	cardContent: {
		flex: 1,
	},
	cityContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	icon: {
		marginHorizontal: 10,
	},
	infoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	date: {
		fontWeight: 'bold',
	},
	price: {
		fontWeight: 'bold',
	},
	moreIcon: {
		marginLeft: 10,
	},
});