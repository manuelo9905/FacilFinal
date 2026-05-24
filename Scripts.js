function directorio(seccion, parte) {
    if (seccion == 1) {
        if (parte == 0) {
            window.location.assign('unidad1.html')
        }
        else if (parte == 1) {
             window.location.assign('u1p1.html')
        }
        else if (parte == 2) {
            window.location.assign('u1p2.html')
        }
        else if (parte == 3) {
            window.location.assign('u1p3.html')
        }
        else if (parte == 4) {
            window.location.assign('u1p4.html')
        }
        else if (parte == 5) {
            window.location.assign('u1p5.html')
        }
        else if (parte == 6) {
            window.location.assign('u1p6.html')
        }
        else if (parte == 7) {
            window.location.assign('u1p7.html')
        }
        else if (parte == 8) {
            window.location.assign('u1p8.html')
        }
    }
    else if (seccion == 2) {
        if (parte == 0) {
            window.location.assign('unidad2.html')
        }
        else if (parte == 1) {
            window.location.assign('u2p1.html')
        }
        else if (parte == 2) {
            window.location.assign('u2p2.html')
        }
        else if (parte == 3) {
            window.location.assign('u2p3.html')
        }
        else if (parte == 4) {
            window.location.assign('u2p4.html')
        }
    }
    else if (seccion == 3) {
        if (parte == 0) {
            window.location.assign('quizzes.html')
        }
        if (parte == 1) {
            window.location.assign('quiz1.html')
        }
        if (parte == 2) {
            window.location.assign('quiz2.html')
        }
    } 
    else if (seccion == 4) {
        if (parte == 0) {
            window.location.assign('index.html')
        }
    }
    else {
        console.log = "No encontrado";
    }
}

function obtenervalor() {
    let listaingresado = [];
    for (let i = 1; i <= 5; i++) {
        let seleccionado = document.querySelector('input[name="1,'+i+'"]:checked');
        let valor = Number(seleccionado.value)
        listaingresado.push(valor);
    }
    let contador = comparar(listaingresado);
    localStorage.setItem("correctasq1", contador);
    window.location.assign('index.html');
}

function comparar(listaingresado) {
    listarespcorrectas = [4, 3, 4, 2, 1];
    let contador = 0;
    for (let i = 0; i <= 4; i++) {
        let respuestacorrecta = listarespcorrectas[i];
        let respuestaingresada = listaingresado[i];
        if (respuestacorrecta == respuestaingresada) {
            contador += 1;
        }
        else {
        }
    }
    return contador;
}
function obtenervalor2() {
    let listaingresado = [];
    for (let i = 1; i <= 5; i++) {
        let seleccionado = document.querySelector('input[name="2,' + i + '"]:checked');
        let valor = Number(seleccionado.value)
        listaingresado.push(valor);
    }
    let contador = comparar2(listaingresado);
    localStorage.setItem("correctasq2", contador);
    window.location.assign('index.html');
}
function comparar2(listaingresado) {
    listarespcorrectas = [2, 3, 4, 1, 2];
    let contador = 0;
    for (let i = 0; i <= 4; i++) {
        let respuestacorrecta = listarespcorrectas[i];
        let respuestaingresada = listaingresado[i];
        if (respuestacorrecta == respuestaingresada) {
            contador += 1;
        }
        else {
        }
    }
    return contador;
}

function cargarmiespacio() {
        let progreso = localStorage.getItem("correctasq1");
        let nprogreso = Number(progreso);
        nprogreso *= 20;
        document.querySelector('#progreso1').innerHTML = "Progreso: " + nprogreso + "";
        let progreso1 = localStorage.getItem("correctasq2");
        let nprogreso1 = Number(progreso1);
        nprogreso1 *= 20;
    document.querySelector('#progreso2').innerHTML = "Progreso: " + nprogreso1 + "";
        
}
