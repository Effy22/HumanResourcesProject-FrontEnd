import './Company.css';
import MenuList from "../../components/molecules/Company/MenuList";
import Header from '../../components/molecules/Company/Header';


function Company(){

    return(
    <>

        <div className= "container">
            <div className="rowC mt-5 p-3 border border-primary arround-1">
                <Header />
            </div>

            <div className="rowC mt-3 p-3 border border-success">
                <div className="col=3"> <MenuList/> </div>

                <div className="col=9"> 
                </div>
            </div>

            <div>
            

        </div>

        </div>
        
        
         
    </>
       
    )
    
}

export default Company;