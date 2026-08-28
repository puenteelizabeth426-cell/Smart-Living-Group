# Smart Living Group — SEO Service Pages Update

This package adds four real, indexable service pages to the existing Next.js website:

- `/outdoor-lighting-dallas`
- `/outdoor-audio-dallas`
- `/outdoor-tv-installation-dallas`
- `/motorized-shades-dallas`

It also updates the main navigation, homepage internal links and `sitemap.xml`.

## Upload to GitHub

1. Open the existing Smart Living Group repository in GitHub.
2. Select **Add file → Upload files**.
3. Extract this ZIP on your computer.
4. Drag the contents of the extracted folder into the repository upload screen.
5. Keep the folder structure exactly as provided and allow GitHub to replace files with the same names.
6. Commit with the message: `Add SEO service pages`.
7. Wait for Vercel to finish the automatic deployment.

Do not delete the existing `public/projects` folder. The new pages intentionally reuse the project images already published on the website.

## After deployment

Open each new URL and confirm it loads. Then submit the following URLs in Google Search Console using **URL Inspection → Request Indexing**:

- `https://www.smartliving-texas.com/outdoor-lighting-dallas`
- `https://www.smartliving-texas.com/outdoor-audio-dallas`
- `https://www.smartliving-texas.com/outdoor-tv-installation-dallas`
- `https://www.smartliving-texas.com/motorized-shades-dallas`

Resubmit `https://www.smartliving-texas.com/sitemap.xml` in Search Console.

Production build verification completed successfully with Next.js 14.2.16.
