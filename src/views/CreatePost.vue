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
            <label class="label">Image</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="file">
                <label class="file-label">
                  <input class="file-input" type="file" name="image" @change="onFileSelected">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    {{ selectedFile.name }}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="field is-horizontal">
          <div class="field-label is-success" />
          <div class="field-body">
            <div class="field">
              <progress class="progress" value="15" max="100">15%</progress>
            </div>
          </div>
        </div> -->

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
                <input class="input" type="text" placeholder="Name" v-model="quiz[0].choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_one" value="true" v-model="quiz[0].ans"/>
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_one" value="false" v-model="quiz[0].ans"/>
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
                <input class="input" type="text" placeholder="Name" v-model="quiz[1].choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_two" value="true" v-model="quiz[1].ans"/>
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_two" value="false" v-model="quiz[1].ans"/>
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
                <input class="input" type="text" placeholder="Name" v-model="quiz[2].choc"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_three" value="true" v-model="quiz[2].ans" />
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_three" value="false" v-model="quiz[2].ans" />
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
                <input class="input" type="text" placeholder="Name" v-model="quiz[3].choc" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
              <div class="control padding">
                <label class="radio">
                  <input type="radio" name="c_four" value="true" v-model="quiz[3].ans" />
                  True
                </label>
                <label class="radio">
                  <input type="radio" name="c_four" value="false" v-model="quiz[3].ans" />
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
      quiz: [{
        choc: '',
        ans: '',
      },
      {
        choc: '',
        ans: '',
      },
      {
        choc: '',
        ans: '',
      },
      {
        choc: '',
        ans: '',
      }],
      selectedFile: {
        name: 'No File Choosed',
      },
      downloadURL: '',
    };
  },
  methods: {
    onFileSelected(event) {
      /* eslint-disable */
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      /* eslint-disable */
      const storageRef = firebase.storage().ref()
        .child(`images/${this.selectedFile.name}`);
        storageRef.put(this.selectedFile)
        .then(() => {
          this.downloadURL = storageRef.getDownloadURL();
        });
    },
    savePost() {
      this.ref.add({
        title: this.title,
        body: this.body,
        question: this.question,
        quiz: this.quiz,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        downloadURL: this.downloadURL.i,
      }).then((docRef) => {
        this.$router.push('/questions');
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
