<template>
  <main>
    <button @click="refresh">REFRESH</button>


    <CountriesList
      :countries="countries"
      :total="total"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountriesList from '@/components/CountriesList.vue';
import { useCountriesStore } from '@/stores/countries';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  components: {
    CountriesList,
  },

  computed: {
    ...mapState(useCountriesStore, ['countries', 'total']),
  },

  created() {
    this.getAll();
  },

  methods: {
    ...mapActions(useCountriesStore, ['getAll']),

    refresh() {
      this.getAll();
    },
  }
});
</script>

