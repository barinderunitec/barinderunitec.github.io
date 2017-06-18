
//Ajax Deal of the day
//$("#d1-name").val("test")};
$.ajax({
type: "get",
url: "https://gist.githubusercontent.com/MiaZhao666/9d65fba3d92837da35d613032a8bcfc5/raw/37a56f620bd45e6115ba7e3e7bd49fd891e882db/A2Products.json",
dataType: "json",
filterTitle: "onsale",
success: succF,
error: errF
});

function succF(data) {
  //var name = data[0].name;
//$("#d1-name").val("test")};

    var mdata = data;
    var div;
    $.each(mdata,function(i,item){
    var name = item.name;
    var description = item.description;
    div += "<hr class='featurette-divider'><div class='row featurette'><div class='col-md-7'><h2 class='featurette-heading'>"+name+"</h2><p class='lead'>"+description+"</p><p><a class='btn btn-default' href='product.html' role='button'>View details &raquo;</a></p></div><div class='col-md-5'><img class='featurette-image img-responsive center-block' src='images/Home/D"+i+".jpg'></div></div>";

   $("#d1-name").html(div);
 })}

 function errF(XMLHttpRequest, textStatus, errorThrown) {
 alert(errorThrown); }

//Signup Validation
   function validation(){
     var name = document.getElementById("name").value;
     var surname = document.getElementById("surname").value;
     var email = document.getElementById("email").value;
     var agree = document.getElementById("agree").checked;
     var birth = document.getElementById("birth").value;
     var male = document.getElementById("male").checked;
     var female = document.getElementById("female").checked;

     //all field should be compelete
     if (name.length <1) {
       document.getElementById("v-name").innerHTML = "Please input your name";
       return false;
     }
     //first name > 5 letters
     if (name.length<5 && name.length >=1) {
       document.getElementById("v-name").innerHTML="Your name should be longer than 5";
     return false;}
      if (surname.length <1) {
       document.getElementById("v-surname").innerHTML="Please input your surname";
     return false;}
     //last name > 8 letters
     if (surname.length<8 && surname.length >=1) {
       document.getElementById("v-surname").innerHTML="Your surname should be longer than 8";
    return false; }
      if (email.length <1) {
       document.getElementById("v-email").innerHTML="Please input your email";
    return false; }
    //email formate
    if (email.indexOf('@') == -1 ) {
      document.getElementById("v-email").innerHTML="Please input a correct email";
    return false;}
     if (birth.length <1) {
      document.getElementById("v-birth").innerHTML="Please input your date of birth";
    return false;}
    if (male==false && female==false) {
     document.getElementById("v-gender").innerHTML="Please choose your gender";
   return false;}
      if (agree == false) {
       document.getElementById("v-agree").innerHTML="Please agree the user agreement";
    return false; }





     //success
     else {
       alert("success!");
     }
   }




   var img=document.createElement("img");
   var p1={
     "name":"Flowers Garen",
     "description":"This is Acrylic on Canvas Painting. New condition.Size: 24 in Width X 18 in Height. Medium: Acrylic Surface: Canvas Artist: Samiran Sarkar, Framing This painting is currently unframed and available in rolled format.Shipping Ship all over world .After order it will take within 14 days for destination place. Packaging Proper Packaging with Tube & bubble paper wrapping with Roll process.",
     "price":"$400",
     "image": img.src="images/Home/P1.jpg"
   };
   var p2={
     "name":"Collie",
     "description":"Stretched canvas print, digitally created original art work",
     "price":"$125",
     "image": img.src="images/Home/P2.jpg"
   };
   var p3={
     "name":"Morning City Light",
     "description":"This is Acrylic on Canvas Painting. New condition. Size: 36 in Width X 30 in Height. Medium: Acrylic Surface: Canvas Artist: Samiran Sarkar, Framing This painting is currently unframed and available in rolled format. Shipping Ship all over world .After order it will take within 14 days for destination place. Packaging Proper Packaging with Tube & bubble paper wrapping with Roll process.",
     "price":"$800",
     "image": img.src="images/Home/P3.jpg"
   };
   var p4={
     "name":"Dark Desire",
     "description":"Art by: Nicole OConnor",
     "price":"$800",
     "image": img.src="images/Home/P4.jpg"
   };
   var p5={
     "name":"Red Carpet",
     "description":"Art by: Nicole OConnor",
     "price":"$500",
     "image": img.src="images/Home/P5.jpg"
   };
   var p6={
     "name":"Music Heaven",
     "description":"A ready to hang canvas print. Free delivery within NZ. Other size options are available. Email info@kiwipainting.co.nz for size option and price. You can make comments of this canvas print on facebook by this link: http://www.facebook.com/media/set/?set=a.199259326839830.41337.100002672927569&type=1&l=e8bf44b9dd",
     "price":"$159",
     "image": img.src="images/Home/P6.jpg"
   };
   var popular = {
     1:p1,
     2:p2,
     3:p3,
     4:p4,
     5:p5,
     6:p6,
   };
