import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

// Transaction data format
const generateTransactionData = () => ({
  date: faker.date
    .recent()
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
  referenceID: faker.string.uuid(),
  to: `${faker.company.name()} Sdn Bhd`,
  transactionType: "DuitNow payment",
  amount: `RM ${faker.finance.amount({ min: 50, max: 55000, dec: 2, symbol: "RM " })}`,
});

// Handle GET request
export async function GET() {
  const transactionHistory = Array.from({ length: 5 }, generateTransactionData);

  return NextResponse.json(transactionHistory);
}
