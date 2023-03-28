import { stepperTitles, titleSection, initialOptions } from '../../../../components/custom/consultancy/consultancy';

describe('titleSection', () => {
    test('debe tener 4 elementos', () => {
        expect(titleSection).toHaveLength(4);
    });

    test('el primer elemento debe ser "Conozca los tipos de vivienda y las ventajas de cada una"', () => {
        expect(titleSection[0]).toBe('Conozca los tipos de vivienda y las ventajas de cada una');
    });

    test('el segundo elemento debe ser "Organice sus finanzas y planifique el pago de su vivienda"', () => {
        expect(titleSection[1]).toBe('Organice sus finanzas y planifique el pago de su vivienda');
    });

    test('el tercer elemento debe ser "Tenga en cuenta los siguientes gastos adicionales"', () => {
        expect(titleSection[2]).toBe('Tenga en cuenta los siguientes gastos adicionales');
    });

    test('el cuarto elemento debe ser "¡Felicitaciones, ha logrado su meta!"', () => {
        expect(titleSection[3]).toBe('¡Felicitaciones, ha logrado su meta!');
    });
});
describe('stepperTitles', () => {
    test('debe tener 4 elementos', () => {
        expect(stepperTitles).toHaveLength(4);
    });

    test('el primer elemento debe ser "Características de vivienda"', () => {
        expect(stepperTitles[0]).toBe('Características de vivienda');
    });

    test('el segundo elemento debe ser "¿Cómo pagar la vivienda?"', () => {
        expect(stepperTitles[1]).toBe('¿Cómo pagar la vivienda?');
    });

    test('el tercer elemento debe ser "Legalización de una vivienda"', () => {
        expect(stepperTitles[2]).toBe('Legalización de una vivienda');
    });

    test('el cuarto elemento debe ser "Reciba su vivienda"', () => {
        expect(stepperTitles[3]).toBe('Reciba su vivienda');
    });
});
describe('initialOptions ', () => {
    test('debe tener 4 elementos', () => {
        expect(initialOptions).toHaveLength(4);
    })

})