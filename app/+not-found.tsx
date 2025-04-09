import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Chrome as Home } from 'lucide-react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ 
        title: '¡Oops!',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          color: '#3b1260',
        },
      }} />
      <View style={styles.container}>
        <Text style={styles.title}>Página no encontrada</Text>
        <Text style={styles.subtitle}>Lo sentimos, la página que buscas no existe.</Text>
        
        <Link href="/(app)" asChild>
          <TouchableOpacity style={styles.button}>
            <Home size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Ir al inicio</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#3b1260',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#7c8a93',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#219bef',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});