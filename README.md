# MVP nuovo terminale betting - Backbone modulo

### Descrizione:

Questo è il backbone dei moduli di cui sarà fatta l'applicazione.
L'export genera un normale componente react, ma invece di attaccarlo ad un index esporta il tutto come modulo.
Questo è poi pubblicato come pacchetto npm e reimportabile da altri progetti.

Il modulo inoltre ha un suo ambiente di sviluppo (npm run start), con dev-server configurato e loader webpack.


### Specifiche tecniche:
- React: 16.13.0
- Hooks: attivi
- Linguaggio: Typescript
- Linter: Airbnb
- Test: Jest + Enzyme (non del tutto funzionanti, ma configurati)



### Configurazioni pre-esistenti:
Il modulo ha già un suo context dentro la cartella ```src/context```. 
Da lì si può partire per aggiungere proprietà dello stato, actions e mutations (vd. documentazione della libreria).

Inoltre è già configurato anche il context e il servizio di internazionalizzazione.


### Contenuti:
Il modulo dovrebbe implementare funzionalità specifiche dell'applicazione. Al momento quindi non fa nulla di rilevante.
Si limita a mostrare un messaggio di corretto funzionamento.
