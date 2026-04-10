#!/bin/bash

cd /vercel/share/v0-project

# Configure git
git config user.email "v0[bot]@users.noreply.github.com"
git config user.name "v0[bot]"

# Stage all changes
git add -A

# Commit with message
git commit -m "feat: Add AI Assistant, Endorsed By strip, and Rajdhani font

- Implement floating AI button with chat panel for user queries
- Add Seva AI Assistant with intelligent service responses
- Integrate 'Endorsed By' strip showing government officials
- Add Rajdhani font family for brand-specific typography
- Enhance mobile responsiveness for AI panel and buttons
- Add pulse animation to AI button for visual engagement

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"

# Push to branch
git push origin digital-seva-kendra

echo "Changes committed and pushed successfully!"
