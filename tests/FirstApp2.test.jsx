
import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp 2 />', () => {

    const title = "Hola Soy Goku"
    const subTitle = "Soy un subtitulo"

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {


        render(<FirstApp title={title} />)
        expect(screen.getAllByText(title)).toBeTruthy()
        // screen.debug()
    })

    test('Debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subtitle={subTitle}
            />
        )

        expect(screen.getAllByText(subTitle).length).toBe(3)
    })

})