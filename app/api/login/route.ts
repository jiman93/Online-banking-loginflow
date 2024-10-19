import { NextRequest, NextResponse } from "next/server";
import CryptoJS from "crypto-js";

// The POST method for handling login
export async function POST(req: NextRequest) {
  try {
    // Parse the request body as JSON
    const { encryptedPassword } = await req.json();

    // Retrieve the secret key from environment variables
    const secretKey = process.env.NEXT_PUBLIC_PASSWORD_KEY || "";

    // Decrypt the password using the secret key
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    // Log the decrypted password
    console.log("Decrypted Password:", decryptedPassword);

    // Return success response
    return NextResponse.json({ result: "Login Successful" });
  } catch (error) {
    console.error("Decryption failed:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
