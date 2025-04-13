import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Camera, Map, ChartLine as LineChart, Leaf, Sun, Droplets, Calendar } from 'lucide-react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get('window');

export default function Home() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <LinearGradient
      colors={['#e0f7ec', '#ffffff']}
      style={styles.gradientBackground}
    >
      {/* Hojas decorativas */}
      <View style={styles.decoration}>
        {Array.from({ length: 15 }).map((_, i) => (
          <Animated.Text
            key={i}
            entering={FadeInDown.delay(i * 100).duration(1500)}
            style={[
              styles.leaf,
              {
                left: Math.random() * width,
                top: Math.random() * height,
                transform: [{ rotate: `${Math.random() * 360}deg` }],
                opacity: 0.05 + Math.random() * 0.1,
              },
            ]}
          >
            🍃
          </Animated.Text>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Animated.View entering={FadeInDown.delay(200).duration(1000)}>
            <Text style={styles.welcomeText}>Bienvenido a</Text>
            <Text style={styles.title}>AvoTex 🥑</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).duration(1000)} style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Sun color="#50c878" size={24} />
              <Text style={styles.statValue}>26°C</Text>
              <Text style={styles.statLabel}>Temperatura</Text>
            </View>
            <View style={styles.statCard}>
              <Droplets color="#4fbcff" size={24} />
              <Text style={styles.statValue}>68%</Text>
              <Text style={styles.statLabel}>Humedad</Text>
            </View>
            <View style={styles.statCard}>
              <Leaf color="#50c878" size={24} />
              <Text style={styles.statValue}>85%</Text>
              <Text style={styles.statLabel}>Salud</Text>
            </View>
          </Animated.View>
        </View>

        {/* Main Cards Section */}
        <Animated.View entering={FadeInUp.delay(600).duration(1000)} style={styles.grid}>
          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => navigateTo('/scan')}>
            <LinearGradient
              colors={['#4fbcff', '#2e8bc0']}
              style={styles.cardGradient}>
              <View style={styles.cardIconContainer}>
                <Camera color="#ffffff" size={25} />
              </View>
              <Text style={styles.cardTitle}>Escanear</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.secondaryCardsContainer}>
            <TouchableOpacity
              style={[styles.secondaryCard, { marginBottom: 16 }]}
              onPress={() => navigateTo('/mapping')}>
              <LinearGradient
                colors={['#50c878', '#2e8b57']}
                style={styles.cardGradient}>
                <View style={styles.cardIconContainer}>
                  <Map color="#ffffff" size={25} />
                </View>
                <Text style={styles.secondaryCardTitle}>Mapeo</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.secondaryCard, { marginBottom: 16 }]}
              onPress={() => navigateTo('/results')}>
              <LinearGradient
                colors={['#ffaa4f', '#ff8c00']}
                style={styles.cardGradient}>
                <View style={styles.cardIconContainer}>
                  <LineChart color="#ffffff" size={25} />
                </View>
                <Text style={styles.secondaryCardTitle}>Resultados</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryCard}
              onPress={() => navigateTo('/agenda')}>
              <LinearGradient
                colors={['#9c27b0', '#7b1fa2']}
                style={styles.cardGradient}>
                <View style={styles.cardIconContainer}>
                  <Calendar color="#ffffff" size={25} />
                </View>
                <Text style={styles.secondaryCardTitle}>Agenda</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Recent Activity Section */}
        <Animated.View entering={FadeInUp.delay(800).duration(1000)} style={styles.recentActivity}>
          <Text style={styles.sectionTitle}>Actividad Reciente</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityIconContainer}>
              <Camera color="#4fbcff" size={24} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Escaneo completado</Text>
              <Text style={styles.activityDescription}>Sector A3 - 24 árboles analizados</Text>
              <Text style={styles.activityTime}>Hace 2 horas</Text>
            </View>
          </View>
          <View style={[styles.activityCard, { backgroundColor: '#e0f7ec' }]}>
            <View style={styles.activityIconContainer}>
              <Leaf color="#50c878" size={24} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Salud óptima</Text>
              <Text style={styles.activityDescription}>Sector B2 - Condiciones ideales</Text>
              <Text style={styles.activityTime}>Ayer</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  leaf: {
    position: 'absolute',
    fontSize: 26 + Math.random() * 12,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins_700Bold',
    color: '#2a2a2a',
    marginTop: -5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2a2a2a',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
  },
  mainCard: {
    flex: 1,
    height: 270,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  secondaryCardsContainer: {
    flex: 1,
  },
  secondaryCard: {
    flex: 1,
    height: 130,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  cardGradient: {
    flex: 1,
    padding: 24,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#ffffff',
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 4,
  },
  secondaryCardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#ffffff',
    marginTop: 4,
  },
  secondaryCardDescription: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#ffffff',
    opacity: 0.9,
  },
  recentActivity: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#66bb6a',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  activityIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(79, 188, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2a2a2a',
  },
  activityDescription: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginTop: 2,
  },
  activityTime: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    marginTop: 4,
  },
});
