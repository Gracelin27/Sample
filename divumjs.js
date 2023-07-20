function company(){
    document.getElementById("sub1").classList.toggle("show");
}
window.onclick=function(event){
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName("sub");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
