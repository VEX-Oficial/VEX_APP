import { Tabs } from 'expo-router';
import { Camera, Map, ChartLine as LineChart, Chrome as Home } from 'lucide-react-native';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#219bef',
        tabBarInactiveTintColor: '#7c8a93',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
          color: '#3b1260',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Escanear',
          tabBarIcon: ({ color, size }) => <Camera size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: 'Resultados',
          tabBarIcon: ({ color, size }) => <LineChart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="mapping"
        options={{
          title: 'Mapeo',
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}