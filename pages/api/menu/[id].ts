import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual menu item
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //fetch customer
  const customer = await prisma.menu.findUnique({
    where: {
      id,
    },
  });

  //return customer
  res.status(200).json({ customer });
});

//delete menu item
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //delete item
  const item = await prisma.menu.delete({
    where: {
      id,
    },
  });

  //return message
  res.status(200).json({
    message: `Menu item ${item.name} deleted`,
  });
});

export default handler;
