/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,razor,vue}"],
  theme: {
    extend: {
      colors: {
        'black': '#0d1117',
        'white': '#f0f6fc',
        'gray': '#9198a1',
        'dark-gray': '#151b23',
        'primary': '#1f6feb',
        'activity-level-0': '#161b22',
        'activity-level-1': '#161b22',
        'activity-level-2': '#0e4429',
        'activity-level-3': '#006d32',
        'activity-level-4': '#26a641',
        'activity-level-5': '#39d353',
      },
      borderRadius: {
        DEFAULT: '5px'
      },
    },
  },
  plugins: [],
}

