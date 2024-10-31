<img src="https://github.com/ajaynegi45/Uttarakhand-Culture-NewUI/blob/main/UK-Structure.png" />

## File-Structure

```
.
├── .github/                     
│   ├── ISSUE_TEMPLATE/          
│   │   ├── bug-report.yml       
│   │   ├── config.yml           
│   │   └── feature_request.yml  
│   │
│   ├── workflows/             
│   │   ├── code-quality.yml   
│   │   ├── greetings.yml      
│   ├── FUNDING.yml            
│   └── semantic.yml           
│
├── .idea/                         
│   ├── inspectionProfiles/       
│   │   └── Project_Default.xml    
│   ├── .gitignore                
│   ├── modules.xml               
│   ├── uttarakhand-culture.iml   
│   └── vcs.xml                    
│
├── Design/                   
│   └── Home-Page.pdf        
│
├── drizzle/                 
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

## Description of the file structure for the project:

### Root Directory

- **.env.sample**: Sample environment file listing environment variables needed for the project.
- **.eslintrc.json**: Configuration file for ESLint, setting up code quality standards.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **File_Structure.md**: Markdown file documenting the project structure.
- **README.md**: Provides an overview of the project, setup instructions, and usage guidelines.
- **UK-Structure.png**: Image visualizing the structure or map related to Uttarakhand.
- **code_of_conduct.md**: Guidelines for contributing to the project with expected behavior.
- **contributing.md**: Contribution guidelines for those looking to contribute to the repository.
- **drizzle.config.ts**: Configuration file for Drizzle, possibly a tool used for database migrations.
- **next-auth.d.ts**: TypeScript definitions for NextAuth, a library for handling authentication.
- **next.config.mjs**: Configuration file for Next.js, setting up options for the project build.
- **package-lock.json & package.json**: Lists project dependencies, scripts, and metadata.
- **tsconfig.json**: TypeScript configuration file specifying compiler options.

### .github Directory

- **ISSUE_TEMPLATE**: Contains templates for issues, like:
  - `bug-report.yml`: Template for reporting bugs.
  - `config.yml`: General configuration for issue templates.
  - `feature_request.yml`: Template for requesting new features.
- **workflows**: GitHub Actions workflows for CI/CD processes, like:
  - `code-quality.yml`: Checks code quality.
  - `greetings.yml`: Sends a greeting to new contributors.
- **FUNDING.yml**: Sets up funding options for the project.
- **semantic.yml**: Configuration file for semantic versioning and automatic release notes.

### .idea Directory

Contains configuration files for JetBrains IDEs:
- **inspectionProfiles**: Stores custom inspection profiles (e.g., `Project_Default.xml`).
- **.gitignore**: Specifies files to ignore in the IDE.
- **modules.xml**: Lists project modules.
- **uttarakhand-culture.iml**: Module file for the Uttarakhand project.
- **vcs.xml**: Version control settings.

### Design Directory

- **Home-Page.pdf**: Design document or mockup for the homepage.

### drizzle Directory

- **meta**: Stores snapshots of database changes:
  - `0000_snapshot.json` to `0003_snapshot.json`: Sequential snapshots of database states.
  - `_journal.json`: Log of database migrations.
- **SQL files**: `0000_talented_lady_ursula.sql` to `0003_talented_lady_ursula.sql` contain SQL scripts for migrations.

### public Directory

Contains static assets for the project:
- **Images**: Various images and page elements.
- **SVG Files**: Vector images (e.g., maps and icons).
- **Other Assets**: Includes site banners, avatars, and other graphics.

### src Directory

The main source code for the application:
- **app**: Contains pages and API routes organized by function.
  - `about`, `auth`, `language`, `map`, `profile`, and `trekking`: Specific routes for the app’s functionalities.
  - `api/auth`: Contains NextAuth routes like `register`, `resend-otp`, and `verify-otp` for user authentication.
  - `favicon.ico`, `globals.css`, `layout.tsx`, `not-found.tsx`, `page.tsx`, `working-error.tsx`: Base components and styles for global configuration.
- **components**: Likely contains reusable UI components.
- **font**: Stores custom fonts for the project.
- **lib**: Utility libraries for data handling or helper functions.
- **utils**: Additional utility functions for the app.
- **auth.config.ts**: Configuration file for authentication.
- **auth.ts**: Authentication logic for the app.
- **middleware.ts**: Middleware settings for handling requests.
- **routes.ts**: Defines routes for API and pages.
