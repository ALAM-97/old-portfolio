<template>
    <section id="about">
        <div class="container">
            <div class="section-intro">
                <h3>ABOUT ME</h3>
                <h5>Qualcosa su di me</h5>
            </div>
            <div class="about-content">
                <img src="../assets/img/about-logo.png" alt="">
                <div class="about-content-right">
                    <p>
                        Dopo gli studi ho lavorato per un anno in una start-up che si occupa della creazione di siti internet affiliati al network marketing, nonostante avessi conseguito gli studi da geometra mi ero molto appassionato a quel mondo iniziando a studiare da auto-didatta. Per motivi economici ho dovuto cambiare settore, lavorando per 15 mesi come addetto di scalo presso l'aeroporto internazionale di Roma-Fiumicino. Dopo aver perso il lavoro causa Covid sono tornato sui miei passi e mi sono iscritto al corso Boolean per diventare un Full-Stack Web Developer!
                    </p>
                    <div class="about-numbers">
                        <div>
                            <div class="exp">
                                <strong>6</strong>
                                <p>mesi di esperienza</p>
                            </div>
                        </div>
                        <div>
                            <div class="exp">
                                <strong>8+</strong>
                                <p>progetti completati</p>
                            </div>
                        </div>
                        <div>
                            <div class="exp">
                                <strong>0</strong>
                                <p>lavori in azienda</p>
                            </div>
                        </div>
                    </div>
                    <a class="btn" href="">
                        Scarica CV  <i class="fas fa-file-download"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss" scoped>
.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr 2.5rem;
    grid-template-rows: auto;
    img {
        justify-self: center;
        align-self: start;
        width: 70%;
        border-radius: 3.125rem;
    }
    p {
        font-size: 1.1875rem;
    }
    .btn {
    margin: 0 auto;
    align-self: end;
}
    .about-content-right {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 4.375rem;
    }
    .about-numbers {
        display: grid;
        grid-template-columns:  repeat(3, 1fr);
        grid-template-rows: auto;
        align-items: center;
        .exp {
            text-align: center;
            strong {
                font-size: 1.6875rem;
            }
            p {
                font-size: 1rem;
                font-weight: 300;
            }
        }
    }
}

</style>