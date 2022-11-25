import { render, screen } from '@testing-library/react';
import DateOfBirth from '../components/ui/inputs/dateOfBirth';
import userEvent from "@testing-library/user-event";

const mkFn = jest.fn()
describe('dateOfBirth testing', () => {

  it('should dateOfBirth component rendered', () => {
    render(<DateOfBirth
      defaultValues={undefined}
      onChangeDate={mkFn} />);
    const component = screen.getByTestId('birth');
    expect(component.children.length).toBe(3);
  })
})
