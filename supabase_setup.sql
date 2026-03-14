-- ============================================================
-- FILALI DESIGN CO. — SUPABASE SETUP SCRIPT
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. TABLES
-- --------------------------------------------------------

create table if not exists albums (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  category    text not null check (category in ('salons','beds','curtains','gallery','cuisines','wood_meubles')),
  description text,
  cover_image text,
  created_at  timestamptz default now()
);

create table if not exists album_images (
  id       uuid primary key default gen_random_uuid(),
  album_id uuid references albums(id) on delete cascade,
  src      text not null,
  caption  text,
  position int  default 0
);

create table if not exists testimonials (
  id         uuid primary key default gen_random_uuid(),
  text       text not null,
  author     text not null,
  role       text,
  created_at timestamptz default now()
);

-- 2. ROW LEVEL SECURITY
-- --------------------------------------------------------

alter table albums       enable row level security;
alter table album_images enable row level security;
alter table testimonials enable row level security;

-- Public can read everything (gallery, portfolio, testimonials)
create policy "Public read albums"       on albums       for select using (true);
create policy "Public read album_images" on album_images for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);

-- Only authenticated admins can write
create policy "Admin insert albums"       on albums       for insert with check (auth.role() = 'authenticated');
create policy "Admin update albums"       on albums       for update using      (auth.role() = 'authenticated');
create policy "Admin delete albums"       on albums       for delete using      (auth.role() = 'authenticated');

create policy "Admin insert album_images" on album_images for insert with check (auth.role() = 'authenticated');
create policy "Admin update album_images" on album_images for update using      (auth.role() = 'authenticated');
create policy "Admin delete album_images" on album_images for delete using      (auth.role() = 'authenticated');

create policy "Admin insert testimonials" on testimonials for insert with check (auth.role() = 'authenticated');
create policy "Admin update testimonials" on testimonials for update using      (auth.role() = 'authenticated');
create policy "Admin delete testimonials" on testimonials for delete using      (auth.role() = 'authenticated');

-- 3. STORAGE BUCKET
-- --------------------------------------------------------
-- Run in Dashboard → Storage → New Bucket:
--   Name: portfolio-images
--   Public: YES
--   File size limit: 10 MB
--   Allowed MIME types: image/jpeg, image/png, image/webp, image/gif

-- Storage RLS (run after creating the bucket)
create policy "Public read images"
  on storage.objects for select
  using ( bucket_id = 'portfolio-images' );

create policy "Admin upload images"
  on storage.objects for insert
  with check ( bucket_id = 'portfolio-images' and auth.role() = 'authenticated' );

create policy "Admin delete images"
  on storage.objects for delete
  using ( bucket_id = 'portfolio-images' and auth.role() = 'authenticated' );

-- 4. SEED — DEFAULT TESTIMONIALS
-- --------------------------------------------------------
insert into testimonials (text, author, role) values
  ('La rénovation de notre lobby a été métamorphosée par l''expertise de Filali. Une fusion parfaite entre l''âme traditionnelle marocaine et une élégance contemporaine absolue.',
   'Directeur, Hôtel Royal Mansour', 'Hôtellerie de Luxe'),
  ('Redonner vie à ce Riad historique demandait une sensibilité unique. Le travail du bois de cèdre et des tissus brodés main est tout simplement exceptionnel.',
   'Jean-Pierre L.', 'Restauration de Riad'),
  ('J''ai trouvé chez Filali Design une écoute rare. Mes pièces de collection sont sublimées par leur travail sur mesure. Un véritable partenaire artistique.',
   'Sarah B.', 'Collectionneuse d''Art');

-- 5. ADMIN USER
-- --------------------------------------------------------
-- Do NOT run SQL for the password.
-- Go to: Supabase Dashboard → Authentication → Users → Add User
--   Email:    admin@filali-design.ma   (or any email you own)
--   Password: choose a strong password (min 12 chars)
--   Then COPY that email into AdminLayout.tsx if you want to pre-fill it.

-- ============================================================
-- AFTER RUNNING THIS SCRIPT:
-- 1. Go to Project Settings → API
-- 2. Copy "Project URL"  → VITE_SUPABASE_URL in .env.local
-- 3. Copy "anon public"  → VITE_SUPABASE_ANON_KEY in .env.local
-- 4. Set both in Netlify: Site Settings → Environment Variables
-- ============================================================
