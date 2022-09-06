
if (window.screen.width < 768) {

    var list;
    list = document.querySelectorAll(".miboton");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('btn-chico');
    }

    console.log('Ventana Menor que 768px');

}
else if (window.screen.width < 900) {

    var list;
    list = document.querySelectorAll(".miboton");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('btn-mediano');
    }

    console.log('Ventana Menor que 900px');

}
else if (window.screen.width < 1200) {

    var list;
    list = document.querySelectorAll(".miboton");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('btn-grande');
    }

    console.log('Ventana Menor que 1200px');
    
}