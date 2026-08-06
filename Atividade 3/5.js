let playlist = [

{titulo:"Die With A Smile", artista:"Lady Gaga", duracaoSegundos:251},
 {titulo:"Believer", artista:"Imagine Dragons", duracaoSegundos:204},
 {titulo:"Shape of You", artista:"Ed Sheeran", duracaoSegundos:233}

]

playlist.push({

titulo:"Blinding Lights",
 artista:"The Weeknd",
 duracaoSegundos:200

})
for(let musica of playlist){

 if(musica.duracaoSegundos > 180){

    
  console.log(musica.titulo)

 }

}

