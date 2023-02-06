import { fireEvent, render } from "@testing-library/react";
import ApplicationApproval from "../../pages/confirmacion-solicitud";
import { createMockRouter } from '../utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { routes } from "../../routes";

describe('<ApplicationApproval/>', () => {
  it('should render "Authentication" successfully', () => {
    const { baseElement } = render(<ApplicationApproval />);
    expect(baseElement).toBeTruthy();
  });
  it('should get out', () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <ApplicationApproval />
      </RouterContext.Provider>
    );
    const btnGetOut = getByTestId('btnGetOut');
    fireEvent.click(btnGetOut);
    expect(router.push).toHaveBeenCalledWith(routes.ratings)
  });
})