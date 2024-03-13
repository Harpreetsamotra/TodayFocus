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
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    } 

     else {
      labels.classList.add("error");
    }
  })});


input.forEach((inputs) => {
  if (allGoals[inputs.id]) {
    inputs.value=allGoals[inputs.id].name;
    // console.log(inputs.value);
  if(allGoals[inputs.id].completed){
    inputs.parentElement.classList.add("completed")
  }
}
  inputs.addEventListener("focus", () => {
    labels.classList.remove("error");
  })

//   inputs.addEventListener('input', (e) => {
//     if (allGoals[input.id] && allGoals[input.id].completed) {
//       input.value = allGoals[input.id].name
//       return
//     }
//     inputs.addEventListener("input",(e)=>{
//       allGoals[inputs.id]={
//         name:inputs.value,
//         completed:false}
//       localStorage.setItem("allGoals",JSON.stringify(allGoals));
//     });
//   })
// });


inputs.addEventListener('input', (e) => {
  if (allGoals[inputs.id] && allGoals[inputs.id].completed) {
    inputs.value = allGoals[inputs.id].name
    return
  }

  if (allGoals[inputs.id]) {
    allGoals[inputs.id].name = inputs.value
  } else {
    allGoals[inputs.id] = {
      name: inputs.value,
      completed: false,
    }
  }

  localStorage.setItem('allGoals', JSON.stringify(allGoals))
})
})


// input.forEach((inputs) => {
//   if (allGoals[inputs.id]) {
//     inputs.value = allGoals[inputs.id].name
//     // console.log(inputs.value);

//     if (allGoals[inputs.id].completed) {
//       inputs.parentElement.classList.add('completed')
//     }
//   }

//   inputs.addEventListener('focus', () => {
//     labels.classList.remove("error");
//     //  console.log("hiiii");
//   })

//   inputs.addEventListener('input', (e) => {
//     if (allGoals[inputs.id] && allGoals[inputs.id].completed) {
//       inputs.value = allGoals[inputs.id].name
//       return
//     }

//     if (allGoals[inputs.id]) {
//       allGoals[inputs.id].name = inputs.value
//     } else {
//       allGoals[inputs.id] = {
//         name: inputs.value,
//         completed: false,
//       }
//     }

//     localStorage.setItem('allGoals', JSON.stringify(allGoals))
//   })
// })
