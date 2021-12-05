<template>
    <div class="container">
        <section class="hero">
            <div class="hero-left">
                <a class="github-link" href="https://github.com/ALAM-97" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a class="linkedin-link" href="https://www.linkedin.com/in/alessandro-amara-1475a41a1/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </a>               
                <i class="fas fa-print"></i> <!-- cliccare per stampare CV -->         
            </div>
            <div class="hero-center">
                <h1>Ciao, sono Alessandro</h1>
                <h5>Jr Full-Stack Web Developer</h5>
                <p>
                    Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver lavorato in ambiti che non ho mai sentito 'miei' ho deciso di darmi una possibilità e di cambiare completamente vita e professione, seguendo la mia passione per la tecnologia e l'informatica. A Giugno 2021 mi sono iscritto al corso full-time di Boolean Careers per diventare Web Developer, ora sono alla ricerca di un lavoro in un ambiente che stimoli la mia creatività, che mi permetta di crescere e di interfacciarmi con nuove tecnologie e di mettermi in gioco. 
                </p>
            </div>
            <div class="hero-right">
            <img src="../assets/img/multicolor-blob.png" alt="">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.hero {
    display: grid;
    grid-template-columns: 1fr 6fr 6fr;
    grid-template-rows: auto;
    width: 100%;
    margin-top: 3.125rem;
    column-gap: 4.375rem;
    .hero-left {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 2fr;
        grid-template-areas: 
            "github"
            "linkedin"
            "print";
        i {
            font-size: 1.5rem;
            &.fa-github {
                color: $azureColor;
            }
            &.fa-linkedin-in {
                color: $orangeColor;
            }
            &.fa-print {
                color: $purpleColor;;
            }
        }
        i:hover {
            opacity: .6;
        }
        .github-link {
            grid-area: github;
            justify-self: center;
            align-self: end;
        }
        .linkedin-link {
            grid-area: linkedin;
            place-self: center;
        }
        .fa-print {
            grid-area: print;
            justify-self: center;
        }
    }
    .hero-center {
        display: grid;
        grid-template-rows: 6.25rem 4.375rem 2fr;
        h1 {
            font-size: 2.5rem;
            align-self: end;
        }
        h5 {
            font-size: 1.3rem;
            font-weight: 300;
            align-self: center;
        }
        p {
            font-size: 1.2rem;
            align-self: start;
        }
        a {
            margin-right: auto;
            align-self: start;
            justify-self: start;
            margin: 1.25rem 0;
        }
    }
    .hero-right {
        display: grid;
        align-items: center;
        justify-items: center;
    }
    img {
        width: 90%;
    }
}

@media (max-width: 1420px) {
    .show-on-1420 {
        .hero-center h1 {
            font-size: 2.1rem;
            align-self: end;
        }
        .hero-center h5 {
            font-size: 1.1rem;
        }
        .hero-center p {
            font-size: 1.3rem;
            align-self: start;
        }
        .hero-right img {
            width: 100%;
        }
    }
    
}

</style>