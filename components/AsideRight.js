import Link from 'next/link';

export default function AsideRight(){

    return (

        <div className="aside_right">

            
            <Link href="/">
                <a className="button"><h2>New Post</h2></a>
            </Link>

            <Link href="/">
                <a></a>
            </Link>
            
            <Link href="/">
                <a className="aside_link"><h2>My Posts</h2></a>
            </Link>
            
            <Link href="/">
                <a className="aside_link"><h2>Fav Posts</h2></a>
            </Link>
            
            <Link href="/">
                <a className="aside_link"><h2>Fav Artists</h2></a>
            </Link>
            
           

        </div>
    )
}