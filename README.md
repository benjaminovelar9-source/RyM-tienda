# RyM — Tienda profesional

Base profesional preparada para publicar una tienda real de RyM con Next.js, Supabase y Mercado Pago.

## Incluye
- Diseño responsive negro/dorado.
- Catálogo y filtros.
- Carrito.
- Pedido por WhatsApp (11 2254-2430).
- Consultas por WhatsApp (11 5369-2561).
- Retiro coordinado, sin envíos nacionales.
- Backend de productos con Supabase.
- Panel de administración.
- Endpoint preparado para Mercado Pago Checkout Pro.
- Webhook preparado.

Mercado Pago Checkout Pro redirige al cliente al entorno seguro de Mercado Pago y luego puede devolverlo a la tienda. La API de preferencias crea el `init_point` para iniciar el pago.

## Configuración necesaria
1. Crear proyecto en Supabase.
2. Ejecutar `supabase.sql` en el SQL Editor.
3. Crear un usuario administrador en Supabase Auth.
4. Copiar `.env.example` a `.env.local` y completar las variables.
5. Crear una aplicación de Mercado Pago para pagos online y colocar el Access Token del servidor.
6. `npm install`
7. `npm run dev` para probar.
8. `npm run build` para verificar producción.
9. Publicar en Vercel y configurar las mismas variables de entorno.

## Importante sobre credenciales
El Access Token de Mercado Pago y `SUPABASE_SERVICE_ROLE_KEY` son secretos. Nunca deben ponerse en el navegador ni compartirse públicamente.

## Próxima configuración de negocio
- Dominio propio (ej. rymtrenzas.com.ar, si está disponible).
- Fotos reales de productos.
- Precios reales.
- Datos de retiro/dirección y horarios.
- Políticas de cambios/devoluciones.
- Credenciales de Mercado Pago.
