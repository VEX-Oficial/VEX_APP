import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Camera, Map, ChartLine as LineChart } from 'lucide-react-native';
import { router } from 'expo-router';

export default function Home() {
  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenido a</Text>
        <Text style={styles.title}>AvoGuard</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#219bef' }]}
          onPress={() => navigateTo('/scan')}>
          <Camera color="#ffffff" size={40} />
          <Text style={styles.cardTitle}>Escanear</Text>
          <Text style={styles.cardDescription}>
            Analiza el estado de tus aguacates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#3b1260' }]}
          onPress={() => navigateTo('/results')}>
          <LineChart color="#ffffff" size={40} />
          <Text style={styles.cardTitle}>Resultados</Text>
          <Text style={styles.cardDescription}>
            Revisa los análisis anteriores
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#7c8a93' }]}
          onPress={() => navigateTo('/mapping')}>
          <Map color="#ffffff" size={40} />
          <Text style={styles.cardTitle}>Mapeo</Text>
          <Text style={styles.cardDescription}>
            Visualiza las áreas afectadas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Resumen</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Análisis</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Alertas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Salud</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 18,
    color: '#7c8a93',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 32,
    color: '#3b1260',
    fontFamily: 'Poppins-Bold',
  },
  grid: {
    padding: 20,
    gap: 20,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 15,
    marginBottom: 8,
  },
  cardDescription: {
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  statsContainer: {
    padding: 20,
  },
  statsTitle: {
    fontSize: 24,
    color: '#3b1260',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 24,
    color: '#219bef',
    fontFamily: 'Poppins-Bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#7c8a93',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
});