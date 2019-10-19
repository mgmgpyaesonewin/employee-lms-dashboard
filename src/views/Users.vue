<template>
  <section class="section">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <table class="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>
                    <abbr title="Questions">Rank</abbr>
                  </th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(user, index) in users">
                  <th>{{ index + 1 }}</th>
                  <td>{{ user.email }}</td>
                  <td>
                    <img class="image is-128x128" alt="Google Logo" :src="user.profile_link" />
                  </td>
                  <td>{{ user.point }}</td>
                  <td>{{ user.created_at }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '../firebase';

export default {
  name: 'Users',
  data() {
    return {
      ref: firebase.firestore().collection('flutterusers'),
      users: [],
    };
  },
  mounted() {
    this.ref.onSnapshot((querySnapshot) => {
      this.users = [];
      querySnapshot.forEach((doc) => {
        this.users.push({
          id: doc.data().userId,
          email: doc.data().email,
          name: doc.data().name,
          point: doc.data().point,
          profile_link: doc.data().profile_link,
        });
      });
    });
  },
};
</script>

<style>
</style>
