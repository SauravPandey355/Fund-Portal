import './Dashboard.css';
import Funds from './Funds';
import Search from './Search';
export default function Dashboard(){
    return(<div className="dashboard">
        <div className="header">
            Trust Fund Portal
        </div>
        <div className="application-name">
            Application Name Here
        </div>
        <div className="search">
            <Search/>
        </div>
        <div>
            <Funds/>
        </div>
    </div>);
}