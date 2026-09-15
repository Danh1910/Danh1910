<div align="center">
  <img src="./assets/header.svg" width="100%" alt="Xuan Danh - Full-stack Developer, Backend &amp; Automation" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1200&color=A855F7&center=true&vCenter=true&width=620&height=45&lines=Full-stack+Developer+with+1%2B+year+of+experience;Backend+%26+Automation+Engineer;PHP+%C2%B7+MySQL+%C2%B7+Python+%C2%B7+JavaScript;Orders,+designs+%26+integrations+for+POD;I+build+tools+that+kill+manual+work" alt="typing" />
</div>

<div align="center">
  <a href="https://danh-portfolio-xi.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/danh-tr%E1%BA%A7n-a12784333/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://www.facebook.com/profile.php?id=100009293056146"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>
  <img src="https://img.shields.io/badge/Ho%20Chi%20Minh%20City-VN-E11D48?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Location" />
  <img src="https://komarev.com/ghpvc/?username=Danh1910&style=for-the-badge&color=A855F7&label=PROFILE+VIEWS" alt="Profile views" />
</div>

<br/>

## 👨‍💻 About Me

```yaml
name:      Xuan Danh (Danh Tran)
role:      Full-stack Developer — leaning Backend & Automation
based_in:  Ho Chi Minh City, Vietnam
focus:     web back offices, APIs & automation for print-on-demand e-commerce
```

- 🏢 &nbsp;**1+ year of professional experience** building and running the web back office of a print-on-demand (POD) e-commerce team.
- 🗂️ &nbsp;Day-to-day I **maintain and extend a large PHP/MySQL system** (hundreds of admin pages and database tables, 1,200+ of my own commits) that runs orders, customers, designs, product customization and fulfillment across several marketplaces.
- 🔌 &nbsp;A big part of the job is the glue: **marketplace and supplier APIs, webhooks, CRON-driven jobs** and browser extensions that keep orders, tracking and designs in sync without anyone watching.
- 📊 &nbsp;Comfortable across the whole slice: database design and stored procedures → business logic → admin dashboards and BI reporting.
- 🤖 &nbsp;I enjoy the unglamorous win: finding a manual, repeated task and turning it into a tool nobody has to think about again.
- 🚀 &nbsp;Most recently, took a **B2B website + billing platform** from an empty repository to **live production** on my own in about a week — see *Featured Project* below.
- 🌱 &nbsp;Currently sharpening: system design, query performance tuning, and cleaner service boundaries.

<br/>

## 🎯 What I Can Build for You

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>🗂️ E-commerce back offices</h4>
      Orders, customers, designs and product customization in one place — with roles for each team (sellers, designers, fulfillment), dashboards and reports.
    </td>
    <td width="50%" valign="top">
      <h4>🔌 Integrations &amp; scheduled jobs</h4>
      Connecting marketplaces, suppliers and internal tools through APIs and webhooks, plus CRON jobs and alerts that run on their own — syncs, deadlines, missing tracking.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>⚡ Automation &amp; browser extensions</h4>
      Extensions that work inside seller dashboards, and background pipelines that turn hours of repetitive design or data-entry work into a single click.
    </td>
    <td width="50%" valign="top">
      <h4>🚀 Customer portals, live on the web</h4>
      Sign-up, invoices with PDF and email delivery, payment tracking — built and taken all the way to production: hosting, domain, email and safe deployments.
    </td>
  </tr>
</table>

<div align="center">
  <a href="https://www.linkedin.com/in/danh-tr%E1%BA%A7n-a12784333/"><img src="https://img.shields.io/badge/Have%20a%20project%20in%20mind%3F%20Let%27s%20talk-A855F7?style=for-the-badge&logo=linkedin&logoColor=white" alt="Have a project in mind? Let's talk" /></a>
</div>

<br/>

## 🚀 Featured Project

