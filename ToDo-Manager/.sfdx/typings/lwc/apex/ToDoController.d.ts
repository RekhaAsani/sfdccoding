declare module "@salesforce/apex/ToDoController.addTodo" {
  export default function addTodo(param: {payload: any}): Promise<any>;
}
declare module "@salesforce/apex/ToDoController.updateTodo" {
  export default function updateTodo(param: {payload: any}): Promise<any>;
}
declare module "@salesforce/apex/ToDoController.deleteTodo" {
  export default function deleteTodo(param: {todoId: any}): Promise<any>;
}
declare module "@salesforce/apex/ToDoController.getAllTodos" {
  export default function getAllTodos(): Promise<any>;
}
declare module "@salesforce/apex/ToDoController.getCurrentTodos" {
  export default function getCurrentTodos(): Promise<any>;
}
