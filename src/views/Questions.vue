<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="level-right padding">
            <router-link class="button is-primary is-light is-medium" to="/create">
              <span class="icon is-small">
                <i class="fas fa-plus-square"></i>
              </span>
              <span>Add</span>
            </router-link>
          </div>
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="Questions">#</abbr>
                </th>
                <th>Title</th>
                <th>Image</th>
                <th>
                  Body
                </th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="index" v-for="(question, index) in questions">
                <th>{{ index + 1 }}</th>
                <td>
                  {{ question.title }}
                </td>
                <td>
                  <img class="image is-128x128" alt="Google Logo" :src="question.downloadURL" />
                </td>
                <td>{{ question.body }}</td>
                <td>{{ question.created_at }}</td>
                <td>
                  <div class="buttons are-small">
                    <!-- <button class="button is-primary">Primary</button> -->
                    <button
                      class="button is-danger is-outlined"
                      @click="deletePost(question.key)">
                        Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import firebase from '../firebase';

export default {
  name: 'Questions',
  data() {
    return {
      ref: firebase.firestore().collection('posts'),
      questions: [],
    };
  },
  methods: {
    deletePost(id) {
      this.ref.doc(id).delete().then(() => {
        this.$router.push('/questions');
      }).catch((error) => {
        console.log('Error removing document: ', error);
      });
    },
  },
  mounted() {
    this.ref.onSnapshot((querySnapshot) => {
      this.questions = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        this.questions.push({
          key: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          created_at: moment(doc.data().created_at.toDate()).format('DD-MM-YYYY'),
          downloadURL: doc.data().downloadURL,
        });
      });
    });
  },
};
</script>

<style>
.padding {
  padding: 10px;
}
</style>
