import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch all orders
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all orders
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
  });

  //return orders
  res.status(200).json({ body: { orders } });
});

//create new order order
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //extract data from request body
    const {
      name,
      card_cvv,
      card_number: cardNum,
      card_exp: cardExp,
      items,
      total,
    } = req.body;

    const newItems = items.map((item) => {
      const { id, ...rest } = item;
      return rest;
    });

    const order = await prisma.order.create({
      data: {
        name,
        cardCVV: parseInt(card_cvv),
        cardNum,
        cardExp,
        total: total,
        items: { create: newItems },
      },
    });

    res.status(201).json({ body: { order } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

export default handler;
