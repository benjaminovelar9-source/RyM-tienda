import {NextResponse} from 'next/server'
export async function POST(req:Request){const body=await req.json().catch(()=>null);console.log('Mercado Pago webhook',body);return NextResponse.json({received:true})}
