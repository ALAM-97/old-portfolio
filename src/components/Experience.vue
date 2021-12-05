<template>
<section id="experience">
    <div class="section-intro">
        <h3>ESPERIENZE</h3>
        <h5>I miei studi e le mie esperienze lavorative</h5>
    </div>
    <div class="experience-table">
        <div :class="(instruction === true) ? 'active instruction': 'instruction'" @click="showInstruction">
            <i class="fas fa-graduation-cap"></i>
            Istruzione
        </div>
        <div :class="(work === true) ? 'active work': 'work'" @click="showWork">
            <i class="fas fa-briefcase"></i>
            Lavoro
        </div>
    </div>
        <!-- istruzione -->
    <div v-if="instruction === true">
        <div class="instruction-list">
            <div class="left-instruction-table">
                <h6>Corso Boolean</h6>
                <p>Full-Stack Web Developer</p>
                <p class="data">Iniziato il 16 giugno 2021</p>
            </div>
            <div class="center-instruction-table">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle-2"></div>
            </div>
            <div class="right-instruction-table">
                <h6>Scuola Superiore Secondaria</h6>
                <p>Diploma da Geometra</p>
                <p class="data">Da settembre 2011 a Luglio 2016</p>
            </div>
        </div>
    </div>
        <!-- lavoro -->
    <div v-else>
        <div class="work-list">
            <div class="right-work-table">
                <h6>Addetto al Check-In</h6>
                <p>Aeroporto Internazionale Leonardo Da Vinci</p>
                <p class="data">Da Marzo 2018 a Marzo 2020 (15 mesi)</p>
            </div>
            <div class="center-work-table">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle-2"></div>
            </div>
            <div class="left-work-table">
                <h6>Grafico e Wordpress Developer</h6>
                <p>Phoenix Lab</p>
                <p class="data">Da settembre 2016 a settembre 2017 (12 mesi)</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            instruction: true,
            work: false
        }
        
    },
    methods: {
        showWork: function() {
            this.instruction = false;
            this.work = true;
        },
        showInstruction: function() {
            this.work= false;
            this.instruction = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

    .experience-table {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        column-gap: 50px;
        .instruction {
            justify-self: end;
        }
        .work {
            justify-self: start;
        }
        .instruction,
        .work {
            font-size: 1.4rem;
            cursor: pointer;
            color: $orangeColor;
            font-weight: 500;
            opacity: 0.5;
            border-bottom: 2px solid transparent;
            &:hover {
                border-bottom: 2px solid $orangeColor;
            }
        }
        .active {
            opacity: 1;
            
        }
    }

    .instruction-list,
    .work-list {
        display: grid;
        grid-template-columns: 1fr 20px 1fr;
        grid-template-rows: 1fr 1fr;
        margin-top: 50px;
        column-gap: 15px;
        h6 {
            font-size: 1.2rem;
        }
        p {
            font-size: 1rem;
            font-weight: 300;
            margin-top: 15px;
            &.data { 
                font-size: .7rem;
            }
        }
        .left-instruction-table {
            text-align: right;
        }
    }
.circle, 
.circle-2 {
    width: 15px;
    height: 15px;
    background-color: #0F62FE;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 4px;
}
.circle-2 {
    margin: 0px auto;
}
.line {
    width: 3px;
    height: 100%;
    background-color: #0F62FE;
    margin: 0 auto;
}
.right-instruction-table {
    grid-row-start: 2;
    grid-column-start: 3;
    padding-top: 15px;
}

/* tabella-lavoro */
.right-work-table {
    text-align: left;
    grid-column-start: 3;
}
.center-work-table {
    order: -1;
    grid-column-start: 2;
}
.left-work-table {
    text-align: right;
    padding-top: 14px;
}
</style>