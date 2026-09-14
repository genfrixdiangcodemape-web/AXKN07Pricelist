/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#A9C2A0',
        clover: '#F49CB5',
        daisy: '#FADCE3',
        blush: '#F7B8CA',
        peach: '#E8607F',
        bg: '#FFFBFA',
        'bg-deep': '#FFF3F5',
        surface: '#FFFFFF',
        'surface-soft': '#FFF8FA',
        ink: '#4A2E35',
        'ink-soft': '#8A6470',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        cozy: '1.25rem',
        stitch: '1.75rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(74, 52, 46, 0.18)',
        gentle: '0 4px 14px -4px rgba(74, 52, 46, 0.12)',
      },
      backgroundImage: {
        'peach-fade': 'linear-gradient(135deg, #FFFBFA 0%, #FFF3F5 55%, #FADCE3 100%)',
        'blush-fade': 'linear-gradient(135deg, #F7B8CA 0%, #E8607F 100%)',
      },
    },
  },
  plugins: [],
}
