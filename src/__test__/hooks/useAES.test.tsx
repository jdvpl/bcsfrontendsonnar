import useAES from '../../hooks/useAES';

describe('useAES', () => {
  const { encriptPass, decryptPass, hashKey, allResponse, allResponseDecrypted } = useAES();
  const password = 'mypassword';
  const key = 'mykey';
  test('encriptPass should correctly encrypt a password', () => {
    const encrypted = encriptPass(password, key);
    expect(encrypted).not.toEqual(password);
  })
  test('decryptPass should correctly decrypt an encrypted password', () => {
    const encrypted = encriptPass(password, key);
    const decrypted = decryptPass(encrypted, key);
    expect(decrypted).toEqual(password);
  });
  test('decryptPass should throw an error for an invalid key', () => {
    const encrypted = encriptPass(password, key);
    expect(() => decryptPass(encrypted, 'invalidkey')).toThrow('Invalid credentials');
  });
  test('hashKey should correctly hash a key', () => {
    const key = 'mykey';
    const hashed = hashKey(key);
    expect(hashed).not.toEqual(key);
  });
  test('allResponse should correctly encrypt data', () => {
    const data = { username: 'user1', password: 'password1' };
    const key = 'mykey';
    const encrypted = allResponse(data, key);
    expect(encrypted).not.toEqual(data);
  });
  test('allResponseDecrypted should correctly decrypt encrypted data', async () => {
    const data = { username: 'user1', password: 'password1' };
    const key = 'mykey';
    const encrypted = await allResponse(data, key);
    const decrypted = await allResponseDecrypted(encrypted, key);
    expect(decrypted).toEqual(data);
  });
});
