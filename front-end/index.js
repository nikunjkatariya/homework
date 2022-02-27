function validation()
{
    var name = document.getElementById("name1").value;
    var uname = document.getElementById("username").value;
    var mail = document.getElementById("email1").value;
    var mobile = document.getElementById("mobile").value;
    var state = document.getElementById("state").value;
    
    var nmex = /^[a-zA-Z ]{2,30}$/;
    var unmex = /^[a-zA-Z0-9]{5,15}$/;
    var mailex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var mobilex = /^\d{10}$/;

    if(name.match(nmex))
    {
        document.getElementById("name1").classList.remove('is-invalid');
        document.getElementById("vsname").classList.remove('invalid-feedback');
        document.getElementById("name1").classList.add('is-valid');
        document.getElementById("vsname").classList.add('valid-feedback');
        document.getElementById("vsname").innerHTML="Looks good!";
    }
    else
    {
        document.getElementById("name1").classList.remove('is-valid');
        document.getElementById("vsname").classList.remove('valid-feedback');
        document.getElementById("name1").classList.add('is-invalid');
        document.getElementById("vsname").classList.add('invalid-feedback');
        document.getElementById("vsname").innerHTML="Please provide a valid Input";
    }
    if(uname.match(unmex))
    {
        document.getElementById("username").classList.remove('is-invalid');
        document.getElementById("vsusername").classList.remove('invalid-feedback');
        document.getElementById("username").classList.add('is-valid');
        document.getElementById("vsusername").classList.add('valid-feedback');
        document.getElementById("vsusername").innerHTML="Looks good!";
    }
    else
    {
        document.getElementById("username").classList.remove('is-valid');
        document.getElementById("vsusername").classList.remove('valid-feedback');
        document.getElementById("username").classList.add('is-invalid');
        document.getElementById("vsusername").classList.add('invalid-feedback');
        document.getElementById("vsusername").innerHTML="Please provide a valid Input";
    }
    if(mail.match(mailex))
    {
        document.getElementById("email1").classList.remove('is-invalid');
        document.getElementById("vsmail").classList.remove('invalid-feedback');
        document.getElementById("email1").classList.add('is-valid');
        document.getElementById("vsmail").classList.add('valid-feedback');
        document.getElementById("vsmail").innerHTML="Looks good!";
    }
    else
    {
        document.getElementById("email1").classList.remove('is-valid');
        document.getElementById("vsmail").classList.remove('valid-feedback');
        document.getElementById("email1").classList.add('is-invalid');
        document.getElementById("vsmail").classList.add('invalid-feedback');
        document.getElementById("vsmail").innerHTML="Please provide a valid Input";
    }
    if(mobile.match(mobilex))
    {
        document.getElementById("mobile").classList.remove('is-invalid');
        document.getElementById("vsmobile").classList.remove('invalid-feedback');
        document.getElementById("mobile").classList.add('is-valid');
        document.getElementById("vsmobile").classList.add('valid-feedback');
        document.getElementById("vsmobile").innerHTML="Looks good!";
    }
    else
    {
        document.getElementById("mobile").classList.remove('is-valid');
        document.getElementById("vsmobile").classList.remove('valid-feedback');
        document.getElementById("mobile").classList.add('is-invalid');
        document.getElementById("vsmobile").classList.add('invalid-feedback');
        document.getElementById("vsmobile").innerHTML="Please provide a valid Input";
    }
    if(state)
    {
        document.getElementById("state").classList.remove('is-invalid');
        document.getElementById("vsstate").classList.remove('invalid-feedback');
        document.getElementById("state").classList.add('is-valid');
        document.getElementById("vsstate").classList.add('valid-feedback');
        document.getElementById("vsstate").innerHTML="Looks good!";
    }
    else
    {
        document.getElementById("state").classList.remove('is-valid');
        document.getElementById("vsstate").classList.remove('valid-feedback');
        document.getElementById("state").classList.add('is-invalid');
        document.getElementById("vsstate").classList.add('invalid-feedback');
        document.getElementById("vsstate").innerHTML="Please provide a valid Input";
    }
}

function setter(status){
    var curadd = document.getElementById("tempadd").value;
    var pincode = document.getElementById("pincode1").value;
    var state = document.getElementById("state1").value;

    // alert(status.checked);
    if(status.checked)
    {
        document.getElementById("peradd").value=curadd;
        document.getElementById("pincode2").value=pincode;
        document.getElementById("state2").value=state;
        document.getElementById("peradd").disabled=true;
        document.getElementById("pincode2").disabled=true;
        document.getElementById("state2").disabled=true;
    }
}