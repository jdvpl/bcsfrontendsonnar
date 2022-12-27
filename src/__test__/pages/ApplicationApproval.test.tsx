import { render } from "@testing-library/react";
import ApplicationApproval from "../../pages/confirmacion-solicitud";

describe('<ApplicationApproval/>', () => {
  it('should render "Authentication" successfully', () => {
    const { baseElement } = render(<ApplicationApproval />);
    expect(baseElement).toBeTruthy();
  });
})