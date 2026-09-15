'use strict';
// Sinh toan bo SVG cho README profile: thanh tieu de section + noi dung tung section.
//
//   node tools/readme-svg/build.js                 # build lai tu noi dung ben duoi
//   node tools/readme-svg/build.js --fetch-icons   # tai lai icon tu skillicons.dev roi build
//
// Muon sua chu tren profile: sua cac hang so noi dung (ABOUT, SERVICES, FEATURED, STACK, BUILT) roi chay lai.
// SVG khong tu xuong dong, nen script tu do do rong chu (font-metrics.json do bang Edge) de ngat dong.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const METRICS = require('./font-metrics.json');
const ICON_DIR = path.join(__dirname, 'icons');

const W = 1200;
const C = {
  text: '#F0F6FC', body: '#C9D1D9', muted: '#9DA7B3', dim: '#6E7681', gray: '#8B949E',
  panel: '#151B23', border: '#30363D', line: '#21262D',
  purple: '#A855F7', violet: '#C084FC', cyan: '#22D3EE', green: '#3FB950',
  amber: '#D29922', red: '#F85149', blue: '#58A6FF',
};
const MONO = "'JetBrains Mono', 'Fira Code', 'SFMono-Regular', Consolas, Menlo, 'DejaVu Sans Mono', 'Liberation Mono', monospace";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif";

// ===========================================================================
// Noi dung
// ===========================================================================

const SECTIONS = [
  ['about', '01', 'About Me', '~/about.yml'],
  ['services', '02', 'What I Can Build for You', '~/services.md'],
  ['featured', '03', 'Featured Project', '~/featured/billing-platform'],
  ['stack', '04', 'Tech Stack', '~/stack.json'],
  ['built', '05', "What I've Built", '~/projects/'],
  ['activity', '06', 'Activity', '~/activity.log'],
  ['connect', '07', "Let's Connect", '~/connect.sh'],
];

const ABOUT = {
  yaml: [
    ['name', 'Xuan Danh (Danh Tran)'],
    ['role', 'Full-stack Developer — Backend & Automation'],
    ['based_in', 'Ho Chi Minh City, Vietnam'],
    ['focus', 'back offices · APIs · automation for POD'],
  ],
  stats: [
    ['1+ yr', 'experience', C.violet],
    ['1,200+', 'own commits', C.cyan],
    ['100s', 'pages & tables', C.green],
    ['~1 wk', 'repo → prod', C.violet],
  ],
  rows: [
    ['day-to-day', '**Maintain and extend a large PHP/MySQL back office** — orders, customers, designs, customization and fulfillment across several marketplaces.', C.purple],
    ['integrations', '**Marketplace & supplier APIs, webhooks, CRON jobs** and browser extensions that keep orders, tracking and designs in sync.', C.cyan],
    ['full-slice', 'Database design & stored procedures → business logic → **admin dashboards & BI reporting**.', C.purple],
    ['automation', 'Find the manual, repeated task — **turn it into a tool nobody has to think about again**.', C.cyan],
    ['learning', 'System design · query performance tuning · cleaner service boundaries.', C.purple],
  ],
};

const SERVICES = [
  { idx: '01', title: 'E-commerce back offices', color: C.purple, tags: ['orders', 'roles', 'reports'],
    body: 'Orders, customers, designs and product customization in one place — with **roles for each team**, dashboards and reports.' },
  { idx: '02', title: 'Integrations & scheduled jobs', color: C.cyan, tags: ['api', 'webhooks', 'cron'],
    body: 'Marketplaces, suppliers and internal tools connected through **APIs and webhooks**, plus CRON jobs and alerts that run on their own.' },
  { idx: '03', title: 'Automation & browser extensions', color: C.cyan, tags: ['chrome-mv3', 'pipelines', 'queues'],
    body: 'Extensions inside seller dashboards and background pipelines that turn **hours of repetitive work into one click**.' },
  { idx: '04', title: 'Customer portals, live on the web', color: C.purple, tags: ['auth', 'billing', 'deploy'],
    body: 'Sign-up, **PDF invoices by email**, payment tracking — taken all the way to production: hosting, domain, email, safe deploys.' },
];

