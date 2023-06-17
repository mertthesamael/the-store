import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET(request) {
    
    try{
        const products = await prisma.product.findMany();
        console.log(products)
            return NextResponse.json(products, {revalidate: 60})
    }catch(err){
        console.log(err)
    }finally{
        await prisma.$disconnect();
    }
}