

// progess-bar

const skillbtn =document.getElementById('show-skill');
skillbtn.addEventListener('click',() => {
    const progressBlock =document.getElementsByClassName("progress-block")[0];
    progressBlock.classList.toggle("show");
})


// navbar

const navbar =document.getElementsByClassName('navbar')[0];
window.addEventListener('scroll' , () => {
    if (window.scrollY >=100){
        
        navbar.style.background='#fff';
    }else{
        navbar.style.background='transparent';
    }
})


// color-mode

const colorMode =document.getElementsByClassName('color-mode')[0];
colorMode.addEventListener('click',() => {
    const body=document.getElementsByTagName('body')[0];
    body.classList.toggle('dark-mode');
})

// backtoTop arrow

const arrow =document.getElementsByClassName('back-to-top')[0];
window.addEventListener('scroll' , () =>{
    if(window.scrollY >=200){
        arrow.style.display='block';
        arrow.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    }else{
        arrow.style.display='none';
    }
})

// toggle



// slider


var myslide = 0;
carousel();

function carousel() {
  var i;
  var slide = document.getElementsByClassName("slider");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  myslide++;
  if (myslide > slide.length) {myslide = 1}    
  slide[myslide-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}