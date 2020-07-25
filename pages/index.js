import Layout from '../components/Layout';

import Main from '../components/Main';
import AsideLeft from '../components/AsideLeft';
import AsideRight from '../components/AsideRight';


function HomePage() {


    return (
       
        <Layout>
           
            <div className="global-container">

                <AsideLeft/>
                <Main/>
                <AsideRight/>

            </div>
          
        </Layout>
      
        )
  }
  
  export default HomePage