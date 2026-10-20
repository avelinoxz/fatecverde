import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import globalStyles from '../styles/globalStyles';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView
      style={globalStyles.screen}
      edges={['left', 'right', 'bottom']}
    >
      <AppToolbar
        navigation={navigation}
        title="Sobre"
        currentScreen="About"
      />

      <ScrollView contentContainerStyle={globalStyles.content}>
        <Text style={globalStyles.title}>
          Sobre o FatecVerde
        </Text>

        <Text style={globalStyles.subtitle}>
          O FatecVerde é um ateliê botânico fictício,
          criado como projeto acadêmico.
        </Text>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Nossa missão
          </Text>

          <Text style={globalStyles.paragraph}>
            Incentivar o contato com a natureza por
            meio de ideias acessíveis.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Nossa visão
          </Text>

          <Text style={globalStyles.paragraph}>
            Inspirar ambientes mais verdes,
            acolhedores e sustentáveis.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Nossos valores
          </Text>

          <Text style={globalStyles.paragraph}>
            Simplicidade, cuidado, respeito à natureza
            e criatividade.
          </Text>
        </View>

        <PrimaryButton
          title="Voltar ao início"
          variant="secondary"
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}