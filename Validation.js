function Action()
{
    const a=document.forms['KYC'].firstname1.value;
    const b=document.forms['KYC'].lastname1.value;
    const c=document.forms['KYC'].Fathername.value;
    const d=document.forms['KYC'].mobno.value;
    const e=document.forms['KYC'].add.value;
    let act=true
    if(a.length<=0)
    {
        document.getElementById("fname").innerHTML="Firstname shouldn't empty"
        act=false
    }
    if(b.length<=0)
    {
        document.getElementById("lname").innerHTML="Lastname shouldn't empty"
        act=false
    }
    if(c.length<=0)
    {
        document.getElementById("fsname").innerHTML="Father's/Spouse's Name shouldn't empty"
        act=false
    }
    if(d.length<=0)
    {
        document.getElementById("mnumber").innerHTML="Mobileno shouldn't empty"
        act=false
    }
    if(e.length<=0)
    {
        document.getElementById("adds").innerHTML="Address shouldn't empty"
        act=false
    }
    if(!((/^[a-zA-z]/).test(a)))
    {
        document.getElementById("fname").innerHTML="Firstname Shouldn't any numerical"
        act=false
    }
    if(!((/^[a-zA-z]/).test(b)))
    {
        document.getElementById("lname").innerHTML="Lastname Shouldn't any numerical"
        act=false
    }
    if(!((/^[a-zA-z]/).test(c)))
    {
        document.getElementById("fsname").innerHTML="Father's/Spouse's Name Shouldn't any numerical"
        act=false
    }
    if(!((/^[0-9]+$/).test(d)))
    {
        document.getElementById("mnumber").innerHTML="Mobile no Shouldn't any alphabets"
        act=false
    }
    
    return act
}