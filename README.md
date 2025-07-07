# LinkedIn Power Tools

[![Netlify Status](https://api.netlify.com/api/v1/badges/c4b10787-f2f9-42aa-9864-82a1cca79ffd/deploy-status)](https://app.netlify.com/sites/ai4li/deploys)
[![Project Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](package.json)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
<!-- Nota: Ricorda di aggiornare [year] e [fullname] nel file LICENSE -->

**LinkedIn Power Tools** è un'applicazione web progettata per potenziare la tua presenza su LinkedIn. Sfruttando la potenza dell'intelligenza artificiale di OpenAI (GPT-4o e DALL-E 3), questa suite di strumenti ti aiuta a creare post coinvolgenti, commenti pertinenti e immagini accattivanti in modo rapido ed efficiente.

🚀 L'applicazione è accessibile online: **[ai4li.netlify.app](https://ai4li.netlify.app/)**

## 📚 Indice

- [Introduzione](#introduzione)
- [Funzionalità Principali](#funzionalità-principali)
  - [Crea Post](#crea-post)
  - [Crea Commento](#crea-commento)
  - [Crea Immagine](#crea-immagine)
- [Come Iniziare](#come-iniziare)
  - [Prerequisiti](#prerequisiti)
  - [Configurazione](#configurazione)
  - [Utilizzo degli Strumenti](#utilizzo-degli-strumenti)
- [Sviluppo Locale](#sviluppo-locale)
  - [Installazione delle Dipendenze](#installazione-delle-dipendenze)
  - [Avviare il Server di Sviluppo](#avviare-il-server-di-sviluppo)
  - [Build per il Deploy](#build-per-il-deploy)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Origine del Progetto](#origine-del-progetto)
- [Contributi](#contributi)
- [Licenza](#licenza)
- [Ringraziamenti](#ringraziamenti)

## ✨ Introduzione

**LinkedIn Power Tools** è un'applicazione web progettata per potenziare la tua presenza su LinkedIn. Sfruttando la potenza dell'intelligenza artificiale di OpenAI (GPT-4o e DALL-E 3), questa suite di strumenti ti aiuta a creare post coinvolgenti, commenti pertinenti e immagini accattivanti in modo rapido ed efficiente.

LinkedIn è una piattaforma cruciale per il networking professionale e la condivisione di contenuti di valore. Tuttavia, la creazione costante di post originali, commenti intelligenti e immagini di supporto può richiedere molto tempo ed energia. **LinkedIn Power Tools** nasce per semplificare questo processo, offrendo un assistente AI per:

- Generare bozze di post basate su articoli o idee.
- Creare commenti contestualizzati e stimolanti per post altrui.
- Produrre immagini corporate e personalizzate per arricchire i tuoi contenuti.

## 🛠️ Funzionalità Principali

L'applicazione offre tre strumenti principali:

### Crea Post

Questo strumento ti permette di generare post per LinkedIn partendo da un URL di un articolo o da un testo da te fornito.
- **Input**: URL di un articolo o testo personalizzato.
- **AI Model**: GPT-4o.
- **Output**: Un testo per un post LinkedIn, ottimizzato per catturare l'attenzione, riassumere contenuti, stimolare la discussione e seguire le best practice della piattaforma.
- **Personalizzazione**: Puoi modificare il prompt di base per adattare il tono, lo stile e gli obiettivi specifici del post.

### Crea Commento

Ideale per interagire in modo significativo con la tua rete.
- **Input**: Il testo del post di LinkedIn a cui desideri commentare.
- **AI Model**: GPT-4o.
- **Output**: Un commento pertinente, positivo e costruttivo, pensato per incoraggiare ulteriori interazioni.
- **Personalizzazione**: Il prompt è configurabile per affinare il tipo di commento generato (massimo 1000 battute).

### Crea Immagine

Aggiungi un tocco visivo professionale ai tuoi post.
- **Input**: Una descrizione testuale (massimo 1000 caratteri) per l'immagine desiderata.
- **AI Model**: DALL-E 3.
- **Output**: Un'immagine in formato 16:9, con uno stile corporate ma personalizzato, pronta per essere allegata ai tuoi post.
- **Personalizzazione**: Modifica il prompt per influenzare lo stile e il contenuto dell'immagine.

## 🚀 Come Iniziare

Per utilizzare LinkedIn Power Tools, segui questi semplici passaggi:

### Prerequisiti

- Un account OpenAI.
- Una chiave API OpenAI. Puoi ottenerla dal tuo pannello di controllo OpenAI.

### Configurazione

1.  Visita [ai4li.netlify.app](https://ai4li.netlify.app/).
2.  L'applicazione ti reindirizzerà alla pagina di Login. Attualmente, il login è un passaggio formale; l'autenticazione vera e propria per le funzionalità AI avviene tramite la chiave API.
3.  Una volta "loggato", naviga alla sezione **"Config"** (accessibile dal menu laterale).
4.  Inserisci la tua **chiave API OpenAI** nell'apposito campo e salvala. La chiave verrà memorizzata localmente nel tuo browser.

### Utilizzo degli Strumenti

Dopo aver configurato la tua chiave API:

1.  Seleziona lo strumento desiderato dal menu laterale: "Crea Post", "Crea Commento" o "Crea Immagine".
2.  Fornisci l'input richiesto (URL, testo del post, descrizione per l'immagine).
3.  (Opzionale) Rivedi e adatta il prompt precompilato per personalizzare l'output dell'AI.
4.  Clicca sul pulsante "Genera..." e attendi il risultato.

## 💻 Sviluppo Locale

Se desideri eseguire il progetto localmente o contribuire al suo sviluppo:

### Installazione delle Dipendenze

Il progetto è stato inizializzato con Vite e utilizza npm come package manager.

```bash
# Clona il repository (se non l'hai già fatto)
# git clone <URL_DEL_REPOSITORY>
# cd <NOME_DELLA_CARTELLA_DEL_PROGETTO>

npm install
```

La sezione seguente elenca i comandi utilizzati originariamente per l'impostazione del progetto. Normalmente, l'esecuzione di `npm install` nel terminale, dopo aver clonato il repository, dovrebbe essere sufficiente per installare tutte le dipendenze necessarie elencate nel file `package.json`.

```bash
# Comandi originali per la creazione del progetto (informativo)
# npm init -y
# npm install vue@latest vue-router@latest
# npm install --save-dev vite @vitejs/plugin-vue
# npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# npm install -D @tailwindcss/postcss # Nota: potrebbe essere obsoleto o integrato in tailwindcss/postcss7-compat
# npm i -d @tailwindcss/vite # Nota: verificare la necessità e correttezza di questo comando specifico per versioni recenti
```

### Avviare il Server di Sviluppo

```bash
npm run dev
```
Questo avvierà l'applicazione in modalità sviluppo, solitamente accessibile su `http://localhost:5173`.

### Build per il Deploy

```bash
npm run build
```
Questo comando genererà i file statici pronti per il deploy nella cartella `dist/`.

## ⚙️ Tecnologie Utilizzate

- **Vue.js 3**: Framework JavaScript progressivo per la costruzione di interfacce utente.
- **Vite**: Build tool moderno e veloce per progetti frontend.
- **Vue Router**: Libreria di routing ufficiale per Vue.js.
- **TailwindCSS**: Framework CSS utility-first per un design rapido e personalizzato.
- **Axios**: Client HTTP basato su Promise per effettuare richieste API.
- **OpenAI API**: Per l'accesso ai modelli GPT-4o (testo) e DALL-E 3 (immagini).

## Origine del Progetto

Questo progetto è nato come un'evoluzione ed esercitazione pratica, partendo dall'ispirazione fornita da un articolo di **Matteo Flora** sulla pubblicazione su LinkedIn con l'AI:
[Pubblicare su Linkedin con la AI](https://www.matteoflora.com/Pubblicare-su-Linkedin-con-la-AI-1020eadfaffe802e975af4bab780d9ef).

L'obiettivo iniziale era quello di mettere in pratica i concetti appresi, sviluppando un frontend completo in Vue.js per interagire con le API di OpenAI e fornire strumenti utili alla community.

## 🤝 Contributi

I contributi sono benvenuti! Se hai idee per migliorare l'applicazione, correggere bug o aggiungere nuove funzionalità, sentiti libero di aprire una Issue o una Pull Request nel repository del progetto (se disponibile pubblicamente).

## Licenza

Questo progetto è rilasciato sotto la **Licenza ISC**, come specificato nel `package.json`.
Si consiglia di aggiungere un file `LICENSE` al repository con il testo completo della licenza ISC.
Puoi trovare il testo della licenza ISC su [https://opensource.org/licenses/ISC](https://opensource.org/licenses/ISC).

## 🙏 Ringraziamenti

- Un ringraziamento speciale a **Matteo Flora** per l'articolo originale che ha ispirato questo progetto.
- Alla community di sviluppatori Vue.js e TailwindCSS per gli eccellenti strumenti e documentazione.

_La sezione "Stato del progetto" è stata integrata all'inizio del documento tramite il badge Netlify._