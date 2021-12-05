import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        logos: [
                {
                    name: 'HTML',
                    url: require("../assets/img/skills/html.png")
                },
                {
                    name: 'CSS',
                    url: require("../assets/img/skills/css.png")
                },
                {
                    name: 'SCSS',
                    url: require("../assets/img/skills/sass.png")
                },
                {
                    name: 'BOOTSTRAP',
                    url: require("../assets/img/skills/bootstrap.png")
                },
                {
                    name: 'JAVASCRIPT',
                    url: require("../assets/img/skills/javascript.png")
                },
                {
                    name: 'VUEJS',
                    url: require("../assets/img/skills/vuejs.png")
                },
                {
                    name: 'PHP',
                    url: require("../assets/img/skills/php.png")
                },
                {
                    name: 'MYSQL',
                    url: require("../assets/img/skills/mysql.png")
                },
                {
                    name: 'LARAVEL',
                    url: require("../assets/img/skills/laravel.png")
                },
                {
                    name: 'PHOTOSHOP',
                    url: require("../assets/img/skills/photoshop.png")
                },
                // {
                //     name: 'ILLUSTRATOR',
                //     url: require("../assets/img/skills/illustrator.png")
                // },
            ],
        projects: [
                {
                    name: 'DISCORD',
                    img: require("../assets/img/discord.jpg"),
                    tecnologies: [
                        {
                            html: require("../assets/img/skills/html.png"),
                            css: require("../assets/img/skills/css.png")
                        }
                    ],
                    url: 'https://alam-97-boolean-discord.netlify.app/'
                },
                {
                    name: 'DROPBOX',
                    img: require("../assets/img/dropbox.jpg"),
                    tecnologies: [
                        {
                            html: require("../assets/img/skills/html.png"),
                            css: require("../assets/img/skills/css.png")
                        }
                    ],
                    url: 'https://alam-97-boolean-dropbox.netlify.app/'
                },
                {
                    name: 'PLAYSTATION STORE',
                    img: require("../assets/img/playstation.jpg"),
                    tecnologies: [
                        {
                            html: require("../assets/img/skills/html.png"),
                            css: require("../assets/img/skills/css.png"),
                            responsive: require("../assets/img/skills/responsive.png")
                        }
                    ],
                    url: 'https://alam-97-boolean-40-ps-store.netlify.app/'
                },
                {
                    name: 'SPOTIFY',
                    img: require("../assets/img/Spotify.png"),
                    tecnologies: [
                        {
                            html: require("../assets/img/skills/html.png"),
                            css: require("../assets/img/skills/css.png"),
                            responsive: require("../assets/img/skills/responsive.png")
                        }
                    ],
                    url: 'https://alam-97-boolean-spotify.netlify.app/'
                },
                {
                    name: 'TICKET CALCULATOR',
                    img: require("../assets/img/ticket-calculator.jpg"),
                    tecnologies: [
                        {
                            html: require("../assets/img/skills/html.png"),
                            css: require("../assets/img/skills/css.png"),
                            js: require("../assets/img/skills/javascript.png")
                        }
                    ],
                    url: 'https://alam-97-ticket-price-calculator.netlify.app/'
                },
                {
                    name: 'WHATSAPP',
                    img: require("../assets/img/whatsapp.jpg"),
                    tecnologies: [
                        {
                            vuejs: require("../assets/img/skills/vuejs.png"),
                            css: require("../assets/img/skills/css.png"),
                            responsive: require("../assets/img/skills/responsive.png")
                        }
                    ],
                    url: 'https://alam-97-whatsapp.netlify.app/'
                },
                {
                    name: 'MAX COACH',
                    img: require("../assets/img/max-coach.png"),
                    tecnologies: [
                        {
                            vuejs: require("../assets/img/skills/vuejs.png"),
                            sass: require("../assets/img/skills/sass.png")
                            
                        }
                    ],
                    url: 'https://max-coach-alam.netlify.app/'
                },
                {
                    name: 'DC COMICS',
                    img: require("../assets/img/dc-comics.jpg"),
                    tecnologies: [
                        {
                            vuejs: require("../assets/img/skills/vuejs.png"),
                            sass: require("../assets/img/skills/sass.png")
                            
                        }
                    ],
                    url: 'https://dc-comics-alam.netlify.app/'
                },
                {
                    name: 'NETFLIX',
                    img: require("../assets/img/boolflix.png"),
                    tecnologies: [
                        {
                            vuejs: require("../assets/img/skills/vuejs.png"),
                            sass: require("../assets/img/skills/sass.png")
                        }
                    ],
                    url: 'https://boolflix-alam.netlify.app/'
                },
            ]
    }
})