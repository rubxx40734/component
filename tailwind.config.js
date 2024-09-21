/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 這邊特別加一個s 用意是會被app.configs.ts覆蓋掉primary
        primary: {
          200: '#A6A1C21A',
          300: '#E3E1F4',
          400: '#A6A1C2',
          500: '#6F6896',
          600: '#8B84AF'
        },
        blue: {
          500: '#383838',
          600: '#0F2645'
        },
        info: '#F0EEE7'
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1' }], // 10px
        xs: ['0.75rem', { lineHeight: '1' }], // 12px
        sm: ['0.875rem', { lineHeight: '1' }], // 14px

        base: ['1rem', { lineHeight: '1' }], // 16px
        lg: ['1.125rem', { lineHeight: '1' }], // 18px
        xl: ['1.375rem', { lineHeight: '1' }], // 22px
        '2xl': ['1.5rem', { lineHeight: '1' }], // 24px
        '3xl': ['1.75rem', { lineHeight: '1' }], // 28px
        '4xl': ['2rem', { lineHeight: '1' }], // 32px
        '5xl': ['2.5625rem', { lineHeight: '1' }], // 41px
        '6xl': ['3rem', { lineHeight: '1' }], // 48px
        '7xl': ['4.0625rem', { lineHeight: '1' }] // 65px
      }
    },
  },
  plugins: [],
}

