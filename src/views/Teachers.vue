<template>
  <div id="teachers-section">
    <div class="wrapper">
      <div id="teachers-banner"></div>
      <div class="teachers-text">
        <h2>Teachers</h2>
        <br>
        <p>Interested in having your class attend our workshops and presentations? Funny Pages is open to all students between Grades Four and Twelve but because of space limitations, admission is on a first-come, first-serve basis.</p>
        <div class="teachers-flex">
          <div class="text-container">
            <p>Each school can bring up to thirty students and must have one supervising adult per ten children.</p>
            <br>
            <p>Please contact for more information.</p>
          </div>
          <div class="gallery-container">
            <div class="img-container one">
              <img src="../assets/ellie-and-jeannie.jpg" alt="two young women laughing">
            </div>
            <div class="img-container two">
              <img src="../assets/kids-reading.jpg" alt="kids reading">
            </div>
            <div class="img-container three">
              <img src="../assets/classroom.jpg" alt="a classroom of kids laughing">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teachers"
};
</script>

<style scoped>
.teachers-text {
  background: #fffdf8;
  padding: 30px;
  border-radius: 0 0 10px 10px;
}
#teachers-banner {
  height: 400px;
  background-image: url(../assets/banner-sprite-min.jpg);
  background-position: -2795px -130px;
  background-size: 484%;
}
.teachers-flex {
  display: flex;
  margin-top: 10px;
}
.text-container {
  width: 500px;
  padding-right: 20px;
}
.gallery-container {
  width: 500px;
  height: 400px;
  display: grid;
  grid-template-rows: 190px 190px;
  grid-template-columns: 280px 210px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.one {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  overflow: hidden;
}
.one img {
  max-width: 100%;
  display: block;
}

.two {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  overflow: hidden;
}
.two img {
  max-width: 100%;
  display: block;
}

.three {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.three img {
  max-width: 100%;
  display: block;
  margin-top: 35px;
}

@media (max-width: 1000px) {
  #teachers-banner {
    background-position: -2490px -110px;
    background-size: 610%;
  }
  .three {
    display: none;
  }
  .gallery-container {
    width: 280px;
    grid-template-columns: 280px;
    grid-template-rows: 190px 190px;
  }
}

@media (max-width: 700px) {
  #teachers-banner {
    background-position: 1755px -120px;
    background-size: 800%;
  }
}
@media (max-width: 600px) {
  #teachers-banner {
    background-position: 1610px -115px;
    background-size: 900%;
  }
  .gallery-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .text-container {
    width: 100%;
  }
}
@media (max-width: 500px) {
  #teachers-banner {
    height: 250px;
    background-position: -2370px -120px;
    background-size: 900%;
  }
  .teachers-flex {
    display: block;
    margin-top: 0;
  }
  .teachers-text {
    padding: 20px 15px;
  }

  .teachers-flex br {
    display: none;
  }

  .one {
    display: none;
  }
  .two {
    margin-top: 10px;
    border-radius: 10px;
  }
}

@media (max-width: 430px) {
  #teachers-banner {
    height: 250px;
    background-position: -1800px -80px;
    background-size: 800%;
  }
}
@media (max-width: 375px) {
  #teachers-banner {
    height: 250px;
    background-position: -1580px -70px;
    background-size: 800%;
    /* background-position: -420px 50%; */
  }
}
</style>
