import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="email" placeholder="your@gmail.com" className="e" />
                    <input type="password" placeholder="Password"  />
                    <button className="primary">Login</button>

                    <div className="text-center py-2 text-gray-500">
                        Dont't have an acount yet? <Link className="underline text-black" to={"/register"}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}