const FEATURED = {
  title: 'B2B Website & Billing Platform',
  subtitle: 'A company website plus **monthly client billing** for a US-based e-commerce operations company — built solo, **from an empty repo to live customers in about a week**.',
  stats: [
    ['role', 'solo dev', C.violet],
    ['repo → production', '~1 week', C.cyan],
    ['tests', '190 passing', C.green],
    ['static analysis', 'PHPStan L5', C.violet],
    ['languages', 'VI · EN', C.cyan],
  ],
  features: [
    ['surfaces', '3 surfaces, 1 codebase', C.violet, ['Public website (VI / EN)', 'Customer portal & invoice history', 'Admin panel & subscriptions']],
    ['billing', 'Billing workflow', C.cyan, ['Every status change recorded', 'Issued invoices are locked', 'Voided with a reason, never deleted']],
    ['delivery', 'Invoice delivery', C.green, ['PDF invoice emailed via Resend', 'Sent from a managed queue', 'Idempotent — never sent twice']],
    ['security', 'Security & audit', C.violet, ['Per-customer data isolation', 'Click-wrap ToS with time & IP', 'Login throttling, activity & email logs']],
    ['infra', 'Production setup', C.cyan, ['Isolated demo & prod databases', 'Branch-based auto-deploys', 'Custom domain, SPF / DKIM email']],
    ['quality', 'Quality bar', C.green, ['190 automated tests', 'PHPStan level 5, one command', 'Runbooks & code-reading guide']],
  ],
  lifecycle: {
    main: [['Draft', C.gray], ['Sent', C.blue], ['Pending verification', C.amber]],
    ends: [['Paid', C.green], ['Rejected', C.red], ['Void', C.dim]],
  },
  stack: [
    ['PHP 8.5', '#8892BF'], ['Laravel 13', '#FF2D20'], ['Filament', '#FDAE4B'], ['Tailwind v4', '#38BDF8'], ['Alpine.js', '#8BC0D0'],
    ['MySQL 8.4', '#5FA8E0'], ['Docker', '#2496ED'], ['Laravel Cloud', '#FF2D20'], ['Resend', '#F0F6FC'],
  ],
};

const STACK = [
  ['backend', ['php', 'laravel', 'python', 'flask']],
  ['frontend', ['js', 'jquery', 'tailwind', 'bootstrap', 'react', 'html', 'css']],
  ['data & queues', ['mysql', 'redis', 'sqlite']],
  ['devops', ['docker', 'nginx', 'git', 'github', 'gitlab']],
  ['tools', ['postman', 'ps', 'figma']],
];

const BUILT = {
  cards: [
    { idx: '01', title: 'POD Back Office', color: C.purple,
      items: [
        ['Orders & fulfillment', 'Per-marketplace order screens, imports, supplier exports and a tracking audit.'],
        ['Design team workflow', 'Rule-based designer assignment, design rules per SKU, KPI dashboards.'],
        ['Product customization', 'Decodes storefront personalization data so production gets the exact text & images.'],
        ['Earnings & reporting', 'Fees from fulfillment webhooks, plus order and advertising dashboards.'],
      ],
      stack: [['PHP', '#8892BF'], ['MySQL', '#5FA8E0'], ['jQuery', '#4FA3E0'], ['Nginx', '#2FBF71'], ['Docker', '#2496ED']] },
    { idx: '02', title: 'APIs, Webhooks & CRON', color: C.cyan,
      items: [
        ['Marketplace & supplier integrations', 'Storefront APIs, fulfillment webhooks for status, tracking & fees.'],
        ['Database-driven CRON scheduler', 'Jobs defined in the DB, each in its own process: SLA, ship-by & tracking alerts.'],
        ['Message & email pipelines', 'Buyer messages and email threads pulled into one internal inbox.'],
        ['Internal APIs', 'Endpoints that extensions and tools call to sync orders, tracking & reports.'],
      ],
      stack: [['REST API', '#6DB33F'], ['Webhooks', '#F0F6FC'], ['CRON', '#22D3EE'], ['Shopify GraphQL', '#7AB55C']] },
    { idx: '03', title: 'Automation & Tooling', color: C.cyan,
      items: [
        ['Seller-dashboard extension (MV3)', 'Syncs orders, fills tracking, pulls reports and runs queued jobs — only while the browser is idle.'],
        ['Design rendering pipeline', 'Flask + Redis/RQ driving Photoshop & Illustrator: text swaps, face-aware crops, background removal, AI upscaling → Google Drive.'],
        ['Bulk data-entry tooling', 'Python tools that turn an afternoon of product setup into a single run.'],
      ],
      stack: [['Python', '#FFD43B'], ['Flask', '#F0F6FC'], ['Redis / RQ', '#FF4438'], ['JavaScript', '#F7DF1E'], ['Chrome MV3', '#4285F4'], ['Photoshop scripting', '#31A8FF']] },
    { idx: '04', title: 'How I Work', color: C.purple,
      items: [
        ['Start from the bottleneck', 'The step someone repeats every day beats the feature nobody asked for.'],
        ['Docs alongside the code', 'So the next person — often future me — never has to reverse-engineer it.'],
        ['Small, reversible changes', 'Boring solutions the whole team can maintain.'],
        ['End-to-end ownership', 'Database → API → admin UI → deployment.'],
      ],
      stack: [['Git', '#F05032'], ['Code Review', '#F0F6FC'], ['Documentation', '#8CA1AF']] },
  ],
  note: 'Most of my work lives in **private company repositories**, so this profile is a summary rather than a code archive. Happy to walk through the details in a conversation.',
};

