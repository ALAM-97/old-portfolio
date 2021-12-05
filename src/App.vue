<template>
  <div id="app" :class="mode">
    <body>
      <div class="red-line">
        SITO IN SVILUPPO <i class="fas fa-wrench"></i>
      </div>
      <Header :mode="mode" @toggle="toggle" />
      <Hero/>
      <About/>
      <Skills :duration="duration" />
      <Portfolio/>
      <!-- <Experience/> -->
    </body>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
// import Experience from './components/Experience.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Skills,
    Portfolio
    // Experience
  },
  data() {
    return {
      mode : 'light',
      duration: '27s'
    }
  },
  methods: {
    toggle() {
      if(this.mode === 'dark') {
        return this.mode = 'light'
      } else {
        return this.mode = 'dark'
      }
    }
  }

}
</script>

<style lang="scss">
@import './assets/style/common.scss';
@import './assets/style/common-queries.scss';
  .red-line{
    background: red;
    padding: 10px;
    font-weight: 600;
    text-align: center;
  }
</style>
