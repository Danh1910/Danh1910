<div align="center">
  <img src="./assets/header.svg" width="100%" alt="Xuan Danh - Full-stack Developer, Backend &amp; Automation" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1200&color=A855F7&center=true&vCenter=true&width=620&height=45&lines=Full-stack+Developer+with+1%2B+year+of+experience;Backend+%26+Automation+Engineer;PHP+%C2%B7+Python+%C2%B7+JavaScript+%C2%B7+Java;I+build+tools+that+kill+manual+work" alt="typing" />
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
focus:     internal systems & automation for print-on-demand e-commerce
```

- 🏢 &nbsp;**1+ year of professional experience** building internal systems and automation tools for a print-on-demand (POD) e-commerce team.
- ⚙️ &nbsp;Day-to-day I ship **PHP/MySQL services running in Docker**, **Python workers** for long-running jobs, and **browser extensions** that move order data between marketplaces and internal apps.
- 📊 &nbsp;Comfortable across the whole slice: database design and stored procedures → business logic → admin dashboards and BI reporting.
- 🤖 &nbsp;I enjoy the unglamorous win: finding a manual, repeated task and turning it into a tool nobody has to think about again.
- 🚀 &nbsp;Most recently, took a **B2B website + billing platform** from an empty repository to **live production** on my own in about a week — see *Featured Project* below.
- 📱 &nbsp;Background in mobile and desktop apps too — **Java/Spring**, **Flutter**, **Kotlin**, **C#**.
- 🌱 &nbsp;Currently sharpening: system design, query performance tuning, and cleaner service boundaries.

<br/>

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="right" width="170"><b>Backend</b></td>
    <td><img src="https://skillicons.dev/icons?i=php,laravel,python,java,spring,cs" alt="backend" /></td>
  </tr>
  <tr>
    <td align="right"><b>Frontend</b></td>
    <td><img src="https://skillicons.dev/icons?i=js,react,tailwind,bootstrap,html,css" alt="frontend" /></td>
  </tr>
  <tr>
    <td align="right"><b>Mobile</b></td>
    <td><img src="https://skillicons.dev/icons?i=flutter,dart,kotlin" alt="mobile" /></td>
  </tr>
  <tr>
    <td align="right"><b>Data &amp; Cache</b></td>
    <td><img src="https://skillicons.dev/icons?i=mysql,sqlite,redis,firebase" alt="data" /></td>
  </tr>
  <tr>
    <td align="right"><b>DevOps &amp; Cloud</b></td>
    <td><img src="https://skillicons.dev/icons?i=docker,nginx,gcp,git,github,gitlab" alt="devops" /></td>
  </tr>
  <tr>
    <td align="right"><b>Tools</b></td>
    <td><img src="https://skillicons.dev/icons?i=postman,figma,ps,maven,gradle" alt="tools" /></td>
  </tr>
</table>

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

## 💼 What I've Built

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>⚡ Automation &amp; Internal Tooling</h3>
      <ul>
        <li><b>Marketplace order-sync extensions</b> — Manifest V3 browser extensions that pull seller orders into an internal fulfillment system and write tracking numbers back, replacing a daily copy-paste routine for the operations team.</li>
        <li><b>Design rendering pipeline</b> — turned a manual Photoshop export workflow into a background service: scripted PSD export driven by a job queue, with finished artwork delivered straight to cloud storage.</li>
        <li><b>Bulk data-entry tooling</b> — Python tools that collapse an afternoon of repetitive product setup into a single run, containerized so anyone on the team can use them.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
        <img src="https://img.shields.io/badge/Chrome%20MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white" />
        <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" />
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>🗄️ Backend &amp; Data</h3>
      <ul>
        <li><b>Internal admin platform</b> — order management, multi-stage fulfillment tracking and operational reporting, built on PHP/MySQL and deployed with Docker behind Nginx.</li>
        <li><b>BI &amp; reporting</b> — dashboards and alerting over growing order and advertising data: schema design, migrations, stored procedures and query tuning.</li>
        <li><b>Integrations &amp; scheduled jobs</b> — marketplace APIs, webhooks, spreadsheet/cloud-storage automation, and background workers that keep everything in sync without anyone watching.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white" />
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" />
        <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white" />
        <img src="https://img.shields.io/badge/REST%20API-6DB33F?style=flat-square&logo=fastapi&logoColor=white" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🌐 Web &amp; Mobile</h3>
      <ul>
        <li><b>E-commerce mobile app</b> — Flutter application where customers browse and order products while staff manage inventory from the same codebase.</li>
        <li><b>Food-ordering Android app</b> — menu browsing, checkout and delivery status tracking, built with Java.</li>
        <li><b>Personal portfolio site</b> — React + Tailwind front end with a small Express backend, deployed on Vercel.</li>
      </ul>
      <p>
        <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" />
        <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
        <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
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
