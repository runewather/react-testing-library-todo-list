import { render, screen, fireEvent, cleanup } from "@testing-library/react";
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
