<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer id="footer">
        <div class="container mx-auto p-4 text-center">
            <span class="text-sm font-bold">
                <em>&copy; 2017 - {{ currentYear }}. Developed with <span style="color: #e25555;">&#9829;</span> by <a
                        href="https://alanlengkoan.com">alanlengkoan</a></em>
            </span>
        </div>
    </footer>
</template>