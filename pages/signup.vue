<template>
  <div class="container">
    <logo />

    <transition name="fade-in-right" mode="out-in">

      <question :label="question.label" :key="question.name">
        <input v-model="answer"  @keyup.enter="next()" class='border rounded shadow p-2 w-1/2 mx-auto' />
      </question>
      </transition>

      <div class='nav'>
        <button class='nav--button' @click="next()">{{ navText }}</button>
        <div class='nav--hint'>or ENTER</div>
      </div>

    </transition>

  </div>
</template>

<script>
export default {
  data() {
    let questions = [
      { name: 'name', label: 'What is your business name?' },
      { name: 'breed', label: 'What breeds do you have?' },
      { name: 'short_description', label: 'A short paragraph to describe your business' },
    ];

    let answers = questions.reduce((accum, question) => {
      accum[question.name] = undefined;
      return accum;
    }, {});

    let activeIndex = 0;

    return {
      activeIndex,
      questions,
      answers,
    };
  },

  computed: {
    navText() {
      return this.lastQuestion ? 'Sign up' : 'Next';
    },
    lastQuestion() {
      return this.activeIndex === (this.questions.length - 1);
    },
    question() {
      return this.questions[this.activeIndex];
    },
    answer: {
      get() { return this.answers[this.question.name]; },
      set(value) { this.answers[this.question.name] = value; },
    },
  },
  methods: {
    next() {
      if (this.lastQuestion) {
        return this.signup();
      }

      this.activeIndex++
    },

    signup() {
      this.$store.commit('breeders/add', this.answers);
      this.$router.push("/");
    },
  },

}
</script>

<style scoped>
.nav {
  @apply flex justify-center items-center;
}

.nav--button {
  @apply py-2 px-3 rounded inline-block border border-teal-400 bg-teal-400 text-white;
}

.nav--button:hover {
  @apply border-teal-500 bg-teal-500;
}

.nav--hint {
  @apply ml-1;
}

input {
  margin-bottom: 0.5em;
}

.signup {
  display: block;
  @apply mx-auto my-5;
}

.links {
  padding-top: 15px;
}
</style>
