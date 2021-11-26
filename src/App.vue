<template>
  <div id="app" :class="mode">
    <body>
      <div class="red-line">
        SITO IN SVILUPPO
      </div>
      <Header :mode="mode" @toggle="toggle" />
      <Hero/>
      <About/>
      <Skills/>
    </body>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Skills
  },
  data() {
    return {
      mode : 'light'
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
