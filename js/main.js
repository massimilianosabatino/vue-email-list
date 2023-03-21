'use strict';

const {createApp} = Vue;

createApp({
    data() {
        return {
            mail: [],
            ready: false,
        }
    },
    created(){
        for(let i = 1; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.mail.push(response.data.response)
            })
        }
    },
    updated(){
        console.log(this.mail.length)
        if(this.mail.length === 10){
            this.ready = true;
        }
    }
}).mount('#app');

