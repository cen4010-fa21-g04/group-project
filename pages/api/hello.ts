// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const newCustomer = await prisma.customers.create({
    data: {
      customer_id: 1233333111,
      first_name: 'Alice',
      last_name: 'Bob',
      phone_number: '561-222-3333',
      email: 'alice@prisma.io',
      address: 'random address',
    },
  });

  console.log(newCustomer);

  res.status(200).json({ name: 'John Doe' });
}
