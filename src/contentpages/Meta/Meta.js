import { NavLink } from 'react-router-dom';
import { changeLog } from '../../contentArrays';

function Meta() {
    return (
        <div className="KontentBox">

            <div className="KontentBoxSubNav">
                    <NavLink to="/meta">
                        <div className="KBSubNavActive"><h1>changelog</h1></div> 
                    </NavLink>
                    <NavLink to="/meta/yhteys"> 
                        <div className="KBSubNav"><h1>yhteys</h1></div>
                    </NavLink>
                    {/*<NavLink to="/meta/cv"> 
                        <div className="KBSubNav"><h1>cv</h1></div>
                    </NavLink>*/}
            
            </div>   
                
            <div className="Prose">
                {changeLog()}
            </div>

        </div>
    )
}

export default Meta;