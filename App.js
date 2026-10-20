import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import colors from './src/styles/colors';

export default function App() {
  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor={colors.surface}
      />
      <AppNavigator />
    </>
  );
}