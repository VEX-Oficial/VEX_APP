import { View, Text, StyleSheet } from 'react-native';

export default function Mapping() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapeo de Cultivo</Text>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Mapa del cultivo</Text>
        <Text style={styles.mapDescription}>
          Aquí se mostrará el mapa interactivo de tu cultivo
        </Text>
      </View>
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Leyenda</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Saludable</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFC107' }]} />
          <Text style={styles.legendText}>Atención requerida</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#F44336' }]} />
          <Text style={styles.legendText}>Alerta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#3b1260',
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mapText: {
    fontSize: 24,
    color: '#7c8a93',
    fontFamily: 'Poppins-SemiBold',
  },
  mapDescription: {
    fontSize: 16,
    color: '#7c8a93',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 8,
  },
  legend: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 20,
  },
  legendTitle: {
    fontSize: 18,
    color: '#3b1260',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  legendText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});