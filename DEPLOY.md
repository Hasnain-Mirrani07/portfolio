# Make your portfolio live on GitHub Pages

Your build **already works**. The site files are on the `gh-pages` branch.
You only need to **turn on GitHub Pages once** in Settings.

---

## Do this exactly (1 minute)

### 1. Open Pages settings
https://github.com/Hasnain-Mirrani07/portfolio/settings/pages

### 2. Configure source — use "Deploy from a branch"

| Setting | Value |
|---------|-------|
| **Source** | Deploy from a branch |
| **Branch** | `gh-pages` |
| **Folder** | `/ (root)` |

Click **Save**.

> Do NOT select "GitHub Actions" unless you have already enabled Pages.
> The `gh-pages` branch already has your built site — use it.

### 3. Wait 1–5 minutes

Open: **https://hasnain-mirrani07.github.io/portfolio/**

You should see a green message on the Pages settings page:
> "Your site is live at https://hasnain-mirrani07.github.io/portfolio/"

---

## If deploy workflow fails

Go to: https://github.com/Hasnain-Mirrani07/portfolio/settings/actions

Under **Workflow permissions**, select:
- **Read and write permissions** → Save

Then re-run: https://github.com/Hasnain-Mirrani07/portfolio/actions

---

## Why the previous error happened

```
Error: Get Pages site failed ... Not Found
```

This means **GitHub Pages was never enabled** on the repo.
The `configure-pages` action cannot enable it automatically without a special token.

The `gh-pages` branch method is simpler — you just pick that branch in Settings.

---

## Alternative: Vercel (no GitHub Pages setup needed)

1. Go to https://vercel.com and sign in with GitHub
2. Import the `portfolio` repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variable or change `vite.config.ts` base to `'/'`
6. Deploy — live in ~1 minute
