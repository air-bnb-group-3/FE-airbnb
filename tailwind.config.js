module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        image: "url('/ishan-seefromthesky-LNdpi8Yzi34-unsplash.jpg')",
      }),
    },
  },
  plugins: [],
};
