import { SesionStorageKeys } from "../../session"

describe('SesionStorageKeys', () => {
  test('has correct key and description for device', () => {
    expect(SesionStorageKeys.device.key).toBe('bcsm::a')
    expect(SesionStorageKeys.device.description).toBe('This key saves the kind of device in sessionStorage')
  })
  test('has correct key and description for dataUser', () => {
    expect(SesionStorageKeys.dataUser.key).toBe('bcsm::b')
    expect(SesionStorageKeys.dataUser.description).toBe('This key saves the data in sessionStorage from initial form')
  })

  test('has correct key and description for DataQuestions', () => {
    expect(SesionStorageKeys.DataQuestions.key).toBe('bcsm::c')
    expect(SesionStorageKeys.DataQuestions.description).toBe('This key saves the questions in sessionStorage from initial form')
  })
  test('has correct key and description for mortgageValues', () => {
    expect(SesionStorageKeys.mortgageValues.key).toBe('bcsm::j')
    expect(SesionStorageKeys.mortgageValues.description).toBe('This key save the data of credit data form')
  })

  test('keys are unique', () => {
    const keys = Object.values(SesionStorageKeys).map((obj) => obj.key);
    const uniqueKeys = new Set(keys);
    expect(keys.length).toBe(uniqueKeys.size);
  });

  test('keys match descriptions', () => {
    Object.values(SesionStorageKeys).forEach((obj) => {
      expect(obj.key).toBeDefined();
      expect(obj.description).toBeDefined();
    });
  });

  test('keys start with "bcsm::"', () => {
    Object.values(SesionStorageKeys).forEach((obj) => {
      expect(obj.key.startsWith('bcsm::')).toBe(true);
    });
  });
  test('should contain all expected keys', () => {
    const expectedKeys = [
      'device',
      'dataUser',
      'DataQuestions',
      'dataTuEncripPhone',
      'dataProcessBiometry',
      'dataFormSimulation',
      'dataFormSimulationResponse',
      'dataBasicData',
      'financialDataForm',
      'mortgageValues',
      'protectedRoutes',
      'basicDataUser',
      'applicationResponse',
      'openedTutorial',
      'pdfData',
      'orderNumber',
      'marketingCampaing'
    ];
    const keys = Object.keys(SesionStorageKeys);
    expect(keys).toEqual(expectedKeys);
  });

  test('each key should have a description', () => {
    Object.keys(SesionStorageKeys).forEach(key => {
      expect(SesionStorageKeys[key].description).toBeDefined();
    });
  });

  test('each key should have a valid key', () => {
    Object.keys(SesionStorageKeys).forEach(key => {
      expect(SesionStorageKeys[key].key).toBeDefined();
      expect(typeof SesionStorageKeys[key].key).toBe('string');
      expect(SesionStorageKeys[key].key.startsWith('bcsm::')).toBe(true);
    });
  });
})