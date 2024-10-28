<img src="https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI/blob/main/UK-Structure.png" />

## File-Structure

```
.
├── .github/                     # GitHub specific configurations
│   ├── ISSUE_TEMPLATE/          # Templates for GitHub issues
│   │   ├── bug-report.yml       # Bug report template
│   │   ├── config.yml           # Issue template configurations
│   │   └── feature_request.yml  # Feature request template
│   │
│   ├── workflows/             # GitHub Actions workflows
│   │   ├── code-quality.yml   # Code quality checks
│   │   ├── greetings.yml      # Automated greeting workflow
│   ├── FUNDING.yml            # Repository funding configuration
│   └── semantic.yml           # Semantic versioning checks
│
├── .idea/                         # IntelliJ IDEA configuration files
│   ├── inspectionProfiles/        # IDE inspection profiles
│   │   └── Project_Default.xml    # Default project inspection settings
│   ├── .gitignore                # Git ignore rules for IDE
│   ├── modules.xml               # Project modules configuration
│   ├── uttarakhand-culture.iml   # Project-specific IDE settings
│   └── vcs.xml                    # Version control settings
│
├── Design/                   # Design assets and documentation
│   └── Home-Page.pdf        # Homepage design specifications
│
├── drizzle/                 # Drizzle database configurations
│   ├── meta/
│   │   ├── 0000_snapshot.json       
│   │   ├── 0001_snapshot.json
│   │   ├── 0002_snapshot.json
│   │   ├── 0003_snapshot.json
│   │   └── _journal.json
│   │
│   ├── 0000_talented_lady_ursula.sql
│   ├── 0001_talented_lady_ursula.sql
│   ├── 0002_talented_lady_ursula.sql
│   └── 0003_talented_lady_ursula.sql
│
├── public/
│   ├── Ghee_Sankranti.jpeg
│   ├── Nanda-Sunanda.webp
│   ├── SEOIMAGE.webp
│   ├── Srinagar.webp
│   ├── about1.png
│   ├── about2.png
│   ├── arrow_drop_down_24dp_E8EAE8.png
│   ├── bagwal.jpg
│   ├── bhotiaWoman.webp
│   ├── chat.svg
│   ├── default-avatar.png
│   ├── eye-hide.png
│   ├── eye.png
│   ├── goriGanga.webp
│   ├── heroImage.png
│   ├── heroMapImage.webp
│   ├── icons8-twitter-48 (1).png
│   ├── languageHeroImage.webp
│   ├── map-uttarakhand.svg
│   ├── mapClick.svg
│   ├── mapUk.svg
│   ├── mountain.svg
│   ├── notify-early-banner.jpg
│   └── roopkund.jpg
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx   
│   │   ├── api/auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   └── route.ts
│   │   │   ├── register
│   │   │   │   └── route.ts
│   │   │   ├── resend-otp
│   │   │   │   └── route.ts
│   │   │   └── verify-otp
│   │   │       └── route.ts
│   │   ├── auth/
│   │   │   ├── verify
│   │   │   │   ├── page.module.css
│   │   │   │   └── page.tsx
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── language/
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── map/
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── trekking/
│   │   │   ├── location-detail.js
│   │   │   ├── page.module.css
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.module.css
│   │   ├── page.tsx
│   │   └── working-error.tsx
│   ├── components/
│   ├── font/
│   ├── lib
│   ├── utils/
│   ├── about2.png
│   ├── auth.config.ts
│   ├── auth.ts
│   ├── middleware.ts
│   └── routes.ts
│
├── .env.sample
├── .eslintrc.json
├── .gitignore
├── File_Structure.md
├── README.md
├── UK-Structure.png
├── code_of_conduct.md
├── contributing.md
├── drizzle.config.ts
├── next-auth.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```
