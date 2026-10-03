import { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Container, IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { blues, mathFont } from './theme';
import { profile } from './data/profile';
import { publications, preprints, theses, researchAwards } from './data/research';
import { awards, experience, evaluations } from './data/teaching';
import { conferences } from './data/conferences';
import { leadership } from './data/leadership';
import OptimisationBackdrop from './components/OptimisationBackdrop';
import useScrollReveal from './components/useScrollReveal';

const pages = [['Home', '/'], ['Research', '/research'], ['Teaching', '/teaching'], ['Conferences', '/conferences'], ['Service', '/leadership']];
const Arrow = ({ diagonal = false }) => <Box component="span" aria-hidden="true" sx={{ ml: .8 }}>{diagonal ? '↗' : '→'}</Box>;
const Eyebrow = ({ children }) => <Typography component="p" variant="overline" color="primary" sx={{ mb: 2 }}>{children}</Typography>;

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  const navItems = pages.map(([label, path]) => <Link key={path} component={NavLink} to={path} end={path === '/'} onClick={() => setOpen(false)} sx={{
    fontSize: '.875rem', fontWeight: 500, color: 'text.secondary', textDecoration: 'none', px: 1.5, py: 1.25, borderRadius: 1,
    transition: 'color 180ms ease, background-color 180ms ease',
    '&.active': { color: 'primary.main', bgcolor: '#A8CBFF12' }, '&:hover': { color: 'primary.main', bgcolor: '#A8CBFF0A', textDecoration: 'none' },
  }}>{label}</Link>);
  return <Box component="header" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }} sx={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#0B1424F2', backdropFilter: 'blur(12px)', borderBottom: 1, borderColor: 'divider' }}>
    <Link href="#main-content" onClick={event => { event.preventDefault(); const content = document.getElementById('main-content'); content?.focus(); content?.scrollIntoView(); }} sx={{ position: 'absolute', left: 12, top: -100, p: 1, bgcolor: 'background.paper', '&:focus': { top: 10, zIndex: 20 } }}>Skip to content</Link>
    <Container>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: { xs: 72, md: 84 } }}>
        <Link component={RouterLink} to="/" color="text.primary" sx={{ display: 'flex', gap: 1.25, alignItems: 'center', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}>
          <Box component="svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false" sx={{ width: 30, height: 30 }}><path d="M5 26V6L27 26V6M5 26L27 6" stroke={blues.cobalt} strokeWidth="1.5" fill="none"/><circle cx="16" cy="16" r="2.5" fill={blues.cobalt}/></Box>
          <Box component="span" sx={{ fontFamily: mathFont, fontSize: '.95rem', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{profile.name}</Box>
        </Link>
        <Stack component="nav" aria-label="Main navigation" direction="row" spacing={.5} sx={{ display: { xs: 'none', md: 'flex' } }}>{navItems}</Stack>
        <IconButton id="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} onClick={() => setOpen(!open)} sx={{ display: { md: 'none' }, color: 'text.primary' }}>
          <Box component="svg" viewBox="0 0 24 24" aria-hidden="true" sx={{ width: 24, height: 24 }}><path d={open ? 'M6 6L18 18M18 6L6 18' : 'M4 7H20M4 12H20M4 17H20'} stroke="currentColor" fill="none" strokeWidth="1.5" /></Box>
        </IconButton>
      </Stack>
      {open && <Stack component="nav" id="mobile-navigation" aria-label="Mobile navigation" sx={{ display: { md: 'none' }, pt: 1.5, pb: 2, gap: .5, borderTop: 1, borderColor: 'divider' }}>{navItems}</Stack>}
    </Container>
  </Box>;
}

function Footer() {
  return <Box component="footer" sx={{ bgcolor: blues.sky, borderTop: 1, borderColor: 'divider', mt: { xs: 8, md: 12 }, py: 4 }}>
    <Container><Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', gap: 2 }}>
      <Box><Typography variant="body2" sx={{ fontWeight: 600 }}>{profile.name}</Typography><Typography variant="body2" color="text.secondary">Applied Mathematics · UNSW Sydney</Typography></Box>
      <Box sx={{ textAlign: { sm: 'right' } }}><Link href={`mailto:${profile.email}`} sx={{ fontSize: '.875rem' }}>{profile.email}<Arrow diagonal /></Link><Typography variant="body2" color="text.secondary" sx={{ mt: .5 }}>Research · Teaching · Collaboration</Typography></Box>
    </Stack></Container>
  </Box>;
}

function Publication({ item, compact = false }) {
  return <Box component="article" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '64px 1fr' }, gap: { xs: 1, sm: 3 }, py: compact ? 3 : 3.5, borderBottom: 1, borderColor: 'divider' }}>
    <Typography variant="body2" color="primary" sx={{ fontVariantNumeric: 'tabular-nums', pt: .3 }}>{item.year}</Typography>
    <Box sx={{ minWidth: 0 }}>
      <Typography component="h3" variant="h3" sx={{ fontSize: compact ? '1.05rem' : '1.125rem', mb: 1 }}>
        {item.url ? <Link href={item.url} color="text.primary" sx={{ '&:hover': { color: 'primary.main' } }}>{item.title}<Arrow diagonal /></Link> : item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">{item.authors}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: .5, fontStyle: 'italic' }}>{item.venue}</Typography>
      {!compact && item.annotation && <Typography variant="body2" color="text.secondary" sx={{ mt: 2, pl: 2, borderLeft: 2, borderColor: 'primary.dark' }}>{item.annotation}</Typography>}
    </Box>
  </Box>;
}

