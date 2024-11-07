/* eslint-disable react/prop-types */
import "../Input/Input.css"
function Input(props) {
    const inputStyle = {
      width: props.width || '100%',           
      height: props.height || '40px',       
      backgroundColor: props.backgroundColor || '#fff',
      color: props.color,           
      fontSize: props.fontSize || '16px',      
      padding: props.padding || '10px',         
      border: props.border || '1px solid #ccc', 
      borderRadius: props.borderRadius || '4px', 
      outline: 'none',
    };
  
    return (
      <input className="input"
        type={props.type || 'text'}  
        placeholder={props.placeholder} 
        style={inputStyle}          
        value={props.value}           
        onChange={props.onChange}       
      />
    );
  }
  
  export default Input;
  