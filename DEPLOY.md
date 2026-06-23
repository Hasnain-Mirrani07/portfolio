# Enable GitHub Pages (required once)

Your build succeeds, but the site returns **404** until GitHub Pages is turned on in repo settings.

## Step-by-step (2 minutes)

### 1. Open Pages settings
https://github.com/Hasnain-Mirrani07/portfolio/settings/pages

### 2. Set the source to GitHub Actions
Under **Build and deployment** → **Source**, choose:

**GitHub Actions** ← not "Deploy from a branch"

If you don't see this option, click **Settings → General → scroll down** and make sure the repo is **Public**.

### 3. Re-run the deploy workflow
https://github.com/Hasnain-Mirrani07/portfolio/actions

- Click **Deploy to GitHub Pages**
- Click **Re-run all jobs**
- Wait for green checkmark (~1 min)

### 4. Open your site
https://hasnain-mirrani07.github.io/portfolio/

It can take **1–5 minutes** after the first successful deploy.

---

## Still not working?

Check **Settings → Actions → General → Workflow permissions**:
- Select **Read and write permissions**
- Save

Then re-run the workflow again.

---

## Alternative: Vercel (easier, free)

1. Change `base: '/'` in `vite.config.ts`
2. Go to https://vercel.com → Import GitHub repo
3. Deploy — live in ~1 minute with a free `.vercel.app` URL
