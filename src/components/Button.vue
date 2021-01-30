/**
  props: 
    title: untuk tulisan yang ada pada button
    isLoading: Untuk menyatakan button loading atau tidak.
              Dapat diberi nilai true atau false. Tapi secara 
              default false
    @on-click: ini emit untuk menjalankan sebuah event ketika 
              button di click
 */

<template>
  <div>
    <button v-if="isLoading" class="btn btn--secondary"> Loading </button>
    <button v-else class="btn" @click="onPress">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Oke"
    },
    isLoading: {
      type: String,
      default: false
    }
  },
  emits: ['on-click'],
  methods: {
    onPress() {
      this.$emit('on-click');
    }
  }
}
</script>

<style scoped>

.btn {
  border: none;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  padding: 0.7rem 2rem;
  text-align: center;
  font-weight: bold;
  background: black;
  border-radius: 2rem;
}

.btn:hover {
  background: #dbdbdb;
  color: black;
}

.btn--secondary {
  background: rgb(92, 92, 92);
}

</style>