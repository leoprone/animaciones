/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
  
  
  /*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
  esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  
  d.addEventListener("click", (e) => {
      if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  
  
  const $body=document.getElementById("body"),
$archivos=document.getElementsByClassName("archivo"),
$homecss=document.getElementById("home-css"),
$display=document.querySelector(".display"),
$blackscreen=document.querySelector(".black-screen"),
$btnpowernotebook=document.querySelector(".btn-power-notebook"),
$videodemocopa=document.querySelector("#video-demo-copa"),
$videograffiti=document.querySelector("#video-graffiti"),

$btndownloadvideoferrari296=document.querySelector("#btn-download-video-ferrari296"),
$videoferrari296=document.querySelector("#video-ferrari-296"),



$btndownloadvideolamborghinirevuelto=document.querySelector("#btn-download-video-lamborghini-revuelto"),
$videolamborghinirevuelto=document.querySelector("#video-lamborghini-revuelto"),



$btndownloadvideomercedesmg43=document.querySelector("#btn-download-video-mercedes-mg43"),
$videomercedesmg43=document.querySelector("#video-mercedes-mg43"),

$btnDownloadVideoLogoBugatti=document.querySelector("#btn-download-video-logo-bugatti-audio"),
$videoLogoBugatti=document.querySelector("#video-logo-bugatti"),


$btnDownloadVideoLogoRollsRoyce=document.querySelector("#btn-download-video-logo-rolls-royce"),
$videoLogoRollsRoyce=document.querySelector("#video-logo-rolls-royce"),


$videojulianbandera=document.querySelector("#video-julian-bandera"),
$videos=document.getElementsByClassName("video"),
$botonesdownloadvideos=document.getElementsByClassName("btn-download"),


$vercodigo=document.querySelector(".ver-codigo");






var $file = document.getElementById("file");
var $code = document.createElement("code");
var texto;




function addElemento(texto) {
   
    $code.innerText = texto;
    $file.appendChild($code);
}




function verVideo(video, botondownload){
  
  //agrega display-none a TODOS los videos y el stop

  for(let i=0; i < $videos.length; i++){
    $videos[i].classList.add("display-none");
    $videos[i].pause(); 
    $botonesdownloadvideos[i].classList.add("display-none");
  }

    
  

  // activa el video que se quiere ver y se le da play
  video.classList.remove("display-none");
  video.play(); 
  botondownload.classList.remove("display-none");
 
}
 



window.onload=function(){
  const isMobile = window.innerWidth <= 450;
  if(isMobile){
      document.getElementById("monitor-mobile").focus();
     
  }else{
      document.getElementById("monitor-desk").focus();
     
  }
   
   
   setTimeout(function(){
    $body.classList.remove("overflow-hidden");
  }, 18000); 
   setTimeout(function(){
    
   
        $btnpowernotebook.classList.add("animation-btn-power");

        $display.classList.add("open-display");
        
        setTimeout(function(){
          $blackscreen.classList.add("opacity-cero");
        /*  $vercodigo.classList.add("visibility-hidden"); */
        }, 6000);
        

        texto= `
  <li><span>Autos</span>
    <ul class="submenu">
      <li><a href="">Ferrari</a></li>
      <li><a href="">Porsche</a></li>
      <li><a href="">Lamborghini</a></li>
      <li><a href="">Bugatti</a></li>
      <li><a href="">Rolls Royce</a></li>
      <li><a href="">Audi</a>
      <li><a href="">Mercedes Benz</a>
    </ul>
  </li>
  <div class="video"></div> `;

        addElemento(texto);


      },8000);
};
  
 // QUE SE ELIJAN OPCIONES DE VIDEO

 /* $btngraffiti.onclick= verVideo($videograffiti); */

/* $btngraffiti.addEventListener("click", verVideo($videograffiti)); */



   const $aviso=document.getElementById("aviso");


document.addEventListener("click", (e)=>{
 





  // elige Graffiti
 /*  if(e.target.matches("#btn-graffiti")){
    verVideo($videograffiti);
  }  */

    //  Ferrari 296 GTB
  if(e.target.matches("#btn-ferrari-296")){
     $aviso.classList.add("display-none");
    verVideo($videoferrari296, $btndownloadvideoferrari296);
   
   
  }
 

  //  Lamborghini Revuelto

  if(e.target.matches("#btn-lamborghini-revuelto")){
    $aviso.classList.add("display-none");
    verVideo($videolamborghinirevuelto, $btndownloadvideolamborghinirevuelto);
  
  }
 
  


  //  Mercedes MG43

  if(e.target.matches("#btn-mercedes-mg43")){
    $aviso.classList.add("display-none");
    verVideo($videomercedesmg43, $btndownloadvideomercedesmg43);
  
  }
 
  


  //  Bugatti - logo-audio

  if(e.target.matches("#btn-logo-bugatti")){
    $aviso.classList.add("display-none");
    verVideo($videoLogoBugatti, $btnDownloadVideoLogoBugatti);
  
  }


 //  Rolls Royce - logo-audio

  if(e.target.matches("#btn-logo-rolls-royce")){
    $aviso.classList.add("display-none");
    verVideo($videoLogoRollsRoyce, $btnDownloadVideoLogoRollsRoyce);
  
  }








  if (e.target.matches(".ver-codigo")) {
    
 

    $btnpowernotebook.classList.add("animation-btn-power");

    $display.classList.add("open-display");
    
    setTimeout(function(){
      $blackscreen.classList.add("opacity-cero");
      $vercodigo.classList.add("visibility-hidden");
    }, 6000);

    setTimeout(function(){
      $blackscreen.classList.add("display-none");
      verVideo($videograffiti);
    }, 9000);
    
    

     texto= `
   
 `;

    addElemento(texto);



    }











if (e.target.matches(".li-album-html")) {
       
  texto= `

  <section id="home" class="home-section">
  
  <div class="telon-container">
      <div class="humo-telon"></div>

      <div class="telon-iz-1"></div>
    
      <div class="telon-iz-2 invisible"></div>
       <!-- <div class="telon-central-1 invisible"></div>
      <div class="telon-central-2 invisible"></div>
    
      <div class="telon-central-2 invisible"></div>
    
       <div class="telon-central-3"></div> -->
      <div class="telon-der"></div>
  </div> 
<h1 class="home-h1">PABLO COMAS</h1>

<div class="cara-home"></div>




`
;
addElemento(texto);



  
}

 
 });
 