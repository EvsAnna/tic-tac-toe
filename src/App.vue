<script setup>
import Board from "@/components/Board.vue";
import Score from "@/components/Score.vue";
import {ref} from "vue";
import {Modal} from 'usemodal-vue3';

const score = ref({
  user: 0,
  bot: 0,
  draw: 0,
});

const childBoard = ref(null);

const isPopupVisible = ref(false);
const gameResult = ref('');

function endHandler(winner) {
  switch (winner) {
    case 'user':
      score.value.user++;
      gameResult.value = 'Вы победили!';
      break;
    case 'bot':
      score.value.bot++;
      gameResult.value = 'Вы проиграли!';
      break;
    case 'draw':
      score.value.draw++;
      gameResult.value = 'Ничья!';
      break;
  }

  openPopup();
}

function closePopup() {
  isPopupVisible.value = false;
}

function openPopup() {
  isPopupVisible.value = true;
}

function onClosePopup() {
  if (childBoard.value) {
    childBoard.value.endGame();
  }
}
</script>

<template>
  <div class="title">
    Крестики-нолики
  </div>

  <div class="game">
    <Board @end="endHandler" ref="childBoard"/>
    <Score :score="score"/>
  </div>

  <Modal v-model:visible="isPopupVisible" @onUnVisible="onClosePopup" :type="'clean'" :modalClass="'popup'">
    <span class="close" @click="closePopup">&times;</span>
    <div>{{ gameResult }}</div>
    <button class="button" @click="closePopup">Новая игра</button>
  </Modal>
</template>

<style>
.title {
  font-size: 40px;
  color: white;
  text-align: center;
  margin-top: 50px;
}

.game {
  //max-width: 324px;
  max-width: 320px;
  margin: 50px auto;
}

.modal-vue3-content {
  border-radius: 5px;
  border: 0;
  background: #2b9595;
  color: white;
  max-width: 250px;
  text-align: center;
  padding: 20px;
}

.modal-vue3-content .close {
  cursor: pointer;
  position: absolute;
  display: block;
  right: 5px;
  top: -5px;
  font-size: 24px;
}

.button {
  padding: 10px 20px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  background: black;
  border: 0;
  border-radius: 5px;
}
</style>
