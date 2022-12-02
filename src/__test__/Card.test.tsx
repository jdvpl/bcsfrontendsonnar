import { render } from '@testing-library/react';
import Card from '../components/ui/simulation/Card';

describe('<Card/>', () => {
  let component: any;
  beforeEach(() => {
    component = render(
      <Card
        className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA]  mb-[16px] font-semibold rounded-[8px] "
        title="Cuota mensual total con seguros"
        value={'200.000.000'}
        text="text-[32px] pl-[23px] pt-2 flex items-baseline"
        urlsvg=""
        classtitle="h-[18px] pt-[16px] text-[16px]"
        subvalue="pesos"
        textsub="30"
        tooltiptext=""
      />
    );
  });
  test('should render successfully', () => {
    expect(component.baseElement).toBeTruthy();
  });
  test('should render title', () => {
    component.getByText('Cuota mensual total con seguros');
    console.log(component)
  });
  test('should render value', () => {
    component.getByText('200.000.000');
    console.log(component)
  });
});

