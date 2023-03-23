import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual customer
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const { id } = req.query;

  //fetch customer
  const customer = await prisma.customers.findUnique({
    where: {
      customer_id: String(id),
    },
  });

  //return customer
  res.status(200).json({ customer });
});

//update customer
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const { id } = req.query;

  //update customer
  const customer = await prisma.customers.update({
    where: {
      customer_id: String(id),
    },
    data: { first_name: 'hi' },
  });

  //return customer
  res.status(200).json({ customer });
});

//delete customer
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const { id } = req.query;

  //delete customer
  const customer = await prisma.customers.delete({
    where: {
      customer_id: String(id),
    },
  });

  //return customer
  res.status(200).json({
    message: `Customer ${customer.first_name} ${customer.last_name} deleted`,
  });
});

export default handler;
