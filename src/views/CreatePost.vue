<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Title</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="title" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Body</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Explain how we can help you"
                  v-model="body">
                </textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Question</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="question"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Answer 1:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="c_one.choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_one" value="true" v-model="c_one.ans"/>
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_one" value="false" v-model="c_one.ans"/>
                  False
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Answer 2:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="c_two.choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_two" value="true" v-model="c_two.ans"/>
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_two" value="false" v-model="c_two.ans"/>
                  False
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Answer 3:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="c_three.choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_three" value="true" v-model="c_three.ans" />
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_three" value="false" v-model="c_three.ans" />
                  False
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Answer 4:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Name" v-model="c_four.choc" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_four" value="true" v-model="c_four.ans" />
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_four" value="false" v-model="c_four.ans" />
                  False
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary" @click="savePost()">Save Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '../firebase';

export default {
  name: 'CreatePost',
  data() {
    return {
      ref: firebase.firestore().collection('posts'),
      title: '',
      body: '',
      question: '',
      c_one: {
        choc: '',
        ans: '',
      },
      c_two: {
        choc: '',
        ans: '',
      },
      c_three: {
        choc: '',
        ans: '',
      },
      c_four: {
        choc: '',
        ans: '',
      },
    };
  },
  methods: {
    savePost() {
      this.ref.add({
        title: this.title,
        body: this.body,
        question: this.question,
        c_one: {
          choc: this.c_one.choc,
          ans: this.c_one.ans,
        },
        c_two: {
          choc: this.c_two.choc,
          ans: this.c_two.ans,
        },
        c_three: {
          choc: this.c_three.choc,
          ans: this.c_three.ans,
        },
        c_four: {
          choc: this.c_four.choc,
          ans: this.c_four.ans,
        },
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      }).then((docRef) => {
        this.$router.push('/questions');
        console.log(docRef);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style>
.padding {
  padding: 10px;
}
</style>
