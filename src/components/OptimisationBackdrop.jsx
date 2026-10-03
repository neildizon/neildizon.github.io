import { Box } from '@mui/material';
import geometry from '../assets/optimisation-background.svg?raw';

export default function OptimisationBackdrop() {
  // Inline the trusted local vector asset so curves render at the display's
  // native resolution instead of being painted as a scaled CSS background.
  return <Box aria-hidden="true" dangerouslySetInnerHTML={{ __html: geometry }} sx={{
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: -1,
    width: 'min(70vw, 900px)',
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: .34,
    '& > svg': { display: 'block', width: '100%', height: 'auto' },
    '@media (max-width: 600px)': {
      width: '480px',
      right: '-130px',
      top: '42%',
      opacity: .22,
    },
  }} />;
}
