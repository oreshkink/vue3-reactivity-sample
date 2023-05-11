import { getAll } from "@/repos/countries"
import { defineStore } from "pinia"

export const useCountriesStore = defineStore('counter', {
  state: (): { countries: { name: { common: string }}[]} => ({ countries: [], }),

  getters: {
    total: (state) => state.countries.length,
  },

  actions: {
    async getAll() {
      this.countries = await getAll();
    },

    removeItem(countryId: number) {
      console.log({ countryId });
    },
  },
})