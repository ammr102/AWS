let resNav = 0;
let letterF = 0;
let letterS = 0;
const firstText = "Mohammed Abdallah";
const secondText = "Web Developer";
const changeText = document.querySelector(".changeText");
let runText = 1;
const sections = document.querySelectorAll('section');

/* Declare Functions */
function mainNavScroll(){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".navBar").classList.add("navScroll");
      } else {
        document.querySelector(".navBar").classList.remove("navScroll");
      }
}

function openMenu(){
  document.querySelector(".navResponsive a i").classList.remove('fa-bars');
  document.querySelector(".navResponsive a i").classList.add('fa-xmark');
  document.querySelector(".resNavMenu").style.display='flex';
  document.querySelector("html").style.overflowY='hidden';
  if(document.querySelector(".navResponsive").classList.contains("navScroll")){
    document.querySelector(".containerMenu").style.marginBottom='-20%';
    document.querySelector(".containerMenu").style.marginTop='0%';
  }
}

function closeMenu(){
  document.querySelector(".navResponsive a i").classList.remove('fa-xmark');
  document.querySelector(".navResponsive a i").classList.add('fa-bars');
  document.querySelector(".resNavMenu").style.display='none';
  document.querySelector("html").style.overflowY='unset';
  document.querySelector(".containerMenu").style.marginTop='-20%';
  document.querySelector(".containerMenu").style.marginBottom='0%';
}

function switchMenu(){
  if(resNav==0){
    openMenu();
    resNav++;
  }else if(resNav == 1){
    closeMenu();
    resNav--;
  }
}
function resNavScroll(){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector(".navResponsive").classList.add("navScroll");
      } else {
        document.querySelector(".navResponsive").classList.remove("navScroll");
      }
}

function typeFirstText() {
    if (letterF < firstText.length) {
        changeText.innerHTML += firstText.charAt(letterF);
        letterF++;
        setTimeout(typeFirstText, 300);
    }
  }

function removeFirstText(){
    if (letterF != 0) {
        changeText.innerHTML = changeText.innerText.substring(0, changeText.innerText.length - 1)
        letterF--;
        setTimeout(removeFirstText, 300);
      }
  }
  function typeSecondText() {
    if (letterS < secondText.length) {
        changeText.innerHTML += secondText.charAt(letterS);
      letterS++;
      setTimeout(typeSecondText, 300);
    }
  }

  function removeSecondText(){
    if (letterS != 0) {
        changeText.innerHTML = changeText.innerText.substring(0, changeText.innerText.length - 1)
        letterS--;
        setTimeout(removeSecondText, 300);
      }
  }
  function runChangeText(){
    if(runText === 0){
      typeFirstText();
      runText++;
    }else if(runText === 1){
      removeFirstText();
      runText++;
    }else if(runText === 2){
      typeSecondText();
      runText++
    }else if(runText === 3){
      removeSecondText();
      runText=0;
    }
  }


  const place = function (section){
    return Math.floor(section.getBoundingClientRect().top);
  };

    const addActive = function(conditional, section){
      if(conditional){
          const sectionId= section.id;
          //add background-color to active navigation 
          document.querySelector(".navBar").querySelector(`.${sectionId}`).classList.add("activeNav");
      };
  };
  const removeActive = function (section){

      const sectionId= section.id;
      //remove background-color from inactive navigation 
      document.querySelector(".navBar").querySelector(`.${sectionId}`).classList.remove("activeNav");  
  };
  
  const sectionActivation = function(){
    for(section of sections) {
        const elementPlace = place(section);

        inviewport = () => elementPlace < 350 && elementPlace >= -350;

        removeActive(section);
        addActive(inviewport(),section);
    };
};

/* Call Functions */
window.onscroll = ()=>{
    if(window.innerWidth>865){
        mainNavScroll();
    }else{
        resNavScroll();
    }
    sectionActivation();
};

window.onload = ()=>{
  typeFirstText();
   const repeatFunc = setInterval(() => {
    runChangeText();
  }, 6000);

  document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      location.reload();
    } else {
      console.log("tab is inactive")
    }
  });
}