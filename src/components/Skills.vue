<template>
    <section id="skills" class="skills">
        <div class="section-intro">
            <h3>SKILLS</h3>
            <h5>Le mie conoscenze tecniche</h5>
        </div>
        <!-- SLIDER -->
        <infinite-slide-bar :duration="duration">
            <div class="items">
                <div class="item" v-for="(logo, index) in logos" :key="index">
                    <div class="logo">
                        <img :src="logo.url">
                    </div>
                    <!-- <div class="logo-name">
                        <div>{{logo.name}}</div>
                    </div> -->
                </div>
            </div>
        </infinite-slide-bar>
    </section>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar';

export default {
    name: 'Skills',
    components: {
        InfiniteSlideBar
    },
    props: ['duration'],
    computed: {
        logos() {
            return this.$store.state.logos
        }
    }
}
</script>

<style lang="scss" scoped>

.items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5.625rem;
    .item {
        text-align: center;
        width: 120px;
        margin: 0 40px;
        .logo {
            img {
                width: 100%;
            }
        }
        // .logo-name {
        //     font-weight: 700;
        // }
    }
}
</style>