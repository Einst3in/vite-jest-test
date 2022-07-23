
import PropTypes from 'prop-types'


export const FirstApp = ({ title, subtitle, name }) => {

    // console.log(props)

    return (
        <>
            <div data-testid="test-title">{title}</div>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.protoType = {
    subtitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}


FirstApp.defaultProps = {
    name: 'Miguel',
    subtitle: 'Default sub-title',
    title: 'Default title',
}