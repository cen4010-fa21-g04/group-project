import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

//route config
const prisma = new PrismaClient();
const handler = nc();

//fetch individual reservation
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id;

  //fetch reservation
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: Number(id),
    },
  });

  //return reservation
  res.status(200).json({ body: { reservation } });
});

//delete menu reservation
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  //deconstruct id from request query
  const id = req.query.id;

  //delete reservation
  const reservation = await prisma.reservation.delete({
    where: {
      id: Number(id),
    },
  });

  //return message
  res.status(200).json({
    message: `Reservation with id: ${reservation.id} deleted`,
  });
});

export default handler;
