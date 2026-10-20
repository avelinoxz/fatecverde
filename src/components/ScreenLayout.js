import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppToolbar from './AppToolbar';
import globalStyles from '../styles/globalStyles';

export default function ScreenLayout({ navigation, currentScreen, title, children }) {
  return (
    <SafeAreaView style={globalStyles.screen} edges={['left', 'right', 'bottom']}>
      <AppToolbar navigation={navigation} currentScreen={currentScreen} title={title} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={globalStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
