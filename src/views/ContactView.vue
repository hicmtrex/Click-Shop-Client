<template>
  <DefaultLayout>
    <!-- Start Content Page -->
    <div class="container-fluid bg-success text-white py-5">
      <div class="col-md-6 m-auto text-center">
        <h1 class="text-white">Contact Us</h1>
        <p>
          Proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>

    <!-- Start Map -->
    <div id="map">
      <iframe
        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="422px"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Ena Map -->

    <!-- Start Contact -->
    <div class="container py-10 shadow bg-white">
      <div class="row py-10">
        <form class="col-md-9 m-auto" method="post" role="form">
          <div class="row">
            <div class="form-group col-md-6 mb-3">
              <label for="inputname">Name</label>
              <input
                type="text"
                class="form-control mt-1"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group col-md-6 mb-3">
              <label for="inputemail">Email</label>
              <input
                type="email"
                class="form-control mt-1"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="inputsubject">Subject</label>
            <input
              type="text"
              class="form-control mt-1"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div class="mb-3">
            <label for="inputmessage">Message</label>
            <textarea
              class="form-control mt-1"
              id="message"
              name="message"
              placeholder="Message"
              rows="8"
            ></textarea>
          </div>
          <div class="row">
            <div class="col text-end mt-2">
              <button type="submit" class="btn btn-success btn-lg px-3">
                Let’s Talk
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- End Contact -->
  </DefaultLayout>
</template>

<script setup>
import TopNavbar from '../components/TopNavbar.vue';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
</script>

<style scoped></style>
