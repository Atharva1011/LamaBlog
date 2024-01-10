import prisma from "@/utils/connect";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // console.log(prisma);
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
