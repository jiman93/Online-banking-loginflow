import { NextRequest } from "next/server";
import { POST } from "../../app/api/login/route";

describe("POST /api/login", () => {
  it("should return a successful login", async () => {
    const req = {
      json: async () => ({ encryptedPassword: "mockEncryptedPassword" }),
    } as NextRequest;

    const response = await POST(req);

    const responseData = await response.json();
    expect(responseData.result).toBe("Login Successful");
  });
});
