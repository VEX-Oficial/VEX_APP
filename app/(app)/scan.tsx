import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Camera, Camera as FlipCamera } from 'lucide-react-native';

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState<CameraType>('back');

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Necesitamos acceso a la cámara</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Permitir acceso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraType = () => {
    setType(current => (
      current === 'back' ? 'front' : 'back'
    ));
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} type={type}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Escanear Aguacate</Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity style={styles.captureButton}>
              <Camera color="#ffffff" size={32} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
              <FlipCamera color="#ffffff" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  header: {
    paddingTop: 40,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  controls: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#219bef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  flipButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#219bef',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});