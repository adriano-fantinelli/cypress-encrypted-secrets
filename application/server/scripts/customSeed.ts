import { PrismaClient } from "@prisma/client";
import cypressEnv from '../../../cypress.env.json'

export async function customSeed() {
  let client = new PrismaClient();
  let username = "admin";
 
  //replace this sample code to populate your database
  //with data that is required for your application to start
  await client.user.update({
    where: { username: username },
    data: {
      username,
    },
  });

  username = cypressEnv.username
  const password = cypressEnv.password

  await client.user.create({
    data: {
      username,
      password
    }
  });

  client.$disconnect();
}
