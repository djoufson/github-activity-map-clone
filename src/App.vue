<script setup lang="ts">
  import ContributionsMap from './components/ContributionsMap.vue';
</script>

<template>
  <div class="flex w-full max-w-[900px] gap-8 mx-auto my-4 p-4">
    <div class="flex flex-col w-[calc(100%-130px)]">
      <h1>1,342 contributions in the past year</h1>
      <div class="h-full mt-2 rounded border-[.05rem] border-gray">
        <Suspense>
          <ContributionsMap />
        </Suspense>
      </div>
    </div>
    <div class="w-[130px] year-filter overflow-y-scroll">
      <ul class="w-full flex flex-col gap-3">
        <li class="flex"><a href="/" class="w-full rounded text-xs text-gray hover:bg-dark-gray transition-all px-4 py-2 active">2024</a></li>
        <li class="flex"><a href="/" class="w-full rounded text-xs text-gray hover:bg-dark-gray transition-all px-4 py-2">2023</a></li>
        <li class="flex"><a href="/" class="w-full rounded text-xs text-gray hover:bg-dark-gray transition-all px-4 py-2">2022</a></li>
      </ul>
    </div>
  </div>
</template>
