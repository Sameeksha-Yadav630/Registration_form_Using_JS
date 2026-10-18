function check(){
    let name = document.getElementById("name").value.trim() ;
    //alert(name)

    let email = document.getElementById("email").value.trim();
    //alert(email)

    let mobile = document.getElementById("mobile").value.trim();
    //alert(mobile)

   let pname = /^[a-zA-Z ]{3,60}$/; 
   let pmobile = /^[0-9+]{10,13}$/;
   let pemail = /^[a-zA-Z0-9_.]+@+[a-zA-Z]+\.+[a-zA-Z]{2,30}$/;

   if(pname.test(name)){
     alert("valid name")
   }else{
    alert("Invalid Name")
    document.getElementById('name').style.border="1px solid red"
    document.getElementById('name').style.color="red";
    document.getElementById('name').placeholder="Invalid Name";
    document.getElementById('er_name').innerHTML="InvalidName *"
    document.getElementById('er_name').style.color="red"
   }

   if(pmobile.test(mobile)){
     alert("valid number")
   }else{
     alert("Invalid number")
    document.getElementById('mobile').style.border="1px solid red"
    document.getElementById('mobile').style.color="red";
    document.getElementById('mobile').placeholder="Invalid Number";
    document.getElementById('er_mobile').innerHTML="InvalidNumber *"
    document.getElementById('er_mobile').style.color="red"
   }

   if(pemail.test(email)){
     alert("valid email")
   }else{
    alert("Invalid email")
    console.log(pemail.test(email));
    
   }


}