// ===========================================================================
// Do chu & ngat dong
// ===========================================================================

const n = (v) => Math.round(v * 10) / 10;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Mono: 0.6em/ky tu (rong nhat trong cac font mono pho bien).
// Sans: max(Segoe UI, Arial) + 6% du phong cho SF / Noto / DejaVu tren may nguoi xem.
function measure(str, size, { mono = false, bold = false } = {}) {
  if (mono) return [...str].length * size * 0.6;
  const a = METRICS[bold ? 'segoe-600' : 'segoe-400'];
  const b = METRICS[bold ? 'arial-700' : 'arial-400'];
  let wa = 0;
  let wb = 0;
  for (const ch of str) {
    const k = ch.codePointAt(0);
    wa += a[k] ?? 60;
    wb += b[k] ?? 60;
  }
  return (Math.max(wa, wb) / 100) * size * 1.06;
}

// Ngat dong chuoi co danh dau **dam**; tra ve mang dong, moi dong la mang token {t, b, gap}.
function wrap(str, maxW, size, { mono = false } = {}) {
  const words = [];
  for (const seg of str.split(/(\*\*[^*]+\*\*)/)) {
    if (!seg) continue;
    const bold = seg.startsWith('**');
    for (const part of (bold ? seg.slice(2, -2) : seg).split(/(\s+)/)) {
      if (!part) continue;
      words.push(/^\s+$/.test(part) ? null : { t: part, b: bold });
    }
  }

  const lines = [];
  let line = [];
  let width = 0;
  let gap = false;
  for (const word of words) {
    if (word === null) {
      gap = line.length > 0;
      continue;
    }
    const ww = measure(word.t, size, { mono, bold: word.b });
    const sw = gap ? measure(' ', size, { mono }) : 0;
    if (line.length && width + sw + ww > maxW) {
      lines.push(line);
      line = [];
      width = 0;
    } else if (gap) {
      width += sw;
    }
    line.push({ ...word, gap: gap && line.length > 0 });
    width += ww;
    gap = false;
  }
  if (line.length) lines.push(line);
  return lines;
}

function text(lines, { x, y, size, lh = 0, color, strong = C.text, mono = false, weight = 600 }) {
  return lines.map((line, i) => {
    const runs = [];
    for (const tk of line) {
      const s = (tk.gap ? ' ' : '') + tk.t;
      const last = runs[runs.length - 1];
      if (last && last.b === tk.b) last.t += s;
      else runs.push({ t: s, b: tk.b });
    }
    const inner = runs.map((r) => (r.b ? `<tspan fill="${strong}" font-weight="${weight}">${esc(r.t)}</tspan>` : esc(r.t))).join('');
    return `<text class="${mono ? 'm' : 's'}" x="${n(x)}" y="${n(y + i * lh)}" font-size="${size}" fill="${color}">${inner}</text>`;
  }).join('\n');
}

function label(x, y, str, { size = 14, color = C.muted, mono = true, weight, anchor, spacing } = {}) {
  const attrs = [`class="${mono ? 'm' : 's'}"`, `x="${n(x)}"`, `y="${n(y)}"`, `font-size="${size}"`, `fill="${color}"`];
  if (weight) attrs.push(`font-weight="${weight}"`);
  if (anchor) attrs.push(`text-anchor="${anchor}"`);
  if (spacing) attrs.push(`letter-spacing="${spacing}"`);
  return `<text ${attrs.join(' ')}>${esc(str)}</text>`;
}

// ===========================================================================
// Thanh phan giao dien
// ===========================================================================

function card(x, y, w, h, { rx = 18, fill = 'url(#cardFill)', edge = true } = {}) {
  let s = `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${rx}" fill="${fill}" stroke="${C.border}"/>`;
  if (edge) s += `\n<rect x="${n(x + rx + 12)}" y="${n(y - 0.75)}" width="${n(w - 2 * rx - 24)}" height="1.5" fill="url(#edge)"/>`;
  return s;
}

function panel(x, y, w, h, rx = 14) {
  return `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${rx}" fill="${C.panel}" stroke="${C.border}"/>`;
}

