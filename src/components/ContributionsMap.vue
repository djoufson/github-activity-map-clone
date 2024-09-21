<script setup lang="ts">
import { ref } from 'vue';
import { Contribution } from '../types/Contribution';
import Organization from '../types/Organization';
import Graph from './Graph.vue';

const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const data = ref<Contribution[]>([]);
const organizations = ref<Organization[]>([]);

const dataResponse:Response = await fetch("/data.json");
const orgResponse:Response = await fetch("/organizations.json");
if(dataResponse.ok)
{
  data.value = await dataResponse.json();
}
if(orgResponse.ok)
{
  organizations.value = await orgResponse.json();
}

const max:number = Math.max(... data.value.map(c => c.amount));
const min:number = Math.min(... data.value.map(c => c.amount));
const stepSize = Math.floor((max - min) / 5);

</script>

<template>
  <div class="border-b-[.05rem] border-gray p-3">
    <div class="flex w-full gap-1">
      <div class="w-[30px] flex flex-col justify-center gap-2">
        <span class="text-xs">Mon</span>
        <span class="text-xs">Wed</span>
        <span class="text-xs">Fri</span>
      </div>
      <div class="w-[calc(100%-30px)]">
        <div class="flex gap-2 mb-2">
          <span v-for="month in months" class="text-xs">
            {{ month }}
          </span>
        </div>
        <div class="flex flex-wrap gap-1 items-start">
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
          <div v-for="item in data" :class="`block bg-activity-level-${Math.floor(item.amount / stepSize)} w-[10px] h-[10px] rounded-[3px]`">
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center px-[20px]">
      <span><a href="/" class="text-gray text-xs">Learn how we count contributions</a></span>
      <div class="flex items-center gap-2">
        <span class="text-gray text-xs">Less</span>
        <div class="flex gap-1">
          <span class="hidden bg-activity-level-0"></span>
          <span class="w-[10px] h-[10px] rounded-[3px] bg-activity-level-1"></span>
          <span class="w-[10px] h-[10px] rounded-[3px] bg-activity-level-2"></span>
          <span class="w-[10px] h-[10px] rounded-[3px] bg-activity-level-3"></span>
          <span class="w-[10px] h-[10px] rounded-[3px] bg-activity-level-4"></span>
          <span class="w-[10px] h-[10px] rounded-[3px] bg-activity-level-5"></span>
        </div>
        <span class="text-gray text-xs">More</span>
      </div>
    </div>
  </div>
  <div class="p-4">
    <div class="flex gap-3">
      <a href="/" v-for="org in organizations" class="border-[.05rem] rounded border-gray p-1 flex items-center gap-2 hover:bg-dark-gray hover:bg-opacity-90 transition-all">
        <img :src="org.logo" :alt="org.title" class="w-[20px] object-contain rounded">
        <span class="text-xs">@{{ org.name }}</span>
      </a>
    </div>
  </div>
  <div class="flex">
    <div class="w-1/2 border-r-[.05rem] border-gray p-4 mb-4">
      <h2>Activity overview</h2>
    </div>
    <div class="w-1/2">
      <Graph />
    </div>
  </div>
</template>
