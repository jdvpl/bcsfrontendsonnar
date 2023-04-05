import { render } from "@testing-library/react"
import IdentityError from "../../../pages/validacion/error-validacionIdentidad"
import React from "react"

describe('<IdentityError/>', () => { 

  test('should render de component succesfully', () => { 
    const {container}=render(<IdentityError/>);
    expect(container).toBeTruthy()
   })
 })