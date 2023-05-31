import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(request) {
    const res = await request.json()
    try{
        const product = await prisma.product.findFirst({
            where: {
                id:{
                    equals: res.id
                }
            }
        });
        console.log(product)
        
        return NextResponse.json(product)    
    }catch(err){
        console.log(err)
    }finally{
        await prisma.$disconnect();
    }
      
}