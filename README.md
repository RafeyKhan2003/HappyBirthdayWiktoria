# Wictoria Birthday Website

A personal, responsive, one-page birthday website for Wictoria, built with plain HTML, CSS and vanilla JavaScript. It is a static site: no backend, API key, paid hosting, or framework is required.

## Project files

- `index.html` — birthday page content and the persistent audio element/music player
- `style.css` — original birthday design, animations, responsive layout, and floating music-player styles
- `script.js` — cake candles, letter, surprise, reveal animations, and music controls
- `birthday-song.mp3` — the supplied background music audio file

Keep all four files in the same folder (the repository root is simplest). The audio player uses the relative path `birthday-song.mp3`, so it works on GitHub Pages and does not depend on a local computer path.

## Background music

The floating player stays visible while the visitor scrolls. The audio element is created once in the page and has looping enabled. Browsers may block autoplay, so the song does **not** start automatically: the visitor taps **Play** to begin. They can pause and resume it at any time. If the browser cannot load or play the file, the player displays a helpful status message.

If you replace the song, name the new file exactly `birthday-song.mp3` and put it beside `index.html`. Keep the file in MP3 format.

## Publish with GitHub Pages

1. Create a GitHub repository (for example, `wictoria-birthday`).
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and `birthday-song.mp3` to the repository's **root** folder. Do not upload only the HTML/CSS/JS files; the MP3 must be included too.
3. Open the repository's **Settings**.
4. Select **Pages** in the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. Wait for GitHub Pages to finish publishing. The site URL will appear in the Pages settings and will usually look like `https://YOUR-USERNAME.github.io/wictoria-birthday/`.

## Test locally

Keep the files together, then open `index.html` in a modern browser. Click **Play** in the floating player to start the music. For the most realistic test, run the folder with a simple local static server or test the published GitHub Pages URL. No autoplay is expected before the first click.

## Personal details

The page preserves the existing details: Wictoria's hilarious stickers, the random and funny conversations, her dog and cat, and the story about rescuing a starving horse, earning its trust, and the horse lying beside her on the grass with its head resting on her stomach. No new personal conversations, quotes, pet names, or memories have been invented.
