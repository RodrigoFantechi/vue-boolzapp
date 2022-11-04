# Possibili Bonus:

- evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi &#x2714;
- A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano &#x2714;
- predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc &#x2714;
- visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto &#x2714;
- inserire l'orario corretto nei messaggi (vedi Luxon) &#x2714;
- sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto &#x2714;
- dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra) &#x2714;
- dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto
- fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: https://vuejs.org/api/general.html#nexttick)
- aggiungere le emoticons, tramite l'utilizzo di una libreria, ad esempio: https://www.npmjs.com/package/vue-emoji-picker

## Grafica

- visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
- aggiungere una splash page visibile per 1s all'apertura dell'app
- A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
- aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
- aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale