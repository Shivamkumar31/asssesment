// src/app/api/sales/route.ts
import { NextResponse } from "next/server";
import { salesData } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json(salesData);
}
