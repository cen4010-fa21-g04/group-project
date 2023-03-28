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
  const menu = await prisma.menu.findMany();

  //return customers
  res.status(200).json({ body: { menu } });
});

//create new menu item
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  //extract data from request body
  const { name, price: strPrice } = req.body;

  //generate item id
  const id: string = uuidv4();

  const price = parseInt(strPrice);

  try {
    //create new item
    const item = await prisma.menu.create({
      data: { id, name, price },
    });
    //return item
    res.status(201).json({ body: { item } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default handler;
