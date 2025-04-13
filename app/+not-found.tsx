import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Stack, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { User, Lock, ChevronRight } from 'lucide-react-native';
import Animated, {
  FadeInDown,
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const rotation = useSharedValue(0);

  useEffect(() => {
    if (loading) {
      rotation.value = withRepeat(withTiming(360, { duration: 2000 }), -1);
    } else {
      rotation.value = 0;
    }
  }, [loading]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      router.replace('/(app)');
    }, 1500);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Iniciar Sesion', headerShown: false }} />

      <LinearGradient
        colors={['#a5d6a7', '#c8e6c9', '#e8f5e9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Fondo decorativo con aguacates */}
      <View style={styles.backgroundDecoration}>
        {Array.from({ length: 15 }).map((_, index) => (
          <Text
            key={index}
            style={[
              styles.avocadoEmoji,
              {
                top: Math.random() * Dimensions.get('window').height,
                left: Math.random() * Dimensions.get('window').width,
                transform: [{ rotate: `${Math.random() * 360}deg` }],
                opacity: 0.07 + Math.random() * 0.08,
                fontSize: 30 + Math.random() * 20,
              },
            ]}
          >
            🥑
          </Text>
        ))}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Animated.View entering={FadeInDown.duration(800)} style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('../assets/images/vex_logo_final2.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/aguacate.png')}
              style={styles.avocadoBadge}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.logoText}>AvoTex</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(800)} style={styles.loginBox}>
          <BlurView intensity={10} tint="light" style={styles.blurContainer}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Conecta con tus cultivos inteligentes</Text>

            <Animated.View entering={FadeInUp.delay(400).duration(600)} style={styles.inputContainer}>
              <User size={20} color="#66bb6a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(600).duration(600)} style={styles.inputContainer}>
              <Lock size={20} color="#66bb6a" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(700).duration(600)}>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(800).duration(600)}>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
                <ChevronRight color="#ffffff" size={20} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(900).duration(600)} style={styles.registerContainer}>
              <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
              <TouchableOpacity>
                <Text style={styles.registerLink}>Regístrate</Text>
              </TouchableOpacity>
            </Animated.View>
          </BlurView>
        </Animated.View>
      </KeyboardAvoidingView>

      {/* Spinner con aguacate giratorio */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <Animated.Text style={[styles.avocadoEmojiSpinner, animatedStyle]}>
            🥑
          </Animated.Text>
          <ActivityIndicator size="large" color="#66bb6a" style={{ marginTop: 10 }} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  backgroundDecoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  avocadoEmoji: {
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoWrapper: {
    position: 'relative',
    width: 120,
    height: 120,
  },
  logo: {
    width: 120,
    height: 120,
  },
  avocadoBadge: {
    position: 'absolute',
    width: 85,
    height: 85,
    bottom: -20,
    right: -20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#66bb6a',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  loginBox: {
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  blurContainer: {
    padding: 28,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a2a2a',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(102, 187, 106, 0.3)',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#66bb6a',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#66bb6a',
    borderRadius: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#66bb6a',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  registerText: {
    color: '#555',
    fontSize: 15,
  },
  registerLink: {
    color: '#66bb6a',
    fontSize: 15,
    fontWeight: '600',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  avocadoEmojiSpinner: {
    fontSize: 50,
  },
});




