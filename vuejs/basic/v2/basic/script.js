const properties = {
    el: '#app',
    data: {
        name: 'Alan Saputra Lengkoan',
        age: 24,
        job: 'Web Developer',
        isActived: true,
        website: 'https://alanlengkoan.com',
        websiteTag: 'website tag : <a href="https://alanlengkoan.com" target="_blank">alanlengkoan.com</a>',
        greats: ['Morning', 'Afternoon', 'Evening'],
        members: [{
                nama: 'alan',
                jurusan: 'teknik informatika'
            },
            {
                nama: 'marcel',
                jurusan: 'teknik informatika'
            },
            {
                nama: 'maman',
                jurusan: 'sistem informasi'
            }
        ],
    },
    methods: {
        upperCase: function () {
            return this.name.toUpperCase();
        },
        lowerCase: function () {
            return this.name.toLowerCase();
        },
        great: function (time) {
            return `Good ${time}, ${this.name}`;
        }
    }
};

new Vue(properties);