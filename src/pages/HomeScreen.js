import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation, route }) {
  const username = route.params?.username || 'visitante';

  return (
    <SafeAreaView
      style={globalStyles.screen}
      edges={['left', 'right', 'bottom']}
    >
      <AppToolbar
        navigation={navigation}
        title="Início"
        currentScreen="Home"
      />

      <ScrollView contentContainerStyle={globalStyles.content}>
        <Text style={globalStyles.title}>
          Olá, {username}!
        </Text>

        <Text style={globalStyles.subtitle}>
          Bem-vindo ao FatecVerde, um espaço dedicado à
          natureza e ao bem-estar.
        </Text>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Conheça o FatecVerde
          </Text>

          <Text style={globalStyles.paragraph}>
            Compartilhamos ideias simples para trazer
            mais verde ao dia a dia.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Navegação
          </Text>

          <Text style={globalStyles.paragraph}>
            Conheça nossa proposta ou veja nossos canais de contato.
          </Text>

          <PrimaryButton
            title="Sobre o projeto"
            onPress={() => navigation.navigate('About')}
          />

          <PrimaryButton
            title="Contato"
            variant="secondary"
            onPress={() => navigation.navigate('Contact')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}