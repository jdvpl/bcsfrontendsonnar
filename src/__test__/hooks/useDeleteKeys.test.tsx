import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { delKeysRedis } from '../../services';
import useDeleteKeys from '../../hooks/useDeleteKeys';

describe('useDeleteKeys', () => {
    test('switch when is ALLOWED', async () => {
      const { result } = renderHook(() => useDeleteKeys());
      act(() => {
        result;
      });
    });})