<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="main-content">
            <!-- Begin About Me Section -->
            <div class="section-light about-me" id="about-me">
              <div class="container padding">
                <div class="columns is-multiline is-desktop is-vcentered">
                  <div class="column is-6 has-vertically-aligned-content padding">
                    <h1
                      class="title has-text-centered section-title"
                    >Enablement for the Modern Workforce</h1>
                    <p class="is-larger">
                      &emsp;&emsp;
                      <strong>
                        a workforce engagement platform designed for today's digital habits.
                        Our innovative solution drives enablement by delivering more engaging and
                        effective ‘drip learning’ directly to a user’s device, anytime, anywhere.
                      </strong>
                    </p>
                    <br />
                    <div class="is-divider"></div>
                    <div class="hero-body">
                      <div class="columns about-links">
                        <div class="column">
                          <p class="heading">
                            <strong>Give me a ring</strong>
                          </p>
                          <p class="subheading">123-456-7890</p>
                        </div>
                        <div class="column">
                          <p class="heading">
                            <strong>Email Me</strong>
                          </p>
                          <p class="subheading">hello@example.com</p>
                        </div>
                        <div class="column">
                          <p class="heading">
                            <strong>View my portfolio</strong>
                          </p>
                          <p class="subheading">example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6 right-image" data-aos="fade-left">
                    <img alt="Vue logo" src="../assets/workforce.svg" />
                  </div>
                </div>
              </div>
            </div>
            <!-- End About Me Content -->
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline" data-aos="fade-in" data-aos-easing="linear">
            <div class="column is-12 about-me">
              <h1 class="title has-text-centered section-title">Why us?</h1>
            </div>
            <div class="column is-10 has-text-centered is-offset-1">
              <h2 class="subtitle">
                Today’s workplace learning methods have become a cumbersome
                check-the-box exercise...and chances are your team can’t stand them.
              </h2>
              <form action="example.docs">
                <button class="button">
                  Start Using&emsp;
                  <i class="fad fa-download fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.padding {
  padding: 3rem;
}
</style>

<script>
export default {
  name: 'home',
};
</script>