function Home() {
  return <>
    <Container>
      <Box sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 6, md: 9 } }}>
        <Box>
          <Eyebrow>Applied mathematics · UNSW Sydney</Eyebrow>
          <Typography variant="h1" sx={{ fontFamily: mathFont, fontWeight: 400, WebkitTextStroke: '.3px currentColor', fontSize: 'clamp(1.7rem, 8.5vw, 6.2rem)', letterSpacing: '.045em', wordSpacing: '-.22em', lineHeight: 1.2, textTransform: 'uppercase', whiteSpace: 'nowrap', mb: 3 }}>{profile.name.split('.')[0]}<Box component="span" sx={{ color: 'primary.main' }}>.</Box>{profile.name.split('.')[1]}</Typography>
          <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 500, letterSpacing: '.01em', mb: 2 }}>{profile.role}</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.85 }}>{profile.introduction}</Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.5, mt: 3.5 }}>
            <Button component={RouterLink} to="/research" variant="contained">Explore research<Arrow /></Button>
            <Button component={RouterLink} to="/teaching" variant="outlined">Teaching</Button>
          </Stack>
        </Box>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2, justifyContent: 'space-between', borderTop: 1, borderBottom: 1, borderColor: 'divider', py: 2.5 }}>
        <Typography variant="body2" color="text.secondary">Find my work & connect</Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>{profile.links.map(link => <Link key={link.label} href={link.url} sx={{ fontSize: '.875rem', fontWeight: 500 }}>{link.label}<Arrow diagonal /></Link>)}</Stack>
      </Stack>
      <Box component="section" aria-labelledby="interests-title" sx={{ py: { xs: 7, md: 9 } }}>
        <Eyebrow>Research interests</Eyebrow>
        <Typography id="interests-title" variant="h2" sx={{ mb: 4, maxWidth: 620 }}>From mathematical structure<br />to computational methods.</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {profile.interests.map((group, i) => <Box key={group.title} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: [blues.ice, blues.sky, blues.powder][i], backgroundImage: 'linear-gradient(145deg, #A8CBFF07, transparent)', border: 1, borderColor: 'divider', borderTop: `2px solid ${blues.periwinkle}`, borderRadius: '0 0 8px 8px' }}>
            <Typography variant="overline" color="primary" sx={{ display: 'block', mb: 2.5 }}>0{i+1}</Typography>
            <Typography component="h3" variant="h3" sx={{ mb: 2 }}>{group.title}</Typography>
            {group.items.map(item=><Typography key={item} variant="body2" color="text.secondary" sx={{ mb: .5 }}>{item}</Typography>)}
          </Box>)}
        </Box>
      </Box>
    </Container>
    <Box component="section" aria-labelledby="recent-title" sx={{ bgcolor: blues.powder, py: { xs: 6, md: 8 } }}>
      <Container><Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 2, mb: 2 }}>
        <Box><Eyebrow>Latest work</Eyebrow><Typography id="recent-title" variant="h2">Recent publications</Typography></Box>
        <Link component={RouterLink} to="/research" sx={{ fontSize: '.875rem', fontWeight: 550 }}>View all research<Arrow /></Link>
      </Stack>{publications.slice(0, 3).map(item=><Publication key={item.title} item={item} compact />)}</Container>
    </Box>
    <Container><Box component="section" aria-label="Teaching conferences and service" sx={{ pt: { xs: 6, md: 8 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
      <Box><Eyebrow>Beyond the page</Eyebrow><Typography variant="h2" sx={{ mb: 2 }}>Sharing ideas.<br />Building understanding.</Typography><Typography color="text.secondary" sx={{ mb: 2 }}>Explore my teaching, conference presentations, and academic service.</Typography><Stack direction="row" sx={{ gap: 3, flexWrap: 'wrap' }}><Link component={RouterLink} to="/teaching">Teaching<Arrow /></Link><Link component={RouterLink} to="/conferences">Conferences<Arrow /></Link><Link component={RouterLink} to="/leadership">Service<Arrow /></Link></Stack></Box>
    </Box></Container>
  </>;
}

function PageIntro({ eyebrow, title, description }) {
  return <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 4, md: 6 }, borderBottom: 1, borderColor: 'divider', mb: 5 }}>
    <Eyebrow>{eyebrow}</Eyebrow><Typography variant="h1" sx={{ fontSize: { xs: '2.7rem', md: '4rem' }, mb: 2 }}>{title}</Typography>
    <Typography color="text.secondary" sx={{ maxWidth: 680 }}>{description}</Typography>
  </Box>;
}

