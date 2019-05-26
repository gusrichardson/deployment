<template>
  <div class="authors-section">
    <div class="wrapper">
      <div class="authors-banner"></div>
      <h2>Authors</h2>
      <div class="auth-image left">
        <img :src="becker" alt="Helaine Becker">
      </div>
      <div class="auth-text">
        <p>
          <span class="bold">Helaine Becker</span> is the bestselling author of more than 70 books for children and young adults, including the “enduring Canadian Christmas classic” A PORCUPINE IN A TREE and the giggle-inducing ODE TO UNDERWEAR. She's a multi-time winner of the Silver Birch Award and a two-time winner of the Lane Anderson Award for science writing for children.
          <a
            href="https://helainebecker.com"
          >helainebecker.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import becker from "../assets/becker.jpg";

export default {
  name: "Authors",
  data: function() {
    return {
      becker: becker
    };
  }
};
</script>

<style>
.bold {
  font-weight: bold;
  color: #ff4f4f;
}
#authors-section .wrapper {
  background: #fffdf8;
  border-radius: 0 0 10px 10px;
}

#authors-section .wrapper h2 {
  margin-left: 30px;
}
#authors-banner {
  /* background-image: url("../assets/books.jpg"); */
  height: 400px;
  background-size: cover;
  background-position: 0 90%;
  margin-bottom: 30px;
}
.author-container {
  height: 450px;
  display: flex;
}

.author-container:nth-child(even) {
  flex-direction: row-reverse;
}

.auth-text {
  height: 400px;
  /* border: 2px solid blue; */
  width: calc(100% - 300px);
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}

.auth-image {
  width: 300px;
  height: 400px;
  /* box-shadow: 10px 10px #ffdd9a; */
  /* border: 2px solid red; */
}
.auth-image:nth-child(1) {
  background-image: url(../assets/becker.jpg);
  background-size: 100% auto;
}

.right img {
  box-shadow: 15px 15px #ffdd9a;
}

.left img {
  box-shadow: -15px 15px #ffdd9a;
}

/* 
.auth-image img:nth-of-type(odd) {
  box-shadow: -15px 15px #ffdd9a;
} */

/* .auth-image:nth-of-type(2) {
  box-shadow: -10px 10px #ffdd9a;
} */

.auth-image img {
  max-width: 100%;
  display: block;
}
</style>


