const musicaId = document.querySelector("#musica");
const peliculasId = document.querySelector("#peliculas");
const seriesId = document.querySelector("#series");

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


class Multimedia {

    #url;

    constructor(url){
        this.#url = url;
    }

    get getUrl(){
        return this.#url;
    }

    setInicio(){
        const url = this.getUrl + ';start=' + 0;
        iife.functionPublica(this.id, url);
    }

}

class Reproductor extends Multimedia {

    id;

    constructor(url, id){
        super(url);
        this.id = id;
    }

    playMultimedia(){
        iife.functionPublica(this.id, this.getUrl);
    }

    setInicio(segundos){
        const url = this.getUrl + ';start=' + segundos;
        console.log(url)
        iife.functionPublica(this.id, url);
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/ngRPQKRJ89I?si=8pY4QwYxLDHAXAMI&amp",musicaId);
const peliculas = new Reproductor("https://www.youtube.com/embed/kuaMCweiZi0?si=21d23kmt2m653WT7", peliculasId);
const series = new Reproductor("https://www.youtube.com/embed/PfID_33TL_A?si=-irqZnqrdQLP1nij&amp" ,seriesId);

musica.playMultimedia();
musica.setInicio(44);
peliculas.playMultimedia();
series.playMultimedia();
series.setInicio(12);


