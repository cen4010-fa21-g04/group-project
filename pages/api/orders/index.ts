import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 as uuidv4 } from 'uuid';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch all orders
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all orders
  const orders = await prisma.orders.findMany({
    include: {
      items: {
        include: {
          item: true,
        },
      },
    },
  });

  //return orders
  res.status(200).json({ body: { orders } });
});

//create new order order
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //extract data from request body
    const { name, card_cvv, card_number, card_exp, items, total } = req.body;

    //generate order id
    const id: string = uuidv4();

    const newItems = items.map((item) => {
      return {
        assignedBy: name,
        assignedAt: new Date(),
        item: {
          create: { ...item, id: uuidv4() },
        },
      };
    });

    const order = await prisma.orders.create({
      data: {
        id,
        name,
        card_cvv: parseInt(card_cvv),
        card_number,
        card_exp,
        created_at: new Date(),
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
