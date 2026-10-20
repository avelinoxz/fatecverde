import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default StyleSheet.create({
  channelsCard: {
    marginTop: 26,
    padding: 21,
    backgroundColor: colors.primary,
    borderRadius: 24,
  },
  channelsHeading: { color: colors.secondary, fontSize: 10, letterSpacing: 2.0, fontWeight: '800', marginBottom: 3 },
  channel: { paddingVertical: 17, flexDirection: 'row', alignItems: 'center', gap: 13 },
  channelDivider: { borderTopWidth: 1, borderColor: '#43614D' },
  icon: { height: 41, width: 41, borderRadius: 14, backgroundColor: '#385744', alignItems: 'center', justifyContent: 'center' },
  iconText: { color: colors.secondary, fontSize: 22, fontWeight: '800' },
  channelInfo: { flex: 1 },
  channelType: { fontSize: 9, fontWeight: '800', color: '#B7CDBA', letterSpacing: 1.6 },
  channelValue: { fontSize: 13, fontWeight: '700', color: colors.white, lineHeight: 20, marginTop: 4 },
  hours: { borderRadius: 11, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#385744' },
  hoursText: { color: '#E3ECDD', fontSize: 11, lineHeight: 17 },
  formHeader: { marginTop: 35, marginBottom: 17 },
  formIntro: { fontSize: 13, lineHeight: 21, color: colors.muted, marginTop: 7 },
  formCard: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 23, padding: 21 },
  counter: { fontSize: 11, color: colors.muted, textAlign: 'right', marginTop: -11, marginBottom: 16 },
  error: { color: colors.danger, fontSize: 12, lineHeight: 19, fontWeight: '700', marginBottom: 15 },
  success: { borderRadius: 13, backgroundColor: colors.surfaceSoft, padding: 14, marginBottom: 16 },
  successTitle: { color: colors.success, fontSize: 13, fontWeight: '800' },
  successText: { color: colors.text, fontSize: 12, lineHeight: 19, marginTop: 5 },
  clearButton: { alignItems: 'center', paddingTop: 17, paddingBottom: 3 },
  clearText: { color: colors.muted, fontSize: 13, fontWeight: '700' },
  disclaimer: { color: colors.muted, fontSize: 11, lineHeight: 18, marginTop: 20 },
  backButton: { marginTop: 21 },
  pressed: { opacity: 0.7 },
});
