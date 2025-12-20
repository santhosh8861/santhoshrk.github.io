# 🚀 Publishing Your Website to GitHub Pages

## Step-by-Step Guide

### ✅ Prerequisites
- GitHub account (free) - If you don't have one, create at https://github.com/signup
- Your website files (already created!)

---

## 📋 METHOD 1: Using GitHub Web Interface (Easiest - No Git Required)

### Step 1: Create a GitHub Account
1. Go to https://github.com/signup
2. Enter your email address
3. Create a password
4. Choose a username (example: `rkstechsports`)
5. Verify your email

### Step 2: Create a New Repository
1. Go to https://github.com/new
2. **Repository name:** Choose one of these options:
   - **Option A (Custom URL):** `yourusername.github.io` 
     - Example: `rkstechsports.github.io`
     - Your site will be at: `https://rkstechsports.github.io`
   
   - **Option B (Project URL):** Any name like `my-website` or `tech-sports`
     - Your site will be at: `https://yourusername.github.io/my-website`
   
3. **Description:** "RKS Tech & Sports Hub - AI, AWS, Cricket & Online Earning Tips"
4. **Public** ✓ (must be public for free GitHub Pages)
5. **Add README:** ✓ Check this box
6. Click **"Create repository"**

### Step 3: Upload Your Website Files
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Open File Explorer and go to: `c:\Users\rks\Documents\New Project 2026\`
3. Select ALL files and folders:
   - index.html
   - cricket-videos.html
   - github-copilot.html
   - money-online.html
   - privacy-policy.html
   - css folder (with style.css inside)
   - js folder (with script.js inside)
4. Drag and drop them into the GitHub upload area
5. Scroll down and click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu)
2. Scroll down and click **"Pages"** (left sidebar)
3. Under **"Source"**, select:
   - Branch: **main** (or master)
   - Folder: **/ (root)**
4. Click **"Save"**
5. Wait 1-2 minutes

### Step 5: Visit Your Live Website! 🎉
Your website is now live at:
- **https://yourusername.github.io** (if you used yourusername.github.io as repo name)
- **https://yourusername.github.io/repo-name** (if you used a custom repo name)

Example: `https://rkstechsports.github.io`

---

## 📋 METHOD 2: Using Git & GitHub Desktop (More Professional)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and open it
3. Sign in with your GitHub account

### Step 2: Create Repository
1. In GitHub Desktop, click **"Create a New Repository"**
2. **Name:** `yourusername.github.io` (replace yourusername)
3. **Local Path:** Click "Choose..." and select: `c:\Users\rks\Documents\New Project 2026`
4. Check **"Initialize this repository with a README"**
5. Click **"Create Repository"**

### Step 3: Publish to GitHub
1. Click **"Publish repository"** (top right)
2. Uncheck **"Keep this code private"** (must be public for free Pages)
3. Click **"Publish Repository"**

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click **"Settings"** → **"Pages"**
3. Source: **main** branch, **/ (root)** folder
4. Click **"Save"**

### Step 5: Your Site is Live!
Visit: `https://yourusername.github.io`

---

## 🌐 Adding a Custom Domain (Optional)

Once your site is working on GitHub Pages, you can add a custom domain:

### Step 1: Buy a Domain
- Namecheap.com ($8-12/year)
- Google Domains ($12/year)
- GoDaddy ($10-15/year)

Example: `rkstechsports.com`

### Step 2: Configure DNS
In your domain registrar, add these DNS records:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: yourusername.github.io
```

### Step 3: Add Domain to GitHub
1. In your repository: Settings → Pages
2. Under "Custom domain", enter your domain: `rkstechsports.com`
3. Click "Save"
4. Wait 24-48 hours for DNS to propagate

---

## 🔧 Updating Your Website

### Using GitHub Web Interface:
1. Go to your repository on GitHub.com
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (✏️) to edit
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Your site updates automatically in 1-2 minutes!

### Using GitHub Desktop:
1. Edit your files locally in VS Code or any editor
2. Open GitHub Desktop
3. You'll see your changes listed
4. Add a commit message (e.g., "Updated cricket videos")
5. Click **"Commit to main"**
6. Click **"Push origin"** (top right)
7. Your site updates in 1-2 minutes!

---

## 📊 Tracking Your Website

### Add Google Analytics:
1. Go to https://analytics.google.com
2. Create an account and property
3. Get your tracking code
4. Add it to all your HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Google Search Console:
1. Go to https://search.google.com/search-console
2. Add your property: `https://yourusername.github.io`
3. Verify ownership
4. Submit your sitemap: `https://yourusername.github.io/sitemap.xml`

---

## ✅ Verification Checklist

After publishing, verify these:
- [ ] Website loads at your GitHub Pages URL
- [ ] All pages are accessible (cricket-videos.html, github-copilot.html, etc.)
- [ ] CSS styling is working (not plain HTML)
- [ ] JavaScript is working (mobile menu toggles)
- [ ] Images load correctly (once you add them)
- [ ] Links between pages work
- [ ] Mobile version looks good (test on phone)

---

## 🆘 Troubleshooting

### Issue: 404 Page Not Found
**Solution:** Make sure your repository is public and GitHub Pages is enabled in Settings → Pages

### Issue: CSS/JS not loading
**Solution:** Check that css/ and js/ folders are uploaded correctly. Files should be:
- `css/style.css` (not `style.css` in root)
- `js/script.js` (not `script.js` in root)

### Issue: Site not updating after changes
**Solution:** 
- Clear browser cache (Ctrl + Shift + R)
- Wait 2-3 minutes for GitHub to rebuild
- Check if your commit was successful

### Issue: Images not showing
**Solution:** Create an `images/` folder and add your images there. Update image paths in HTML files.

---

## 🎯 Next Steps After Publishing

1. **Immediately:**
   - [ ] Share your link on social media
   - [ ] Add link to your YouTube channel description
   - [ ] Bookmark your live site

2. **Within 24 Hours:**
   - [ ] Set up Google Analytics
   - [ ] Set up Google Search Console
   - [ ] Create sitemap.xml

3. **Within 1 Week:**
   - [ ] Replace YouTube video IDs with real videos
   - [ ] Add actual images
   - [ ] Create 5 more content pages

4. **Within 1 Month:**
   - [ ] Publish 20-30 articles
   - [ ] Apply for Google AdSense
   - [ ] Consider buying custom domain

---

## 📞 Need Help?

If you encounter any issues:
1. Check GitHub Pages documentation: https://docs.github.com/pages
2. GitHub Community: https://github.community
3. Stack Overflow: Tag your questions with [github-pages]

---

## 🎉 Congratulations!

Your website is now live on the internet! 🚀

**Share your link everywhere:**
- YouTube channel description
- Social media profiles
- Email signature
- LinkedIn profile
- Online forums and communities

**Your journey to online income starts now!**

---

**Quick Reference:**
- Your repository: `https://github.com/yourusername/yourusername.github.io`
- Your live website: `https://yourusername.github.io`
- Edit files: GitHub.com → Your repo → Click file → Edit (✏️)
- Update site: Make changes → Commit → Wait 1-2 minutes

Good luck! 🌟
