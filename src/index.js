import store from "./store/configureStore";
import { addTask, removeTask, completeTask } from "./store/tasks/action";

const unsubscribe = store.subscribe(() => {
  console.log("Update", store.getState());
});

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn React"));
store.dispatch(addTask("Learn CSS"));
store.dispatch(removeTask(1));
store.dispatch(completeTask(2));
console.log(store.getState());
