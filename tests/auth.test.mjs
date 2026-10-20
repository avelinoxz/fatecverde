import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DEMO_CREDENTIALS, validateCredentials } from '../src/utils/auth.js';

test('login correto permite entrada', () => {
  assert.equal(validateCredentials(DEMO_CREDENTIALS.username, DEMO_CREDENTIALS.password), '');
});

test('usuário vazio é rejeitado', () => {
  assert.match(validateCredentials('  ', 'qualquer'), /usuário/i);
});

test('senha vazia é rejeitada', () => {
  assert.match(validateCredentials('visitante', ''), /senha/i);
});

test('credenciais inválidas são rejeitadas', () => {
  assert.match(validateCredentials('outra-pessoa', 'verde123'), /inválidos/i);
  assert.match(validateCredentials('visitante', 'outra-senha'), /inválidos/i);
});

test('o usuário aceita espaços externos e a senha precisa corresponder exatamente', () => {
  assert.equal(validateCredentials('  visitante  ', 'verde123'), '');
  assert.match(validateCredentials('visitante', ' verde123 '), /inválidos/i);
});
