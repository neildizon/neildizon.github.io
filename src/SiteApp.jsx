import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import { theme } from './theme';

// Both the static HTML and the browser use the same content and styling.
export default function SiteApp() {
  return <ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider>;
}
