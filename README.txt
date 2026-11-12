WALHACK — Website Review Package
================================

Homepage and navigation
-----------------------
- index.html: Hero, About & Team, and four category cards only.
- The four cards open dedicated category pages; the homepage is not a long scrolling archive.
- Contact opens contact.html, a standalone contact directory.
- style.css / script.js: violet/cyan visual identity, responsive layout, EN/AR interface strings, navigation, and interactions.
- detail.css: styling for standalone project and achievement details.

Category pages
--------------
- research/index.html: all research reports and investigations.
- security-labs/index.html: practical security labs and experiments.
- projects/index.html: software projects and tools, including CTF-BRAIN and AI-RedTeam-Agent.
- achievements/index.html: competition milestones and achievements.

Individual detail pages remain in their category folders. The Reverse Engineering Lab detail is available under security-labs/.

Team profiles
-------------
- WALHACK: Software Analyst & Reverse Engineer. Expertise includes PE/ELF analysis, application reverse engineering, custom analysis tools, fuzzing, vulnerability analysis, ASLR/DEP/CFG bypass, exploit development, Buffer Overflow, and Use-After-Free. Status: ACTIVE • RESEARCHING.
- UserM: Reverse Engineering, Web Application Pentesting, Exploit Development, Security Research, and AI-Assisted Security Tool Development.

Contact
-------
- Email: root9825323@proton.me
- Telegram: https://t.me/walhack1337
- Discord: walhack1337 (copy control; no unverified profile URL is assumed).

Brand identity
--------------
- Main colors: near-black background, neon violet, light violet, and electric cyan accents.
- The W mark is a single wide, sharp, dimensional violet letter with a restrained intermittent glitch effect, shared by the main, category, contact, and supported detail headers/footers.
- Contact buttons use the same wide violet capsule treatment as the primary Hero button, with cyan hover emphasis.

Adding future work
------------------
1. Add a card to the relevant category index page.
2. Add its standalone detail page in the same category folder.
3. Use the existing card classes and relative links so GitHub Pages paths remain valid.
4. Add any new bilingual UI strings to the inline dictionary in script.js and translations.json.

Preserved content and assets
----------------------------
- Existing research report text and current project/achievement detail content are retained.
- assets/hero-character.png is retained without modification.
- The supplied package references seven report image files that are not included in the source ZIP: imag-8.png, imag-7.png, imag-3.png, imag-1.png, imag-5.png, imag-2.png, and ima-6.png. Their references were preserved; the files need to be supplied separately if those report images are required.

Preview and publishing
----------------------
Extract the ZIP and open index.html in a modern browser for local review. Google Fonts and some original report pages may require internet access. This package does not publish or overwrite GitHub Pages; upload it to the repository only after review and approval.
