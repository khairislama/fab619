import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// This endpoint can be called by Sanity webhooks to revalidate the cache when content changes
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check for secret token if you've set one up
    const secret = request.headers.get("x-webhook-secret");
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Extract document type and ID from the webhook payload
    const { _type } = body;

    // Revalidate appropriate paths based on document type
    if (_type === "pressItem") {
      // Revalidate the home page and press detail pages
      revalidatePath("/");
      revalidatePath("/press/[slug]");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