function pill(x, y, str, color, { size = 14, h = 28, w, dot = false, anchor = 'start', solid = false } = {}) {
  const pw = w ?? measure(str, size, { mono: true }) + (dot ? 42 : 28);
  const px = anchor === 'end' ? x - pw : anchor === 'middle' ? x - pw / 2 : x;
  const cy = y + h / 2;
  let s = '';
  if (solid) s += `<rect x="${n(px)}" y="${n(y)}" width="${n(pw)}" height="${h}" rx="${h / 2}" fill="#0D1117"/>`;
  s += `<rect x="${n(px)}" y="${n(y)}" width="${n(pw)}" height="${h}" rx="${h / 2}" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-opacity="0.5"/>`;
  if (dot) {
    s += `<circle cx="${n(px + 17)}" cy="${n(cy)}" r="4" fill="${color}"/>`;
    s += label(px + 29, cy + size * 0.35, str, { size, color });
  } else {
    s += label(px + pw / 2, cy + size * 0.35, str, { size, color, anchor: 'middle' });
  }
  return { svg: s, w: pw, x: px };
}

function chip(x, y, str, dot, { size = 15, h = 34 } = {}) {
  const w = measure(str, size, { mono: true }) + 42;
  const cy = y + h / 2;
  const svg = `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${h}" rx="${h / 2}" fill="${C.panel}" stroke="${C.border}"/>`
    + `<circle cx="${n(x + 16)}" cy="${n(cy)}" r="5" fill="${dot}"/>`
    + label(x + 28, cy + size * 0.35, str, { size, color: C.body });
  return { svg, w };
}

// Xep phan tu thanh hang, het cho thi xuong hang.
function flow(list, x, y, maxW, make, { gap = 10, h = 34 } = {}) {
  let cx = x;
  let cy = y;
  const out = [];
  for (const item of list) {
    const { w } = make(0, 0, item);
    if (cx > x && cx - x + w > maxW) {
      cx = x;
      cy += h + gap;
    }
    out.push(make(cx, cy, item).svg);
    cx += w + gap;
  }
  return { svg: out.join('\n'), h: cy - y + h };
}

function badge(x, y, idx, color, s = 46) {
  return `<rect x="${n(x)}" y="${n(y)}" width="${s}" height="${s}" rx="12" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-opacity="0.55"/>`
    + label(x + s / 2, y + s / 2 + 6, idx, { size: 17, color, weight: 700, anchor: 'middle' });
}

// Xep the thanh luoi 2 cot; cac the cung hang cao bang nhau.
function grid2(items, heightOf, render, { y0 = 1, gap = 22 } = {}) {
  const colW = (W - 2 - gap) / 2;
  const out = [];
  let y = y0;
  for (let i = 0; i < items.length; i += 2) {
    const pair = items.slice(i, i + 2);
    const h = Math.max(...pair.map((it) => heightOf(it, colW)));
    pair.forEach((it, j) => out.push(render(it, 1 + j * (colW + gap), y, colW, h)));
    y += h + gap;
  }
  return { svg: out.join('\n'), bottom: y - gap };
}

function doc(h, aria, body, { width = W } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${n(h)}" width="${width}" height="${n(h)}" role="img" aria-label="${esc(aria)}">
  <defs>
    <style>
      .m { font-family: ${MONO}; }
      .s { font-family: ${SANS}; }
      .blink { animation: blink 1.1s steps(1, end) infinite; }
      @keyframes blink { 50% { opacity: 0; } }
    </style>
    <linearGradient id="cardFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#141A22"/>
      <stop offset="1" stop-color="#0D1117"/>
    </linearGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#A855F7" stop-opacity="0"/>
      <stop offset="0.3" stop-color="#A855F7" stop-opacity="0.9"/>
      <stop offset="0.7" stop-color="#22D3EE" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 1L9 5L0 9z" fill="${C.dim}"/>
    </marker>
  </defs>
${body}
</svg>
`;
}

// ===========================================================================
// Thanh tieu de section
// ===========================================================================

function buildSectionBar([, idx, title, file]) {
  const H = 72;
  const titleEnd = 84 + measure(title, 28, { mono: true });
  const labelW = measure(file, 16, { mono: true });
  const x1 = titleEnd + 28;
  const x2 = W - 32 - labelW - 28;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${idx} - ${esc(title)}">
  <defs>
    <style>.m { font-family: ${MONO}; }</style>
    <clipPath id="frame"><rect width="${W}" height="${H}" rx="10"/></clipPath>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#A855F7" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <g clip-path="url(#frame)" class="m">
    <rect width="${W}" height="${H}" fill="#0D1117"/>
    <rect width="5" height="${H}" fill="#A855F7"/>
    <text x="34" y="44" font-size="20" fill="#A855F7" textLength="24" lengthAdjust="spacing">${idx}</text>
    <text x="84" y="46" font-size="28" font-weight="700" fill="#E6EDF3">${esc(title)}</text>
    <circle cx="${n(x1)}" cy="36" r="3" fill="#A855F7"/>
    <rect x="${n(x1)}" y="35.25" width="${n(x2 - x1)}" height="1.5" fill="url(#rule)"/>
    <text x="${W - 32}" y="42" text-anchor="end" font-size="16" fill="#8B949E">${esc(file)}</text>
  </g>

  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="10" fill="none" stroke="#30363D"/>
</svg>
`;
}

