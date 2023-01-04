module.exports = {
    tambah: function (angka1, angka2) {
        var hasil = angka1 + angka2;

        return hasil;
    },

    kurang: function (angka1, angka2) {
        var hasil = angka1 - angka2;

        return hasil;
    },

    kali: function (angka1, angka2) {
        var hasil = angka1 * angka2;

        return hasil;
    },

    bagi: function (angka1, angka2) {
        var hasil = angka1 / angka2;

        return hasil;
    },

    typeData: function (hasil) {
        return typeof (hasil);
    },
}