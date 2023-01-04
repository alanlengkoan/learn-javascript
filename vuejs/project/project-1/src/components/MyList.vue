<template>
    <div>
        <h2>{{ judul }}</h2>

        <ul>
            <li v-for="row in anggota" v-bind:key="row">
                {{ row.nama }} - {{ row.jurusan }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            judul: 'ini halaman MyList.vue',
            anggota: [{
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
            ]
        }
    }
}
</script>