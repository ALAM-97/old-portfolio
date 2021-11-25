<template>
    <div class="container">
        <header>
            <div class="logo">
                Alessandro Amara
            </div>
            <nav>
                <ul>
                    <li v-for="(elm, index) in nav" :key=index>{{elm}}</li>
                    <li><i class="fas fa-adjust"></i></li>
                </ul>
            </nav>
        </header>
    </div>    
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            nav : ['Home', 'About', 'Skills', 'Esperienze', 'Portfolio']
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '~@fortawesome/fontawesome-free/css/all.css';
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 30px;
        .logo {
            font-size: 1.5rem;
            font-weight: 800;
            width: 30%;
        }
        ul {
            display: flex;
            width: 70%;
            li {
                margin-left: 1.25rem;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
    
</style>