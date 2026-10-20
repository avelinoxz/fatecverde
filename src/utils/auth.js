/** Login acadêmico simulado: as credenciais existem apenas em memória/código. */
export const DEMO_CREDENTIALS = Object.freeze({
  username: 'visitante',
  password: 'verde123',
});

/** Retorna a mensagem de erro, ou '' quando as credenciais são válidas. */
export function validateCredentials(username, password) {
  if (!username.trim()) return 'Informe seu usuário para continuar.';
  if (!password) return 'Informe sua senha para continuar.';
  if (username.trim() !== DEMO_CREDENTIALS.username || password !== DEMO_CREDENTIALS.password) {
    return 'Usuário ou senha inválidos. Confira os dados e tente novamente.';
  }
  return '';
}
