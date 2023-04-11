import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual reservation
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //fetch reservation
  const reservation = await prisma.reservations.findUnique({
    where: {
      id,
    },
  });

  //return reservation
  res.status(200).json({ body: { reservation } });
});

//delete menu reservation
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id as string;

  //delete reservation
  const reservation = await prisma.reservations.delete({
    where: {
      id,
    },
  });

  //return message
  res.status(200).json({
    message: `Reservation with id: ${reservation.id} deleted`,
  });
});

export default handler;
