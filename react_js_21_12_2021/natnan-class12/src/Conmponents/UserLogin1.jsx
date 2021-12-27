import { useRef } from "react";

const UserLogin1 = () => {
const nameInput = useRef();
const emailInput = useRef();
const passwordInput = useRef();

    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(`User's full name: ${nameInput.current.value}, User's email adress: ${emailInput.current.value}, User's password: ${passwordInput.current.value}`);
            }}>
                <input placeholder="Insert full name" type="text" ref={nameInput}/>
                <input placeholder="Insert email adress" type="email" ref={emailInput}/>
                <input placeholder="Insert password" type="number" ref={passwordInput}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default UserLogin1;