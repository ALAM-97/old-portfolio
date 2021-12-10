<template>
    <section id="porfolio">
        <div class="section-intro">
            <h3>PORTFOLIO</h3>
            <h5>Alcuni dei progetti che ho realizzato</h5>
        </div>
        <div class="portfolio-row">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <img :src="project.img" class="screenshot">
                <div class="overlay">
                    <h3>{{project.name}}</h3>
                    <p>Tecnologie utilizzate:</p>
                    <div v-for="(tecnology, index) in project.tecnologies" :key="index" class="tecnologies">
                        <img v-for="(tec, index) in tecnology" :key="index" class="tec" :src="tec">
                    </div>
                    <button class="proj-btn">
                        <a :href="project.url" target=”_blank”>Visita Sito <i class="fas fa-arrow-right"></i></a>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Portfolio",
    computed: {
        projects() {
            return this.$store.state.projects
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

    .portfolio-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 50px;
        .project {
            width: calc(100% / 3 - 70px);
            height: 100%;
            position: relative;
            margin-bottom: 50px;
            .screenshot {
                width: 100%;
            }
            .overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                padding: 15px;
                color: transparent;
                background-color: rgb(24, 23, 23, 0);
                h3 {
                    margin-bottom: 10px;
                }
                .tecnologies {
                    display: flex;
                    align-items: center;
                    .tec {
                        width: 10%;
                        margin-right: 10px;
                        margin-top: 20px;
                        opacity: 0;
                    }
                }
                .proj-btn {
                    opacity: 0;
                    padding: 5px 18px;
                    margin-top: 40px;
                    border-radius: 5px;
                    border: none;
                    background: $orangeColor;
                    color: #fff;
                    &:hover i {
                        transition: .2s;
                        transform: translateX(10px);
                    }
                    &:not(:hover) i {
                        transition: .5s;
                        transform: translateX(0px);
                    }
                }
                &:hover {
                    background-color: rgb(24, 23, 23, .6);
                    transition: .4s;
                    color: #fff;
                    .tec,
                    .proj-btn {
                        transition: .4s;
                        opacity: 1;
                    }
                }
            }
        }
    }
        
</style>