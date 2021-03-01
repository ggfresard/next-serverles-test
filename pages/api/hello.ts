// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { withDB } from '../../utils/db'
import Vehicle from '../../models/Vehicle'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const vehicles = await Vehicle.find()
  res.json(vehicles)
}

export default withDB(handler)
