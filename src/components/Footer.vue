<template>
    <section id="contacts">
        <div class="footer">
            <img src="../assets/img/Logo AA.svg" alt="">
        </div>
        <!-- <div class="footer-bottom">
            <span>Portfolio by</span> 
            <strong><a href="https://www.linkedin.com/in/alessandro-amara/" target="_blank"> Alessandro Amara</a></strong>
        </div> -->
    </section>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
    
.footer {
    height: 10rem;
    display: flex;
    background: $orangeColor;
    justify-content: center;
    img {
        width: 15%;
    }
}
.footer-bottom {
    display: flex;
    justify-content: center;
    background: $orangeColor;
}
</style>