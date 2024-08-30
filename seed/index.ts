import { getPayload } from 'payload'
import { seed } from './seed'
import config from '@payload-config'

const run = async (): Promise<void> => {
  const payload = await getPayload({ config })

  await seed(payload)
}

run()
  .catch(console.error)
  .finally(() => process.exit())
