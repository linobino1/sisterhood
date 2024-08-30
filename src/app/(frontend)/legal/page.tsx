import LexicalContent from '~/lexical/LexicalContent'
import { fetchPage } from '~/util/fetchPage'

export default async function Legal() {
  const page = await fetchPage('legal')

  return <LexicalContent json={page.content} className="text-xl" />
}