// ===========================================================================
// 01 About
// ===========================================================================

function buildAbout() {
  const x = 1;
  const w = W - 2;
  const out = [];

  // --- the profile.yml kieu editor + o thong ke ---
  const aY = 1;
  const aH = 262;
  const bar = 46;
  out.push(card(x, aY, w, aH));
  ['#FF5F57', '#FEBC2E', '#28C840'].forEach((c, i) => out.push(`<circle cx="${x + 26 + i * 22}" cy="${aY + 23}" r="6.5" fill="${c}"/>`));
  out.push(label(x + 104, aY + 28, '~/profile.yml', { size: 15, color: C.gray }));
  out.push(label(x + w - 26, aY + 28, 'yaml', { size: 14, color: C.dim, anchor: 'end' }));
  out.push(`<path d="M${x} ${aY + bar + 0.5}H${x + w}" stroke="${C.line}"/>`);

  const size = 19;
  const lh = 36;
  const y0 = aY + bar + 42;
  const keyX = x + 80;
  const valX = keyX + 10 * size * 0.6;
  ABOUT.yaml.forEach(([k, v], i) => {
    const y = y0 + i * lh;
    out.push(label(x + 52, y, String(i + 1), { size: 16, color: C.dim, anchor: 'end' }));
    out.push(label(keyX, y, `${k}:`, { size, color: C.violet }));
    out.push(label(valX, y, v, { size, color: C.text }));
  });
  const yCursor = y0 + ABOUT.yaml.length * lh;
  out.push(label(x + 52, yCursor, String(ABOUT.yaml.length + 1), { size: 16, color: C.dim, anchor: 'end' }));
  out.push(`<rect class="blink" x="${keyX}" y="${yCursor - 17}" width="11" height="22" fill="${C.purple}"/>`);

  const tw = 172;
  const th = 82;
  const tg = 14;
  const sx = x + w - 26 - (2 * tw + tg);
  const sy = aY + bar + (aH - bar - (2 * th + tg)) / 2;
  ABOUT.stats.forEach(([val, cap, color], i) => {
    const tx = sx + (i % 2) * (tw + tg);
    const ty = sy + Math.floor(i / 2) * (th + tg);
    out.push(panel(tx, ty, tw, th, 12));
    out.push(label(tx + 18, ty + 40, val, { size: 28, color, weight: 700 }));
    out.push(label(tx + 18, ty + 64, cap, { size: 14, color: C.gray }));
  });

  // --- danh sach diem noi bat ---
  const bY = aY + aH + 20;
  const pillW = 150;
  const tx = x + 26 + pillW + 28;
  const maxW = w - (tx - x) - 30;
  const rowSize = 19;
  const rowLh = 31;
  const pad = 18;
  const rows = [];
  let cy = bY + 8;
  ABOUT.rows.forEach(([tag, str, color], i) => {
    const lines = wrap(str, maxW, rowSize);
    if (i > 0) rows.push(`<path d="M${x + 26} ${n(cy) + 0.5}H${x + w - 26}" stroke="${C.line}"/>`);
    const base = cy + pad + 22;
    rows.push(pill(x + 26, base - 20, tag, color, { size: 14, h: 30, w: pillW }).svg);
    rows.push(text(lines, { x: tx, y: base, size: rowSize, lh: rowLh, color: C.muted }));
    cy += pad * 2 + lines.length * rowLh;
  });
  const bH = cy + 8 - bY;
  out.push(card(x, bY, w, bH), ...rows);

  return doc(bY + bH + 1, 'About me: Full-stack Developer (Backend & Automation) in Ho Chi Minh City — 1+ year building a PHP/MySQL back office, integrations and automation for POD e-commerce.', out.join('\n'));
}

// ===========================================================================
// 02 Services
// ===========================================================================

