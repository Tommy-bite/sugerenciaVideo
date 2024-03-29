import { Reproductor } from './reproductor.module.js';

const musica = document.querySelector("#musica");
const peliculas = document.querySelector("#peliculas");
const series = document.querySelector("#series");

const iife = (() => {
    function functionPrivada (id, url) {
        id.setAttribute("src", url);
    }

    return {
        functionPublica(id, url){
            functionPrivada(id, url);
        }
    }
})();

iife.functionPublica(musica, 'https://www.youtube.com/watch?v=1ddK89KqVe8');
iife.functionPublica(peliculas, 'https://www.youtube.com/watch?v=d3XN49jmmGM');
iife.functionPublica(series, 'https://www.youtube.com/watch?v=wtA1pqbHTeM');