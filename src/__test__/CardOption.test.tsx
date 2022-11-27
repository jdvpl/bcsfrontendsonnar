import { render } from '@testing-library/react';
import { CardOption } from '../components/ui/Card/OptionCard';

const fn = jest.fn()
const options = [
  {
    id: '1',
    value: 'Proceso muy largo',
  },
  {
    id: '2',
    value: 'No me dió confianza',
  },
  {
    id: '3',
    value: 'No entendí qué debía hacer',
  },
  {
    id: '4',
    value: 'Faltó acompañamiento',
  },
  {
    id: '5',
    value: 'Otro',
  },
]
describe('Card', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<CardOption option={options[1]} actualOption={options[0]} onChangeActualOption={fn} />);
    expect(baseElement).toBeTruthy();
  });
});


