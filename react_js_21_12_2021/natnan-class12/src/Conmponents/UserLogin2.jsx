import { useRef, useState } from "react";

const UserLogin2 = () => {
    const [disabled, setDisabled] = useState(true);
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();

    function unDisable(){
        if(nameInput.current.value !== "" &&
            emailInput.current.value !== "" &&
            passwordInput.current.value !== "") {
                setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(`User's full name: ${nameInput.current.value}, User's email adress: ${emailInput.current.value}, User's password: ${passwordInput.current.value}`);
            }}>
                <input placeholder="Insert full name" type="text" ref={nameInput} onBlur={unDisable}/>
                <input placeholder="Insert email adress" type="email" ref={emailInput} onBlur={unDisable}/>
                <input placeholder="Insert password" type="number" ref={passwordInput} onBlur={unDisable}/>
                <button disabled={disabled} type="submit">Login</button>
            </form>
        </div>
    )
}

export default UserLogin2;