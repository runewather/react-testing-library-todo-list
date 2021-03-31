import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ToDoList from "./index";

afterEach(async () => {
  await cleanup();
});

const addTask = (taskName = "Task Test") => {
  const addButton = screen.getByTestId("add-button");

  fireEvent.click(addButton);

  const modalInput = screen
    .getByTestId("modal-input")
    .getElementsByTagName("input")[0];

  fireEvent.change(modalInput, { target: { value: taskName } });

  const modalAddButton = screen.getByTestId("modal-add-button");

  fireEvent.click(modalAddButton);
};

test("Should add a task to task list component", async () => {
  render(<ToDoList />);

  addTask();

  const task = screen.getByText("Task Test");

  expect(task).toBeInTheDocument();
});

test("Should update in task list component", async () => {
  render(<ToDoList />);

  addTask();

  const task = screen.getByTestId("task-item");

  const editButton = screen.getByTestId("edit-button");

  fireEvent.click(editButton);

  const input = task.getElementsByTagName("input")[0];

  fireEvent.change(input, { target: { value: "Task Test Update" } });

  const doneButton = screen.getByTestId("done-button");

  fireEvent.click(doneButton);

  const taskUpdated = screen.getByText("Task Test Update");

  expect(taskUpdated).toBeInTheDocument();
});

test("Should delete in task list component", () => {
  render(<ToDoList />);

  const tasksTest = ["task", "task1", "task2"];

  tasksTest.map((t) => addTask(t));

  const tasksToDelete = tasksTest.splice(1, 3);

  tasksToDelete.map((t) => {
    const task = screen.getByText(t);
    const deleteBtn = screen.getByTestId(`${t}-delete-btn`);
    fireEvent.click(deleteBtn);
    expect(task).not.toBeInTheDocument();
  });

  expect(screen.getByText("task")).toBeInTheDocument();
});

test("Should finish task in list component", () => {
  render(<ToDoList />);

  addTask();

  let task = screen.getByTestId("task-name");

  fireEvent.click(task);

  task = screen.getByTestId("task-name");

  expect(task.style.textDecoration).toBe("line-through");
});
