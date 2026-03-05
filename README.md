# Pixtopia

A stunning, cinematic web experience built with React. Pixtopia features an immersive full-screen video intro that seamlessly fades into a gorgeous, glowing hero reveal fueled by smooth `framer-motion` animations, followed by an intricate, overlapping scrollable grid layout for its content.

![Pixtopia Hero Preview](https://via.placeholder.com/800x450.png?text=Pixtopia+Hero+Section)

## ✨ Features

- **Cinematic Video Reveal:** Automatically plays an immersive full-screen video intro that smoothly cross-fades into the main content.
- **Fluid Animations:** Complex, butter-smooth staggered entrance animations using custom easing curves built with Framer Motion.
- **Premium Aesthetics:** Uses heavily styled Tailwind CSS to create glowing text shadows, atmospheric background flares, and deep layered effects.
- **Complex Layouts:** A staggered, overlapping "Rounds" section ready to be populated with 3D character art and custom clipped backgrounds.
- **Fully Responsive:** Perfectly scales from mobile displays up to massive desktop screens.

## 🛠️ Tech Stack

- **React 18** - Core framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first styling and custom gradients/shadows
- **Framer Motion** - High-performance cinematic animations

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

You will need **Node.js** installed on your system.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Arsen1c-18/pixtopia.git
   ```
2. Navigate into the project directory
   ```sh
   cd pixtopia/website
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` (or whichever port Vite provides).

## 📂 Project Structure

- `src/App.jsx` - The main entry point containing the Video Hero layout and global animations.
- `src/RoundsSection.jsx` - The staggered layout component displaying the different rounds.
- `src/assets/` - Contains local video files, SVGs, and background images.

## 🎨 Note on Assets

This project utilizes specific placeholders for character art (e.g., Buzz Lightyear, The Incredibles). To complete the layout, drop your high-resolution PNGs into the `src/assets` folder and update the image tags in `RoundsSection.jsx`.

---
*Built with ❤️ for GDG*
