<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half has-text-centered">
              <div class="card">
                 <div class="card-content">
                   <line-chart></line-chart>
                 </div>
              </div>
            </div>
            <div class="column is-half has-text-centered">
              <div class="card">
                 <div class="card-content">
                   <dough-nut></dough-nut>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Line from '@/components/Line.vue';
import Doughnut from '@/components/Doughnut.vue';

export default {
  components: {
    'line-chart': Line,
    'dough-nut': Doughnut,
  },
};
</script>

<style>

</style>
