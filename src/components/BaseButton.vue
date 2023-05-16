<!--==================== template ====================-->
<template>
  <button
    type="button"
    class="rounded-md bg-blue-500 px-5 py-1 text-white hover:bg-blue-600 md:px-5 md:py-2 md:text-lg"
  >
    {{ buttonValue }}
  </button>
</template>

<!--==================== script ====================-->
<script setup>
const props = defineProps({
  buttonValue: {
    type: String,
    required: true,
    default: 'ボタン'
  }
});
</script>

<!--==================== style ====================-->
<style scoped lang="scss"></style>
