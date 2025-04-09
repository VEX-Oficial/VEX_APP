import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Results() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resultados de Análisis</Text>
      <View style={styles.resultsList}>
        <View style={styles.resultCard}>
          <Text style={styles.date}>23 Feb 2024</Text>
          <Text style={styles.status}>Saludable</Text>
          <View style={styles.details}>
            <Text style={styles.detailLabel}>Tipo:</Text>
            <Text style={styles.detailValue}>Hass</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailLabel}>Área:</Text>
            <Text style={styles.detailValue}>Sector A-12</Text>
          </View>
        </View>

        <View style={[styles.resultCard, styles.warningCard]}>
          <Text style={styles.date}>22 Feb 2024</Text>
          <Text style={[styles.status, styles.warningText]}>Alerta</Text>
          <View style={styles.details}>
            <Text style={styles.detailLabel}>Tipo:</Text>
            <Text style={styles.detailValue}>Hass</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailLabel}>Área:</Text>
            <Text style={styles.detailValue}>Sector B-03</Text>
          </View>
          <Text style={styles.warningMessage}>
            Posible presencia de trips detectada
          </Text>
        </View>
      </View>
    </ScrollView>
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
  resultsList: {
    gap: 20,
  },
  resultCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 20,
  },
  warningCard: {
    backgroundColor: '#fff3e0',
  },
  date: {
    fontSize: 14,
    color: '#7c8a93',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  status: {
    fontSize: 24,
    color: '#219bef',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  warningText: {
    color: '#ff9800',
  },
  details: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: '#7c8a93',
    fontFamily: 'Poppins-Regular',
    width: 80,
  },
  detailValue: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  warningMessage: {
    fontSize: 16,
    color: '#ff9800',
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
});