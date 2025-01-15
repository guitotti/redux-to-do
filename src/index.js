import store from "./store";
import { addTask, removeTask, completeTask } from "./action";

const unsubscribe = store.subscribe(() => {
  console.log("Update", store.getState());
});

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn React"));
store.dispatch(addTask("Learn CSS"));
store.dispatch(removeTask(1));
store.dispatch(completeTask(2));
console.log(store.getState());
