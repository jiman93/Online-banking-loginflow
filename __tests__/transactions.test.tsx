/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Transactions, { TransactionHistory } from "../app/(no-navbar)/transactions/page";

test("displays loading message while fetching data", async () => {
  // Mock data for the test
  const mockData: TransactionHistory[] = [];

  // Type the mocked fetch function
  const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
  global.fetch = mockFetch;

  // Create a mock response that matches the Response interface
  const mockResponse = {
    ok: true,
    status: 200,
    json: async () => mockData,
  } as Response;

  // Configure fetch to resolve with the mock response
  mockFetch.mockResolvedValueOnce(mockResponse);

  // Render the component
  render(<Transactions />);

  // Assert that the loading message is displayed initially
  expect(screen.getByText("Loading transactions...")).toBeInTheDocument();

  // Wait for the component to finish updating
  await waitFor(() => {
    // Assert that the "Transaction History" heading is present
    expect(screen.getByText("Transaction History")).toBeInTheDocument();
  });

  // Optionally, check that the loading message is no longer displayed
  expect(screen.queryByText("Loading transactions...")).not.toBeInTheDocument();
});