function buildServices() {
  const pad = 30;
  const bs = 46;
  const size = 19;
  const lh = 30;
  const heightOf = (it, w) => {
    const lines = wrap(it.body, w - 2 * pad, size);
    return pad + bs + 38 + (lines.length - 1) * lh + 28 + 28 + pad;
  };
  const render = (it, x, y, w, h) => {
    const lines = wrap(it.body, w - 2 * pad, size);
    const tags = flow(it.tags, x + pad, y + h - pad - 28, w - 2 * pad, (tx, ty, t) => pill(tx, ty, t, it.color), { gap: 8, h: 28 });
    return [
      card(x, y, w, h),
      badge(x + pad, y + pad, it.idx, it.color, bs),
      label(x + pad + bs + 18, y + pad + 31, it.title, { size: 22, color: C.text, weight: 700 }),
      text(lines, { x: x + pad, y: y + pad + bs + 38, size, lh, color: C.muted }),
      tags.svg,
    ].join('\n');
  };
  const g = grid2(SERVICES, heightOf, render);
  return doc(g.bottom + 1, 'What I can build: e-commerce back offices, integrations & scheduled jobs, automation & browser extensions, customer portals live on the web.', g.svg);
}

// ===========================================================================
// 03 Featured project
// ===========================================================================

function buildFeatured() {
  const F = FEATURED;
  const x = 1;
  const w = W - 2;
  const pad = 40;
  const ix = x + pad;
  const iw = w - 2 * pad;
  const out = [];
  const top = 1;

  out.push(label(ix, top + 52, '// featured project', { size: 15, color: C.violet, spacing: 1 }));
  out.push(pill(ix + iw, top + 32, 'live in production', C.green, { dot: true, anchor: 'end', size: 14, h: 30 }).svg);
  out.push(label(ix, top + 108, F.title, { size: 36, color: C.text, weight: 700 }));
  const sub = wrap(F.subtitle, iw, 20);
  out.push(text(sub, { x: ix, y: top + 148, size: 20, lh: 32, color: C.muted }));
  let cy = top + 148 + (sub.length - 1) * 32 + 34;

  // o so lieu
  const tg = 16;
  const tw = (iw - tg * (F.stats.length - 1)) / F.stats.length;
  const th = 96;
  F.stats.forEach(([cap, val, color], i) => {
    const tx = ix + i * (tw + tg);
    out.push(panel(tx, cy, tw, th));
    out.push(label(tx + 20, cy + 36, cap, { size: 14, color: C.gray }));
    out.push(label(tx + 20, cy + 74, val, { size: 24, color, weight: 700 }));
  });
  cy += th + 20;

  // luoi tinh nang 3 cot
  const fg = 16;
  const fw = (iw - fg * 2) / 3;
  const itemX = 44;
  const itemW = fw - itemX - 22;
  const itemLh = 27;
  const feats = F.features.map(([tag, title, color, items]) => ({
    tag, title, color, items: items.map((it) => wrap(it, itemW, 17)),
  }));
  for (let i = 0; i < feats.length; i += 3) {
    const row = feats.slice(i, i + 3);
    const lineCount = (f) => f.items.reduce((a, l) => a + l.length, 0);
    const fh = Math.max(...row.map((f) => 100 + (lineCount(f) - 1) * itemLh + 26));
    row.forEach((f, j) => {
      const fx = ix + j * (fw + fg);
      out.push(panel(fx, cy, fw, fh));
      out.push(label(fx + 24, cy + 36, f.tag, { size: 13, color: f.color, spacing: 0.5 }));
      out.push(label(fx + 24, cy + 66, f.title, { size: 20, color: C.text, weight: 600, mono: false }));
      let ly = cy + 100;
      for (const lines of f.items) {
        out.push(label(fx + 24, ly, '›', { size: 18, color: f.color, weight: 700 }));
        out.push(text(lines, { x: fx + itemX, y: ly, size: 17, lh: itemLh, color: C.muted }));
        ly += lines.length * itemLh;
      }
    });
    cy += fh + fg;
  }
  cy += 4;

  // so do vong doi hoa don
  const lcH = 214;
  out.push(panel(ix, cy, iw, lcH));
  out.push(label(ix + 24, cy + 36, '// invoice lifecycle', { size: 14, color: C.gray }));
  const mid = cy + 48 + 71;
  const ps = 16;
  const ph = 38;
  const pw = (s) => measure(s, ps, { mono: true }) + 44;
  const arrow = 84;
  const fork = 140;
  const endW = 140;
  const mainW = F.lifecycle.main.reduce((a, [s]) => a + pw(s), 0) + arrow * (F.lifecycle.main.length - 1);
  let px = ix + (iw - (mainW + fork + endW)) / 2;
  const boxes = F.lifecycle.main.map(([s, c]) => {
    const b = { x: px, w: pw(s), s, c };
    px += b.w + arrow;
    return b;
  });
  const last = boxes[boxes.length - 1];
  const sx = last.x + last.w + 8;
  const endX = last.x + last.w + fork;
  const ends = F.lifecycle.ends.map(([s, c], j) => ({ s, c, x: endX, w: endW, cy: mid + (j - 1) * 52 }));
  const curve = (ty) => (ty === mid
    ? `M${n(sx)} ${n(mid)}H${n(endX - 10)}`
    : `M${n(sx)} ${n(mid)}C${n(sx + fork * 0.5)} ${n(mid)} ${n(endX - fork * 0.55)} ${n(ty)} ${n(endX - 10)} ${n(ty)}`);

  const paths = [];
  boxes.slice(0, -1).forEach((b, i) => paths.push(`M${n(b.x + b.w + 8)} ${n(mid)}H${n(boxes[i + 1].x - 10)}`));
  ends.forEach((e) => paths.push(curve(e.cy)));
  out.push(`<g fill="none" stroke="${C.dim}" stroke-width="1.6">${paths.map((d) => `<path d="${d}" marker-end="url(#arrow)"/>`).join('')}</g>`);

  // cham sang chay Draft -> Paid (nam duoi cac pill)
  const paid = ends[0];
  const flowPath = `M${n(boxes[0].x + boxes[0].w / 2)} ${n(mid)}H${n(sx)}C${n(sx + fork * 0.5)} ${n(mid)} ${n(endX - fork * 0.55)} ${n(paid.cy)} ${n(endX - 10)} ${n(paid.cy)}H${n(endX + endW / 2)}`;
  out.push(`<circle r="4.5" fill="${C.cyan}"><animateMotion dur="3.2s" repeatCount="indefinite" path="${flowPath}"/></circle>`);

  boxes.forEach((b) => out.push(pill(b.x, mid - ph / 2, b.s, b.c, { size: ps, h: ph, w: b.w, solid: true }).svg));
  ends.forEach((e) => out.push(pill(e.x, e.cy - ph / 2, e.s, e.c, { size: ps, h: ph, w: e.w, solid: true }).svg));
  cy += lcH + 24;

  // chip cong nghe
  const chips = flow(F.stack, ix, cy, iw, (cx2, cy2, [s, c]) => chip(cx2, cy2, s, c, { size: 14, h: 32 }), { gap: 8, h: 32 });
  out.push(chips.svg);
  cy += chips.h + pad;

  out.unshift(card(x, top, w, cy - top));
  return doc(cy + 1, 'Featured project: B2B website & billing platform — built solo from empty repo to production in about a week; 190 tests, PHPStan level 5; Laravel, Filament, MySQL, Resend.', out.join('\n'));
}

