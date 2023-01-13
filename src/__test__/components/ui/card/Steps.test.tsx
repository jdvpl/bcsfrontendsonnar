import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Step from '../../../../components/ui/Card/Step';
describe('<Step/>', () => {
  test('should render correctly the component', () => {
    const { baseElement } = render(<Step titleNumber={'1'} description={'Hola mundo'} />)
    expect(baseElement).toBeTruthy();
  })
  test('should find the correct text in the component', () => {
    const { getByText } = render(<Step titleNumber={'1'} description={'Hola mundo'} />)
    const ele = getByText('Hola mundo');
    expect(ele).toBeInTheDocument();
  })

});