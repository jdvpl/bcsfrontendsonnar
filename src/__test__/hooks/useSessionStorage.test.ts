import { getSessionStorageOrDefault } from "../../hooks/useSessionStorage";

describe('useSessionStorage', () => {
  test('getSessionStorageOrDefault should return default value if stored value does not exist', () => {
    const key = 'mykey';
    const defaultValue = { username: 'user1', password: 'password1' };
    const value = getSessionStorageOrDefault(key, defaultValue);
    expect(value).toEqual(defaultValue);
  });
});