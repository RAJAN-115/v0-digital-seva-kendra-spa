const { execSync } = require('child_process');

try {
  console.log('[v0] Starting git commit process...');
  
  // Add all changes
  console.log('[v0] Staging changes...');
  execSync('git add -A', { cwd: '/vercel/share/v0-project' });
  
  // Commit with meaningful message
  console.log('[v0] Committing changes...');
  execSync('git commit -m "feat: Add AI Assistant, Endorsed By strip, and Rajdhani font to Digital Seva Kendra\n\n- Add floating AI Assistant button with chat panel\n- Implement Seva AI with service lookup and fee information\n- Add Endorsed By strip with PM and CM information\n- Integrate Rajdhani font for hero and nav titles\n- Add AI Assistant initialization and event handlers\n- Improve mobile responsiveness for AI panel\n- Add pulsing animation to AI button"', { cwd: '/vercel/share/v0-project' });
  
  // Push to origin
  console.log('[v0] Pushing to remote...');
  execSync('git push origin digital-seva-kendra', { cwd: '/vercel/share/v0-project' });
  
  console.log('[v0] ✓ Successfully committed and pushed changes!');
} catch (error) {
  console.error('[v0] Git operation failed:', error.message);
  process.exit(1);
}
