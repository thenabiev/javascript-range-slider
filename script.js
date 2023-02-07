let slider=document.getElementById('myRange');
let output=document.getElementById('value');

output.innerHTML=slider.value;

slider.oninput=function(){
    output.innerHTML=this.value
}
slider.addEventListener('mousemove', function(){
    let x=slider.value;
    let color=`linear-gradient(90deg, rgb(255, 0, 157) ${x}%, #555 ${x}%)`;

    slider.style.background=color
});
