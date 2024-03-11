const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public')); // Serve static files like images and CSS
app.set('view engine', 'pug'); // Use Pug as the template engine

function getProfileData(nome) {
  if (nome === 'chiellini') {
    return {
      nome: nome,
      eta: '39',
      biografia: 'è nato a Pisa il 14 agosto 1984, ma è cresciuto a Livorno. È un ex calciatore italiano, di ruolo difensore e attualmente collaboratore tecnico del Los Angeles FC.',
      Ruolo: 'difensore',
    };
  } else if (nome === 'dybala') {
    return {
      nome: nome,
      eta: '30',
      biografia: 'Paulo Exequiel Dybala è nato a Laguna Larga, Argentina, il 15 novembre 1993. È un calciatore, attaccante della Roma e della Nazionale argentina. Dybala ha vinto il Mondiale con la nazionale argentina nel 2022.',
      Ruolo: 'Attaccante',
    };
  } else if (nome === 'ronaldotrasferimento') {
    return {
      nome: nome,
      eta: '39',
      biografia: 'È nato nel 1985 a Funchal da Maria Dolores dos Santos, una cuoca, e José Dinis Aveiro, un giardiniere municipale con origini capoverdiane (la nonna era originaria di São Vicente), in un momento nel quale la famiglia versava in una condizione di grave disagio economico a causa dei problemi di alcolismo del padre (che lo portarono alla morte nel 2005), con la madre inizialmente decisa ad abortire.',
      Ruolo: 'Attaccante',
    };
  }
}

// Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Sito Profili' });
});

// Pagina dei profili
app.get('/profili', (req, res) => {
  res.render('profili', { title: 'Profili' });
});

// Pagina del profilo della persona
app.get('/profili/:persona', (req, res) => {
  const persona = req.params.persona;
  const profilo = getProfileData(persona);
  if (profilo) {
    res.render('persona', { title: `Profilo di ${persona}`, persona });
  } else {
    res.status(404).send('Profilo non trovato');
  }
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});