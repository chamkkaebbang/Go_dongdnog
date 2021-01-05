var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight)

if(docHeight != 'undifined'){
    offset = docHeight / 4;
}
window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop
    console.log(scrollPos);

    btt.className = (scrollPos > offset) ? 'visible':'';

    if(scrollPos > offset)
        btt.className = 'visible';
     else 
        btt.className = '';
    }
})
$(".up-button").click(function(){
            $('html, body').animate({scrollTop:0}, 200);
        });
    
        $(".down-button").click(function(){
            $('html, body').animate({scrollTop:($('body').height())}, 200);
});  