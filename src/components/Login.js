import {GoogleLogin} from "react-google-login"
import Navbar from "../Navbar"

const clientId = process.env.GOOGLE_CLIENT_ID
function Login(){
    const onSuccess=(res)=>{
        console.log("successful login: ",res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("unsuccesful login: ",res)
    }
    return(<div id="SignIn">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                />
    </div>)
}
export default Login
