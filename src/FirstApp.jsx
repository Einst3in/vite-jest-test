
import PropTypes from 'prop-types'


export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props)

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.propType = {
    subtitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}


FirstApp.defaultProps = {
    name: 'Miguel',
    subtitle: 'Default sub-title',
    title: 'Default title',
}