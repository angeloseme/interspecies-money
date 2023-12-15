import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#DCDCDC',
        gray: '#B4B4B4',
        lightGray: '#D9D9D9',
        darkGray: '#969696'
      },
      letterSpacing: {
        wide: '0.02em',
        wider: '0.03em',
        widest: '0.05em'
      },
      spacing: {
      },
      fontSize: {
        '5xl': ['5rem', '120%'],            /* 80px - 120% */
        '4xl': ['3rem', '125%'],            /* 48px - 125% */
        '3xl': ['2.375rem', '120%'],        /* 38px - 120% */
        '2xl': ['2rem', '125%'],            /* 32px - 125% */
        'xl': ['1.5rem', '125%'],           /* 24px - 125% */
        'lg': ['1.25rem', '135%'],          /* 20px - 135% */
        'base': ['1rem', 'normal'],         /* 16px - normal */
        'sm': ['0.875rem', 'normal'],       /* 14px - normal */
        'xs': ['0.75rem', 'normal']         /* 12px - normal */
      },
      fontFamily: {
        body: 'Prophet'
      }
    }
  }
}