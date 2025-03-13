// var n = document.querySelectorAll(".drum").length;
// for(var i = 0; i<n; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         var clickButton = this.innerHTML;
//         sound(clickButton);
//         animation(clickButton);
//     })
// }
$(".drum").click(function(){
    var clickButton = this.HTML();
        sound(clickButton);
        animation(clickButton);
})
document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
})
// document.keypress(function(event){
//     sound(event.key);
//     animation(event.key);
// })
function sound(key){
    switch(key){
        case 'w':
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
        break;
        case 'a':
            var a = new Audio("sounds/tom-1.mp3");
            a.play();
        break;
        case 's':
            var s = new Audio("sounds/tom-2.mp3");
            s.play();
        break;
        case 'w':
            var w = new Audio("sounds/tom-3.mp3");
            w.play();
        break;
        case 'd':
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
        break;
        case 'j':
            var j = new Audio("sounds/snare.mp3");
            j.play();
        break;
        case 'k':
            var k = new Audio("sounds/crash.mp3");
            k.play();
        break;
        case 'l':
            var l = new Audio("sounds/kik-bass.mp3");
            l.play();
        break;

        default:console.log(clickButton);
    }
}
function animation(animate){
    var active = document.querySelector("."+animate);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }),100;
}