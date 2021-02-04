import axios from 'axios';

import { route } from './router';

route('/', 'home', function() {
    this.error = ''

    this.$on('#login-form', 'submit', async (event) => {
        event.preventDefault();
        const username = event.target.elements['username'].value;
        const password = event.target.elements['password'].value;

        try {
            const {status, data} = await axios.post('https://zwzt-zadanie.netlify.app/api/login', {username, password});
            window.location.href = '#/success';
        } catch (error) {
            this.error = 'Something went wrong, please try again';
            this.$refresh();
        };
    });
    
});


route('/success', 'success', function() {
    this.title = 'success';
});

route('*', '404', function () {});