const researchSections = [ ['published', 'Published / accepted', publications], ['preprints', 'Submitted / under review', preprints], ['theses', 'Theses', theses] ];
function Recognition({ items, id }) {
  return <Box component="section" aria-labelledby={id} sx={{ mb: 7 }}>
    <Typography id={id} variant="h2" sx={{ mb: 3 }}>Recognition</Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: items.length > 1 ? '1fr 1fr' : '1fr' }, gap: 3 }}>{items.map(award => <Box key={`${award.date}-${award.title}`} sx={{ p: 3, bgcolor: 'primary.light', borderRadius: 1 }}><Eyebrow>{award.date}</Eyebrow><Typography component="h3" variant="h3" sx={{ mb: 1 }}>{award.title}</Typography><Typography variant="body2" color="text.secondary">{award.institution}</Typography></Box>)}</Box>
  </Box>;
}
function Research() {
  return <Container>
    <PageIntro eyebrow="Research" title="Ideas into methods." description="Publications and preprints in optimisation, inverse problems, wavelets, and imaging." />
    <Recognition items={researchAwards} id="research-awards-title" />
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '210px 1fr' }, gap: { xs: 4, md: 6 } }}>
      <Box component="nav" aria-label="Research sections" sx={{ alignSelf: 'start', position: { md: 'sticky' }, top: 110 }}>
        <Typography variant="overline" color="text.secondary">On this page</Typography>
        <Stack sx={{ mt: 1, gap: .5 }}>{researchSections.map(([id, title, items])=><Button key={id} onClick={()=> { const section = document.getElementById(id); section?.scrollIntoView({ block: 'start' }); section?.focus({ preventScroll: true }); }} sx={{ justifyContent: 'space-between', px: 0, textAlign: 'left', color: 'text.secondary' }}>{title}<Typography component="span" variant="body2" color="primary" sx={{ ml: 2 }}>{items.length}</Typography></Button>)}</Stack>
      </Box>
      <Box>{researchSections.map(([id, title, items])=><Box component="section" id={id} tabIndex={-1} aria-labelledby={`${id}-title`} key={id} sx={{ mb: 7, scrollMarginTop: '110px' }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, mb: 1 }}><Typography id={`${id}-title`} variant="h2" sx={{ fontSize: '1.7rem' }}>{title}</Typography><Chip label={items.length} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.main' }} /></Stack>
        {items.map(item=><Publication key={item.title} item={item} />)}
      </Box>)}</Box>
    </Box>
  </Container>;
}

