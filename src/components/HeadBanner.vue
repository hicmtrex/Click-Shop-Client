<script setup></script>
<template>
  <!-- Start Banner Hero -->
  <div
    id="template-mo-zay-hero-carousel"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-bs-target="#template-mo-zay-hero-carousel"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li
        data-bs-target="#template-mo-zay-hero-carousel"
        data-bs-slide-to="1"
      ></li>
      <li
        data-bs-target="#template-mo-zay-hero-carousel"
        data-bs-slide-to="2"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                class="img-fluid"
                src="../assets/img/banner_img_01.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left align-self-center">
                <h1 class="h1 text-success"><b>Click Shop</b> eCommerce</h1>
                <h3 class="h2">Tiny and Perfect eCommerce</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis qui numquam deserunt aliquam repudiandae eveniet!
                  Praesentium debitis nesciunt quae veritatis modi suscipit
                  tempora molestiae! Dolorum molestias numquam fugit illum rem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                class="img-fluid"
                src="/images/Muscle_Fit_white-removebg-preview.png"
                alt=""
              />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h1 class="h1">Proident occaecat</h1>
                <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                <p>
                  You are permitted to use this Zay CSS template for your
                  commercial websites. You are <strong>not permitted</strong> to
                  re-distribute the template ZIP file in any kind of template
                  collection websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                class="img-fluid"
                src="../assets/img/banner_img_03.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h1 class="h1">Repr in voluptate</h1>
                <h3 class="h2">Ullamco laboris nisi ut</h3>
                <p>
                  We bring you 100% free CSS templates for your websites. If you
                  wish to support TemplateMo, please make a small contribution
                  via PayPal or tell your friends about our website. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev text-decoration-none w-auto ps-3"
      href="#template-mo-zay-hero-carousel"
      role="button"
      data-bs-slide="prev"
    >
      <i class="fas fa-chevron-left"></i>
    </a>
    <a
      class="carousel-control-next text-decoration-none w-auto pe-3"
      href="#template-mo-zay-hero-carousel"
      role="button"
      data-bs-slide="next"
    >
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
  <!-- End Banner Hero -->
</template>

<style scoped>
/* Hero Carousel */
#template-mo-zay-hero-carousel {
  background: #efefef !important;
}
/* Accordion */
.templatemo-accordion a {
  color: #000;
}
.templatemo-accordion a:hover {
  color: #333d4a;
}
/* Shop */
.shop-top-menu a:hover {
  color: #69bb7e !important;
}
/* Product */
.product-wap {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
.product-wap .product-color-dot.color-dot-red {
  background: #f71515;
}
.product-wap .product-color-dot.color-dot-blue {
  background: #6db4fe;
}
.product-wap .product-color-dot.color-dot-black {
  background: #000000;
}
.product-wap .product-color-dot.color-dot-light {
  background: #e0e0e0;
}
.product-wap .product-color-dot.color-dot-green {
  background: #0bff7e;
}
.card.product-wap .card .product-overlay {
  background: rgba(0, 0, 0, 0.2);
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
.card.product-wap:hover .card .product-overlay {
  visibility: visible;
  opacity: 1;
}
.card.product-wap a {
  color: #000;
}
#carousel-related-product .slick-slide:focus {
  outline: none !important;
}
#carousel-related-product .slick-dots li button:before {
  font-size: 15px;
  margin-top: 20px;
}
/* Brand */
.brand-img {
  filter: grayscale(100%);
  opacity: 0.5;
  transition: 0.5s;
}
.brand-img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
/* Carousel Hero */
#template-mo-zay-hero-carousel .carousel-indicators li {
  margin-top: -50px;
  background-color: #59ab6e;
}
#template-mo-zay-hero-carousel .carousel-control-next i,
#template-mo-zay-hero-carousel .carousel-control-prev i {
  color: #59ab6e !important;
  font-size: 2.8em !important;
}
/* Carousel Brand */
.tempaltemo-carousel .h1 {
  font-size: 0.5em !important;
  color: #000 !important;
}
</style>
