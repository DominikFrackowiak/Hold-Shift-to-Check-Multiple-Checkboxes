const checkboxes = [
  ...document.querySelectorAll('.item input[type="checkbox"]')
];

let firstChecked;

const handleCheck = (e) => {
  if(e.target.checked){
    firstChecked = e.target;
    firstChecked.classList.add("checked");
  } else {
    firstChecked.classList.remove("checked");
    firstChecked = "";
  }
  
  if (e.shiftKey && e.target.checked) {
    e.target.classList.add("checked");
    const firstIndex = checkboxes.findIndex((checkbox) =>
      checkbox.classList.contains("checked")
    );
    const lastIndex = checkboxes.findLastIndex((checkbox) =>
      checkbox.classList.contains("checked")
    );
    
    checkboxes.forEach((checkbox, index) => {
      if (index >= firstIndex && index <= lastIndex) {
        checkbox.checked = true;
      }
    });
  }
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
