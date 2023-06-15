
type Review = {
    id:string,
    review:string,
    product:Product,
    productId:string
}
export type Size = {
    quantity:number,
    value:string,
}
export interface Product {
    id:string,
    name:string,
    img:string,
    price:number,
    size:Size[],
    quantity:number,
}

/*datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
  }
  
  generator client {
    provider = "prisma-client-js"
  }
  
  model User {
    id      String   @id @default(auto()) @map("_id") @db.ObjectId
    email   String   @unique
    name    String?
    basket  BasketItem[]
  }
  type BasketItem {
    id String
    name String
    size String
    quantity Int
    price Float
  }
  model Product {
    id       String    @id @default(auto()) @map("_id") @db.ObjectId
    name     String 
    img      String
    price    Float
    size     Size[]
    quantity Int
    reviews  Review[]
  }
  
  
  model Review {
    id      String @id @default(auto()) @map("_id") @db.ObjectId
    review String
    author String
    product Product   @relation(fields: [productId], references: [id])
    productId  String @db.ObjectId
  }
  
  //model Post {
    //id       String    @id @default(auto()) @map("_id") @db.ObjectId
    //slug     String    @unique
    //title    String
    //body     String
    //author   User      @relation(fields: [authorId], references: [id])
    //authorId String    @db.ObjectId
    //comments Comment[]
  //}
  
  //model User {
    //id      String   @id @default(auto()) @map("_id") @db.ObjectId
    //email   String   @unique
    //name    String?
    //address Address?
    //posts   Post[]
  //}
  
  
  // Address is an embedded document
  type Address {
    street String
    city   String
    state  String
    zip    String
  }
  type Size {
    quantity Int
    value String
  }
  
*/  