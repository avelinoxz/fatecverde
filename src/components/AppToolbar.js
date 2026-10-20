import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const menu = [
  { name: 'Home', label: 'Início' },
  { name: 'About', label: 'Sobre' },
  { name: 'Contact', label: 'Contato' },
];

export default function AppToolbar({
  navigation,
  title,
  currentScreen,
}) {
  function logout() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.top}>
        <View>
          <Text style={styles.brand}>FatecVerde</Text>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={logout}
          hitSlop={8}
        >
          <Text style={styles.logout}>Sair</Text>
        </Pressable>
      </View>

      <View style={styles.menu}>
        {menu.map((item) => {
          const active = currentScreen === item.name;

          return (
            <Pressable
              key={item.name}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              style={[
                styles.menuItem,
                active && styles.active,
              ]}
              onPress={() => navigation.navigate(item.name)}
            >
              <Text style={[
                styles.menuText,
                active && styles.activeText,
              ]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  brand: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 1.5,
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 20,
    marginTop: 3,
  },
  logout: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  menu: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 14,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  active: {
    borderBottomColor: colors.primary,
  },
  menuText: {
    color: colors.muted,
    fontSize: 14,
  },
  activeText: {
    color: colors.primary,
    fontWeight: '700',
  },
});