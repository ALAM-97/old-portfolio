<template>
  <section id="about">
    <div class="container">
      <div class="section-intro">
        <h3>ABOUT ME</h3>
        <h5>Qualcosa su di me</h5>
      </div>
      <div class="about-content">
        <img src="../assets/img/about-logo.png" alt="" />
        <div class="about-content-right">
          <p class="about-text">
            Dopo aver completato il corso Boolean a Dicembre 2022 mi sono subito
            lanciato nel mercato del lavoro. Ho lavorato i miei primi 3 mesi
            come web developer in Runtheons, una Peak Performance Company
            specializzata e focalizzata nell’accelerazione e nel miglioramento
            delle performance atletiche, e successivamente sono stato assunto in
            Yeldo, una fintech company che si occupa di investimenti
            immobiliari, azienda in cui lavoro tutt'ora.
          </p>
          <div class="about-numbers">
            <div>
              <div class="exp">
                <strong>2</strong>
                <p>anni di esperienza</p>
              </div>
            </div>
            <div>
              <div class="exp">
                <strong>10+</strong>
                <p>progetti completati</p>
              </div>
            </div>
            <div>
              <div class="exp">
                <strong>2</strong>
                <p>lavori in azienda</p>
              </div>
            </div>
          </div>
          <a class="btn" href="">
            Scarica CV <i class="fas fa-file-download"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
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
    .about-text {
      margin-bottom: 3.4375rem;
    }
  }
  .about-numbers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
