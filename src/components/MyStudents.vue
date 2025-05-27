<template>
  <form action="">
    <h1>{{ name }}</h1>
    <slot name="input"></slot>
    <slot name="check"></slot>
    <slot name="Btn"></slot>
    <slot name="data"></slot>
  </form>
</template>
<script>
export default {
  props: ["name"],
};
</script>
