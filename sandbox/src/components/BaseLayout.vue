<template>
    <div class="wrapper">
        <aside class="sidebar">
            <slot name="sidebar"/>
        </aside>
        <main class="main">
            <slot name="main"/>
        </main>
        <footer class="footer">
            <slot name="footer"/>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
    border: 2px; color: aqua;
}

.main {
    border: 2px; color: blue;
}

.footer {
    border: 2px; color: blueviolet;
}
</style>