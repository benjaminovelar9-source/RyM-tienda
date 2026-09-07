import './globals.css'
import type {Metadata} from 'next'
export const metadata:Metadata={title:'RyM | Trenzas & Insumos',description:'Tienda online de RyM: extensiones de Kanekalon, geles, hilos, accesorios y kits.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
