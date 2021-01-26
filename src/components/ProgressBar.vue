<template>
  <div class="base-layout">
    <div class="content">
      <div class="spin"></div>
    </div>
  </div>
</template>

<style scoped>
.base-layout {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99999;
  position: fixed;
  align-content: center;
}

.content {
  width: 100px;
  margin: auto;
  height: 100px;
  display: flex;
  background: black;
  border-radius: 20px;
  flex-direction: row;
  align-content: center;
}

.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>