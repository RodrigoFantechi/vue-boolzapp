
const { createApp } = Vue


createApp({
    data() {
        return {
            initialPictures: 'assets/img/profile.svg',
            openPopUp : false,
            appoggio2 :'',
            replies: [
                'ok',
                'non sono dell\'umore',
                'vabbè ci sentiamo dopo',
                'a domani!',
                'ricordati della cena!'
            ],
            openMessage: false,
            a: true,
            messageUser: '',
            hourUser: '',
            open: false,
            username: '',
            oraAccesso: '',
            active: 0,
            newMessage: {
                date: new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString(),
                message: '',
                status: 'sent'
            },
            contacts: [
                {

                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        changeActive(index) {
            this.active = index;
            const appoggio = this.contacts[this.active].messages;
            appoggio.forEach(message => {
                if (message.status === 'received') {
                    this.oraAccesso = 'Ultimo accesso oggi alle ' + message.date.slice(11, 16)
                }
            });
        },
        addMessage() {
            const message = {
                date: new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString(),
                message: this.newMessage.message,
                status: 'sent'
            }
            if (message.message !== this.appoggio2) {
                this.contacts[this.active].messages.push(message)
                this.newMessage.message = ''
                this.a = true
                setTimeout(() => {
                    this.oraAccesso = 'Sta scrivendo...'
                }, 1000);

                setTimeout(this.reply, 3000);

                setTimeout(() => {
                    const appoggio = this.contacts[this.active].messages;
                    appoggio.forEach(message => {
                        if (message.status === 'received') {
                            this.oraAccesso = 'Ultimo accesso oggi alle ' + message.date.slice(11, 16)
                        }
                    });
                }, 5000);
            } else{
                this.newMessage.message = '';
            }

        },
        reply() {
            const randomWord = Math.floor(Math.random() * (this.replies.length - 0)) + 0;
            const message = {
                date: new Date().toLocaleDateString() + '  ' + new Date().toLocaleTimeString(),
                message: this.replies[randomWord],
                status: 'received'
            }
            this.contacts[this.active].messages.push(message)
            this.oraAccesso = 'Online'
        },
        findname() {

            this.contacts.forEach(person => {
                person.visible = false
                const nomeUtente = person.name.toLowerCase();
                const input = this.username.toLowerCase()
                let lettereUtente = '';
                for (let i = 0; i < nomeUtente.length; i++) {
                    lettereUtente += nomeUtente.charAt(i);
                    console.log(input, lettereUtente);
                    if (lettereUtente === input) {
                        person.visible = true
                    }
                }
                if (input === '') {
                    person.visible = true
                }
            });
        },
        openFold(index) {
            console.log(index);
            if (this.contacts[this.active].messages[index].open === undefined || this.contacts[this.active].messages[index].open === false) {
                this.contacts[this.active].messages[index].open = true
            } else {
                this.contacts[this.active].messages[index].open = false
            }
        },
        deleteMessage(index) {
            this.contacts[this.active].messages.splice(index, 1);
        },
        checkInput() {
            let appoggio = '';
            for(let i = 0; i < this.newMessage.message.length; i++){
                appoggio += ' ';

                if(this.newMessage.message === appoggio){
                    this.a = true 
                } else if(this.newMessage.message === '') {
                    this.a = true;
                }
                else{
                    this.a = false
                }
            }

               

        },
        eliminaMessaggi(){
            this.contacts[this.active].messages = [],
            this.openMessage = false

        },
        eliminaChat(){
            this.contacts.splice(this.active, 1);
            this.openMessage = false
        },
        cambiaImage(index){
        this.initialPictures = './assets/img/avatar' + this.contacts[index].avatar +'.jpg'
        
        }
    },
    mounted() {
        const appoggio = this.contacts[this.active].messages;
        appoggio.forEach(message => {
            if (message.status === 'received') {
                this.oraAccesso = 'Ultimo accesso oggi alle ' + message.date.slice(11, 16)
            }
        });

    }
}).mount('#app')





