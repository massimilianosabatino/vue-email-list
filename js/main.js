'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            mail: [],
            ready: false,
        }
    },
    created() {
        const delayData =  new Promise((resolve) => {
                const mail = [];
                for (let i = 1; i <= 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then(response => {
                            mail.push(response.data.response);
                            if (mail.length === 10) {
                                resolve(mail);
                            }
                        })
                }
        });

        delayData.then(mail => {
                this.mail = mail
            })
    },
}).mount('#app');