<table>
  <tr>
    <td valign="top">
      <h3>🧾 B2B service website &amp; billing platform — from empty repo to live customers</h3>
      <p>
        The biggest thing I have shipped so far. A US-based company providing e-commerce operations services needed a real company website and a way to bill its clients every month. I owned it end to end as the only developer — requirements, data model, admin panel, customer portal, email delivery and production deployment — and took it <b>from the first commit to a live production site in about a week</b>, open for customers to sign up and use.
      </p>
      <ul>
        <li><b>Three surfaces, one codebase</b> — a bilingual (VI/EN) public website, a customer portal with a dashboard and invoice history, and an admin panel for customers, invoices, payment channels and service subscriptions.</li>
        <li><b>Billing workflow</b> — invoice lifecycle <code>Draft → Sent → Pending verification → Paid / Rejected / Void</code>. Every status change is recorded, issued invoices are locked, and financial records are never deleted — only voided with a reason.</li>
        <li><b>Invoice delivery</b> — issuing an invoice queues a job that emails the client with the PDF invoice attached, sent through Resend on a managed queue. The job is idempotent, so retries and at-least-once delivery never send the same invoice twice.</li>
        <li><b>Security &amp; auditability</b> — per-customer data isolation enforced by authorization policies, click-wrap Terms of Service stored with timestamp and IP, login throttling, and login / activity / email logs for resolving disputes.</li>
        <li><b>Production setup</b> — separate demo and production environments with isolated databases, branch-based auto-deploys, custom domain and DNS, SPF/DKIM-authenticated email, and UTC storage with local-time display.</li>
        <li><b>Quality bar</b> — 190 automated tests and static analysis (PHPStan level 5) that run with one command, plus deployment runbooks and a code-reading guide for whoever maintains it next.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/PHP%208.5-777BB4?style=flat-square&logo=php&logoColor=white" />
        <img src="https://img.shields.io/badge/Laravel%2013-FF2D20?style=flat-square&logo=laravel&logoColor=white" />
        <img src="https://img.shields.io/badge/Filament-FDAE4B?style=flat-square" />
        <img src="https://img.shields.io/badge/Tailwind%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
        <img src="https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=black" />
        <img src="https://img.shields.io/badge/MySQL%208.4-4479A1?style=flat-square&logo=mysql&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
        <img src="https://img.shields.io/badge/Laravel%20Cloud-FF2D20?style=flat-square&logo=laravel&logoColor=white" />
        <img src="https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white" />
      </p>
    </td>
  </tr>
</table>

<br/>

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="right" width="170"><b>Backend</b></td>
    <td><img src="https://skillicons.dev/icons?i=php,laravel,python,flask" alt="backend" /></td>
  </tr>
  <tr>
    <td align="right"><b>Frontend</b></td>
    <td><img src="https://skillicons.dev/icons?i=js,jquery,tailwind,bootstrap,react,html,css" alt="frontend" /></td>
  </tr>
  <tr>
    <td align="right"><b>Data &amp; Queues</b></td>
    <td><img src="https://skillicons.dev/icons?i=mysql,redis,sqlite" alt="data" /></td>
  </tr>
  <tr>
    <td align="right"><b>DevOps</b></td>
    <td><img src="https://skillicons.dev/icons?i=docker,nginx,git,github,gitlab" alt="devops" /></td>
  </tr>
  <tr>
    <td align="right"><b>Tools</b></td>
    <td><img src="https://skillicons.dev/icons?i=postman,ps,figma" alt="tools" /></td>
  </tr>
</table>

<br/>

