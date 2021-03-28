import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

import weekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isToday from "dayjs/plugin/isToday";

import locale from "dayjs/locale/en";

dayjs.extend(isToday);
dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.locale(locale);

import ToDoList from "./ToDoListHeader";

test("Should show date now", async () => {
  render(<ToDoList />);

  const day = screen.getByTestId("day");
  const month = screen.getByTestId("month");
  const year = screen.getByTestId("year");

  expect(
    dayjs(
      `${year.innerHTML} ${month.innerHTML} ${day.innerHTML}`,
      "YYYY MMM DD",
      "en"
    ).isToday()
  ).toBe(true);
});

test("Should show day of the week name", () => {
  render(<ToDoList />);

  const today = dayjs();
  const weekday = screen.getByTestId("weekday");

  expect(weekday.innerHTML).toEqual(today.format("dddd"));
});
