import { ref } from 'vue'

const globalCount = ref(100);

const incrementGlobalCount = () => {
    globalCount.value += 1000
}

export function useCount(){
    const localCount = ref(50)

    const incrementLocalCount = () => {
        localCount.value += 100
    }

    return {
        globalCount,
        localCount,
        incrementLocalCount,
        incrementGlobalCount
    }
}