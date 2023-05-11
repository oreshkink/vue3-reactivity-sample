<template>
  <div>
    <div>
      {{ country.common }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    country: {
      type: Object as PropType<{
        common: string;
      }>,
      required: true,
    },
  },

  updated() {
    console.log('UPDATED CountriesListItem with OBJECT');
  },
});
</script>

