import LexicalContent from '~/lexical/LexicalContent'
import { fetchPage } from '~/util/fetchPage'

export async function Contact() {
  const page = await fetchPage('contact')

  return <LexicalContent json={page.content} className="text-xl" />
}

export default Contact