// ===========================================================================
// 04 Tech stack
// ===========================================================================

function iconSvg(name, x, y, s) {
  const prefix = `ic-${name}-`;
  return fs.readFileSync(path.join(ICON_DIR, `${name}.svg`), 'utf8').trim()
    // tien to id de gradient cua cac icon khong de len nhau
    .replace(/\bid="([^"]+)"/g, `id="${prefix}$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${prefix}$1)`)
    .replace(/href="#([^"]+)"/g, `href="#${prefix}$1"`)
    .replace(/^<svg\b([^>]*)>/, (m, attrs) => `<svg${attrs.replace(/\s(width|height|x|y)="[^"]*"/g, '')} x="${n(x)}" y="${n(y)}" width="${s}" height="${s}">`);
}

function buildStack() {
  const x = 1;
  const w = W - 2;
  const rowH = 92;
  const s = 60;
  const gap = 14;
  const out = [];
  const top = 1;
  let cy = top + 10;
  STACK.forEach(([name, icons], i) => {
    if (i > 0) out.push(`<path d="M${x + 26} ${n(cy) + 0.5}H${x + w - 26}" stroke="${C.line}"/>`);
    const mid = cy + rowH / 2;
    const color = i % 2 ? C.cyan : C.purple;
    out.push(`<circle cx="${x + 40}" cy="${n(mid - 7)}" r="4" fill="${color}"/>`);
    out.push(label(x + 56, mid - 1, name, { size: 19, color: C.text, weight: 700 }));
    out.push(label(x + 56, mid + 22, `${icons.length} tools`, { size: 13, color: C.dim }));
    icons.forEach((ic, j) => out.push(iconSvg(ic, x + 250 + j * (s + gap), mid - s / 2, s)));
    cy += rowH;
  });
  cy += 10;
  out.unshift(card(x, top, w, cy - top));
  const aria = `Tech stack — ${STACK.map(([k, v]) => `${k}: ${v.join(', ')}`).join('; ')}`;
  return doc(cy + 1, aria, out.join('\n'));
}

// ===========================================================================
// 05 What I've built
// ===========================================================================

