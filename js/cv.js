$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution:512,
        dropRadius:10
    });

    const bars =document.querySelectorAll('.progress_bar');


    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip =bar.children[0];
        tooltip.innerText =percentage +'%';
        bar.style.width=percentage +'%';
        console.log(percentage);

    })


})