## 💼 What I've Built

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🗄️ POD Back Office</h3>
      <ul>
        <li><b>Orders &amp; fulfillment</b> — per-marketplace order screens, order imports, supplier exports, and a tracking audit that flags orders whose tracking is missing or does not match.</li>
        <li><b>Design team workflow</b> — design requests, rule-based automatic assignment of designers by type of work, design rules per SKU, and KPI dashboards for the design team.</li>
        <li><b>Product customization</b> — decoding customers' personalization data from storefront orders so production gets exactly the right text and images.</li>
        <li><b>Earnings &amp; reporting</b> — pulling fee data from fulfillment webhooks into earnings totals, plus dashboards over orders and advertising data.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" />
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white" />
        <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>🔌 APIs, Webhooks &amp; CRON</h3>
      <ul>
        <li><b>Marketplace &amp; supplier integrations</b> — storefront APIs and webhooks, fulfillment-partner webhooks for order status, tracking and fees, and a tracking service that keeps shipments up to date.</li>
        <li><b>Database-driven CRON scheduler</b> — jobs defined in the database and launched by a dispatcher, each in its own process: SLA and ship-by alerts, missing-tracking deadlines, automatic designer assignment.</li>
        <li><b>Message &amp; email pipelines</b> — pulling marketplace buyer messages and email threads into the internal system so the team answers from one place.</li>
        <li><b>Internal APIs</b> — the endpoints that browser extensions and tools call to sync orders, tracking, reports and listings.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/REST%20API-6DB33F?style=flat-square&logo=fastapi&logoColor=white" />
        <img src="https://img.shields.io/badge/Webhooks-181717?style=flat-square&logo=webauthn&logoColor=white" />
        <img src="https://img.shields.io/badge/CRON-4B5563?style=flat-square&logo=clockify&logoColor=white" />
        <img src="https://img.shields.io/badge/Shopify%20GraphQL-7AB55C?style=flat-square&logo=shopify&logoColor=white" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>⚡ Automation &amp; Tooling</h3>
      <ul>
        <li><b>Seller-dashboard browser extension</b> — Manifest V3 extension that syncs orders across paginated lists, fills in tracking numbers, pulls account-health, payment and brand-analytics reports, and runs jobs queued from the internal dashboard — only while nobody is using the browser.</li>
        <li><b>Personalized design rendering pipeline</b> — a Flask API with Redis/RQ queues that drives Photoshop and Illustrator templates: swaps text (per-character colors, warped arcs), drops in customer photos with face-aware cropping, background removal and AI upscaling, then uploads print files to Google Drive and reports status back.</li>
        <li><b>Bulk data-entry tooling</b> — Python tools that collapse an afternoon of repetitive product setup into a single run.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white" />
        <img src="https://img.shields.io/badge/Redis%20%2F%20RQ-DC382D?style=flat-square&logo=redis&logoColor=white" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
        <img src="https://img.shields.io/badge/Chrome%20MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white" />
        <img src="https://img.shields.io/badge/Photoshop%20scripting-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>🧩 How I Work</h3>
      <ul>
        <li>Start from the actual bottleneck — the step someone repeats every day is usually worth more than the feature nobody asked for.</li>
        <li>Write the documentation alongside the code, so the next person (often future me) does not have to reverse-engineer it.</li>
        <li>Keep changes small and reversible; prefer a boring solution that the whole team can maintain.</li>
        <li>Comfortable owning a feature end to end: database → API → admin UI → deployment.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
        <img src="https://img.shields.io/badge/Code%20Review-181717?style=flat-square&logo=github&logoColor=white" />
        <img src="https://img.shields.io/badge/Documentation-0A66C2?style=flat-square&logo=readthedocs&logoColor=white" />
      </p>
    </td>
  </tr>
</table>

> 💡 &nbsp;Most of my work lives in private company repositories, so this profile is a summary rather than a code archive. Happy to walk through the details in a conversation.

<br/>

## 📈 Activity

<div align="center">
  <img src="https://terminal-identity-opal.vercel.app/api?name=Xuan%20Danh&username=Danh1910&role=backend%20%26%20automation&tagline=I%20build%20tools%20that%20kill%20manual%20work&theme=amber/matcha&pattern=grid&showContribs=on&contribTheme=capybara_onsen&contribRange=16w&contribMode=focus&showLangs=on&langCount=5&stats=repos&width=980" width="100%" alt="Xuan Danh - activity card: 1.3k contributions in the last 16 weeks, top languages" />
</div>

<br/>

## 🤝 Let's Connect

<div align="center">
  <a href="https://danh-portfolio-xi.vercel.app/"><img src="https://img.shields.io/badge/See%20my%20portfolio-A855F7?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/danh-tr%E1%BA%A7n-a12784333/"><img src="https://img.shields.io/badge/Say%20hi%20on%20LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</div>

<img src="./assets/footer.svg" width="100%" alt="" />
