import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas <CounterApp/>', () => {
    
    const initail_value = 100

    test('debe de hacer match con el snapshot', ()=>{
        const {container} = render(<CounterApp value={100}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el valor inicial de 100', ()=>{
        render(
            <CounterApp
                value={100}
            />
        )
        expect(screen.getByText(0)).toBeTruthy()
    })

 })