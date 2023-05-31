import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function GET(request) {
    console.log(`Server started`)
    try {
        const newProduct = await prisma.product.create({
          data: {
            name: 'Neon',
            img:"önj",
            price: 59.90,
            size: [{quantity:20,value:'S'},{quantity:20,value:'M'},{quantity:20,value:'L'}],
            quantity: 60
          },
        });
        console.log('Product created:', newProduct);
      } catch (error) {
        console.error('Error creating product:', error);
      } finally {
        await prisma.$disconnect();
      }  
}