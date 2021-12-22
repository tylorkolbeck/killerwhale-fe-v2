import Script from 'next/script'

export default function Chat() {
  const zendeskKey = process.env.NEXT_PUBLIC_ZENDESK_KEY
  const chatSource = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`

  return <Script id='ze-snippet' src={chatSource} />
}
