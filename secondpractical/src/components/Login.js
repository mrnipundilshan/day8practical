import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [user, setUser] = useState({username:"",pwd:"",error:""})
    const getTextInput=(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }
}