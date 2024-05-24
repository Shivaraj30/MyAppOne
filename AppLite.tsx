import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevetedCard from './components/ElevetedCard'
import FancyCard from './components/FancyCard'

export default function AppLite() {
  return (
    <SafeAreaView>
        <ScrollView>
       <FlatCards />
       <ElevetedCard />
       
       <FancyCard /> 
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  
    // container:{
    //     flex: 1,
    //     flexDirection:'row',
    //     padding: 8

    // }
    
})

// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// const cafes = [
//   {
//     id: '1',
//     name: 'Café Coffee Day',
//     address: 'Malleshwaram No225 & 226 Papa Johns Beng',
//     status: 'Open Until 10 PM',
//     distance: '2 KM Away',
//     imageUrl: 'https://via.placeholder.com/80', // Replace with actual image URL
//   },
//   {
//     id: '2',
//     name: 'Café Coffee Day - Malleshwaram',
//     address: 'Ground Floor, No. 261/A 10th Main, 2nd Block Ashoka Pillar...',
//     status: 'Open Until 10 PM',
//     distance: '1 KM Away',
//     imageUrl: 'https://via.placeholder.com/80', // Replace with actual image URL
//   },
// ];

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.headerImage} />
//       </View>

//       <View style={styles.cafesSection}>
//         <Text style={styles.sectionTitle}>Cafés: We found some great cafes near you!</Text>
//         {cafes.map((cafe) => (
//           <View key={cafe.id} style={styles.cafeCard}>
//             <Image source={{ uri: cafe.imageUrl }} style={styles.cafeImage} />
//             <View style={styles.cafeInfo}>
//               <Text style={styles.cafeName}>{cafe.name}</Text>
//               <Text style={styles.cafeAddress}>{cafe.address}</Text>
//               <Text style={styles.cafeStatus}>{cafe.status}</Text>
//               <Text style={styles.cafeDistance}>{cafe.distance}</Text>
//             </View>
//           </View>
//         ))}
//       </View>

//       <View style={styles.offersSection}>
//         <Text style={styles.sectionTitle}>My Offers: Time to enjoy your exclusive offers!</Text>
//         <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.offerImage} />
//       </View>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Explore exciting offers, all in one place!</Text>
//         <Image source={{ uri: 'https://via.placeholder.com/300x100' }} style={styles.footerImage} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     backgroundColor: '#8B0000',
//     padding: 20,
//     alignItems: 'center',
//   },
//   headerImage: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//   },
//   cafesSection: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cafeCard: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   cafeImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//   },
//   cafeInfo: {
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   cafeName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cafeAddress: {
//     color: '#555',
//   },
//   cafeStatus: {
//     color: 'green',
//   },
//   cafeDistance: {
//     color: '#777',
//   },
//   offersSection: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   offerImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   footer: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   footerImage: {
//     width: '100%',
//     height: 100,
//     borderRadius: 10,
//   },
// });

// export default App;
