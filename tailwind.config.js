/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        primary: ['BubblegumSans', 'sans-serif'], // For headings
        secondary: ['Quicksand', 'sans-serif'],  // For body text
        special: ['Righteous', 'sans-serif'],    // For usernames, etc.
      },
      fontSize: {
        heading: ['24px', { lineHeight: '32px', fontWeight: '700' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        special: ['20px', { lineHeight: '28px', fontWeight: '500' }],
      },
      colors: {
        btnPrimary: '#FF6B6B',      // Primary Button Color
        btnSecondary: '#4ECDC4',    // Secondary Button Color
        background: '#1E1E2C',   // App Background
        highlight: '#FFD93D',    // Highlight Color
        error: '#FF5252',        // Error Messages
        textPrimary: '#FFFFFF',  // Main Text Color
        textSecondary: '#B0BEC5', // Secondary Text
        btnClick: '#FF9F68', // Button Click Color`
        scoreboardBg: '#2B2D42',   // Scoreboard Background
        gold: '#FFD700',           // Gold for Highlights
      },
    },
  },
  plugins: [],
}