var int = document.getElementsByClassName('in')[0];
var out = document.getElementsByClassName('out')[0];

int.onmouseover= function() {

     out.style.display = 'block'
 }
out.onmouseout = function() {

    out.style.display = 'none'
 }

