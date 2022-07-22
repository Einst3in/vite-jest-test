import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Puebas en imp-exp', () => {
    test('getHeroeByid', () => {

        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1, name: 'Batman', owner: 'DC'
        })

    })

    test('getHeroeByid undefined', () => {

        const id = 100
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()

    })


    //Tarea:
    // getHeroesByOwner
    // Debe de retornar un arreglo con los heroes de DC
    // length === 3
    //toEqual al arreglo filtrado

    //debe de retornar un arreglo con los heroes de Marvel
    //length === 2

    test('DC', () => {
        const heroes = getHeroesByOwner('DC')

        //toEqual
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        //length
        expect(heroes.length).toBe(3)

    })

    test('Marvel', () => {
        const heroes = getHeroesByOwner('Marvel')

        expect(heroes.length).toBe(2)
    })



})