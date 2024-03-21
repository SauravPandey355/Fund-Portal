import axios from "axios";
import { useEffect, useState } from "react";
import Fund from './Fund';
export default function Funds(){
    const [fund,setFund] = useState([]);
    const GetFund = async()=>{
        const result = await axios.get("http://localhost:3001/funds");
        setFund(result.data);
    };
    useEffect(()=>{
        GetFund()
    },[]);
    const GetAllFunds=
        fund.map((e)=>{
            return(<Fund Donor={e.Donor} Amount = {e.Amount} Date = {e.Date} key={e.id}/>)});
    return(<div>
        {GetAllFunds}
    </div>);
}