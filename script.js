var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  // Tab to edit
  for (tablink of tablinks) {
    // Tab to edit
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    // Tab to edit
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
  
}
function closemenu(){
  sidemenu.style.right="-300px";
}

