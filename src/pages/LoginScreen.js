import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

const TEST_USERNAME = 'visitante';
const TEST_PASSWORD = 'verde123';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function handleLogin() {
    if (!username.trim()) {
      setError('Informe seu usuário.');
      return;
    }

    if (!password) {
      setError('Informe sua senha.');
      return;
    }

    if (
      username.trim() !== TEST_USERNAME ||
      password !== TEST_PASSWORD
    ) {
      setError('Usuário ou senha inválidos.');
      return;
    }

    setError('');

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
          params: { username: username.trim() },
        },
      ],
    });
  }

  function clearFields() {
    setUsername('');
    setPassword('');
    setShowPassword(false);
    setError('');
  }

  return (
    <SafeAreaView style={globalStyles.screen}>
      <KeyboardAvoidingView
        style={styles.fill}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.brand}>FatecVerde</Text>
          <Text style={styles.description}>Ateliê Botânico</Text>

          <View style={globalStyles.card}>
            <Text style={globalStyles.title}>
              Acessar aplicativo
            </Text>

            <Text style={globalStyles.subtitle}>
              Entre com seu usuário e senha para continuar.
            </Text>

            <Text style={globalStyles.label}>Usuário</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Digite seu usuário"
              placeholderTextColor={colors.muted}
              value={username}
              onChangeText={(value) => {
                setUsername(value);
                setError('');
              }}
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="Usuário"
            />

            <Text style={[
              globalStyles.label,
              styles.passwordLabel,
            ]}>
              Senha
            </Text>

            <View style={styles.passwordRow}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.muted}
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  setError('');
                }}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                accessibilityLabel="Senha"
                onSubmitEditing={handleLogin}
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={styles.showButton}
              >
                <Text style={styles.showText}>
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </Text>
              </Pressable>
            </View>

            {error ? (
              <Text
                accessibilityRole="alert"
                style={globalStyles.error}
              >
                {error}
              </Text>
            ) : null}

            <PrimaryButton
              title="Entrar"
              onPress={handleLogin}
            />

            <PrimaryButton
              title="Limpar campos"
              variant="secondary"
              onPress={clearFields}
            />
          </View>

          <Text style={styles.info}>
            Acesso de teste: visitante / verde123
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 22,
  },
  brand: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 2,
  },
  description: {
    color: colors.muted,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 26,
  },
  passwordLabel: {
    marginTop: 18,
  },
  passwordRow: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    height: 46,
    paddingHorizontal: 12,
    fontSize: 15,
    color: colors.text,
  },
  showButton: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  showText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  info: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 13,
    marginTop: 3,
  },
  note: {
    color: colors.muted,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
  },
});