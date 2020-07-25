import Link from 'next/link';

export default function AsideLeft(){

    return (

        <div className="aside_left">

            <h2 className="subtittle">Categories</h2>
            <div className="categories"> 
                <ul>
                    <li>
                        <Link href="/">
                            <a><h3>Tops</h3></a>
                        </Link>
                    </li>
                        
                    <li>
                        <Link href="/">
                            <a><h3>Artists</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a><h3>Styles</h3></a>
                        </Link>
                        
                    </li>
                        <ul>
                            <li>
                                <Link href="/articles/0">
                                    <a>Black work</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles/1">
                              
                                    <a>Neo Tradi</a>
                                </Link>
                            </li>
                           
                            <li>
                                <Link href="/articles/2">
                                    <a>New School</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles/3">
                                    <a>Realism</a>
                                </Link>
                            </li>
                        </ul>

                </ul>
            </div>

        </div>


    )
}


