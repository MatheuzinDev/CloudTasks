/* eslint-disable react/prop-types */
import "./../Button/Button.css"
function Button(props) {

    return (
        <>
        <button className="button">{props.text}</button>
        </>
    )
}

export default Button
