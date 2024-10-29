function fname(input)
{
    let str = /^[A-Za-z]+$/.test(input.value);
    
    if(!str)
{
    input.setCustomValidity("please only enter alphabetic chars");
}
else{
    input.setCustomValidity("");
}
input.reportValidity();
}

function password(input)
{
    let str = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/.test(input.value);
    if(!str)
    {
        input.setCustomValidity("At least one uppercase letter (A-Z),one lowercase letter (a-z),one digit (0-9) ,special character , Minimum length 10 ");
    }
    else{
        input.setCustomValidity("");
    }
   input.reportValidity();
}

function conpassword(input)
{
    let pass = document.querySelector("#pass").value;
    let conpass = input.value;

    if(pass == conpass)
        input.setCustomValidity("");
    else
        input.setCustomValidity("passwod does not match..!");

    input.reportValidity();
}

function email(input)
{

    let mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value);
    if(!mail)
        input.setCustomValidity("please enter the correct e-mail");
    else
        input.setCustomValidity("");

    input.reportValidity();

}

function phno(input)
{
    let phno = /^(?:\+91|91)?[789]\d{9}$|^0\d{2,5}[-\s]?\d{6,8}$/.test(input.value);
    if(!phno)
    {
        input.setCustomValidity("The above phone number is not valid.");
    }
    else{
        input.setCustomValidity("");
    }

    input.reportValidity();

}

function textarea(input)
{
    let str = input.value;
    if(str.length <150)
        input.setCustomValidity("enter 150 characters");
    else if(str.length >300)
        input.setCustomValidity("the string should contain 300 characters only");
    else
        input.setCustomValidity("");
    input.reportValidity();
}

const radio=(r)=>
{
    const radios = document.getElementsByName("gender");
    let flag=true;
    for(let i =0;i<radios.length;i++)
    {
        if(!radios[i].checked)
            flag=false;
        else 
        {flag=true;break;}
    }
    if(flag)
        r.setCustomValidity("");
    else
        r.setCustomValidity("please select gender..");
    r.reportValidity();
}


function handlesubmit()
{
    const f = document.getElementById("myform").elements;
    for(let i=0;i<f.length-1;i++)
    {
        console.log(f[i].name);
        if(f[i].name==="gender")
        {
            radio(f[i]);
        }
        else if(f[i].value==="")
        {
            f[i].setCustomValidity("please fill this field..");
            f[i].reportValidity();
        }
    }


}