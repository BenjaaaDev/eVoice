import { ChatKit, useChatKit } from '@openai/chatkit-react'
import type { ChatKitOptions } from '@openai/chatkit'
import './App.css'

function App() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          // Implementar refresh de sesión
          const res = await fetch('/api/chatkit/refresh', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ currentClientSecret: existing }),
          })
          const { client_secret } = await res.json()
          return client_secret
        }

        const res = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const { client_secret } = await res.json()
        return client_secret
      },
    },
    theme: {
      colorScheme: 'dark',
      radius: 'pill',
      density: 'normal',
      typography: {
        baseSize: 16,
        fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
        fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        fontSources: [
          {
            family: 'OpenAI Sans',
            src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
            weight: 400,
            style: 'normal',
            display: 'swap'
          }
        ]
      }
    },
    composer: {
      attachments: {
        enabled: true,
        maxCount: 5,
        maxSize: 10485760
      },
      tools: [
        {
          id: 'search_docs',
          label: 'Search docs',
          shortLabel: 'Docs',
          placeholderOverride: 'Search documentation',
          icon: 'book-open',
          pinned: false
        }
      ],
    },
    startScreen: {
      greeting: '',
      prompts: [],
    },
  } as ChatKitOptions)

  return (
    <div className="app-container">
      <ChatKit 
        control={control} 
        className="fullscreen-chat"
        style={{ height: '100vh', width: '100vw' }}
      />
    </div>
  )
}

export default App
