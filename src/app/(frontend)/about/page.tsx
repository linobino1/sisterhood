import LexicalContent from '~/lexical/LexicalContent'
import { fetchPage } from '~/util/fetchPage'

export default async function About() {
  const page = await fetchPage('about')

  return <LexicalContent json={page.content} className="text-xl" />
}
