import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 as uuidv4 } from 'uuid';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch all reservations
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all reservations
  const reservations = await prisma.reservations.findMany();

  //return reservations
  res.status(200).json({ body: { reservations } });
});

//create new reservation
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //extract data from request body
    const { name, date, number_of_guests } = req.body;

    //generate reservation id
    const id: string = uuidv4();

    const reservation = await prisma.reservations.create({
      data: {
        id,
        name,
        date,
        number_of_guests,
      },
    });

    res.status(201).json({ body: { reservation } });
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
