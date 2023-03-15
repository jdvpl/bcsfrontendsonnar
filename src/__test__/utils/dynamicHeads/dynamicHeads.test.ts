import { parseHeadProperties, parseToTitleCase } from "../../../utils/dynamicHeads"

describe("parseHeadProperties ", () => {
    test("Deberia devolver para cualquier ruta un objeto con dos propiedades", () => {
        expect(parseHeadProperties("/")).toEqual({
            description: "",
            title: "Vivienda"
        })
    })
    test("Deberia devolver para cualquier ruta un objeto con dos propiedades el titulo deberia ir en title case", () => {
        expect(parseHeadProperties("casa/nueva")).toEqual({
            description: "",
            title: "Casa Nueva"
        })
    })
})

describe("parseToTitleCase ", () => {
    test("Deberia devolver un texto la primera letra de cada palabra en mayuculas", () => {
        expect(parseToTitleCase("casa nueva")).toEqual("Casa Nueva")
    })
})