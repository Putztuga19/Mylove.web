// Conteúdo do site. Edite só este arquivo para trocar fotos, músicas, textos e estrelas.
// Tudo marcado com PREENCHER ainda precisa ser substituído.
// x e y: posição final em % (forma o coração). inicio: posição espalhada no céu, de onde elas partem.
// As estrelas ligam na ordem da lista (a última volta pra primeira).
// interativa: false = estrela só de decoração (não clica). As outras 4 são as que ela toca.
(function (g) {
  g.CONTEUDO = {
    fotos: [
      { src: 'fotos/foto1.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto2.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto3.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto4.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto5.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto6.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto7.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto8.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' },
      { src: 'fotos/foto9.jpg', legenda: 'PREENCHER legenda', data: 'PREENCHER data' }
    ],

    // letra: cole aqui a letra de cada música (opcional, aparece no card da direita).
    // spotifyId: o código depois de open.spotify.com/track/. capa: imagem do álbum (aqui, a do próprio Spotify)
    musicas: [
      { titulo: "Rollin' (Air Raid Vehicle)", artista: 'Limp Bizkit', spotifyId: '3IV4swNduIRunHREK80owz', capa: 'https://i.scdn.co/image/ab67616d0000b2734a31b146c7cf07705d912efe', nota: 'Um rock pesado e cheio de energia, feito pra cantar alto junto. É a música de quando tudo fica barulhento e divertido.' },
      { titulo: 'Falling Down - Bonus Track', artista: 'Lil Peep, XXXTENTACION', spotifyId: '4jvjzW7Hm0yK4LvvE0Paz9', capa: 'https://i.scdn.co/image/ab67616d0000b27355e36b0dc5b0ef008fc85319', nota: 'Uma música melancólica sobre se sentir afundando por dentro, com aquela sensação de cair sem conseguir parar.' },
      { titulo: 'This I Love', artista: "Guns N' Roses", spotifyId: '2FEWcWHnDmGD6WSqpW4VYu', capa: 'https://i.scdn.co/image/ab67616d0000b273e29a351729da4d29214e54e2', nota: 'Uma declaração de amor intensa, de quem sente que aquela pessoa é o que mais importa, mesmo com tudo ao redor.' },
      { titulo: 'Let It Happen', artista: 'Tame Impala', spotifyId: '2X485T9Z5Ly0xyaghN73ed', capa: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79', nota: 'Sobre deixar as coisas fluírem, sem pressa e sem tentar controlar tudo. Uma música pra soltar e deixar acontecer.' },
      { titulo: 'Snowman', artista: 'Sia', spotifyId: '7uoFMmxln0GPXQ0AcCBXRq', capa: 'https://i.scdn.co/image/ab67616d0000b273a75e532b61dac3ddafd022ef', nota: 'Doce e melancólica, com cara de inverno. Fala de querer alguém por perto e de imaginar um amor tranquilo e leve.' },
      { titulo: 'I Really Want to Stay at Your House', artista: 'Rosa Walton, Hallie Coggins', spotifyId: '7mykoq6R3BArsSpNDjFQTm', capa: 'https://i.scdn.co/image/ab67616d0000b273a91a5b301baac1f46e6f30eb', nota: 'Uma música calma sobre não querer ir embora. A sensação de estar num lugar bom, com alguém que faz você se sentir em casa.' },
      { titulo: 'Just Give Me a Reason (feat. Nate Ruess)', artista: 'P!nk, Nate Ruess', spotifyId: '1mKXFLRA179hdOWQBwUk9e', capa: 'https://i.scdn.co/image/ab67616d0000b27324a1ac503b55e6eef9a7bb8c', nota: 'Sobre um amor que está no limite, cheio de brigas e reconciliações, pedindo só um motivo pra continuar junto.' },
      { titulo: 'Só Chupo Pau', artista: 'Kleberiano, KennyDeus', spotifyId: '1eAhqO99swFyVamQwbCLFL', capa: 'https://i.scdn.co/image/ab67616d0000b2732a2538e8858f7fceac778eeb', nota: 'PREENCHER: escreve aqui o que essa música significa pra vocês.' }
    ],

    estrelas: [
      { id: 'estrela1', x: 50, y: 30, tipo: 'Sua beleza', texto: 'Sua beleza extraordinária me faz ficar cada dia mais apaixonado por você.', foto: 'estrelas/foto1.jpg', inicio: { x: 14, y: 20 } },
      { id: 'estrela2', x: 36, y: 20, tipo: 'PREENCHER', texto: 'PREENCHER', inicio: { x: 82, y: 14 }, interativa: false },
      { id: 'estrela3', x: 22, y: 32, tipo: 'Sua personalidade', texto: 'Sua personalidade incrível é o que me faz ter certeza de que é você quem eu quero pro resto da vida.', foto: 'estrelas/foto2.jpg', inicio: { x: 46, y: 36 } },
      { id: 'estrela4', x: 30, y: 50, tipo: 'PREENCHER', texto: 'PREENCHER', inicio: { x: 88, y: 50 }, interativa: false },
      { id: 'estrela5', x: 50, y: 74, tipo: 'Cada vez que te vejo', texto: 'Cada vez que eu te vejo, mesmo que seja só numa foto, meus dias ruins se tornam bons.', foto: 'estrelas/foto3.jpg', inicio: { x: 22, y: 62 } },
      { id: 'estrela6', x: 70, y: 50, tipo: 'PREENCHER', texto: 'PREENCHER', inicio: { x: 64, y: 78 }, interativa: false },
      { id: 'estrela7', x: 78, y: 32, tipo: 'Seu sorriso', texto: 'Toda vez que você sorri, eu fico completamente apaixonado por você. É como se eu encontrasse meu caminho no meio do escuro.', foto: 'estrelas/foto4.jpg', inicio: { x: 30, y: 88 } },
      { id: 'estrela8', x: 64, y: 20, tipo: 'PREENCHER', texto: 'PREENCHER', inicio: { x: 74, y: 30 }, interativa: false }
    ],

    carta: {
      fotoDela: 'carta/foto-dela.jpg',
      paragrafos: [
        'Meu bem, as últimas semanas que passei contigo foram, sem dúvida, as melhores da minha vida. Já faz um bom tempo que venho pensando sobre tudo isso, mas, de alguma forma, sempre acabo adiando o momento de colocar em palavras o que sinto. No início, confesso que tinha medo. Medo de não dar certo, de me entregar e, no fim, acabar sendo enganado mais uma vez. Mas, depois de todo esse tempo que passamos juntos, de todas as piadas que rimos, dos passeios que fizemos, das fotos que tiramos e de cada pequeno momento que compartilhamos, percebi que esse medo já não é maior do que a vontade que tenho de estar ao seu lado. Foram tantas coisas que vivemos, tantos momentos que guardo com carinho, que acho que já passou da hora de deixar de lado todas as minhas dúvidas e finalmente dizer aquilo que venho pensando há tanto tempo: eu te quero. E não apenas por agora, não apenas por mais algumas semanas ou meses. Eu te quero para o resto da minha vida. Eu te amo.'
      ]
    },

    // Texto explicando como ganhar cada conquista (aparece no popup)
    conquistasAjuda: {
      memoria: 'Escolha a foto que mais representa vocês no capítulo Nossos momentos.',
      trilha: 'Escolha a música que representa a gente na trilha sonora.',
      conexao: 'Acenda todas as estrelas do universo para formar o coração.',
      coracao: 'Leia a carta até o fim.'
    },

    bau: { cliquesParaAbrir: 5 },

    fraseFinal: 'PREENCHER frase final do baú'
  };
})(typeof window !== 'undefined' ? window : globalThis);
