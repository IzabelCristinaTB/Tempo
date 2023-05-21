import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './componentes/TelaPrincipal';
import SegundaTela from './componentes/SegundaTela';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{title: 'Previsão do Tempo'}}/>
        <Stack.Screen name='SecondaryScreen' component={SegundaTela} options={{title: 'Próximos 7 dias'}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}