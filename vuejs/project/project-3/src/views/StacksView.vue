<template>
    <section class="stacks">
        <div id="languages" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Languages</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in languages" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frameworks-be" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Frameworks (Back-End)</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in frameworksBe" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="javascript-ui" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Javascript (UI)</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in javascriptUi" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="frameworks-fe" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Frameworks (Front-End)</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in frameworksFe" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="databases" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Databases</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in databases" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="package-managers" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Package Managers</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in packageManagers" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="tools-and-platforms" class="p-4">
            <div class="container mx-auto">
                <h1 class="text-2xl text-center font-bold">Tools & Platforms</h1>
                <div class="py-4 flex place-items-center flex-col">
                    <div class="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div v-for="item in toolsAndPlatforms" :key="item.name"
                            class="mx-auto flex justify-center text-6xl rounded-xl p-6 bg-background-secondary text-copy-primary w-36 shadow-lg">
                            <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .stacks {
        min-height: 100vh;
    }
</style>

<script setup>
    const languages = [{
            icon: 'devicon-php-plain',
            href: 'https://www.php.net/',
        },
        {
            icon: 'devicon-javascript-plain',
            href: 'https://www.javascript.com/',
        },
        {
            icon: 'devicon-dart-plain',
            href: 'https://dart.dev/',
        },
        {
            icon: 'devicon-html5-plain',
            href: '/',
        },
        {
            icon: 'devicon-css3-plain',
            href: '/',
        },
    ]

    const frameworksBe = [{
            icon: 'devicon-laravel-plain',
            href: 'https://laravel.com/',
        },
        {
            icon: 'devicon-symfony-plain',
            href: 'https://symfony.com/',
        },
        {
            icon: 'devicon-yii-plain',
            href: 'https://www.yiiframework.com/',
        },
        {
            icon: 'devicon-codeigniter-plain',
            href: 'https://codeigniter.com/',
        },
        {
            icon: 'devicon-nodejs-plain',
            href: 'https://nodejs.org/',
        },
        {
            icon: 'devicon-express-original',
            href: 'https://expressjs.com/',
        },
        {
            icon: 'devicon-flutter-plain',
            href: 'https://flutter.dev/',
        },
    ]

    const javascriptUi = [{
            icon: 'devicon-vuejs-plain',
            href: 'https://vuejs.org/',
        },
        {
            icon: 'devicon-jquery-plain',
            href: 'https://jquery.com/',
        },
    ]

    const frameworksFe = [{
            icon: 'devicon-bootstrap-plain',
            href: 'https://getbootstrap.com/',
        },
        {
            icon: 'devicon-tailwindcss-plain',
            href: 'https://tailwindcss.com/',
        },
    ]

    const databases = [{
            icon: 'devicon-mysql-plain',
            href: 'https://www.mysql.com/',
        },
        {
            icon: 'devicon-postgresql-plain',
            href: 'https://www.postgresql.org/',
        },
        {
            icon: 'devicon-microsoftsqlserver-plain',
            href: 'https://www.microsoft.com/en-gb/sql-server/sql-server-2019',
        },
    ]

    const packageManagers = [{
            icon: 'devicon-composer-line',
            href: 'https://getcomposer.org/',
        },
        {
            icon: 'devicon-npm-original-wordmark',
            href: 'https://www.npmjs.com/',
        },
    ]

    const toolsAndPlatforms = [{
            icon: 'devicon-docker-plain',
            href: 'https://www.docker.com/',
        },
        {
            icon: 'devicon-heroku-plain',
            href: 'https://www.heroku.com/',
        },
        {
            icon: 'devicon-firebase-plain',
            href: 'https://firebase.google.com/',
        },
        {
            icon: 'devicon-git-plain',
            href: 'https://git-scm.com/',
        },
        {
            icon: 'devicon-github-plain',
            href: 'https://github.com/',
        },
        {
            icon: 'devicon-gitlab-plain',
            href: 'https://gitlab.com/',
        },
        {
            icon: 'devicon-bitbucket-original',
            href: 'https://bitbucket.org/',
        },
        {
            icon: 'devicon-vscode-plain',
            href: 'https://code.visualstudio.com/',
        },
        {
            icon: 'devicon-atom-original',
            href: 'https://atom.io/',
        },
        {
            icon: 'devicon-linux-plain',
            href: 'https://www.linux.org/',
        },
        {
            icon: 'devicon-windows8-plain',
            href: 'https://www.microsoft.com/windows/',
        },
    ]
</script>