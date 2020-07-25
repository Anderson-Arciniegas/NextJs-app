import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header';
function Layout({ children }) {


    return (
        <div>
            <Head>
                <title>App NextJs</title>  
            </Head>
            <Header/>
            <div>{children}</div>
        
        </div>
    )
  }
  
  export default Layout