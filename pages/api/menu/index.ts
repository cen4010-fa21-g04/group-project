import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch the entire menu
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all items
  const menu = await prisma.menuItem.findMany();

  //return menu
  res.status(200).json({ body: { menu } });
});

//create new menu item
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  //extract data from request body
  const { name, price: strPrice } = req.body;

  const price = parseInt(strPrice);

  try {
    //create new item
    const item = await prisma.menuItem.create({
      data: { name, price },
    });
    //return item
    res.status(201).json({ body: { item } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default handler;
