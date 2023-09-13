let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += Math.floor(endValue / 10);
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, 100);
});

const viewBtn = document.querySelectorAll(".view--content--btn");
const view_content = document.querySelectorAll(".view--content");
const up_symbol = document.querySelectorAll(".fa-chevron-up");
const down_symbol = document.querySelectorAll(".fa-chevron-down");

let check=true;
for(let i=0;i<viewBtn.length; i++){

viewBtn[i].addEventListener("click", function (e) {
  e.preventDefault();
  if(check){
    down_symbol[i].style.display="none";
    up_symbol[i].style.display="block";
    view_content[i].style.display="flex";
    check=false;
  }else{
    down_symbol[i].style.display="block";
    up_symbol[i].style.display="none";
    view_content[i].style.display="none";
    check=true;
  }

});

}
