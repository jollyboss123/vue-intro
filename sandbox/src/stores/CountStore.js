import { defineStore } from "pinia";

export const useCountStore = defineStore('CountStore', {
    // Data
    state: () => ({
        count: 0,
        incrementAmount: 80
    }),
    // Computed
    getters: {
        doubleCount: (state) => {
            return state * 2
        }
    },
    // Methods
    actions: {
        increment() {
            this.count += this.incrementAmount
        }
    }
})