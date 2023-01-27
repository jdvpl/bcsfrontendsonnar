import { SesionStorageKeys } from "../../session"

describe('SesionStorageKeys', () => {
  test('has correct key and description for device', () => {
    expect(SesionStorageKeys.device.key).toBe('device')
    expect(SesionStorageKeys.device.description).toBe('This key saves the kind of device in sessionStorage')
  })
  test('has correct key and description for dataUser', () => {
    expect(SesionStorageKeys.dataUser.key).toBe('dataTU')
    expect(SesionStorageKeys.dataUser.description).toBe('This key saves the data in sessionStorage from initial form')
  })

  test('has correct key and description for DataQuestions', () => {
    expect(SesionStorageKeys.DataQuestions.key).toBe('DataQuestions')
    expect(SesionStorageKeys.DataQuestions.description).toBe('This key saves the questions in sessionStorage from initial form')
  })
  test('has correct key and description for mortgageValues', () => {
    expect(SesionStorageKeys.mortgageValues.key).toBe('MortgageValues')
    expect(SesionStorageKeys.mortgageValues.description).toBe('This key save the data of credit data form')
  })
})