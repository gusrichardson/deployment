<template>
  <div id="home-page">
    <div class="wrapper">
      <div id="banner"></div>
      <div class="home-text">
        <h2>Welcome to the Funny Pages Festival!</h2>
        <br>
        <p>Join us this summer for the first annual “Funny Pages”, a day of workshops, presentations and lots and lots of laughing.</p>
        <br>
        <p>
          <span class="bold">When:</span> Friday, May 8, 2020 from
          9 a.m. to 3:30 p.m.
        </p>
        <br>
        <p>
          <span class="bold">Where:</span> Halifax Central Library
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#banner {
  height: 400px;
  background-image: url(../assets/banner-sprite-min.jpg);
  background-position: -120px 50%;
  background-size: 800%;
  /* background-image: url(../assets/strange-animals.jpg);
  background-size: cover;
  background-repeat: no-repeat; */
}

.home-text {
  padding: 30px;
  background: #fffdf8;
  border-radius: 0 0 10px 10px;
}

@media (max-width: 1000px) {
  #banner {
    background-position: -90px 50%;
  }
}

@media (max-width: 700px) {
  #banner {
    height: 300px;
    background-position: -80px 50%;
  }
}

@media (max-width: 500px) {
  h2 {
    text-align: center;
  }
  #banner {
    height: 250px;
    background-size: 700%;
    background-position: -20px 50%;
  }
}

@media (max-width: 375px) {
  #banner {
    height: 250px;
    background-size: 700%;
    background-position: -20px 50%;
  }
}
</style>

