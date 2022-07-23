import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas <CounterApp/>', () => {

    const initail_value = 10

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initail_value} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el valor inicial de 100', () => {
        render(
            <CounterApp
                value={100}
            />
        )
        expect(screen.getByText(0)).toBeTruthy()
    })

    test('Debe de incrementar con el boton +1', () => {
        render(
            <CounterApp
                value={initail_value}
            />
        )
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('1')).toBeTruthy()
    })

    test('Debe de decrementar con el boton -1', () => {
        render(
            <CounterApp
                value={initail_value}
            />
        )
        fireEvent.click(screen.getByText('-1'))
        // expect(screen.getByText('-1')).toBeTruthy()
    })

    test('Debe de funcionar el boton reset', () => {
        render(
            <CounterApp
                value={355}
            />
        )
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))

        screen.debug()
        expect(screen.getByText('355')).toBeTruthy()
    })



})