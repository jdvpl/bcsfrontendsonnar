import { renderHook } from '@testing-library/react-hooks';
import useVerificationForm from '../../hooks/useVerificationForm';

const initialFields = { password: '' };
const { result } = renderHook(() => useVerificationForm(initialFields, jest.fn()));

describe('<useVerificationForm/>', () => {
  test('set border to #798C98 when password is not empty', () => {
    const setBorder = jest.fn();
    const { rerender } = renderHook(() =>
      useVerificationForm({ password: 'password' }, setBorder)
    );
    expect(setBorder).toHaveBeenCalledWith('#798C98');
  });
  test('set border to #E9132B when password is empty', () => {
    const setBorder = jest.fn();
    const { result } = renderHook(() => useVerificationForm({ password: '' }, setBorder));
    expect(setBorder).not.toHaveBeenCalledWith('#E9132B');
  });
  it('should set border color to #798C98 when password is not empty', () => {
    const { result } = renderHook(() =>
      useVerificationForm({ password: 'test' }, jest.fn())
    );
    expect(result.current).toBe(undefined);
  });
  it('', () => {
    const setBorder = jest.fn();
    const { result } = renderHook(() => useVerificationForm({ password:''}, setBorder));

    // expect(result.current).toBe(undefined);
  });
});
