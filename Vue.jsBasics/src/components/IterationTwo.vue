<template>
    <div>
        <nav>
            <p>{{ mathCon }}</p>
        </nav>

        <footer>
            {{ getString() }}
        </footer>

    </div>
</template>

<script setup>
    import {ref, computed, reactive} from 'vue'

    const mathCon = 2 + 3;


    const returnedString = reactive({
        webSite: 'IterationTwo',
        author: 'Mohsen',
        year: 2026
    })

    function getString() {
        return `${returnedString.webSite}, Done by ${returnedString.author} in ${returnedString.year}`
    }
</script>

