import { computed, reactive } from "vue";

export function createState() {
  const state = reactive({
    count: 0,
  });
  const doubleCount = computed(() => {
    const double = state.count * 2;
    console.log("Calculated double", double);
    return double;
  });

  // setInterval(() => {
  //   state.count++;
  // }, 1000);

  return {
    state,
    doubleCount,
  };
}
