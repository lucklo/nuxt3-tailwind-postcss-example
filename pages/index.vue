<template>
  <div class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    PostCSS and Tailwind are working <span class="test_gray">Color Gray</span> is
    <span class="test_working">working</span>!
  </div>
</template>

<style lang="scss">
  .test
  {
    color: rgb(40, 176, 218);
    @apply p-4;

  &_working {
    @apply text-green-500;
    @apply bg-green-100;
  }

  &_gray {
    color: gray(50);
  }

}
</style>