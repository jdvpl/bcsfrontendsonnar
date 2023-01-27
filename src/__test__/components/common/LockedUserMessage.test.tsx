import { render } from "@testing-library/react"
import React from "react"
import LockeUsersMessage from "../../../components/commons/LockeUsersMessage"
import '@testing-library/jest-dom';

describe('<LockeUsersMessage/>', () => {
  test('should render component', () => {
    const { baseElement } = render(<LockeUsersMessage lockedUser={true} />)
    expect(baseElement).toBeTruthy()
  })
  test('does not render message when user is not locked', () => {
    const lockedUser = false;
    const { queryByText } = render(<LockeUsersMessage lockedUser={lockedUser} />)
    const listItem1 = queryByText(/Si usted tiene o ha tenido productos con el Banco Caja Social, ya cuenta con una contraseña para acceder el canal digital/i)
    expect(listItem1).toBeNull()
  });

  test('renders locked user message', () => {
    const lockedUser = true;
    const { getByText } = render(<LockeUsersMessage lockedUser={lockedUser} />)
    const linkElement = getByText(/¿Olvido su contraseña?/i)
    expect(linkElement).toBeInTheDocument()
    const listItem2 = getByText(/No ingresar claves de tarjetas/i)
    expect(listItem2).toBeInTheDocument()
  });
})
