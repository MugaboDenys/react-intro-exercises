import { useRef } from "react";

const Button = ({children}) => {
    const buttonRef = useRef(null);

  const handleClick = () => {
    window.alert(`You clicked ${buttonRef.current.textContent}`);
  }
    return ( 
        <button ref={buttonRef} onClick={handleClick} className="py-2 px-4 border-2 mt-64 border-black rounded">
            {children}
        </button>
     );
}
 
export default Button;