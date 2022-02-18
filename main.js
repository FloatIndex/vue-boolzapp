const app = new Vue (
    {
        el: '#app',
        data: {
            newText: '',
            searchText: '',
            active: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                }
                    
            ]
            // fine contatti
        },
        // fine data
        mounted() {
            this.$nextTick(() => this.$refs.myFocus.focus());
        },
        methods: {
            getLastText(index) {
                const messagesLength = this.contacts[index].messages.length;
                return this.contacts[index].messages[messagesLength - 1].text;
            },
            getLastDate(index) {
                const messagesLength = this.contacts[index].messages.length;
                return this.contacts[index].messages[messagesLength - 1].date;
            },
            setActive(index) {
                this.active = index;
            },
            addMessage() {
                const newMessage = {
                    date: 'ora attuale',
                    text: this.newText,
                    status: 'sent'
                }
                const newAnswer = {
                    date: 'ora attuale',
                    text: 'ok!',
                    status: 'received'
                }
                this.contacts[this.active].messages.push(newMessage);
                this.newText = '';

                setTimeout(() => {
                    this.contacts[this.active].messages.push(newAnswer);
                }, 1000);
            },
            filterContact() {
                this.contacts.forEach(contact => {
                    if(contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            }
        }
        // fine metodi
    }
)