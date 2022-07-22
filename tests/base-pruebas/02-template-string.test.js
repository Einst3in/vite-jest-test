import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Puebas 02-template-string', () => { 
    test('getSaludo', ()=>{
        const name = 'Fernando'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
    })
 })