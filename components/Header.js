import Link from 'next/link'

export default function Header(){

    return (
        <div className="header">
            <div className="container1">
               
                <Link href="/">
                    <a>
                        <img src="/crown.svg" alt="Vercel Logo" className="logo1" />
                        <h1 className="tittle">TattooKing</h1></a>
                </Link>
                
              
            </div>
            <div className="container2">
                <input className="search" type="text" placeholder="Search" />
                <img src="/search.svg" alt="Vercel Logo" className="logo2" />
            </div>
            <div className="container3">
                <Link href="/">
                    <a><h2 className="login-header">Log In</h2></a>
                </Link>
                <Link href="/">
                <a><h2 className="login-header">Sign In</h2></a>
                </Link>
            </div>   
        </div>
    )


}