import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual order
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id;

  //fetch order
  const order = await prisma.order.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      items: true,
    },
  });

  //return order
  res.status(200).json({ body: { order } });
});

//delete menu order
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id;

  //delete order
  const order = await prisma.order.delete({
    where: {
      id: Number(id),
    },
  });

  //return message
  res.status(200).json({
    message: `Order with id: ${order.id} deleted`,
  });
});

export default handler;
