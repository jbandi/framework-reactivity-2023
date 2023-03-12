const { reactive, watchEffect } = Vue;

const state = reactive({
  count: 0,
});

watchEffect(() => {
  document.body.innerHTML = `<h1>Count is ${state.count}</h1>`;
});

function main() {
  setInterval(() => {
    state.count++;
  }, 1000);
}

main();
