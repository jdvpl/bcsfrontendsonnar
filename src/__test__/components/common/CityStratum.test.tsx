import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import CityStratum from '../../../components/commons/CityStratum'

describe('<CityStratum/>', () => {  
  const setValue=jest.fn()
  const validationRules = { required: true };
  it('should render', () => {
    const { container } = render(<CityStratum setValue={setValue} rules={validationRules} />);
    expect(container).toBeTruthy();
  });

  it('should render the component without errors', () => {
    const { getByText } = render(<CityStratum setValue={setValue} rules={validationRules}  />);
    expect(getByText('Ciudad de la vivienda')).toBeInTheDocument();
    expect(getByText('Estrato de la vivienda')).toBeInTheDocument();
  });

})