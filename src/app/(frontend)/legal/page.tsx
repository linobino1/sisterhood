import LexicalContent from '~/lexical/LexicalContent'
import { fetchPage } from '~/util/fetchPage'

export async function Legal() {
  const page = await fetchPage('legal')

  return <LexicalContent json={page.content} className="text-xl" />
}

export default Legal
