/* eslint-disable react/prop-types */
import "./../Button/Button.css";

function Button(props) {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
    padding: props.padding,
    border: 'none',
    borderRadius: props.borderRadius,
    cursor: 'pointer',
    marginLeft: props.marginLeft
  };

  

  return (
    <>
      <button className="button" style={buttonStyle} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
