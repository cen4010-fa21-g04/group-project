import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual customer
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //fetch customer
  const customer = await prisma.menu.findUnique({
    where: {
      mid: id,
    },
  });

  //return customer
  res.status(200).json({ customer });
});

//delete customer
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //delete customer
  const customer = await prisma.menu.delete({
    where: {
      mid: id,
    },
  });

  //return customer
  res.status(200).json({
    message: `Menu item ${customer.itemname} deleted`,
  });
});

export default handler;
