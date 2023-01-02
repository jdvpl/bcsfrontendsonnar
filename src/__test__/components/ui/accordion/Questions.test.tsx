import { render, fireEvent } from '@testing-library/react';
import Questions from '../../../../components/ui/Accordion/index';
import '@testing-library/jest-dom'

describe('<Questions/>', () => {
  it('expands and collapses the correct accordion item when clicked', () => {
    const { getByText, queryByText, getByTestId } = render(<Questions />);

    const itemHeader1 = getByText('¿Cuales son los gastos adicionales al momento de comprar vivienda?')

    const itemHeader3 = getByText('¿Debo elegir la vivienda antes o despues de pedir el crédito hipotecario?')

    const itemHeader4 = getByText('¿Cuales son los factores que analiza el banco para aprobar un crédito hipotecario?')
    const itemHeader5 = getByText('¿Cuales son los factores que analiza el banco para aprobar un crédito hipotecario?');
    fireEvent.click(itemHeader1);
    expect(getByTestId('itemATest1')).toBeInTheDocument();

    // Hacemos click en el segundo elemento de tipo ItemAccordion
    fireEvent.click(getByText('¿El banco me presta el 100% del valor de la vivienda?'));

    // Comprobamos que se ha expandido el contenido del segundo elemento
    expect(getByText('No, debido a la ley de vivienda el banco tiene permitido prestar para crédito hipotecario hasta el 80% del valor total del inmueble para vivienda VIS y 70% para vivienda NO VIS.')).toBeInTheDocument();

    // Comprobamos que el contenido del primer elemento se ha cerrado
    expect(queryByText('Para el proceso de legalización es necesario contemplar los gastos de avalúo, estudio de títulos y escrituración. Si desea conocer más a cerca de estos conceptos, diríjase a nuestra asesoría interactiva.')).toBeNull();
    expect(getByTestId('itemATest1')).toBeInTheDocument();
    fireEvent.click(itemHeader3);
    expect(getByTestId('itemTest3')).toBeInTheDocument();
    fireEvent.click(itemHeader4);
    expect(getByTestId('itemATest4')).toBeInTheDocument();
    fireEvent.click(itemHeader5);
    expect(getByTestId('itemATest5')).toBeInTheDocument();
  });
})
