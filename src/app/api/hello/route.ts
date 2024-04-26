import { NextResponse } from "next/server";
import { inngest } from "../../../inngest/client"; // Import our client

export const dynamic = "force-dynamic";

export async function GET() {
  // send event payload to Inngest
  await inngest.send({
    name: "test/hello.world",
    data: {
      email: "testFromNext@example.com",
    },
  });

  return NextResponse.json({ name: "Hello Inngest from Next!" });
}
