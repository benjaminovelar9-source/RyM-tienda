'use client'
import {useEffect,useMemo,useState} from 'react'
import {money} from '@/lib/format'
type P={id:string,name:string,category:string,price:number,image_url?:string,stock:number,active:boolean}
const cats=['Todos','Kanekalon','Geles','Hilos','Accesorios','Kits']
const demo:P[]=[
{id:'1',name:'Extensión de Kanekalon Premium',category:'Kanekalon',price:2500,stock:50,active:true},
{id:'2',name:'Gel Profesional 250g',category:'Geles',price:4000,stock:30,active:true},
{id:'3',name:'Hilo para trenzas x12',category:'Hilos',price:3200,stock:30,active:true},
{id:'4',name:'Kit de accesorios',category:'Accesorios',price:5500,stock:20,active:true},
{id:'5',name:'Set de herramientas',category:'Accesorios',price:3900,stock:20,active:true},
{id:'6',name:'Kit completo trenzadora',category:'Kits',price:9900,stock:15,active:true},
{id:'7',name:'Extensiones colores',category:'Kanekalon',price:2800,stock:40,active:true},
{id:'8',name:'Gel Profesional 1kg',category:'Geles',price:7900,stock:25,active:true}
]
export default function Home(){
 const [products,setProducts]=useState<P[]>(demo),[cat,setCat]=useState('Todos'),[cart,setCart]=useState<{p:P,q:number}[]>([]),[open,setOpen]=useState(false)
 useEffect(()=>{fetch('/api/products').then(r=>r.ok?r.json():demo).then(x=>Array.isArray(x)&&x.length?setProducts(x):null).catch(()=>{})},[])
 const shown=useMemo(()=>products.filter(p=>p.active&&(cat==='Todos'||p.category===cat)),[products,cat])
 const total=cart.reduce((s,x)=>s+x.p.price*x.q,0)
 function add(p:P){setCart(c=>{const x=c.find(x=>x.p.id===p.id);return x?c.map(y=>y.p.id===p.id?{...y,q:y.q+1}:y):[...c,{p,q:1}]});setOpen(true)}
 function wa(){const lines=cart.map(x=>`• ${x.p.name} x${x.q} — ${money(x.p.price*x.q)}`).join('\n');const msg=encodeURIComponent(`Hola RyM! Quiero hacer este pedido:\n\n${lines}\n\nTotal: ${money(total)}\n\nQuiero coordinar el retiro y el medio de pago.`);window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PEDIDOS||'5491122542430'}?text=${msg}`,'_blank')}
 return <>
 <header className="header wrap"><a className="logo" href="#inicio">RyM<small>TRENZAS & INSUMOS</small></a><nav className="nav"><a href="#inicio">Inicio</a><a href="#tienda">Tienda</a><a href="#trenzas">Trenzas</a><a href="#promos">Promociones</a><a href="#contacto">Contacto</a></nav><button className="btn" onClick={()=>setOpen(!open)}>🛒 {cart.reduce((s,x)=>s+x.q,0)}</button></header>
 <main>
 <section id="inicio" className="hero"><div className="wrap"><p className="eyebrow">RYM · TRENZAS & INSUMOS</p><h1>Tu estilo.<br/><span className="gold">Nuestra pasión.</span></h1><p>Extensiones de Kanekalon, insumos profesionales, accesorios y kits para crear tus mejores trenzas.</p><a className="btn" href="#tienda">COMPRAR AHORA</a></div></section>
 <section className="benefits"><div>🛍️<b> Compra online</b><small>Elegí tus productos</small></div><div>💳<b> Pagos seguros</b><small>Mercado Pago</small></div><div>📍<b> Retiro</b><small>Coordinado</small></div><div>💬<b> WhatsApp</b><small>Atención RyM</small></div></section>
 <section id="tienda" className="section wrap"><p className="eyebrow">CATÁLOGO</p><h2>Productos <span className="gold">destacados</span></h2><div className="filters">{cats.map(c=><button key={c} className={'filter '+(cat===c?'active':'')} onClick={()=>setCat(c)}>{c}</button>)}</div><div className="grid">{shown.map(p=><article className="card" key={p.id}><div className="pic">{p.category==='Geles'?'🫙':p.category==='Hilos'?'🧵':p.category==='Accesorios'?'✨':p.category==='Kits'?'🎁':'🧶'}</div><div className="body"><div className="cat">{p.category}</div><h3>{p.name}</h3><div className="price">{money(p.price)}</div><button className="add" onClick={()=>add(p)}>AGREGAR AL CARRITO</button></div></article>)}</div></section>
 <section id="promos" className="wrap promo"><div><p className="eyebrow">PROMOCIONES</p><h2>Los mejores productos<br/><span className="gold">al mejor precio.</span></h2><a className="btn alt" href="#tienda">VER PRODUCTOS</a></div><div className="logo" style={{fontSize:100}}>RyM</div></section>
 <section id="trenzas" className="section wrap"><p className="eyebrow">SERVICIOS</p><h2>Trenzas <span className="gold">RyM</span></h2><div className="grid"><article className="card body"><h3>♛ Trenzas clásicas</h3><p className="muted">Diseños prolijos y personalizados.</p></article><article className="card body"><h3>✦ Trenzas con diseño</h3><p className="muted">Un estilo único para cada cliente.</p></article><article className="card body"><h3>∞ Cornrows</h3><p className="muted">Diseños modernos y detallados.</p></article><article className="card body"><h3>✧ Con extensiones</h3><p className="muted">Elegí colores y largos disponibles.</p></article></div></section>
 <section className="wrap pickup"><p className="eyebrow">IMPORTANTE</p><h2>Comprá online y <span className="gold">retirá tu pedido.</span></h2><p>Por el momento trabajamos con retiro coordinado. No hay envíos nacionales activos.</p></section>
 <section id="contacto" className="contact"><div className="wrap"><p className="eyebrow">CONTACTO</p><h2>¿Necesitás ayuda?</h2><p className="muted">Pedidos: 11 2254-2430 · Consultas: 11 5369-2561</p><a className="btn" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_CONSULTAS||'5491153692561'}`} target="_blank">HABLAR POR WHATSAPP</a></div></section>
 </main>
 {open&&<aside className="cart"><h2>Tu carrito <button className="btn alt" onClick={()=>setOpen(false)}>Cerrar</button></h2>{cart.length===0?<p className="muted">Tu carrito está vacío.</p>:cart.map((x,i)=><div className="cartline" key={x.p.id}><div><b>{x.p.name}</b><small className="muted">{money(x.p.price)} c/u</small></div><div className="qty"><button onClick={()=>setCart(c=>c.map((y,j)=>j===i?{...y,q:y.q+1}:y))}>+</button> {x.q} <button onClick={()=>setCart(c=>c.map((y,j)=>j===i?{...y,q:y.q-1}:y).filter(y=>y.q>0))}>−</button></div></div>)}<div className="total"><span>Total</span><b>{money(total)}</b></div><button className="btn" disabled={!cart.length} onClick={wa}>FINALIZAR PEDIDO</button></aside>}
 <footer className="wrap"><div className="logo">RyM<small>TRENZAS & INSUMOS</small></div><div>© 2026 RyM · <a className="gold" href="/admin">Administración</a></div></footer>
 </>}
