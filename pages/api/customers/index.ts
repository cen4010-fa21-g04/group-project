import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 as uuidv4 } from 'uuid';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch all customers
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all customers
  const customers = await prisma.customers.findMany();

  //return customers
  res.status(200).json({ customers });
});

//create new customer
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('here');
  //extract data from request body
  const { first_name, last_name, phone_number, email, address } = req.body;

  console.log(req.body);

  //generate customer id
  const customer_id: string = uuidv4();

  //create new customer
  const customer = await prisma.customers.create({
    data: { customer_id, first_name, last_name, phone_number, email, address },
  });

  //return customer
  res.status(201).json({ customer });
});

export default handler;
