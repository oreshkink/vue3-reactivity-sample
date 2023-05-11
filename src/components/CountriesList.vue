<template>
  <div>
    <div>Список стран {{  total  }}</div>
    <ul>
      <li
        v-for="(country, index) in countries"
        :key="index"
      >
        <CountriesListItemFirst :country="country.name"/>
        <CountriesListItemSecond :countryName="country.name.common"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import CountriesListItemFirst from './CountriesListItemFirst.vue';
import CountriesListItemSecond from './CountriesListItemSecond.vue';

export default defineComponent({
  components: {
    CountriesListItemFirst,
    CountriesListItemSecond,
  },

  props: {
    countries: {
      type: Object as PropType<{
        name: {
          common: string;
        },
      }[]>
    },
    total: {
      type: Number,
    },
  },

  updated() {
    console.log('UPDATED CountriesList');
  },
});
</script>

