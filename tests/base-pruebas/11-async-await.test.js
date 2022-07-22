import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas 11-async-await', () => { 
    test('Debe retornar el URL de una imagen', async () =>{
        
        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')
        
    })
 })