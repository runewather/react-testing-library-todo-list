import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TaskList from "./TaskList";

const testTasks = [
  { name: "Learn React", status: false },
  { name: "Learn React Tests", status: false },
  { name: "Learn MaterialUI", status: false },
];

afterEach(async () => {
  await cleanup();
});

test("Should display a task when receive props", async () => {
  render(<TaskList tasks={testTasks} />);

  expect(testTasks.map((t) => screen.getByText(t.name).innerHTML)).toEqual(
    testTasks.map((t) => t.name)
  );
});

test("Should display a hint message when task list is empty", async () => {
  render(<TaskList tasks={[]} />);

  expect(screen.getByText(t.name).innerHTML).toEqual(
    "Click the button below to add a new task"
  );
});

test("Should display a TextField component when click edit icon", () => {
  render(<TaskList tasks={testTasks} />);

  const task = screen.getAllByTestId("task-item");

  const editedTaskNames = task.map((t) => {
    const edit = t.querySelector('[data-testid="edit-button"]');

    fireEvent.click(edit);

    return t.getElementsByTagName("input")[0].value;
  });

  expect(editedTaskNames).toEqual(testTasks.map((t) => t.name));
});

test("Should execute toggle task function on click in the task name", () => {
  const mockFunction = jest.fn();

  render(<TaskList tasks={testTasks} toggleTask={mockFunction} />);

  const task = screen.getAllByTestId("task-name");

  task.map((t) => {
    fireEvent.click(t);
  });

  expect(mockFunction.mock.calls.length).toEqual(3);
});

test("Should execute update task function on click done icon", () => {
  const mockFunction = jest.fn();

  render(<TaskList tasks={testTasks} updateTask={mockFunction} />);

  const task = screen.getAllByTestId("task-item");

  task.map((t) => {
    const edit = t.querySelector('[data-testid="edit-button"]');

    fireEvent.click(edit);

    const done = t.querySelector('[data-testid="done-button"]');

    fireEvent.click(done);
  });

  expect(mockFunction.mock.calls.length).toEqual(3);
});
