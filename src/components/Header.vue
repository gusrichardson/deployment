<template>
  <div id="header">
    <div class="wrapper">
      <div class="title-container">
        <h1>
          Funny
          <span class="mobile">pages</span>
        </h1>
        <h3 class="subtitle">
          An all day festival of books that make kids laugh
          <span class="emoji">🤣</span>
        </h3>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/authors">Authors</router-link>
        <router-link to="/teachers">Teachers</router-link>
        <router-link to="/partners">Partners</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.subtitle {
  position: relative;
  display: inline-block;
}

#header h3 {
  color: #ff4f4f;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-style: italic;
}
.emoji {
  font-size: 2rem;
  position: absolute;
  right: -42px;
  bottom: -10px;
  transition: 1s;
  cursor: default;
  text-shadow: none;
  font-style: normal;
}

.title-container h1 {
  position: relative;
}

.emoji:hover {
  transform: rotate(360deg);
}
#header {
  height: 250px;
  display: flex;
  background: linear-gradient(180deg, #fffdf8, #96eaea);
}

.title-container {
  /* width: 300px; */
  height: 200px;
  padding-top: 80px;
  /* border: 2px solid pink; */
}

#nav {
  position: relative;
  height: 60px;
}

#nav a {
  width: 20%;
  display: inline-block;
  text-align: center;
  height: 50px;
  padding-top: 18px;
  background: #ffeecc;
}

#nav a:hover {
  background: #ffdd9a;
  letter-spacing: 2px;
}

#nav a:nth-child(1) {
  border-radius: 10px 0 0 0;
}
#nav a:nth-child(5) {
  border-radius: 0 10px 0 0;
}
@media (max-width: 700px) {
  .mobile {
    display: block;
  }
  #header {
    height: 260px;
    text-align: center;
  }
  .title-container {
    height: 210px;
    padding-top: 40px;
  }
  .emoji {
    display: none;
  }
}
@media (max-width: 500px) {
  .emoji {
    display: none;
  }
  #header {
    height: 260px;
    text-align: center;
  }
  #header h3 {
    font-size: 1rem;
    margin-top: 10px;
  }
  .title-container {
    height: 210px;
    padding-top: 40px;
  }
  #nav a:hover {
    letter-spacing: 1px;
  }
}

@media (max-width: 375px) {
  .emoji {
    display: none;
  }
  #header {
    height: 260px;
    text-align: center;
  }
  #header h3 {
    font-size: 1rem;
    margin-top: 10px;
  }
  .title-container {
    height: 210px;
    padding-top: 40px;
  }
  #nav a {
    width: 20%;
  }
  #nav a:hover {
    letter-spacing: 1px;
  }
}
</style>

