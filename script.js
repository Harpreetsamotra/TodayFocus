const circle = document.querySelectorAll(".circle");
const input = document.querySelectorAll(".inputs");
const labels = document.querySelector(".labels");
const info=document.querySelector(".info");
const barTwo=document.querySelector(".bar-2")

const allGoals=JSON.parse(localStorage.getItem("allGoals"))||{};


let arr=Object.values(allGoals).filter((e)=> e.completed).length
let totalGoalLenght= Object.values(allGoals).length;
barTwo.style.width=`${arr/totalGoalLenght*100}%`;
info.innerHTML=`${arr} / ${totalGoalLenght} completed`;

circle.forEach((e) => {
  e.addEventListener("click", () => {
    const allInputsFilled = [...input].every((el) => {
      return el.value;
    });
    if (allInputsFilled) {
      e.parentElement.classList.toggle("completed");
      const inputId=e.nextElementSibling.id;
      
      allGoals[inputId].completed= !allGoals[inputId].completed;
      localStorage.setItem("allGoals",JSON.stringify(allGoals));
      arr=Object.values(allGoals).filter((e)=> e.completed).length;
      info.innerHTML=`${arr} / ${totalGoalLenght} completed`;
      barTwo.style.width=`${arr/totalGoalLenght*100}%`;
    } 
     else {
      labels.classList.add("error");
    }
  })});


input.forEach((inputs) => {
 
  inputs.value=allGoals[inputs.id].name;
  if(allGoals[inputs.id].completed){
    inputs.parentElement.classList.add("completed")
  }
  inputs.addEventListener("focus", () => {
    labels.classList.remove("error");
     })
  
    inputs.addEventListener("input",(e)=>{
      allGoals[inputs.id]={
        name:inputs.value,
        completed:false}
      localStorage.setItem("allGoals",JSON.stringify(allGoals));
    });
 
});

