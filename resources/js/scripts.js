
var scroll = 0;
var header;
var design_intro;
var popup;
var popup_content;
var watch_us;
var white_edition ;
var black_edition;
var controller_intro;
var scroll_power_intro;
var thumbnail_left;
var thumbnail_right;
var thumbnail_center;
var bg_vid;
var section_descript;

var feature_index = 1;
var slide_duration = 1500;
var slide;
var slide_background;
var slide_index = 0;
var slide_up_to_down = true;

var slideInterval;

function showDescript(int){
   if(document.querySelector('.section-descript--show')){
      document.querySelector('.section-descript--show').classList.remove("section-descript--show");
   }
  section_descript[int].classList.add("section-descript--show");  
}

function init_Header(){
  scroll = this.scrollY;
  if(scroll > 100){
    header.classList.add("scroll-header");
    design_intro.classList.add("scroll-design-intro");
      bg_vid[0].pause();
}
}
function init_ObserveFooter(){
  const observeTextarea = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add("unscroll-header");
        bg_vid[0].play();
      }else{
        header.classList.remove("unscroll-header");
        if(scroll != 0)
        bg_vid[0].pause();
      }
    });
  });
  observeTextarea.observe(document.querySelector('.footer__form-textarea'));
}
function init_ObserveDesignIntro(){
  const observeDescript = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
      showDescript(0);
      bg_vid[1].play();

      }
      else{
        bg_vid[1].pause();

      }
    });
  });
  observeDescript.observe(document.querySelector('.design-intro__descript'));
}
function init_ObservePowerIntro(){
  const observeThumbnailCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scroll_power_intro.classList.add("scroll-power-intro");
        showDescript(1);

      }
    });
  });
  observeThumbnailCenter.observe(document.querySelector('.power-intro__thumbnail-group'));

}                             
function init_ObserveFeatureIntro(){
  const observe_slide = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        slideInterval = setInterval("sliding()",slide_duration);
        showDescript(2);
      }
      else
        clearInterval(slideInterval);

    });
  });

  observe_slide.observe(document.querySelector('.feature-intro__right-slide'));
}
function init_ObserveControllerIntro(){
  const observeHeading = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showDescript(3);
        bg_vid[2].play();
      }
      else{
        bg_vid[2].pause();
      }

    });
  });

  observeHeading.observe(document.querySelector('.controller-intro__heading'));
}
function initElement(){
header = document.querySelector('.header');
design_intro = document.querySelector('.design-intro');
popup = document.querySelector('.popup');
popup_content = document.querySelector('.popup__content');
scroll_power_intro = document.querySelector('.power-intro');
slide = document.getElementsByClassName('feature-intro__right-slide-img');
slide_background = document.getElementsByClassName("feature-intro__right-background-img");
section_descript = document.getElementsByClassName("section-descript");
bg_vid = document.getElementsByClassName("bg-vid");
}
function initLink(){
watch_us = "https://www.youtube.com/embed/t12x7k_oecc";
white_edition = "https://www.youtube.com/embed/RkC0l4iekYo";
black_edition = "https://www.youtube.com/embed/LnWLOMNEksM";
thumbnail_left = "https://www.youtube.com/embed/i76gPpka2Fo";
thumbnail_center = "https://www.youtube.com/embed/VHJd6QwU91A";
thumbnail_right = "https://www.youtube.com/embed/ejlFPzyZtgg";
controller_intro = "https://www.youtube.com/embed/KAvwl27SnvA";
}

window.onload = function(){
  initElement();
  initLink();
  init_ObservePowerIntro(); //rung animtation when scroll into view
  init_ObserveFeatureIntro();  //run animation when scroll into view
  init_ObserveDesignIntro();
  init_ObserveControllerIntro();
  init_ObserveFooter();
  init_Header();
  
}
window.addEventListener("scroll", (event) => {
  scroll = this.scrollY;
  if(scroll > 100 &&scroll < 300){
      header.classList.add("scroll-header");
      design_intro.classList.add("scroll-design-intro");
        bg_vid[0].pause();
  }
  else if(scroll < 100){
      header.classList.remove("scroll-header");
      design_intro.classList.remove("scroll-design-intro");
      bg_vid[0].play();

  }

});

        //====== popup ===========
function popup_show(link_name){
popup_content.src = link_name;
popup.classList.toggle("popup--show");
}

function popup_close(){
popup_content.src = "";
popup.classList.toggle("popup--show");
}
        //====== popup ===========

function sliding(){
  if(slide_up_to_down){
    ++slide_index;
    slide[slide_index].classList.add("slide--show");
    slide_background[slide_index].classList.add("slide--show");
    
  }
  else if(!slide_up_to_down){
    slide[slide_index].classList.remove("slide--show");
    slide_background[slide_index].classList.remove("slide--show");
    --slide_index;
  }
  if(slide_index == 6){
    slide_up_to_down = false;
  }
  else if(slide_index == 0){
    slide_up_to_down = true;
  }



}
function back_feature(){

  if(feature_index == 6){
    document.querySelector('.feature-intro__btn-next').classList.remove('feature-intro__btn--lock');
  }
  if(feature_index > 1){
  document.querySelector('.feature-intro__feature--show').classList.remove('feature-intro__feature--show');
  feature_index--;
  document.querySelector('.feature' + feature_index).classList.add('feature-intro__feature--show');  
  }
  if(feature_index == 1){
    document.querySelector('.feature-intro__btn-back').classList.add('feature-intro__btn--lock');
  }
}
function next_feature(){

  //unlock button
  if(feature_index == 1){
    document.querySelector('.feature-intro__btn-back').classList.remove('feature-intro__btn--lock');
  }
 
  if(feature_index<6){
    feature_index++;

    document.querySelector('.feature-intro__feature--show').classList.remove('feature-intro__feature--show');
    document.querySelector('.feature' + feature_index).classList.add("feature-intro__feature--show");

  }    
  
  if(feature_index == 6){
    document.querySelector('.feature-intro__btn-next').classList.add("feature-intro__btn--lock");
  }     
}


//============
var count_section = 0;
  function next() {
    count_section++;
    if (count_section == 6) {
      count_section = 0
    }
  var change = document.getElementById("next");
  switch (count_section) {
    case 0:
      { change.setAttribute("href", "#first-section");
       break;}
    case 1:
     { change.setAttribute("href", "#second-section");
      break;}
    case 2:{
      change.setAttribute("href", "#third-section");
      break;}
    case 3:{
      change.setAttribute("href", "#sup-fourthsec");
      break;}
      case 4:{
        change.setAttribute("href", "#supfif-sec");
        break;}
        case 5:{
          change.setAttribute("href", "#sixth-section");
          break;}
  }
}

