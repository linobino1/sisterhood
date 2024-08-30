import LexicalContent from '~/lexical/LexicalContent'
import { fetchPage } from '~/util/fetchPage'

export async function LandingPage() {
  const page = await fetchPage('home')

  return <LexicalContent json={page.content} className="text-xl" />
}

export default LandingPage
