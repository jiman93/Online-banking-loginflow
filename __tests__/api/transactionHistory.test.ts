import { NextResponse } from "next/server";
import { GET } from "../..//app/api/transactionHistory/route";
import { TransactionHistory } from "@/app/(no-navbar)/transactions/page";

describe("GET /api/transactionHistory", () => {
  it("should return a list of transactions", async () => {
    const response = await GET();

    expect(response).toBeInstanceOf(NextResponse);

    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);

    data.forEach((transaction: TransactionHistory) => {
      expect(transaction).toHaveProperty("date");
      expect(transaction).toHaveProperty("referenceID");
      expect(transaction).toHaveProperty("to");
      expect(transaction).toHaveProperty("transactionType");
      expect(transaction).toHaveProperty("amount");
    });
  });
});
