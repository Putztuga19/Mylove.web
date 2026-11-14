// Lógica do site: capítulos, desbloqueio, conquistas e progresso salvo no navegador.
// Não tem interface aqui. O visual vai ler o estado com NossaHistoria.snapshot().
(function (g) {
  'use strict';

  var CHAVE = 'nossa-historia-v2';
  var CAPITULOS = ['inicio', 'momentos', 'trilha', 'universo', 'carta', 'bau'];

  var CONQUISTAS = [
    { id: 'memoria', emoji: '❤️', nome: 'Memória guardada', capitulo: 'momentos' },
    { id: 'trilha', emoji: '🎵', nome: 'Nossa trilha sonora', capitulo: 'trilha' },
    { id: 'conexao', emoji: '✨', nome: 'Conexão encontrada', capitulo: 'universo' },
    { id: 'coracao', emoji: '💌', nome: 'Coração aberto', capitulo: 'carta' }
  ];

  var ouvintes = [];

  function conteudo() {
    return g.CONTEUDO || { fotos: [], musicas: [], estrelas: [], carta: { paragrafos: [] }, fraseFinal: '' };
  }

  function isIndice(v, tamanho) {
    return Number.isInteger(v) && v >= 0 && v < tamanho;
  }

  function estadoInicial() {
    return { concluidos: [], fotoFavorita: null, musicaFavorita: null, estrelasReveladas: [] };
  }

  // Valida o que veio do localStorage, para que dados antigos ou editados não quebrem o site
  function sanear(bruto) {
    var c = conteudo();
    var est = estadoInicial();
    if (!bruto || typeof bruto !== 'object') return est;

    est.concluidos = Array.isArray(bruto.concluidos)
      ? bruto.concluidos.filter(function (x, i, arr) {
          return CAPITULOS.indexOf(x) !== -1 && arr.indexOf(x) === i;
        })
      : [];

    est.fotoFavorita = isIndice(bruto.fotoFavorita, c.fotos.length) ? bruto.fotoFavorita : null;
    est.musicaFavorita = isIndice(bruto.musicaFavorita, c.musicas.length) ? bruto.musicaFavorita : null;

    var ids = c.estrelas.map(function (e) { return e.id; });
    est.estrelasReveladas = Array.isArray(bruto.estrelasReveladas)
      ? bruto.estrelasReveladas.filter(function (id, i, arr) {
          return ids.indexOf(id) !== -1 && arr.indexOf(id) === i;
        })
      : [];

    return est;
  }

  function carregar() {
    try {
      var s = g.localStorage ? g.localStorage.getItem(CHAVE) : null;
      return sanear(s ? JSON.parse(s) : null);
    } catch (e) {
      return estadoInicial();
    }
  }

  var estado = carregar();

  function salvar() {
    try {
      if (g.localStorage) g.localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (e) {
      // Navegador sem armazenamento: o progresso vale só até fechar a página
    }
    var foto = snapshot();
    ouvintes.forEach(function (f) { f(foto); });
  }

  function concluido(cap) {
    return estado.concluidos.indexOf(cap) !== -1;
  }

  function concluir(cap) {
    if (!concluido(cap)) estado.concluidos.push(cap);
    salvar();
  }

  // Cada capítulo só abre depois que o anterior foi concluído.
  // Capítulos já concluídos continuam acessíveis, então dá pra voltar sem perder nada.
  function desbloqueado(cap) {
    var i = CAPITULOS.indexOf(cap);
    if (i === -1) return false;
    if (i === 0) return true;
    return concluido(CAPITULOS[i - 1]);
  }

  function bauDisponivel() {
    return desbloqueado('bau') && CONQUISTAS.every(function (c) { return concluido(c.capitulo); });
  }

  // Ações (cada uma devolve true se aceitou, false se não)

  function iniciar() {
    if (!desbloqueado('inicio')) return false;
    concluir('inicio');
    return true;
  }

  function escolherFoto(i) {
    if (!desbloqueado('momentos') || !isIndice(i, conteudo().fotos.length)) return false;
    estado.fotoFavorita = i;
    concluir('momentos');
    return true;
  }

  function escolherMusica(i) {
    if (!desbloqueado('trilha') || !isIndice(i, conteudo().musicas.length)) return false;
    estado.musicaFavorita = i;
    concluir('trilha');
    return true;
  }

  // Só as estrelas marcadas como interativas (o resto é decoração do céu)
  function estrelasInterativas() {
    return conteudo().estrelas.filter(function (e) { return e.interativa !== false; });
  }

  function revelarEstrela(id) {
    var interativas = estrelasInterativas();
    var existe = interativas.some(function (e) { return e.id === id; });
    if (!desbloqueado('universo') || !existe) return false;
    if (estado.estrelasReveladas.indexOf(id) === -1) estado.estrelasReveladas.push(id);

    var todas = interativas.every(function (e) { return estado.estrelasReveladas.indexOf(e.id) !== -1; });
    if (todas) concluir('universo');
    else salvar();
    return true;
  }

  function terminarCarta() {
    if (!desbloqueado('carta')) return false;
    concluir('carta');
    return true;
  }

  function abrirBau() {
    if (!bauDisponivel()) return false;
    concluir('bau');
    return true;
  }

  function resetar() {
    estado = estadoInicial();
    salvar();
  }

  // Leitura (o visual usa isso para desenhar as telas)

  function conquistas() {
    return CONQUISTAS.map(function (c) {
      return { id: c.id, emoji: c.emoji, nome: c.nome, desbloqueada: concluido(c.capitulo) };
    });
  }

  function snapshot() {
    var c = conteudo();
    var conq = conquistas();
    return {
      capitulos: CAPITULOS.map(function (cap) {
        return { id: cap, desbloqueado: desbloqueado(cap), concluido: concluido(cap) };
      }),
      conquistas: conq,
      progresso: { conquistadas: conq.filter(function (x) { return x.desbloqueada; }).length, total: CONQUISTAS.length },
      fotoFavorita: estado.fotoFavorita,
      musicaFavorita: estado.musicaFavorita,
      estrelasReveladas: estado.estrelasReveladas.slice(),
      estrelasTotal: c.estrelas.length,
      bauDisponivel: bauDisponivel()
    };
  }

  function ouvir(f) {
    ouvintes.push(f);
    f(snapshot());
  }

  g.NossaHistoria = {
    CAPITULOS: CAPITULOS,
    CONQUISTAS: CONQUISTAS,
    snapshot: snapshot,
    ouvir: ouvir,
    desbloqueado: desbloqueado,
    iniciar: iniciar,
    escolherFoto: escolherFoto,
    escolherMusica: escolherMusica,
    revelarEstrela: revelarEstrela,
    terminarCarta: terminarCarta,
    abrirBau: abrirBau,
    resetar: resetar
  };
})(typeof window !== 'undefined' ? window : globalThis);
