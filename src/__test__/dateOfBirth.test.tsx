import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import DateOfBirth from '../components/ui/inputs/dateOfBirth';

const mkFn = jest.fn()
describe('dateOfBirth testing', () => {
  render(<DateOfBirth id="dateOfBirth"
    defaultValues={undefined}
    onChangeDate={mkFn} />)
  it('should test some component from landing page', () => {


  })
})
