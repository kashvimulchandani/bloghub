# Turning on accounts (Supabase)

BlogHub works without this. Follow these steps only if you want people to
sign in with a username and save their own blogs to the cloud.

It's free and takes about 10 minutes.

## 1. Create a Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**. Give it a name (e.g. `bloghub`) and a database
   password (save it somewhere). Pick the region closest to you.
3. Wait ~2 minutes for it to finish setting up.

## 2. Create the database tables
1. In your project, open **SQL Editor** (left sidebar) → **New query**.
2. Paste in everything below and click **Run**:

```sql
-- Usernames (with a hashed PIN)
create table if not exists profiles (
  username text primary key,
  pin_hash text,
  created_at timestamptz default now()
);
-- If you made this table before PINs were added, add the column:
alter table profiles add column if not exists pin_hash text;

-- Blogs each user adds
create table if not exists blogs (
  id uuid primary key default gen_random_uuid(),
  username text references profiles(username) on delete cascade,
  name text not null,
  url text not null,
  note text,
  section text,
  feed text,
  logo text,
  created_at timestamptz default now()
);
-- If you made this table earlier, add the new columns:
alter table blogs add column if not exists section text;
alter table blogs add column if not exists feed text;
alter table blogs add column if not exists logo text;

-- Access rules for the website (publishable key).
alter table profiles enable row level security;
alter table blogs enable row level security;

-- Profiles: anyone can look up a username and create a new one, but an
-- existing username's PIN can't be changed or deleted through the API.
drop policy if exists "public profiles" on profiles;
create policy "read profiles"   on profiles for select using (true);
create policy "create profiles" on profiles for insert with check (true);

-- Blogs: full read/write (sign-in with the correct PIN gates this in the app).
drop policy if exists "public blogs" on blogs;
create policy "public blogs" on blogs for all using (true) with check (true);
```

## 3. Get your URL and key
Supabase's dashboard changed recently, so use these steps:

**Project URL:**
- Click the green **Connect** button at the top of the dashboard. The panel
  that opens shows your **Project URL** (`https://abcd1234.supabase.co`).
- Or: left sidebar → **Data API** (under INTEGRATIONS) → **Project URL**.

**Key:**
- Go to **Settings → API Keys**.
- Under **Publishable key**, copy the value that starts with `sb_publishable_…`.
  (This is the browser-safe key — the new name for the old "anon" key.)
- Do **NOT** use the **Secret key** (`sb_secret_…`). That must stay private
  and must never go in your website code.

## 4. Paste them into the site
1. Open `config.js`.
2. Replace `YOUR_SUPABASE_URL` with your Project URL.
3. Replace `YOUR_SUPABASE_ANON_KEY` with the `sb_publishable_…` key.
4. Save, and upload `config.js` to GitHub (or commit it).

Refresh the site — the top-right will now show **Sign in** instead of
"Accounts off". Sign in with any username and use **+ Add blog**.

## A note on security
Because sign-in is username-only (no password), this is not a secure login —
someone could type another person's username. That's usually fine for sharing
among friends. When you want, I can add a simple PIN or proper email login.
