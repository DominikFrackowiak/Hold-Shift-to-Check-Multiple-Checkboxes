const allInputs = [...document.querySelectorAll('input')];
let firstChecked;
let secondCheckedIndex;

document.addEventListener("keydown", (e) => {
  if(e.key==='Shift') checkMoreThanOne();
});

allInputs.forEach(input => input.addEventListener("change", ()=>{
  firstChecked = allInputs.findIndex(input=> input.checked)
}))

const checkMoreThanOne = () => {
  allInputs.forEach((input, index)=>input.addEventListener("change", ()=>{
    secondCheckedIndex = index;
    if(firstChecked>=0){
      for(let i = firstChecked; i<=secondCheckedIndex; i++){
      allInputs[i].checked = true;
    }
    }
    
  }))
}
