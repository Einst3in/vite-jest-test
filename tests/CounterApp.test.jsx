import { render } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas <CounterApp/>', () => {
    
    const initail_value = 100

    test('debe de hacer match con el snapshot', ()=>{
        const {container} = render(<CounterApp value={initail_value}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar el valor inicial de 100', ()=>{
        render(
            <CounterApp
                value={initail_value}
            />
        )
        expect(initail_value).toBeTruthy()
    })

 })