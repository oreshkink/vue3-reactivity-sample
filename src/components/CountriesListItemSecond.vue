<template>
  <div>
    <div>
      {{ countryName }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    countryName: {
      type: String,
      required: true,
    },
  },

  updated() {
    console.log('UPDATED CountriesListItem with STRING');
  },
});
</script>

