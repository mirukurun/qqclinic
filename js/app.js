/* ═══════════════════════════════════════════════════
   QUEENS QONCEPT CLINIC — App JS
   Header · Mobile nav · Language toggle · i18n
   ═══════════════════════════════════════════════════ */

/* ─── TRANSLATIONS ─── */
const T = {
  en: {
    /* NAV */
    'nav.home':         'Home',
    'nav.services':     'Services',
    'nav.specialists':  'Specialists',
    'nav.about':        'About',
    'nav.gallery':      'Gallery',
    'nav.contact':      'Contact',
    'nav.book':         'Book appointment',

    /* HERO */
    'hero.label':    'Beauty & Aesthetic Clinic',
    'hero.title1':   'Queens',
    'hero.title2':   'Qoncept',
    'hero.title3':   'Clinic',
    'hero.sub':      'A refined beauty and aesthetic space where expertise, comfort and elegance meet.',
    'hero.cta1':     'Book appointment',
    'hero.cta2':     'View services',
    'hero.scroll':   'Scroll',

    /* HOME SECTIONS */
    'home.brand.label':  'About the clinic',
    'home.brand.title':  'Queens Qoncept Clinic',
    'home.brand.text':   'A modern beauty and aesthetic space in the heart of Stockholm, created for clients who value elegance, expertise and personal care. Four carefully selected specialists. One refined concept.',
    'home.brand.rating': '4.9 / 5',
    'home.brand.rat.label': 'Client rating',
    'home.brand.rev':    '445+',
    'home.brand.rev.label': 'Reviews',
    'home.brand.exp':    '7+',
    'home.brand.exp.label': 'Years of expertise',

    'home.services.label': 'What we offer',
    'home.services.title': 'Our Services',
    'home.services.link':  'View all services',

    'home.team.label':  'The specialists',
    'home.team.title':  'Meet the team',
    'home.team.sub':    'Three specialists. One vision of refined, personalised care.',
    'home.team.link':   'View all specialists',

    'home.review.label':   'Client experience',
    'home.reviews.title':  'What our clients say',
    'home.review.q':     '"The atmosphere feels calm, elegant and completely professional. I felt at ease from the first moment I walked in."',
    'home.review.auth':  'Anna K. — Cosmetology',

    'home.cta.label':  'Ready to visit?',
    'home.cta.title':  'Book your appointment',
    'home.cta.sub':    'Choose your service, select a specialist and find a time that suits you.',
    'home.cta.btn':    'Book now',

    /* SERVICES PAGE */
    'services.label':  'Treatments',
    'services.title':  'Our Services',
    'services.sub':    'Professional treatments for skin, body and wellbeing. All prices include VAT.',

    'cat.aesthetic':     'Aesthetic Treatments',
    'cat.aesthetic.sub': 'Dermapen microneedling, Insculpt Chair',
    'cat.prx':           'PRX-T33',
    'cat.prx.sub':       'Biorevitalisation without needles',
    'cat.facials':       'Facials',
    'cat.facials.sub':   'Deep cleansing, anti-age, multi facial',
    'cat.peels':         'Peels',
    'cat.peels.sub':     'Retinol, AHA, Lumilight, Rejuv, Purify',
    'cat.brows':         'Brows & Lashes',
    'cat.brows.sub':     'Brow shaping, tinting, lash colour',
    'cat.massage':       'Massage',
    'cat.massage.sub':   'Raindrop aromatherapy massage',
    'cat.packages':      'Packages & Offers',
    'cat.packages.sub':  'Combined treatments & special prices',

    'min': 'min',
    'kr':  'kr',

    /* SPECIALISTS PAGE */
    'specialists.label':  'Our team',
    'specialists.title':  'The Specialists',
    'specialists.sub':    'Each specialist brings expertise, care and a personalised approach to every session.',

    'specialist.exp':   'Experience',
    'specialist.lang':  'Languages',
    'specialist.spec':  'Specialises in',
    'specialist.book':  'Book with',

    /* BOOKING PAGE */
    'booking.label':  'Schedule your visit',
    'booking.title':  'Book your appointment',
    'booking.sub':    'Select a service or specialist, choose a date and time, and confirm your booking.',
    'booking.byService':    'Book by service',
    'booking.bySpecialist': 'Book by specialist',
    'step.service':   'Service',
    'step.specialist':'Specialist',
    'step.datetime':  'Date & Time',
    'step.confirm':   'Confirm',
    'step1.hint.svc': 'Select a service to begin',
    'step1.hint.sp':  'Select a specialist to begin',
    'step2.hint.svc': 'Choose a specialist for this service',
    'step2.hint.sp':  'Choose a service for this specialist',
    'step3.hint':     'Choose a date and time',
    'step4.hint':     'Review and confirm your booking',
    'avail.times':    'Available times',
    'date.hint':      'Select a date first',
    'no.avail':       'No specialist is currently available for this service. Please contact us directly.',
    'btn.back':       'Back',
    'btn.continue':   'Continue',
    'btn.confirm':    'Confirm booking',
    'summary.service':    'Service',
    'summary.specialist': 'Specialist',
    'summary.date':       'Date',
    'summary.time':       'Time',
    'step4.contact':  'Your details',
    'step4.name':     'Full name',
    'step4.phone':    'Phone number',
    'step4.email':    'Email address',
    'modal.label':    'Booking confirmed',
    'modal.title':    'Your appointment is set.',
    'modal.note':     'A confirmation will be sent to your email. We look forward to welcoming you.',
    'modal.close':    'Done',

    /* ABOUT PAGE */
    'about.label':    'Our story',
    'about.title':    'About Queens\nQoncept Clinic',
    'about.p1':       'Queens Qoncept Clinic is a modern beauty and aesthetic space in Stockholm, created for clients who value elegance, expertise and personal care.',
    'about.p2':       'The concept was built around one idea: that every visit should feel both effective and refined. Our carefully selected specialists combine technical excellence with a warm, personal approach.',
    'about.p3':       'Every detail — from the white-walled treatment rooms to the signature red carpet at the entrance — is designed to make you feel that you are in exactly the right place.',
    'about.carpet.label': 'The signature detail',
    'about.carpet.title': 'The red carpet',
    'about.carpet.q':    '"From the very first step inside, you feel it."',
    'about.carpet.p1':   'The bright red carpet inside the clinic became an unexpected and memorable part of the Queens Qoncept experience. Bold against the warm white walls, it signals something distinctive — a detail that stays with you.',
    'about.carpet.p2':   'On the website, this detail is reflected through refined red accents: booking buttons, active states, selected highlights. The red is never decorative — it always means something.',
    'about.vals.label':  'Our approach',
    'about.vals.title':  'Three principles',
    'about.v1.title':    'Expertise',
    'about.v1.text':     'Every specialist is selected for skill, precision and a genuine commitment to results.',
    'about.v2.title':    'Comfort',
    'about.v2.text':     'From the first call to the last treatment step, the experience is calm, clear and personal.',
    'about.v3.title':    'Refinement',
    'about.v3.text':     'Beauty at its best is quiet. No excess. No performance. Just work done well.',

    /* GALLERY PAGE */
    'gallery.label': 'Visual space',
    'gallery.title': 'Inside the clinic',
    'gallery.sub':   'The Queens Qoncept environment — treatment rooms, reception and the signature details that define the space.',

    /* CONTACT PAGE */
    'contact.label':  'Find us',
    'contact.title':  'Visit Queens Qoncept Clinic',
    'contact.address': 'Address',
    'contact.phone':   'Phone',
    'contact.email':   'Email',
    'contact.hours':   'Opening hours',
    'contact.social':  'Social',
    'contact.book':    'Book appointment',
    'hours.weekday':   'Mon – Fri',
    'hours.sat':       'Saturday',
    'hours.sun':       'Sunday',
    'hours.closed':    'Closed',

    /* FOOTER */
    'footer.tagline':   'Beauty, aesthetics and care in one concept.',
    'footer.col1':      'Services',
    'footer.col2':      'Navigate',
    'footer.copy':      '© 2026 Queens Qoncept Clinic. All rights reserved.',
    'footer.carpet':    'Signature red carpet',
  },

  sv: {
    /* NAV */
    'nav.home':         'Hem',
    'nav.services':     'Tjänster',
    'nav.specialists':  'Specialister',
    'nav.about':        'Om oss',
    'nav.gallery':      'Galleri',
    'nav.contact':      'Kontakt',
    'nav.book':         'Boka tid',

    /* HERO */
    'hero.label':    'Skönhets- & estetikklinik',
    'hero.title1':   'Queens',
    'hero.title2':   'Qoncept',
    'hero.title3':   'Clinic',
    'hero.sub':      'Ett raffinerat skönhets- och estetikutrymme där expertis, komfort och elegans möts.',
    'hero.cta1':     'Boka tid',
    'hero.cta2':     'Se tjänster',
    'hero.scroll':   'Scrolla',

    /* HOME SECTIONS */
    'home.brand.label':  'Om kliniken',
    'home.brand.title':  'Queens Qoncept Clinic',
    'home.brand.text':   'Ett modernt skönhets- och estetikutrymme i hjärtat av Stockholm, skapat för klienter som värdesätter elegans, expertis och personlig omsorg. Fyra noggrant utvalda specialister. Ett raffinerat koncept.',
    'home.brand.rating': '4,9 / 5',
    'home.brand.rat.label': 'Kundbetyg',
    'home.brand.rev':    '445+',
    'home.brand.rev.label': 'Recensioner',
    'home.brand.exp':    '7+',
    'home.brand.exp.label': 'Års erfarenhet',

    'home.services.label': 'Vad vi erbjuder',
    'home.services.title': 'Våra tjänster',
    'home.services.link':  'Se alla tjänster',

    'home.team.label':  'Specialisterna',
    'home.team.title':  'Möt teamet',
    'home.team.sub':    'Tre specialister. En vision av raffinerad, personlig omsorg.',
    'home.team.link':   'Se alla specialister',

    'home.review.label':   'Kundupplevelse',
    'home.reviews.title':  'Vad våra klienter säger',
    'home.review.q':     '"Atmosfären känns lugn, elegant och helt professionell. Jag kände mig bekväm redan från första stund."',
    'home.review.auth':  'Anna K. — Kosmetologi',

    'home.cta.label':  'Redo att besöka?',
    'home.cta.title':  'Boka din tid',
    'home.cta.sub':    'Välj din tjänst, välj en specialist och hitta en tid som passar dig.',
    'home.cta.btn':    'Boka nu',

    /* SERVICES PAGE */
    'services.label':  'Behandlingar',
    'services.title':  'Våra tjänster',
    'services.sub':    'Professionella behandlingar för hud, kropp och välmående. Alla priser inkluderar moms.',

    'cat.aesthetic':     'Estetiska behandlingar',
    'cat.aesthetic.sub': 'Dermapen microneedling, Insculpt Chair',
    'cat.prx':           'PRX-T33',
    'cat.prx.sub':       'Biorevitalisering utan nålar',
    'cat.facials':       'Ansiktsbehandlingar',
    'cat.facials.sub':   'Djuprengöring, anti-age, multi facial',
    'cat.peels':         'Peelingar',
    'cat.peels.sub':     'Retinol, AHA, Lumilight, Rejuv, Purify',
    'cat.brows':         'Bryn & fransar',
    'cat.brows.sub':     'Brynformning, färgning, franskoloring',
    'cat.massage':       'Massage',
    'cat.massage.sub':   'Raindrop aromaterapi massage',
    'cat.packages':      'Paket & erbjudanden',
    'cat.packages.sub':  'Kombinationsbehandlingar & specialpriser',

    'min': 'min',
    'kr':  'kr',

    /* SPECIALISTS PAGE */
    'specialists.label':  'Vårt team',
    'specialists.title':  'Specialisterna',
    'specialists.sub':    'Varje specialist bidrar med expertis, omsorg och ett personligt förhållningssätt till varje session.',

    'specialist.exp':   'Erfarenhet',
    'specialist.lang':  'Språk',
    'specialist.spec':  'Specialiserar sig på',
    'specialist.book':  'Boka med',

    /* BOOKING PAGE */
    'booking.label':  'Planera ditt besök',
    'booking.title':  'Boka din tid',
    'booking.sub':    'Välj en tjänst eller specialist, välj datum och tid, och bekräfta din bokning.',
    'booking.byService':    'Boka efter tjänst',
    'booking.bySpecialist': 'Boka efter specialist',
    'step.service':   'Tjänst',
    'step.specialist':'Specialist',
    'step.datetime':  'Datum & Tid',
    'step.confirm':   'Bekräfta',
    'step1.hint.svc': 'Välj en tjänst för att börja',
    'step1.hint.sp':  'Välj en specialist för att börja',
    'step2.hint.svc': 'Välj en specialist för denna tjänst',
    'step2.hint.sp':  'Välj en tjänst för denna specialist',
    'step3.hint':     'Välj datum och tid',
    'step4.hint':     'Granska och bekräfta din bokning',
    'avail.times':    'Tillgängliga tider',
    'date.hint':      'Välj ett datum först',
    'no.avail':       'Ingen specialist finns för denna tjänst. Kontakta oss direkt.',
    'btn.back':       'Tillbaka',
    'btn.continue':   'Fortsätt',
    'btn.confirm':    'Bekräfta bokning',
    'summary.service':    'Tjänst',
    'summary.specialist': 'Specialist',
    'summary.date':       'Datum',
    'summary.time':       'Tid',
    'step4.contact':  'Dina uppgifter',
    'step4.name':     'För- och efternamn',
    'step4.phone':    'Telefonnummer',
    'step4.email':    'E-postadress',
    'modal.label':    'Bokning bekräftad',
    'modal.title':    'Din tid är bokad.',
    'modal.note':     'En bekräftelse skickas till din e-post. Vi ser fram emot att välkomna dig.',
    'modal.close':    'Klar',

    /* ABOUT PAGE */
    'about.label':    'Vår historia',
    'about.title':    'Om Queens\nQoncept Clinic',
    'about.p1':       'Queens Qoncept Clinic är ett modernt skönhets- och estetikutrymme i Stockholm, skapat för klienter som värdesätter elegans, expertis och personlig omsorg.',
    'about.p2':       'Konceptet byggdes kring en idé: att varje besök ska kännas både effektivt och raffinerat. Våra noggrant utvalda specialister kombinerar teknisk skicklighet med ett varmt, personligt förhållningssätt.',
    'about.p3':       'Varje detalj — från de vitkalkade behandlingsrummen till den signaturröda mattan vid entrén — är utformad för att du ska känna att du är på exakt rätt plats.',
    'about.carpet.label': 'Signaturdetaljen',
    'about.carpet.title': 'Den röda mattan',
    'about.carpet.q':    '"Från det allra första steget innanför dörren, känner du det."',
    'about.carpet.p1':   'Den klara röda mattan i kliniken blev en oväntad och minnesvärd del av Queens Qoncept-upplevelsen. Djärv mot de varma vita väggarna signalerar den något distinkt.',
    'about.carpet.p2':   'På webbplatsen reflekteras denna detalj genom förfinade röda accenter: bokningsknappar, aktiva tillstånd, valda markeringar. Rött är aldrig dekorativt — det betyder alltid något.',
    'about.vals.label':  'Vårt förhållningssätt',
    'about.vals.title':  'Tre principer',
    'about.v1.title':    'Expertis',
    'about.v1.text':     'Varje specialist väljs för sin skicklighet, precision och genuint engagemang för resultat.',
    'about.v2.title':    'Komfort',
    'about.v2.text':     'Från första samtalet till sista behandlingssteget är upplevelsen lugn, tydlig och personlig.',
    'about.v3.title':    'Förfining',
    'about.v3.text':     'Skönhet vid dess bästa är stilla. Inget överskott. Ingen prestation. Bara väl utfört arbete.',

    /* GALLERY PAGE */
    'gallery.label': 'Det visuella rummet',
    'gallery.title': 'Inuti kliniken',
    'gallery.sub':   'Queens Qoncept-miljön — behandlingsrum, reception och de signaturdetaljer som definierar rummet.',

    /* CONTACT PAGE */
    'contact.label':  'Hitta oss',
    'contact.title':  'Besök Queens Qoncept Clinic',
    'contact.address': 'Adress',
    'contact.phone':   'Telefon',
    'contact.email':   'E-post',
    'contact.hours':   'Öppettider',
    'contact.social':  'Sociala medier',
    'contact.book':    'Boka tid',
    'hours.weekday':   'Mån – Fre',
    'hours.sat':       'Lördag',
    'hours.sun':       'Söndag',
    'hours.closed':    'Stängt',

    /* FOOTER */
    'footer.tagline':   'Skönhet, estetik och omsorg i ett koncept.',
    'footer.col1':      'Tjänster',
    'footer.col2':      'Navigera',
    'footer.copy':      '© 2026 Queens Qoncept Clinic. Alla rättigheter förbehållna.',
    'footer.carpet':    'Signaturröda mattan',
  }
};

