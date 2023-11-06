import { Link } from "react-router-dom"
export default function RegisterPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form action="" className="max-w-md mx-auto">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="your@gmail.com"  />
                <input type="password" placeholder="Password"  />
                <input type="password" placeholder="Repeat Password"  />
                <button className="primary">Register</button>

                <div className="text-center py-2 text-gray-500">
                    Already have an account? <Link className="underline text-black" to={"/login"}>Login now</Link>
                </div>
            </form>
        </div>
    </div>
    )
}