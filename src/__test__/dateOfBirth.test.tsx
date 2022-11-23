import { render } from '@testing-library/react';
import DateOfBirth from '../components/ui/inputs/dateOfBirth';
import userEvent from "@testing-library/user-event";

const mkFn = jest.fn()
describe('dateOfBirth testing', () => {
  render(<DateOfBirth id="dateOfBirth"
    defaultValues={undefined}
    onChangeDate={mkFn} />)
  it('should test some component from landing page', () => {


  })
})
