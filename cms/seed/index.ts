import { getPayload } from 'payload'
import { importConfig } from 'payload/node'
import { seed } from './seed'

const run = async (): Promise<void> => {
  const awaitedConfig = await importConfig('../src/payload.config.ts')
  const payload = await getPayload({ config: awaitedConfig })

  await seed(payload)
}

run()
  .catch(console.error)
  .finally(() => process.exit())
