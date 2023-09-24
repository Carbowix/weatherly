import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'

const container = document.getElementById('root') as HTMLDivElement
createRoot(container).render(<App />)
