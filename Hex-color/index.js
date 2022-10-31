function changeColor(){
    var hex_numbers = ['0','1','2','3','5','6','7','8','9','A','B','C','D','E','F'];
    var hexcode2 = '';
    var hexcode1 = '';
    for (var i=0; i<6; i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode1 += hex_numbers[random_index];
    }
    for (var i=0; i<6; i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode2 += hex_numbers[random_index];
    }
    document.getElementById('hexcode-1').innerHTML = hexcode1;
    document.getElementById('hexcode-2').innerHTML = hexcode2;
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    
}