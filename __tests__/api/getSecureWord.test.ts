import { GET } from "../../app/api/getSecureWord/route";

describe("GET /api/getSecureWord", () => {
  it("should return the secure word '123'", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data.secureWord).toBe("123");
  });
});