/* ─── LANGUAGE ─── */
let currentLang = localStorage.getItem('qqc-lang') || 'en';

function t(key) {
  return T[currentLang][key] || T.en[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('qqc-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key] || T.en[key];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.dataset.i18nHtml) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update lang button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ─── TESTIMONIAL COLUMNS ─── */
function initTestimonialsColumns() {
  document.querySelectorAll('.tc-track').forEach(function(track) {
    var clone = track.innerHTML;
    track.innerHTML = clone + clone;
  });
}

/* ─── REVIEW CARD STACK ─── */
function initReviewStack() {
  var scene = document.querySelector('.reviews-stack-scene');
  if (!scene) return;
  var section = scene.closest('.reviews-scroll');
  var cards = Array.prototype.slice.call(scene.querySelectorAll('.rstack-card'));
  var n = cards.length;

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function getProgress() {
    var rect = section.getBoundingClientRect();
    var viewH = window.innerHeight;
    var scrolled = viewH / 2 - rect.top;
    var total = section.offsetHeight - viewH / 2;
    return clamp01(scrolled / total);
  }

  function update() {
    var p = getProgress();
    cards.forEach(function(card, vi) {
      var ri = vi + 2;
      var rS = ri / (n + 1), rE = (ri + 1) / (n + 1);
      var flyT  = clamp01((p - rS)  / (rE - rS));
      var rotS  = rS - 1.5, rotE = rE / 1.5;
      var rotT  = clamp01((p - rotS) / (rotE - rotS));
      var rot   = lerp(-ri + 90, 0, rotT);
      var ty    = lerp(0, -180, flyT);
      var tz    = ri * 10;
      card.style.transform =
        'translateZ(' + tz + 'px) translateY(' + ty + '%) rotate(' + rot + 'deg)';
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

/* ─── HEADER SCROLL ─── */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── НИЖНЯЯ ПАНЕЛЬ (book + бургер) ─── */
function initMobileBookBar() {
  const isBooking = document.body.dataset.page === 'booking';
  const bar = document.createElement('div');
  bar.className = 'mobile-book-bar';

  const bookHtml = isBooking ? '' :
    '<a href="booking.html" class="btn btn-primary btn-sm" data-i18n="nav.book">Book appointment</a>';

  bar.innerHTML =
    bookHtml +
    '<button class="mobile-book-bar__burger" aria-label="Menu">' +
      '<span></span><span></span><span></span>' +
    '</button>';

  document.body.appendChild(bar);

  bar.querySelector('.mobile-book-bar__burger').addEventListener('click', function() {
    const h = document.getElementById('burger');
    if (h) h.click();
  });
}

/* ─── MOBILE NAV ─── */
function initMobileNav() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (!burger || !mobileNav) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);

  let open = false;

  function openNav() {
    open = true;
    mobileNav.classList.add('open');
    burger.classList.add('open');
    const bbBurger = document.querySelector('.mobile-book-bar__burger');
    if (bbBurger) bbBurger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    open = false;
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
    const bbBurger = document.querySelector('.mobile-book-bar__burger');
    if (bbBurger) bbBurger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => open ? closeNav() : openNav());
  backdrop.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}

/* ─── TEAM CAROUSEL SWIPE ─── */
function initTeamSwipe() {
  const visual = document.getElementById('teamVisual');
  if (!visual) return;
  let startX = 0, startY = 0;
  visual.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  visual.addEventListener('touchend', function(e) {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      const btn = dx < 0 ? document.getElementById('teamNext') : document.getElementById('teamPrev');
      if (btn) btn.click();
    }
  }, { passive: true });
}

/* ─── ACTIVE NAV LINK ─── */
function initActiveNav() {
  const page = document.body.dataset.page || '';
  document.querySelectorAll('.header__nav a[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === page);
  });
}

/* ─── LANG TOGGLE ─── */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* ─── SERVICES SIDEBAR — активный таб при прокрутке ─── */
function initServicesSidebar() {
  const links = document.querySelectorAll('.sidebar-link');
  if (!links.length) return;

  const nav = document.querySelector('.services-sidebar__nav');
  const sections = Array.from(links)
    .map(l => document.getElementById(l.getAttribute('href').slice(1)))
    .filter(Boolean);

  function setActive(id) {
    links.forEach(l => {
      const isActive = l.getAttribute('href') === '#' + id;
      l.classList.toggle('active', isActive);
      if (isActive && nav && window.innerWidth <= 1100) {
        const target = l.offsetLeft - nav.offsetWidth / 2 + l.offsetWidth / 2;
        nav.scrollTo({ left: target, behavior: 'smooth' });
      }
    });
  }

  function update() {
    const viewH = window.innerHeight;
    let maxVisible = -1;
    let activeId = sections[0].id;
    sections.forEach(s => {
      const r = s.getBoundingClientRect();
      const visible = Math.max(0, Math.min(r.bottom, viewH) - Math.max(r.top, 0));
      if (visible > maxVisible) { maxVisible = visible; activeId = s.id; }
    });
    setActive(activeId);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
  setTimeout(update, 150); // hash-навигация
}

/* ─── MODAL ─── */
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileBookBar();   // создаёт нижнюю панель до initMobileNav
  initMobileNav();
  initActiveNav();
  initLangToggle();
  initReviewStack();
  initTestimonialsColumns();
  initTeamSwipe();
  initServicesSidebar();
  applyLanguage(currentLang);

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
  });
});
