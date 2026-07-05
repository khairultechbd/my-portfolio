const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

const replaceRules = [
  { from: /bg-slate-900/g, to: 'bg-theme-bg' },
  { from: /bg-slate-800/g, to: 'bg-theme-card' },
  { from: /bg-slate-700/g, to: 'bg-theme-card' },
  { from: /text-white/g, to: 'text-theme-text' },
  { from: /text-slate-100/g, to: 'text-theme-text' },
  { from: /text-slate-300/g, to: 'text-theme-secondary' },
  { from: /text-slate-400/g, to: 'text-theme-muted' },
  { from: /text-slate-500/g, to: 'text-theme-muted' },
  { from: /border-slate-700/g, to: 'border-theme-border' },
  { from: /border-slate-600/g, to: 'border-theme-border' },

  { from: /color:\s*['"]#f1f5f9['"]/g, to: "color: 'var(--text-primary)'" },
  { from: /color:\s*['"]#94a3b8['"]/g, to: "color: 'var(--text-muted)'" },
  { from: /color:\s*['"]#cbd5e1['"]/g, to: "color: 'var(--text-secondary)'" },
  { from: /color:\s*['"]#64748b['"]/g, to: "color: 'var(--text-muted)'" },
  { from: /background:\s*['"]#1e293b['"]/g, to: "background: 'var(--bg-card)'" },
  { from: /background:\s*['"]#0f172a['"]/g, to: "background: 'var(--bg-primary)'" },
  { from: /background:\s*['"]rgba\(30,\s*41,\s*59,\s*0\.8\)['"]/g, to: "background: 'var(--bg-card)'" },
  { from: /background:\s*['"]rgba\(30,41,59,0\.9\)['"]/g, to: "background: 'var(--bg-card)'" },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply replace rules
      for (const rule of replaceRules) {
        content = content.replace(rule.from, rule.to);
      }
      
      // Step 5: Section backgrounds
      if (file === 'HeroSection.tsx') {
        content = content.replace(/<section\s+id="home"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-primary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-primary)' }}`);
        });
      } else if (file === 'TrainingSlideshow.tsx') {
        content = content.replace(/<section\s+id="training"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-secondary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-secondary)' }}`);
        });
      } else if (file === 'AboutSection.tsx') {
        content = content.replace(/<section\s+id="about"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-primary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-primary)' }}`);
        });
      } else if (file === 'SkillsSection.tsx') {
        content = content.replace(/<section\s+id="skills"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--section-alt-bg)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--section-alt-bg)' }}`);
        });
      } else if (file === 'ProjectsSection.tsx') {
        content = content.replace(/<section\s+id="projects"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-primary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-primary)' }}`);
        });
      } else if (file === 'BlogSection.tsx') {
        content = content.replace(/<section\s+id="blog"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-secondary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-secondary)' }}`);
        });
      } else if (file === 'ContactSection.tsx') {
        content = content.replace(/<section\s+id="contact"[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-primary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-primary)' }}`);
        });
      } else if (file === 'Footer.tsx') {
        content = content.replace(/<footer[^>]*>/g, (match) => {
          if (!match.includes('style=')) return match.replace('>', ` style={{ background: 'var(--bg-secondary)' }}>`);
          return match.replace(/style={{[^}]*}}/, `style={{ background: 'var(--bg-secondary)' }}`);
        });
      }

      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

processDir(componentsDir);
console.log('Done replacement');
