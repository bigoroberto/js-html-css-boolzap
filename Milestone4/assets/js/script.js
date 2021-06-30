const app = new Vue({

    el: '#app',
    data: {
        currentUser:{
            name:'Stefano',
            avatar:'_io'
        },
        selectUser: 0,
        messaggioScritto:"",
        nomeContatto:"",
        now: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        risposte:['ok','va bene','non preoccuparti','fa niente','se lallero'],
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
                ],
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
                ],
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
                ],
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
                ],
            },
        ]
       
    },
    mounted(){

        setInterval(()=>{
            this.now= dayjs().format('DD/MM/YYYY HH:mm:ss')
        },1000);     
    },
    methods:{
        //funzione per prendere il percorso dell'immagine
      getImage(image){
         return './assets/img/avatar' + image + '.jpg';
      },
      //funzione per inviare il messaggio e dopo 1 secondo avere la risposta
      sendMessage(){
        if(this.messaggioScritto.length > 0){
            this.pushMessage(this.messaggioScritto,'sent');

            setTimeout(()=>{
                //la risposta del bot sarà presa dall'array con indice del numero random
                let risp = this.risposte[ this.getRandomNum(0,this.risposte.length)]
                this.pushMessage(risp,'received')
            },1000);
            this.messaggioScritto=""
        }
      },
      //funzione che struttura il push del messaggio
      pushMessage(text,status){
        this.contacts[this.selectUser].messages.push(
            {
                date: this.now,
                text: text,
                status: status
            }
        );
      },
      //funzione numeri random
      getRandomNum(min,max){
        return Math.floor(Math.random() * (max - min) + min);
      },
      filterVisible(){
        this.contacts.forEach(contact => {
            if(contact.name.toLowerCase().includes(this.nomeContatto)){
                contact.visible=true
            }else{
                contact.visible=false
            }
        });
      }
    }

})
