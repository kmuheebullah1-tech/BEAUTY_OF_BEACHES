# BeautyOfBeaches — Beach Tourism Website

A modern, attractive, fully responsive beach tourism website crafted using **HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, JSON, and Font Awesome**. Built without React, Angular, or backend frameworks, presenting a warm tropical sunset aesthetic.

---

## 🌅 Design Theme & Palette

BeautyOfBeaches adopts a warm tropical sunset theme:
* **Sunset Coral:** `#FF6B4A`
* **Deep Terracotta:** `#B94E35`
* **Sandy Beige:** `#E8C9A0`
* **Warm Cream:** `#FFF8EF`
* **Dark Cocoa:** `#382820`
* **White:** `#FFFFFF`
* **Soft Peach:** `#FFD6C9`

---

## 📁 Project Structure

```text
BeautyOfBeaches/
├── index.html            # 1. Home Page
├── north-beaches.html    # 2. North Beaches Page
├── south-beaches.html    # 3. South Beaches Page
├── east-beaches.html     # 4. East Beaches Page
├── west-beaches.html     # 5. West Beaches Page
├── gallery.html          # 6. Image Gallery with Lightbox
├── about.html            # 7. About Us Page
├── queries.html          # 8. Travel Queries & FAQs
├── feedback.html         # 9. Feedback & Rating System
├── contact.html          # 10. Contact Us Page
├── old-huts.html         # Old huts: per-day rates
├── normal-huts.html      # Normal huts: per-day rates
├── luxury-huts.html      # Luxury huts: per-day rates
├── sitemap.html          # 11. Website Sitemap
│
├── css/
│   └── style.css         # Master Tropical Sunset Stylesheet
├── js/
│   ├── script.js         # Interactivity (Filters, Lightbox, Validation, Modals)
│   └── beaches.json      # Structured Destination Dataset (24+ Beaches)
│
├── public/
│   └── data/
│       └── beaches.json  # Public Data Copy
└── README.md             # Project Documentation
```

---

## 🚀 How to Run Locally

Because modern web browsers restrict asynchronous `fetch()` requests on the `file://` protocol due to CORS security policies, run the project with any simple local HTTP server:

### Option 1: Using Python (Pre-installed on macOS/Linux/Windows)
```bash
# Python 3.x
python3 -m http.server 8000

# Open in browser:
http://localhost:8000
```

### Option 2: Using Node.js / npx `serve` or `http-server`
```bash
npx serve .
# or
npx http-server -p 8000
```

### Option 3: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 4: Using Vite Dev Server (included)
```bash
npm run dev
# Server will start on http://localhost:3000
```

---

## ✨ Features

1. **11 Distinct HTML Pages:** Every page has independent, tailored content while maintaining the unified sticky navigation, footer, and styling.
2. **Dedicated Compass Zones:**
   - **North Beaches:** Manora Beach (Karachi, Pakistan), Reynisfjara (Iceland), Cannon Beach (Oregon), Kvalvika (Norway), Giant's Causeway (Northern Ireland), Ruby Beach (Washington).
   - **South Beaches:** Clifton Beach (Karachi, Pakistan), Whitehaven Beach (Australia), Baía do Sancho (Brazil), Anse Source d'Argent (Seychelles), Camps Bay (South Africa), Bondi Beach (Australia).
   - **East Beaches:** Maya Bay (Thailand), Radhanagar (Andaman, India), Boracay (Philippines), Matira Beach (Bora Bora), My Khe (Vietnam), Cox's Bazar (Bangladesh).
   - **West Beaches:** Navagio Beach (Greece), Grace Bay (Turks and Caicos), Praia da Marinha (Portugal), Tulum (Mexico), Pfeiffer Beach (California), Seven Mile Beach (Grand Cayman).
3. **Interactive Visual Gallery:** CSS Grid layout with category filters (Tropical, Sunset, Golden Sands, Islands, Adventure) and full-screen lightbox with keyboard controls (`Esc`, `←`, `→`).
4. **Live Search FAQ & Queries:** Interactive accordion with live keyword filtering.
5. **Interactive Feedback & Star Ratings:** 1–5 star rating widget with hover states and browser-only session submission.
6. **Form Validation:** Client-side validation with real-time feedback notices.
7. **Accessibility & Responsive Design:** Mobile-first layout (from 320px to 4K displays), visible focus indicators, and `prefers-reduced-motion` compliance.
