create schema if not exists hom;

create table if not exists hom_hello (
  id uuid primary key default gen_random_uuid(),
  msg text not null,
  created_at timestamptz default now()
);

insert into hom_hello (msg)
values ('HOM-SI migration pipeline online');
