const myRoute = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Halaman Utama';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {
                name = "stranger"
            } = request.params;
            const {
                lang
            } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}!`;
            } else {
                return `Hello, ${name}!`;
            }
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {
                username,
                password
            } = request.payload;
            return `Welcome ${username}!`;
        },
    },
    {
        method: 'GET',
        path: '/users/detail',
        handler: (request, h) => {
            const {
                name,
                location
            } = request.query;
            return `Hello, ${name} from ${location}`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman About';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = myRoute;