function Teaching() {
  return <Container>
    <PageIntro eyebrow="Teaching" title="Making mathematics accessible." description="Teaching experience across undergraduate and postgraduate mathematics, from calculus and analysis to inverse problems." />
    <Box component="section" aria-labelledby="evaluations-title" sx={{ mb: 7 }}><Typography id="evaluations-title" variant="h2" sx={{ mb: 3 }}>Student feedback</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>{evaluations.map(item => <Box key={item.value} sx={{ p: 3, bgcolor: 'primary.light', borderRadius: 1 }}><Typography component="p" variant="h2" color="primary" sx={{ mb: 1 }}>{item.value}</Typography><Typography component="h3" variant="h3" sx={{ mb: 1 }}>{item.label}</Typography><Typography variant="body2" color="text.secondary">{item.detail}</Typography></Box>)}</Box>
    </Box>
    <Recognition items={awards} id="awards-title" />
    <Box component="section" aria-labelledby="experience-title"><Typography id="experience-title" variant="h2" sx={{ mb: 2 }}>Teaching experience</Typography>
      {experience.map((entry,index)=><Box component="article" key={`${entry.role}-${index}`} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '210px 1fr' }, gap: { xs: 1.5, md: 6 }, py: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="primary">{entry.date}</Typography>
        <Box sx={{ minWidth: 0 }}><Typography component="h3" variant="h3" sx={{ mb: 1 }}>{entry.role}</Typography><Typography sx={{ fontSize: '.95rem', mb: 1.5 }}>{entry.institution}</Typography><Typography variant="body2" color="text.secondary">{entry.duties}</Typography>
          {entry.courses.length>0 && <Accordion disableGutters elevation={0} sx={{ mt: 2, border: 1, borderColor: 'divider', borderRadius: '6px !important', '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<Box component="span" aria-hidden="true" sx={{ color: 'primary.main' }}>⌄</Box>} id={`courses-${index}-header`} aria-controls={`courses-${index}-content`}><Typography variant="body2" color="primary" sx={{ fontWeight: 550 }}>Course history</Typography></AccordionSummary>
            <AccordionDetails><Stack sx={{ gap: 2.5 }}>{entry.courses.map(term=><Box key={term.term}><Typography component="h4" variant="body2" sx={{ fontWeight: 600, mb: 1 }}>{term.term}</Typography><Box component="ul" sx={{ m: 0, pl: 2.5 }}>{term.items.map(item=><Typography component="li" key={item} variant="body2" color="text.secondary" sx={{ mb: .5 }}>{item}</Typography>)}</Box></Box>)}</Stack></AccordionDetails>
          </Accordion>}
        </Box>
      </Box>)}
    </Box>
  </Container>;
}

function Conferences() {
  return <Container>
    <PageIntro eyebrow="Conferences" title="Mathematics in conversation." description="Conference talks, poster presentations, and participation in mathematical meetings around the world." />
    {Object.entries(conferences).map(([category,items],sectionIndex)=><Box component="section" aria-labelledby={`conference-section-${sectionIndex}`} key={category} sx={{ mb: 7 }}>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, mb: 2 }}><Typography id={`conference-section-${sectionIndex}`} variant="h2">{category}</Typography><Chip label={items.length} size="small" sx={{ bgcolor: 'primary.light', color: 'primary.main' }} /></Stack>
      {items.map((entry,index)=><Box component="article" key={`${entry.date}-${index}`} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '110px 1fr' }, gap: { xs: 1, sm: 4 }, py: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="body2" color="primary">{entry.date}</Typography><Box><Typography component="h3" variant="h3" sx={{ mb: 1 }}>{entry.title}</Typography>{entry.talk && <Typography variant="body2" sx={{ mb: 1 }}>{entry.talk}</Typography>}<Typography variant="body2" color="text.secondary">{entry.location}</Typography></Box>
      </Box>)}
    </Box>)}
  </Container>;
}

function Leadership() {
  return <Container>
    <PageIntro eyebrow="Service and engagement" title="Connecting people and ideas." description="Conference and workshop organising, committee service, journal reviewing, and engagement with the mathematical community." />
    {Object.entries(leadership).map(([category, entries], sectionIndex) => <Box component="section" key={category} aria-labelledby={`leadership-section-${sectionIndex}`} sx={{ mb: 7 }}>
      <Typography id={`leadership-section-${sectionIndex}`} variant="h2" sx={{ mb: 2 }}>{category}</Typography>
      {entries.map((entry, index) => <Box component="article" key={`${entry.date}-${index}`} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '150px 1fr' }, gap: { xs: 1, sm: 4 }, py: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Box><Typography variant="body2" color="primary">{entry.date}</Typography>{entry.status && <Chip label={entry.status} size="small" sx={{ mt: 1, bgcolor: 'primary.light', color: 'primary.main' }} />}</Box>
        <Box sx={{ minWidth: 0 }}><Typography variant="body2" color="primary" sx={{ mb: 1 }}>{entry.role}</Typography><Typography component="h3" variant="h3" sx={{ mb: 1 }}>{entry.title}</Typography>{entry.location && <Typography variant="body2" color="text.secondary">{entry.location}</Typography>}</Box>
      </Box>)}
    </Box>)}
  </Container>;
}

function NotFound() { return <Container><PageIntro eyebrow="Page not found" title="Let’s find your way back." description="This page does not exist." /><Button variant="contained" component={RouterLink} to="/">Return home<Arrow /></Button></Container>; }

export default function App() {
  const { pathname } = useLocation();
  const main = useRef(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    const page = pages.find(([, path])=>path===pathname)?.[0] ?? 'Page not found';
    document.title = `${profile.name} | ${page === 'Home' ? 'Applied Mathematics' : page}`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);
  useScrollReveal(main, pathname);
  return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', isolation: 'isolate' }}><OptimisationBackdrop /><Header />
    <Box component="main" id="main-content" tabIndex={-1} ref={main} sx={{ flex: 1, '&:focus': { outline: 'none' } }}>
      <Routes><Route path="/" element={<Home />} /><Route path="/research" element={<Research />} /><Route path="/teaching" element={<Teaching />} /><Route path="/conferences" element={<Conferences />} /><Route path="/leadership" element={<Leadership />} /><Route path="*" element={<NotFound />} /></Routes>
    </Box><Footer /></Box>;
}
