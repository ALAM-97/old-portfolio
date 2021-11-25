<template>
    <div class="container">
        <header>
            <div class="logo">
                Alessandro Amara
            </div>
            <nav>
                <ul>
                    <li v-for="(link, index) in links" :key=index><a :href="link.url">{{link.name}}</a></li>
                    <li><a href=""><i class="fas fa-adjust"></i></a></li>
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
            links : 
            [
                {
                    name: 'Home',
                    url: '#'
                },
                {
                    name: 'About',
                    url: '#about'
                },
                {
                    name: 'Skills',
                    url: '#skills'
                },
                {
                    name: 'Esperienze',
                    url: '#experience'
                },
                {
                    name: 'Portfolio',
                    url: '#portfolio'
                },
            ]
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