function buildBuilt() {
  const pad = 30;
  const bs = 46;
  const leadSize = 19;
  const descSize = 17;
  const leadLh = 28;
  const descLh = 27;
  const itemGap = 16;

  const layout = (c, w) => {
    const maxW = w - 2 * pad - 20;
    const items = c.items.map(([lead, desc]) => ({ lead: wrap(`**${lead}**`, maxW, leadSize), desc: wrap(desc, maxW, descSize) }));
    let cursor = bs + 38 + pad;
    for (const it of items) {
      it.y = cursor;
      cursor += it.lead.length * leadLh + it.desc.length * descLh + itemGap;
    }
    const contentBottom = cursor - itemGap - descLh + 10;
    const chips = flow(c.stack, 0, 0, w - 2 * pad, (cx, cy, [s, col]) => chip(cx, cy, s, col, { size: 14, h: 32 }), { gap: 8, h: 32 });
    return { items, h: contentBottom + 26 + chips.h + pad, chipsH: chips.h };
  };

  const render = (c, x, y, w, h) => {
    const L = layout(c, w);
    const out = [card(x, y, w, h), badge(x + pad, y + pad, c.idx, c.color, bs),
      label(x + pad + bs + 18, y + pad + 31, c.title, { size: 22, color: C.text, weight: 700 })];
    for (const it of L.items) {
      out.push(`<rect x="${x + pad}" y="${n(y + it.y - 12)}" width="8" height="8" rx="2" fill="${c.color}"/>`);
      out.push(text(it.lead, { x: x + pad + 20, y: y + it.y, size: leadSize, lh: leadLh, color: C.text }));
      out.push(text(it.desc, { x: x + pad + 20, y: y + it.y + it.lead.length * leadLh, size: descSize, lh: descLh, color: C.muted }));
    }
    const chips = flow(c.stack, x + pad, y + h - pad - L.chipsH, w - 2 * pad, (cx, cy, [s, col]) => chip(cx, cy, s, col, { size: 14, h: 32 }), { gap: 8, h: 32 });
    out.push(chips.svg);
    return out.join('\n');
  };

  const g = grid2(BUILT.cards, (c, w) => layout(c, w).h, render);

  // ghi chu cuoi
  const x = 1;
  const w = W - 2;
  const ny = g.bottom + 22;
  const noteLines = wrap(BUILT.note, w - 96 - 30, 19);
  const nh = 26 * 2 + noteLines.length * 30 - 8;
  const note = [
    `<rect x="${x}" y="${n(ny)}" width="${w}" height="${n(nh)}" rx="14" fill="#0C1B2E" stroke="#1F6FEB" stroke-opacity="0.55"/>`,
    `<circle cx="${x + 44}" cy="${n(ny + nh / 2)}" r="15" fill="none" stroke="${C.blue}" stroke-width="1.8"/>`,
    label(x + 44, ny + nh / 2 + 6, 'i', { size: 17, color: C.blue, weight: 700, anchor: 'middle' }),
    text(noteLines, { x: x + 80, y: ny + 26 + 20, size: 19, lh: 30, color: C.muted, strong: C.text }),
  ].join('\n');

  return doc(ny + nh + 1, "What I've built: POD back office, APIs/webhooks/CRON, automation & tooling, and how I work. Most work lives in private company repositories.", `${g.svg}\n${note}`);
}

// ===========================================================================
// Main
// ===========================================================================

async function fetchIcons() {
  fs.mkdirSync(ICON_DIR, { recursive: true });
  const names = [...new Set(STACK.flatMap(([, list]) => list))];
  for (const name of names) {
    const raw = await (await fetch(`https://skillicons.dev/icons?i=${name}`)).text();
    const m = raw.match(/<g transform="translate\(0, 0\)">\s*(<svg[\s\S]*<\/svg>)\s*<\/g>/);
    if (!m) throw new Error(`Khong tach duoc icon: ${name}`);
    fs.writeFileSync(path.join(ICON_DIR, `${name}.svg`), `${m[1].trim()}\n`);
    console.log(`icons/${name}.svg`);
  }
}

function write(rel, svg) {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, svg);
  console.log(`${rel.padEnd(32)} ${(svg.length / 1024).toFixed(1)} KB`);
}

async function main() {
  if (process.argv.includes('--fetch-icons')) await fetchIcons();
  for (const section of SECTIONS) write(`assets/sections/${section[0]}.svg`, buildSectionBar(section));
  write('assets/content/about.svg', buildAbout());
  write('assets/content/services.svg', buildServices());
  write('assets/content/featured.svg', buildFeatured());
  write('assets/content/stack.svg', buildStack());
  write('assets/content/built.svg', buildBuilt());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
