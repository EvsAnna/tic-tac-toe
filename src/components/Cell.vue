<script setup>
const props = defineProps(['value']);
const emit = defineEmits(['doMove']);


function cellClick() {
  if (!props.value) {
    emit('doMove', 'x');
  }
}
</script>

<template>
  <div class="square" @click="cellClick">
    <div :class="props.value"></div>
  </div>
</template>

<style scoped>

@keyframes appear {
  from {
    transform: scale(0.3);
  }
  to {
    transform: scale(1);
  }

}

.square {
  width: 100px;
  height: 100px;
  border: 3px solid #d0d0d0;
  cursor: pointer;
  position: relative;
}

.square .x,
.square .o {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  animation: appear .2s cubic-bezier(0.5, 1.8, 0.1, 1.1);
  transform: translate3d(0, 0, 0);
}

.square .x::before,
.square .x::after {
  position: absolute;
  content: '';
  width: 80px;
  height: 10px;
  background-color: white;
}

.square .x::before {
  transform: rotate(45deg);
}

.square .x::after {
  transform: rotate(-45deg);
}

.square .o::before {
  content: '';
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid white;
}
</style>
