<template>
  <div>
    <!-- <div
      v-for="question in questions"
      :key="question.question.text"
      class="question_block"
    >
      <div class="question">
        {{ question.question.text }}
      </div>
      <div class="answers">
        <div
          v-for="answer in question.answers"
          :key="answer.text"
          class="answer"
        >
          {{ answer.text }}
        </div>
      </div>
    </div> -->
    <div class="question_block">
      <div class="question">
        {{ currentQuestion?.question.text }}
      </div>
      <ul class="answers">
        <ul>
          <li v-for="(answer, index) in currentQuestion?.answers" :key="index">
            <input
              type="radio"
              :id="'answer' + index"
              :value="{
                index,
                topic: currentQuestion?.topic,
                score: answer.score,
                isCorrect: answer.isCorrect,
              }"
              v-model="userAnswers[questionNumber - 1]"
            />
            <label :for="'answer' + index">{{ answer.text }}</label>
          </li>
        </ul>
        <!-- <div
          v-for="answer in currentQuestion?.answers"
          :key="answer.text"
          class="answer"
        >
          <input type="checkbox" />
          {{ answer.text }}
        </div> -->
      </ul>
    </div>
    <button @click="questionNumber--" :disabled="questionNumber <= 1">
      Назад
    </button>
    <button @click="questionNumber++" v-if="questionNumber < questions.length">
      Следующий вопрос
    </button>
    <button v-else @click="finishTest">Завершить тест</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { questions } from "./assets/data/questionsData";

const questionNumber = ref(1);
const userAnswers = ref(questions.map(() => null));

let currentQuestion = computed(() => {
  if (questions) {
    return questions.find((_, idx) => idx === questionNumber.value - 1);
  }
  return null;
});

const finishTest = () => {
  console.log(userAnswers.value);
};
</script>

<style lang="sass" scoped>
.question
  font-weight: bold

ul
  list-style: none
  padding-left: 20px
</style>
