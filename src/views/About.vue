<template>
  <div id="about-section">
    <div class="wrapper">
      <div id="about-banner"></div>
      <div class="about-text">
        <h2>About Funny Pages</h2>
        <br>
        <p>
          There’s one thing kids of all ages and reading levels have in common. They love to laugh. That’s why The Halifax Public Library is introducing
          <span
            class="bold"
          >Funny Pages</span>. This day-long celebration brings authors from across Canada and students from across HRM together for laughter-filled workshops built around their favourite funny books.
          What’s more,
          thanks to our generous sponsors, each kid will receive a free signed copy of one of this year’s highlighted books.
        </p>
        <br>
        <p>
          As well, a special adults-only evening event will feature our authors in a panel discussion about breaking into the Canadian publishing industry.
          <span
            class="bold"
          >Funny Pages</span> will take place Friday, May 8, 2020 at Halifax Central Library.
          Please contact us for more information.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about-text {
  background: #fffdf8;
  padding: 30px;
  border-radius: 0 0 10px 10px;
}
#about-banner {
  height: 400px;
  background-image: url(../assets/banner-sprite-min.jpg);
  background-position: -800px -140px;
  background-size: 500%;
  /* background-image: url(../assets/school-girls.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 30%; */
  /* margin-bottom: 30px; */
}

@media (max-width: 1000px) {
  #about-banner {
    background-size: 700%;
    background-position: -800px 50%;
  }
}

@media (max-width: 700px) {
  #about-banner {
    background-position: -800px -140px;
    height: 300px;
  }
}

@media (max-width: 600px) {
  #about-banner {
    background-position: -630px 50%;
  }
}

@media (max-width: 500px) {
  h2 {
    text-align: center;
  }
  #about-banner {
    height: 250px;
    background-size: 700%;
    background-position: -510px 50%;
  }
  .about-text {
    padding: 20px 15px;
  }
}

@media (max-width: 375px) {
  #about-banner {
    background-position: -420px 50%;
  }
}
</style>





