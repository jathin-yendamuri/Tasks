function handlesubmit()
{
    let flag=true,clas;
    const f = document.querySelector(".myform").elements;
    for(let i=0;i<f.length-1;i++)
    {
        console.log(f[i].name);
        if(f[i].name==="gender")
            {
                flag=radio(f[i]);
            }
        else if (f[i].name==="loantype")
        {
            flag=radio(f[i]);
        }
        
        else if(f[i].value==="")
        {
            clas=f[i].name;
            document.querySelector("."+clas).innerHTML="Required";
            flag=false;
            break;
        }
        
    }
    return flag;
}

function radio(input)
{
    let radios = document.getElementsByName(input.name);
    let flag=true;
    for(let i =0;i<radios.length;i++)
    {
        if(!radios[i].checked)
        {
            flag=false;
        }else{
            flag=true;break;
        }
    }
    if(flag)
        return true;
    else
    return false;
}




document.querySelector(".fname").addEventListener("input",(event)=>
{
    let str = /^[A-Za-z]+$/.test(event.target.value);
    if(event.target.value==="")
        document.querySelector(".firstname").innerHTML="Required";

    else if(!str)
{
    document.querySelector(".firstname").innerHTML="please only enter alphabetic chars";
}
else{
    document.querySelector(".firstname").innerHTML="";
}
});

document.querySelector(".lname").addEventListener("input",(event)=>
    {
        let str = /^[A-Za-z]+$/.test(event.target.value);
        if(event.target.value==="")
            document.querySelector(".lastname").innerHTML="Required";
    
        else if(!str)
    {
        document.querySelector(".lastname").innerHTML="please only enter alphabetic chars";
    }
    else{
        document.querySelector(".lastname").innerHTML="";
    }
});

document.querySelector(".ename").addEventListener("input",(event)=>
    {
        let str = /^[A-Za-z]+$/.test(event.target.value);
        if(event.target.value==="")
            document.querySelector(".empname").innerHTML="Required";
    
        else if(!str)
    {
        document.querySelector(".empname").innerHTML="please only enter alphabetic chars";
    }
    else{
        document.querySelector(".empname").innerHTML="";
    }
});

document.querySelector(".jname").addEventListener("input",(event)=>
    {
        let str = /^[A-Za-z]+$/.test(event.target.value);
        if(event.target.value==="")
            document.querySelector(".jobname").innerHTML="Required";
    
        else if(!str)
    {
        document.querySelector(".jobname").innerHTML="please only enter alphabetic chars";
    }
    else{
        document.querySelector(".jobname").innerHTML="";
    }
    });
    
        
document.querySelector(".email").addEventListener("input",(event)=>
    {
        let str =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value);
        if(event.target.value==="")
            document.querySelector(".mail").innerHTML="Required";
    
        else if(!str)
    {
        document.querySelector(".mail").innerHTML="please enter the correct e-mail";
    }
    else{
        document.querySelector(".mail").innerHTML="";
    }
});

document.querySelector(".dob").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".dob").innerHTML="Required";
    else
        document.querySelector(".dob").innerHTML="";
});

document.querySelector(".add").addEventListener("input",(event)=>
    {
        if(event.target.value="")
            document.querySelector(".address").innerHTML="Required";
        else if(event.target.value.length<150)
            document.querySelector(".address").innerHTML="minimum 150 char required";
        else if(event.target.value.length>300)
            document.querySelector(".address").innerHTML="maximum 300 char only";
    else
        document.querySelector(".address").innerHTML="";
});

document.querySelector(".phno").addEventListener("input",(event)=>
    {
        let str =   /^(?:\+91|91)?[789]\d{9}$|^0\d{2,5}[-\s]?\d{6,8}$/.test(event.target.value);
        if(event.target.value==="")
            document.querySelector(".tel").innerHTML="Required";
    
        else if(!str)
    {
        document.querySelector(".tel").innerHTML="The above phone number is not valid.";
    }
    else{
        document.querySelector(".tel").innerHTML="";
    }
});

document.querySelector(".eduration").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".empduration").innerHTML="Required";
    else
        document.querySelector(".empduration").innerHTML="";
});

document.querySelector(".loanamt").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".lamt").innerHTML="Required";
    else
        document.querySelector(".lamt").innerHTML="";
});

document.querySelector(".aincome").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".AnnualIncome").innerHTML="Required";
    else
        document.querySelector(".AnnualIncome").innerHTML="";
});

document.querySelector(".mexpenses").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".MonthlyExpenses").innerHTML="Required";
    else
        document.querySelector(".MonthlyExpenses").innerHTML="";
});

document.querySelector("#amtrequest").addEventListener("input",(event)=>
    {
        if(event.target.value==="")
            document.querySelector(".loanamt").innerHTML="Required";
    else
        document.querySelector(".loanamt").innerHTML="";
});

document.querySelector(".Purpose").addEventListener("input",(event)=>
    {
        if(event.target.value="")
            document.querySelector(".loanpurpose").innerHTML="Required";
        else if(event.target.value.length<150)
            document.querySelector(".loanpurpose").innerHTML="minimum 150 char required";
        else if(event.target.value.length>300)
            document.querySelector(".loanpurpose").innerHTML="maximum 300 char only";
    else
        document.querySelector(".loanpurpose").innerHTML="";
});



