window.addEventListener("scroll",function(){
      var nav_bar  = document.getElementById("navbar");
      nav_bar.classList.toggle('abajo',this.window.scrollY>0);
      var navbar_link  = document.getElementById("nav-link");
      navbar_link.classList.toggle('animation',this.window.scrollY>0);
})

