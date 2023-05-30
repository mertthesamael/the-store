const { PrismaClient } = require('@prisma/client')
const express = require("express")
const cors = require("cors")
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())



const server = app.listen("5050", async() => {
    console.log(`Server started at port 5050`)
    try {
        const newProduct = await prisma.product.create({
          data: {
            name: 'Neon',
          },
        });
        console.log('Product created:', newProduct);
      } catch (error) {
        console.error('Error creating product:', error);
      } finally {
        await prisma.$disconnect();
      }  
})








/*async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: 'Rich',
      email: 'hello@prisma.com',
      posts: {
        create: {
          title: 'My first post',
          body: 'Lots of really interesting stuff',
          slug: 'my-first-post',
        }, 
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()

  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/