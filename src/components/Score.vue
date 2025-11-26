<script setup>
const props = defineProps(['score'])

</script>

<template>
  <div class="score">
    <div class="score-block">
      <div class="score-title">Игрок</div>
      <div class="score-result">{{props.score.user}}</div>
    </div>
    <div class="score-block">
      <div class="score-title">Компьютер</div>
      <div class="score-result">{{props.score.bot}}</div>
    </div>
    <div class="score-block">
      <div class="score-title">Ничья</div>
      <div class="score-result">{{props.score.draw}}</div>
    </div>
  </div>
</template>

<style scoped>
.score {
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  text-align: center;
}

.score-title {
  font-size: 24px;
}

.score-result {
  font-size: 21px;
}
</style>
