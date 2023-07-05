import { decode } from "@/utils/zer";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { params }: { params: Record<string, string> }) {
    const decoded = decode(params.encoded)
    return NextResponse.redirect(decoded, 307)
}