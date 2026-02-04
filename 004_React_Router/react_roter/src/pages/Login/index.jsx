import { useAuth } from "../../context/auth-context";
export const Login = () => {
    const { isLoggedIn ,setIsLoggedIn}=useAuth()
    const onLoginClick=()=>{
        setIsLoggedIn((prev) => !prev)

    }
    return (
        <>
            <h1>This is Login Page</h1>
            {
                !isLoggedIn &&  <label> Mobile No.:
                <input placeholder="rnter mobile nuber" maxLength={10} />
            </label>
            }
           
            <button onClick={onLoginClick}>{!isLoggedIn ? 'Login':'Logout'}</button>
        </>
    )
}