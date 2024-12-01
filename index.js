const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

btn1.onclick= ()=> document.body.style.Color= "gren";
btn1.onclick= ()=> document.body.style.Color= "yellow";
btn1.onclick= ()=> document.body.style.backgroundColor= "red";
btn1.onclick= ()=> document.body.style.backgroundColor= "orange";
btn1.onclick= ()=> document.body.style.backgroundColor= "grens";


window.onload = () => {

    // Animation de zoom au survol
  
    logo.addEventListener("mouseenter", () => {
  
      logo.style.transform = "scale(1.1)";
  
      logo.style.transition = "transform 0.3s ease";
  
    });
    logo.addEventListener("mouseleave", () => {
  
      logo.style.transform = "scale(1)";
  
    });
  
  }
  
  