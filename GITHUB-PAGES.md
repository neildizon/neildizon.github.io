# Publish your website on GitHub Pages

These instructions are for the supplied project. GitHub Pages settings follow [Vite's official deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).

## 1. Choose your free address

Find your GitHub username in your account profile. Create a **public** repository using one of these names:

- **Recommended:** `YOUR-USERNAME.github.io` → your address will be `https://YOUR-USERNAME.github.io/`.
- Alternatively, `neil-dizon-website` → your address will be `https://YOUR-USERNAME.github.io/neil-dizon-website/`.

Replace `YOUR-USERNAME` with your actual GitHub username. The project supports both options without editing the Vite configuration.

On GitHub, choose **New repository**, enter the name, select **Public**, and click **Create repository**. Leave the initial README, licence, and `.gitignore` options unchecked; the project already includes its own files. GitHub Free supports Pages from public repositories; the website and the uploaded source code will be public.

## 2. Enable GitHub Pages

In your new repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The project already includes `.github/workflows/deploy.yml`. You do not need to paste another workflow or choose a branch-based Pages deployment.

## 3. Upload the project

Install Git from [git-scm.com](https://git-scm.com/downloads) if needed. Open PowerShell **inside the `neil-dizon-website` project folder**. The folder you upload must contain `package.json`, `src`, `public`, and `.github` at its top level.

Run these commands one at a time, replacing the username and repository name with the values you chose:

```powershell
git init -b main
git add .
git commit -m "Add academic website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Complete GitHub's sign-in prompt if one appears. Do not put a password or token into the project files.

If Git asks you to set your identity, set it for this project and retry the commit:

```powershell
git config user.name "Neil D. Dizon"
git config user.email "YOUR-GITHUB-COMMIT-EMAIL"
git commit -m "Add academic website"
git push -u origin main
```

You can use your GitHub-provided private commit email from **GitHub Settings → Emails**.

`node_modules` and `dist` are excluded by `.gitignore`; GitHub builds the site itself. Include `package-lock.json` and the hidden `.github` directory.

If you prefer GitHub Desktop, add this folder as a local repository, create its initial commit, and publish it as a public repository with the chosen name. Use `main` as the branch, and enable Pages as described above.

## 4. Find your live site

1. Open the repository's **Actions** tab.
2. Open **Deploy academic website** and wait for the run to succeed.
3. Open **Settings → Pages** and follow the website link.
4. Test Home, Research, Teaching, Conferences, and the contact and profile links.
5. Open the research address ending in `/#/research` in a new tab, and refresh it to check direct navigation.

Your free `github.io` address already has DNS and HTTPS. You do not need to register a domain or configure DNS to use it.

## 5. Update it later

Edit the data files listed in `README.md`. Check the result locally:

```powershell
npm run check
npm run build
npm run dev
```

Then publish your changes:

```powershell
git add .
git commit -m "Update academic website"
git push
```

GitHub Actions automatically rebuilds and deploys the updated website. Keep the existing Google Site available until you have reviewed the new public site.

## Troubleshooting

- **No deployment:** confirm your branch is `main`, the `.github/workflows/deploy.yml` file is present, and Pages Source is **GitHub Actions**. You can also select **Run workflow** in the Actions tab after enabling Pages.
- **Workflow fails:** open the failed step in Actions. If the content check fails after an intentional addition, update the expected totals in `scripts/check-content.mjs`.
- **Blank page:** confirm `vite.config.js` still uses `base: './'` and that GitHub deploys the `dist` artifact through the supplied workflow. Uploading the React source directly as a branch-based Pages site will not build it.
- **Old content:** confirm the most recent Actions run succeeded, then refresh the browser.
- **Push rejected:** these commands assume a new empty repository. If you created a GitHub README first, clone that repository into a new folder, copy this project's files into it (including `.github`), then commit and push from the clone.

## Optional: your own domain later

You can purchase a domain separately, then follow [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Configure it in Pages settings and add the appropriate DNS records at your registrar. Custom-domain registration generally has an annual cost; the initial `github.io` address avoids that expense.
