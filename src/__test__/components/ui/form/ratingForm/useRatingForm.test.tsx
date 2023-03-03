import React from 'react';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import useInactivityModal from '../../../../../components/ui/Modal/inactivityModal/useInactivityModal';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../../../utils/createMockRouter';
import { routes } from '../../../../../routes';
import useRatingForm from '../../../../../components/ui/Form/ratingForm/useRatingForm';

const router = createMockRouter({});
const wrapper = ({ children }) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);

describe('useInactivityModal', () => {
  test('onCloseModal event', async () => {
    const { result } = renderHook(() => useRatingForm());
    act(() => {
      result.current.changeRate(10);
    });
    expect(result.current.rate).toBe(10);
  });
  test('onChangeActualOption event', async () => {
    const { result } = renderHook(() => useRatingForm());
    act(() => {
      result.current.onChangeActualOption({
        id: '1',
        value: 'Proceso muy largo',
      });
    });
    expect(result.current.actualOption).toEqual({
      id: '1',
      value: 'Proceso muy largo',
    });
  });
  test('renderForm event', async () => {
    const { result } = renderHook(() => useRatingForm());
    act(() => {
      expect(
        result.current.renderForm().props.children[0]?.props.children?.props?.children
      ).toBe('¿Cómo califica su experiencia solicitando su crédito de vivienda?');
    });
    act(() => {
      result.current.setQualify(true);
    });
    act(() => {
      expect(
        result.current.renderForm().props.children[0]?.props.children?.props?.children
      ).toBe('¡Gracias por calificar su experiencia!');
    });
  });
});
