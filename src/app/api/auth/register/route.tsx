import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    console.log(name, email, password);
    return NextResponse.json({
      status: 200,
      message: "SUCCESS",
    });
  } catch (error) {
    console.log("Failed to Register the User ", error);
    return NextResponse.json({
      status: 501,
      message: "Internal Server error.",
    });
  }
}
