const app = new Vue (
    {
        el: '#app',
        data: {
            newText: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: false,
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
                    visible: false,
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
                    visible: false,
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
                    visible: false,
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
            this.contacts[0].visible = true;
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
            makeVisible(index) {
                this.contacts.forEach(contact => {
                    contact.visible = false;
                });
                this.contacts[index].visible = true;
            },
            addMessage(newText) {
                const newMessage = {
                    date: 'ora attuale',
                    text: newText,
                    status: 'sent'
                }
                const newAnswer = {
                    date: 'ora attuale',
                    text: 'ok!',
                    status: 'received'
                }
                this.contacts.forEach(contact => {
                    if(contact.visible) {
                        contact.messages.push(newMessage);
                        this.newText = '';

                        // setInterval(() => {
                        //     contact.messages.push(newAnswer);
                        // }, 1000);

                        // var clock = setInterval(myPush, 1000);
                        // function myPush() {
                        //     contact.messages.push(newAnswer);
                        // }
                        // clearInterval(clock);

                        var clock = setInterval(function() {
                            contact.messages.push(newAnswer);
                        }, 1000);

                        clearInterval(clock);
                    }
                });
            }
        }
    }
)