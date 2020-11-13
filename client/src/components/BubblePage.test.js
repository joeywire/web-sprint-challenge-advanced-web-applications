import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockAxiosWithAuth } from '../utils/axiosWithAuth';

const testData = {
  data: [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]};

jest.mock('../utils/axiosWithAuth');
// console.log(mockAxiosWithAuth);

test("Fetches data and renders the bubbles", async () => {
  // Finish this test

  mockAxiosWithAuth.mockResolvedValueOnce(testData);
  
  const { findAllByTestId } = render(<BubblePage />);

  await findAllByTestId('testz')
  
  
});
