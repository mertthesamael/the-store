import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(request) {
    const res = await request.json()
    try{
        const products = await prisma.product.findMany();
            return NextResponse.json(products)
    }catch(err){
        console.log(err)
    }finally{
        await prisma.$disconnect();
    }
}