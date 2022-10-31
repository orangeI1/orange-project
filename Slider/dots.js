var index = 0
function dots_on(i){
    var images = document.getElementsByClassName('image');
    var dots = document.getElementsByClassName('dot');
   

    for(i = 0; i < images.length; i++)
    images[i].style.display = 'none';
    
    images[index].style.display = 'block';
    dots[index].className += ' active';
}