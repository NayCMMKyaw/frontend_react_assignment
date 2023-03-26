import {useState} from "react";
import { ReactDOM } from "react-dom/client";

export default function MyForm(){
    const[account, setAccount] = useState({
        email: '',
        firstname: '',
        lastname: '',
        phnum: '',
        password: '',
        isValid: false
    })

    function handleChange(e) {
        // const name = e.target.name;
        // const value = e.target.value;
        // account[name] = value;
        // setAccount(account);
        const target = e.currentTarget;
        setAccount({
            ...account,
            [target.name]: target.value
        })
    }

    function validationCheck(){
        const phnumPattern = /^\d{10}$/ ;
        if(phnumPattern.test(account.phnum)){
            setAccount(
               {isValid : true}
            )
            
        }

    }
    
    function handleSubmit(event){
        event.preventDefault();
        //this.validationCheck();
        //if(account.isValid === true)
        alert(
            JSON.stringify(account)
        );
        // else
        // alert("Please fill the form carefully")
    }

    
    return(
        <>
        
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor=""> Email address<input type="email" name="email" onChange={handleChange} placeholder="Enter Email" required/>
            </label><br />
            <label htmlFor=""> Name<input type="text" name="firstname" onChange={handleChange} placeholder="Enter Name" required/>
            </label><br />
            <label htmlFor=""> Lastname<input type="text" name="lastname" onChange={handleChange} placeholder="Enter Lastname" required/>
            </label><br />
            <label htmlFor="">Phone Number<input type="tel" name="phnum" onChange={handleChange} placeholder="Enter Phone Number" required/>
            </label><br />
            <label htmlFor="">Password<input type="password" name="password" onChange={handleChange} placeholder="Password" required/>
            </label><br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
