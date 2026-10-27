import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'E-TILT — O próximo nível começa aqui', description:'O ponto de encontro do e-sport amador e semi-pro. Descubra campeonatos, encontre times e acompanhe sua evolução.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="pt-BR" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.dataset.theme=localStorage.getItem('etilt-theme')==='light'?'light':'dark'}catch{}"}}/></head><body>{children}</body></html>; }
