create extension if not exists pgcrypto;
create table if not exists public.products(
 id uuid primary key default gen_random_uuid(),
 name text not null,
 category text not null,
 price numeric(12,2) not null check(price>=0),
 image_url text,
 stock integer not null default 0 check(stock>=0),
 active boolean not null default true,
 created_at timestamptz not null default now()
);
create table if not exists public.orders(
 id uuid primary key default gen_random_uuid(),
 customer_name text,
 customer_phone text,
 total numeric(12,2) not null,
 status text not null default 'pending',
 payment_status text not null default 'pending',
 payment_id text,
 created_at timestamptz not null default now()
);
create table if not exists public.order_items(
 id uuid primary key default gen_random_uuid(),
 order_id uuid references public.orders(id) on delete cascade,
 product_id uuid references public.products(id),
 product_name text not null,
 quantity integer not null check(quantity>0),
 unit_price numeric(12,2) not null
);
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
create policy "public can read active products" on public.products for select using(active=true);
