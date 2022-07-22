import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser(testUser)

        expect(testUser).toEqual(user)

    })

    test('getUsuarioActivo', () => {
        const name = 'fernando'

        const user = getUsuarioActivo(name)

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })



    })

})