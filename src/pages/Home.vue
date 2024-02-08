<script setup>
import Hero from "../components/Hero.vue";
import smartStudy from "../assets/smart-study.jpg";
import eduLap from "../assets/edu-lap.jpg";
</script>

<template>
  <Hero />
  <div
    class="d-flex flex-column-reverse gap-3 flex-lg-row-reverse align-items-center justify-content-around py-4"
  >
    <div class="d-flex flex-column gap-2 p-3">
      <h5 class="fs-3 fw-semibold">Scholarpace is your buddy</h5>
      <p>
        Meet your new online education buddy. Now you can become an actual
        scholar without stressing.
      </p>
    </div>

    <img :src="smartStudy" alt="smart" class="side-image" />
  </div>
  <div
    class="d-flex flex-column-reverse gap-3 flex-lg-row align-items-center justify-content-around py-4"
  >
    <div class="d-flex flex-column gap-2">
      <h5 class="fs-3 fw-semibold">Easy To Use</h5>
      <p>Our interface is easy to use and easy to get started with.</p>
      <button class="btn btn-primary text-white btn-lg p-3 shadow-lg-hover">
        Get Started
      </button>
    </div>

    <img :src="eduLap" alt="smart" class="side-image rounded-2" />
  </div>
  <div
    class="d-flex flex-column-reverse gap-3 flex-lg-row-reverse align-items-center justify-content-around py-5"
  >
    <div class="d-flex flex-column">
      <h5 class="fs-3 fw-semibold">Scholarpace leads to success</h5>
      <p class="text-wrap">Scholarpace is your sure fire way to success.</p>
      <p>It is simple, works at your pace and is modular.</p>
      <p>It is everything you would want in a scholar's tool.</p>
    </div>

    <img :src="eduLap" alt="smart" class="side-image rounded-2" />
  </div>

  <!-- footer -->
  <div class="d-flex flex-column flex-lg-row bg-primary p-5 justify-content-evenly text-white">
    <div class="d-flex flex-column gap-2">
      <h5 class="text-black fw-bold">Scholarpace</h5>
      <p><span class="fw-semibold">Email:</span> <router-link to="/" class="text-white">scholarpace@gmail.com</router-link></p>
      <p><span class="fw-semibold">Phone:</span> Number here</p>
      <p><span class="fw-semibold">Corporate address:</span> Address here</p>
    </div>
    <div class="d-flex flex-column gap-2">
      <h5 class="text-black fw-bold">Site Navigation</h5>
      <router-link to="/" class="text-white">About</router-link>
      <router-link to="/" class="text-white">Careers</router-link>
      <router-link to="/" class="text-white">About</router-link>
      <router-link to="/" class="text-white">About</router-link>
      
      
    </div>
  </div>
</template>

<style>
.side-image {
  height: 400px;
  width: 400px;
  transition: all 200ms ease-in-out 150ms;
}

.side-image:hover {
  transform: scale(1.2);
}
</style>
