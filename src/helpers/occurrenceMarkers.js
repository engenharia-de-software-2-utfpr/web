import L from 'leaflet';

const fire = new L.Icon({
	iconUrl: require('../assets/icons/fire.png'),
	iconRetinaUrl: require('../assets/icons/fire.png'),
	iconAnchor: [5, 55],
	popupAnchor: [10, -44],
	iconSize: [23, 23]
})

const solid_waste = new L.Icon({
	iconUrl: require('../assets/icons/solid_waste.png'),
	iconRetinaUrl: require('../assets/icons/solid_waste.png'),
	iconAnchor: [5, 55],
	popupAnchor: [10, -44],
	iconSize: [23, 23]
})

const sewer = new L.Icon({
	iconUrl: require('../assets/icons/sewer.png'),
	iconRetinaUrl: require('../assets/icons/sewer.png'),
	iconAnchor: [5, 55],
	popupAnchor: [10, -44],
	iconSize: [23, 23]
})

const dengue = new L.Icon({
	iconUrl: require('../assets/icons/dengue.png'),
	iconRetinaUrl: require('../assets/icons/dengue.png'),
	iconAnchor: [5, 55],
	popupAnchor: [10, -44],
	iconSize: [23, 23]
})

export default function(category) {
	switch (category) {
		case 'fire':
			return fire;

		case 'solid_waste':
			return solid_waste;

		case 'sewer':
			return sewer;

		case 'dengue':
			return dengue;

		default:
	}
};