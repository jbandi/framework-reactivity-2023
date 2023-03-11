const { reactive, watchEffect } = Vue;

const state = reactive({
  count: 0,
});

watchEffect(() => {
  document.body.innerHTML = `count is ${state.count}`;
});

function main() {
  setInterval(() => {
    state.count++;
  }, 1000);
}

main();
