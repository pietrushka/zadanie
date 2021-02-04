import { route } from './router';

route('/', 'home', function() {
    this.title = 'Home';
});


route('/success', 'success', function() {
    this.title = 'success';
});

route('*', '404', function () {});
