



function validation (){
    var password=document.getElementById("txtpassword").value;
    var confirmpass =document.getElementById("txtConfirmPassword").value;
    
    if(confirmpassword(password,confirmpass )){
    document.getElementById("cnfrmlbl").innerHTML="";
    }
    else{
    
    document.getElementById("cnfrmlbl").innerHTML="Password Not Matched.";
    
    return false;
    }
    
    
    
    
    }
    
    function confirmpassword(A,B )
    {
    if (A==B){
    return  true;
    
    }
    
    
    }
    
    function add()
    {






        var companyname= document.getElementById("txtcompany").value;
        var city= document.getElementById("txtcity").value;
        var companytype=document.getElementById("txtcompanytype").value;
        var nationalid=document.getElementById("txtnationalid").value;
        var email=document.getElementById("txtEmailAddress").value;
        var username=document.getElementById("txtUserName").value;
        var password=document.getElementById("txtpassword").value;
        var confirmpass =document.getElementById("txtConfirmPassword").value;
            
    
    
    if (validation){
      var db = firebase.firestore();
      db.collection("companyinformation").add({
        
    companyid:1,
    companyname:companyname,
    city:city,
    companytype:companytype,
    nationalid:nationalid,
    username:username,
    password:password,
email:email

   

})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }
    
alert("data successfully added ");
    }

















    function getmaxid() 
{
 // const markers = [];
  //await firebase.firestore().collection('services').get()
   // .then(querySnapshot => {
     // querySnapshot.docs.forEach(doc => {
     // markers.push(doc.data());
    //});
  //});
  //return markers;
  var db = firebase.firestore();
  db.collection("companyinformation").orderBy("companyid", "desc").limit(1)
               
                .onSnapshot(function(snapshot) {
                
                    snapshot.forEach(function (userSnapshot) {
                      var x = parseInt( userSnapshot.data().companyid)+1;
                      if (isNaN(x)){

x="1";



}


      return x.toString();        
                    });
                });
}













