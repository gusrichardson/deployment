<template>
  <div id="partners-section">
    <div class="wrapper">
      <div id="partners-banner"></div>
      <div class="partners-gallery">
        <h2>Special thanks to our partners</h2>
        <div class="image-grid">
          <div class="partner-image">
            <img src="../assets/library-logo.jpg" alt="Halifax Public Library logo">
          </div>
          <div class="partner-image">
            <img src="../assets/TD-logo.jpg" alt="TD bank logo">
          </div>
          <div class="partner-image">
            <img src="../assets/halifax-logo.jpg" alt="city of Halifax logo">
          </div>
          <div class="partner-image">
            <img src="../assets/emera-logo.png" alt="Emera corporation logo">
          </div>
          <div class="partner-image">
            <img src="../assets/dhx-logo.jpg" alt="DHX media logo">
          </div>
          <div class="partner-image">
            <img src="../assets/farmers-logo.jpg" alt="Halifax Farmer's Market logo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners"
};
</script>

<style>
.partners-gallery {
  padding: 30px;
  background: #fffdf8;
  border-radius: 0 0 10px 10px;
}
#partners-banner {
  height: 400px;
  background-image: url(../assets/banner-sprite-min.jpg);
  background-position: 1025px -140px;
  background-size: 482%;
  /* background-image: url("../assets/library.jpg");
  background-size: cover;
  background-position: 0% 60%; */
}
.image-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
}
.partner-image {
  width: 300px;
  /* border: 1px solid red; */
  height: 200px;
}

.partner-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
