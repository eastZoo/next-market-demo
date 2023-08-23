import { NextResponse } from "next/server";

import prisma from "@/helpers/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  console.log(currentUser, "@#");

  const body = await request.json();
  const { title, description, imageSrc, category, latitude, longitude, price } =
    body;
  console.log(body);

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const product = await prisma.product
    .create({
      data: {
        title,
        description,
        imageSrc,
        category,
        latitude,
        longitude,
        price: Number(price),
        userId: currentUser.id,
      },
    })
    .catch((error) => console.log(error));

  console.log(product);

  return NextResponse.json(product);
}
