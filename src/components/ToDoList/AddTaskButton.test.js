import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import AddTaskButton from "./AddTaskButton";

afterEach(async () => {
  await cleanup();
});

test("Should open a modal when click button", async () => {
  render(<AddTaskButton />);

  const addButton = screen.getByTestId("add-button");

  fireEvent.click(addButton);

  const taskModal = screen.getByTestId("add-modal");

  expect(taskModal).toBeInTheDocument();
});

test("Should close modal when click close button", async () => {
  render(<AddTaskButton />);

  const addButton = screen.getByTestId("add-button");

  fireEvent.click(addButton);

  const taskModal = screen.getByTestId("add-modal");

  expect(taskModal).toBeInTheDocument();

  const modalCloseButton = screen.getByTestId("close-button");

  fireEvent.click(modalCloseButton);

  await waitForElementToBeRemoved(taskModal);

  expect(taskModal).not.toBeInTheDocument();
});

test("Should execute add function and close modal", async () => {
  const addTaskMock = jest.fn();

  render(<AddTaskButton addTask={addTaskMock} />);

  const addButton = screen.getByTestId("add-button");

  fireEvent.click(addButton);

  const taskModal = screen.getByTestId("add-modal");

  const modalAddButton = screen.getByTestId("modal-add-button");

  fireEvent.click(modalAddButton);

  await waitForElementToBeRemoved(taskModal);

  expect(addTaskMock.mock.calls.length).toBe(1);
  expect(taskModal).not.toBeInTheDocument();
});
