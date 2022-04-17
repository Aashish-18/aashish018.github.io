var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




//topic wise 
var crr_location =0;
function myFunction(loc) {
  var arr_content = ["1.html", "css.html", "js.html", "node.html", "query.html"];
document.getElementById("content").src = arr_content[loc-1];
console.log(arr_content[loc-1]);
crr_location = loc-1;
}


// next previous wise
function pagination(a)
{
  var arr_content = ["1.html", "css.html", "js.html", "node.html", "query.html"];
  console.log(crr_location);
  if(a==1){
    if(crr_location ==4){
      crr_location = 0;
      document.getElementById("content").src = arr_content[crr_location];

    }
    else{
      crr_location = crr_location+1;
    document.getElementById("content").src = arr_content[crr_location];
    }
    
  }
  else{
    if(crr_location==0){
      crr_location = 4;
      document.getElementById("content").src = arr_content[crr_location];
    }
    else{
      crr_location = crr_location-1;
      document.getElementById("content").src = arr_content[crr_location];

    }
   
  }

}