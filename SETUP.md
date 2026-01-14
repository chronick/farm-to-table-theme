# Endless Bounty Theme - Setup Guide

## Quick Start: Load Locally in Cursor/VS Code

### Option 1: Symlink (Recommended for Development)

```bash
# Clone your repo
git clone https://github.com/chronick/endless-bounty.git
cd endless-bounty

# Create symlink to Cursor extensions folder
# macOS:
ln -s "$(pwd)" ~/.cursor/extensions/endless-bounty

# Or for VS Code:
ln -s "$(pwd)" ~/.vscode/extensions/endless-bounty

# Restart Cursor/VS Code, then:
# Cmd+K, Cmd+T → Select "Endless Bounty Dark" or "Endless Bounty Light"
```

### Option 2: Copy Folder

```bash
# macOS - Cursor
cp -r endless-bounty ~/.cursor/extensions/

# macOS - VS Code
cp -r endless-bounty ~/.vscode/extensions/

# Linux - Cursor
cp -r endless-bounty ~/.cursor/extensions/

# Linux - VS Code
cp -r endless-bounty ~/.vscode/extensions/

# Windows - Cursor
xcopy endless-bounty %USERPROFILE%\.cursor\extensions\endless-bounty /E /I

# Windows - VS Code
xcopy endless-bounty %USERPROFILE%\.vscode\extensions\endless-bounty /E /I
```

Then restart and select the theme with `Cmd+K, Cmd+T` (or `Ctrl+K, Ctrl+T`).

---

## Package as .vsix

### Prerequisites

```bash
# Install vsce (Visual Studio Code Extension manager)
npm install -g @vscode/vsce
```

### Build the Package

```bash
cd endless-bounty

# Package it (creates endless-bounty-1.0.0.vsix)
vsce package
```

### Install from .vsix

```bash
# Cursor
cursor --install-extension endless-bounty-1.0.0.vsix

# VS Code
code --install-extension endless-bounty-1.0.0.vsix
```

---

## Publish to VS Code Marketplace

### 1. Create a Publisher Account

1. Go to https://marketplace.visualstudio.com/manage
2. Sign in with Microsoft account
3. Create a publisher (e.g., `your-username`)

### 2. Create a Personal Access Token (PAT)

1. Go to https://dev.azure.com
2. Click your profile → Personal Access Tokens
3. New Token:
   - Name: `vsce`
   - Organization: All accessible organizations
   - Expiration: 1 year
   - Scopes: Custom defined → Marketplace → Check "Manage"
4. Copy the token immediately (you won't see it again)

### 3. Login and Publish

```bash
# Login with your publisher name and PAT
vsce login your-publisher-name

# Update package.json "publisher" field to match your publisher name
# Then publish:
vsce publish

# Or publish with a version bump:
vsce publish minor  # 1.0.0 → 1.1.0
vsce publish patch  # 1.0.0 → 1.0.1
```

### 4. Verify

Your theme will appear at:
`https://marketplace.visualstudio.com/items?itemName=your-publisher-name.endless-bounty`

---

## Git Repository Setup

```bash
# Initialize repo
cd endless-bounty
git init
git add .
git commit -m "Initial commit: Endless Bounty theme v1.0.0"

# Create GitHub repo (using gh CLI, or do manually on github.com)
gh repo create endless-bounty --public --source=. --push

# Or manually:
git remote add origin https://github.com/chronick/endless-bounty.git
git branch -M main
git push -u origin main
```

---

## GitHub Pages Setup

The `docs/` folder contains a ready-to-go GitHub Pages site.

### Enable GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/docs`
4. Save

Your site will be live at: `https://chronick.github.io/endless-bounty/`

---

## Recommended Workflow

```bash
# Development: edit themes, preview changes
# (symlink means changes are live after Cmd+R to reload window)

# When ready to release:
git add .
git commit -m "feat: add new syntax colors for X"
vsce publish patch
git push
```

---

## File Structure

```
endless-bounty/
├── package.json          # Extension manifest
├── README.md             # Marketplace description
├── CHANGELOG.md          # Version history
├── LICENSE               # MIT license
├── .vscodeignore         # Files to exclude from package
├── themes/
│   ├── endless-bounty-dark.json
│   └── endless-bounty-light.json
├── docs/                 # GitHub Pages site
│   ├── index.html
│   └── preview.html
└── images/
    └── icon.png          # 128x128 marketplace icon
```
