import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(request) {
    const res = await request.json()
    /*id       String    @id @default(auto()) @map("_id") @db.ObjectId
    author  User @relation(fields: [authorId], references: [id])
    authorId String @db.ObjectId
    product Product @relation(fields: [productId], references: [id])
    productId String @db.ObjectId
    rate Int*/
    try{
        const updateReview = await prisma.product.upsert({
        
        })
      
        return NextResponse.json(updateReview)    
    }catch(err){
        console.log(err)
    }finally{
        await prisma.$disconnect();
    }
      
}