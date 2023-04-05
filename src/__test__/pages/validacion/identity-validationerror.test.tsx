import { render } from "@testing-library/react"
import ErrorValidacion from "../../../pages/validacion/error-validacion-identidad"
import React from "react"

describe('<IdentityError/>', () => { 

  test('should render de component succesfully', () => { 
    const {container}=render(<ErrorValidacion/>);
    expect(container).toBeTruthy()
   })
 })