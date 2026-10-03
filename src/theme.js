import { createTheme } from '@mui/material/styles';

export const blues = {
  mist: '#0B1424',
  ice: '#13233B',
  sky: '#152942',
  powder: '#182E4C',
  periwinkle: '#345580',
  steel: '#729BD3',
  cobalt: '#A8CBFF',
  navy: '#0B1424',
};

export const mathFont = '"Courier New", "Liberation Mono", ui-monospace, monospace';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: blues.cobalt, dark: '#6599ED', light: '#1C3150', contrastText: '#0B1424' },
    text: { primary: '#F4F7FF', secondary: '#BAC8DD' },
    background: { default: blues.mist, paper: '#14243B' },
    divider: '#2A3D58',
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.08 },
    h2: { fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, fontSize: 'clamp(1.65rem, 3vw, 2.1rem)', letterSpacing: '-0.025em', lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.015em', lineHeight: 1.45 },
    body1: { fontSize: '1rem', lineHeight: 1.8 },
    body2: { fontSize: '.875rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600 },
    overline: { fontFamily: '"Cascadia Code", "Consolas", ui-monospace, monospace', fontSize: '.7rem', fontWeight: 600, letterSpacing: '.15em', lineHeight: 1.8 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiContainer: { styleOverrides: { root: { maxWidth: '1156px !important' } } },
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 6, padding: '11px 20px', minHeight: 44 }, outlined: { borderColor: '#A8CBFF70' } } },
    MuiLink: { defaultProps: { underline: 'hover' } },
    MuiCssBaseline: { styleOverrides: {
      html: { scrollPaddingTop: '100px' },
      body: {
        margin: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(180, 216, 255, .22) 1px, transparent 1.2px), radial-gradient(ellipse at 85% 30%, rgba(49, 130, 192, .26), transparent 65%), linear-gradient(115deg, #0B1424 0%, #112A48 48%, #173C64 100%)',
        backgroundSize: '32px 32px, 100% 100%, 100% 100%',
        backgroundRepeat: 'repeat, no-repeat, no-repeat',
        backgroundAttachment: 'fixed',
      },
      '#root': { position: 'relative', zIndex: 1 },
      '*': { boxSizing: 'border-box' },
      '.scroll-reveal': {
        opacity: 0,
        transform: 'translateY(22px)',
        transition: 'opacity 650ms ease, transform 650ms cubic-bezier(.2,.7,.2,1)',
      },
      '.scroll-reveal.is-revealed, .scroll-reveal:focus-within': { opacity: 1, transform: 'none' },
      '@media (prefers-reduced-motion: reduce)': {
        '.scroll-reveal': { opacity: 1, transform: 'none', transition: 'none' },
        '[data-motion="preview"] .scroll-reveal': {
          opacity: 0, transform: 'translateY(22px)',
          transition: 'opacity 650ms ease, transform 650ms cubic-bezier(.2,.7,.2,1)',
        },
        '[data-motion="preview"] .scroll-reveal.is-revealed, [data-motion="preview"] .scroll-reveal:focus-within': { opacity: 1, transform: 'none' },
      },
      'a, button, [tabindex]': { WebkitTapHighlightColor: 'transparent' },
      ':focus-visible': { outline: '3px solid #8FB8FF', outlineOffset: '4px' },
      '::selection': { background: '#345580', color: '#FFFFFF' },
    } },
  },
});
