import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";

const testTasks = ["Learn React", "Learn React Tests", "Learn MaterialUI"];

test("Should display a task when receive props", async () => {
  render(<TaskList tasks={testTasks} />);

  expect(testTasks.map((t) => screen.getByText(t).innerHTML)).toEqual(
    testTasks
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

  expect(editedTaskNames).toEqual(testTasks);
});
