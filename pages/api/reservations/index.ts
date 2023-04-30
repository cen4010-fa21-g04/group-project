import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch all reservations
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //find all reservations
  const reservations = await prisma.reservation.findMany({});

  //return reservations
  res.status(200).json({ body: { reservations } });
});

//create new reservation
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //extract data from request body
    const { name, date, number_of_guests: numberOfGuests } = req.body;

    const reservation = await prisma.reservation.create({
      data: {
        name,
        date,
        numberOfGuests,
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
