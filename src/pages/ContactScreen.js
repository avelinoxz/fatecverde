import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppToolbar from '../components/AppToolbar';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function ContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  function submit() {
    if (!name.trim() || !message.trim()) {
      setError('Preencha seu nome e sua mensagem.');
      setNotice('');
      return;
    }

    setError('');
    setNotice(
      'Mensagem validada.'
    );
  }

  function clear() {
    setName('');
    setMessage('');
    setError('');
    setNotice('');
  }

  return (
    <SafeAreaView
      style={globalStyles.screen}
      edges={['left', 'right', 'bottom']}
    >
      <AppToolbar
        navigation={navigation}
        title="Contato"
        currentScreen="Contact"
      />

      <ScrollView
        contentContainerStyle={globalStyles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={globalStyles.title}>
          Fale conosco
        </Text>

        <Text style={globalStyles.subtitle}>
          Entre em contato conosco
        </Text>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Informações
          </Text>

          <Text style={styles.label}>E-mail</Text>
          <Text selectable style={styles.value}>
            contato@fatecverde.example
          </Text>

          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>
            (11) 99999-0000
          </Text>

          <Text style={styles.label}>Endereço</Text>
          <Text style={styles.value}>
            Av. Miguel Ignácio Curi, 360 - Itaquera, São Paulo - SP, 08295-005
          </Text>

          <Text style={styles.note}>
            Dados ilustrativos, sem atendimento real.
          </Text>
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.sectionTitle}>
            Mensagem
          </Text>

          <Text style={globalStyles.label}>Seu nome</Text>

          <TextInput
            style={globalStyles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={colors.muted}
            value={name}
            onChangeText={(value) => {
              setName(value);
              setError('');
              setNotice('');
            }}
          />

          <Text style={[
            globalStyles.label,
            styles.messageLabel,
          ]}>
            Sua mensagem
          </Text>

          <TextInput
            style={[
              globalStyles.input,
              styles.messageInput,
            ]}
            placeholder="Escreva sua mensagem"
            placeholderTextColor={colors.muted}
            value={message}
            multiline
            maxLength={500}
            textAlignVertical="top"
            onChangeText={(value) => {
              setMessage(value);
              setError('');
              setNotice('');
            }}
          />

          {error ? (
            <Text
              accessibilityRole="alert"
              style={globalStyles.error}
            >
              {error}
            </Text>
          ) : null}

          {notice ? (
            <Text
              accessibilityRole="alert"
              style={styles.success}
            >
              {notice}
            </Text>
          ) : null}

          <PrimaryButton
            title="Simular envio"
            onPress={submit}
          />

          <PrimaryButton
            title="Limpar"
            variant="secondary"
            onPress={clear}
          />
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

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
  },
  value: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
    lineHeight: 20,
  },
  note: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 18,
  },
  messageLabel: {
    marginTop: 16,
  },
  messageInput: {
    height: 110,
    paddingTop: 12,
  },
  success: {
    color: colors.success,
    marginTop: 10,
    fontSize: 13,
    lineHeight: 19,
  },
});