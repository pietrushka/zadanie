import { route } from './router';

route('/', 'home', function() {
    this.title = 'Home';
});


route('/welcome', 'welcome', function() {
    this.title = 'Welcome';
});

route('*', '404', function () {});
