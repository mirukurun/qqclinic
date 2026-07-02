export interface Treatment {
  name: string;
  desc: string;
  duration: number;
  price: string | null;
  by: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  treatments: Treatment[];
}

export interface ServiceEntry {
  key: string;
  sub: string;
}

export interface Specialist {
  id: number;
  name: string;
  role: string;
  bokadirekt: string;
  services: string[];
}

export const SPECIALISTS: Specialist[] = [
  {
    id: 1,
    name: 'Ludmila',
    role: 'Head Cosmetologist',
    bokadirekt: 'beauty-by-ludmila-stockholm-36762',
    services: ['Packages & Offers', 'Microneedling', 'PRX-T33', 'Insculpt Chair', 'Facials', 'Peels', 'Brows & Lashes', 'Massage', "Men's Treatments"],
  },
  {
    id: 2,
    name: 'Olena',
    role: 'Massage & Wellness Therapist',
    bokadirekt: 'touch-of-balance-134261',
    services: ['Massage', 'Pressotherapy', 'RF Treatment', 'Hair Removal', 'Body Treatments'],
  },
  {
    id: 3,
    name: 'Caroline',
    role: 'Cosmetologist',
    bokadirekt: 'caroline-khan-stockholm-38355',
    services: ['Microneedling', 'Facials', 'Peels', 'Advanced Skincare', 'Brows & Lashes', 'Lashlift', 'Body Treatments', 'Hair Removal'],
  },
];

export const ALL_SERVICES: ServiceEntry[] = [
  { key: 'Packages & Offers',   sub: 'Special offers and treatment bundles' },
  { key: 'Microneedling',       sub: 'Dermapen skin renewal — Ludmila & Caroline' },
  { key: 'PRX-T33',             sub: 'Biorevitalisation without needles' },
  { key: 'Insculpt Chair',      sub: 'Electromagnetic body contouring' },
  { key: 'Facials',             sub: 'Classic, deep cleansing, anti-age, luxury' },
  { key: 'Peels',               sub: 'Retinol, Lumilight, Rejuv, Purify, Mela, TCA' },
  { key: 'Advanced Skincare',   sub: 'Glow, Polynukleotider, Diatermi, TCA' },
  { key: 'Brows & Lashes',      sub: 'Brow lift, tinting, microblading' },
  { key: 'Lashlift',            sub: 'Lash lift with optional tinting' },
  { key: 'Massage',             sub: 'Raindrop, deep tissue, hot stone and more' },
  { key: 'Pressotherapy',       sub: 'Lymphatic drainage pressotherapy' },
  { key: 'RF Treatment',        sub: 'Radiofrequency skin tightening' },
  { key: 'Hair Removal',        sub: 'Sugaring for face and body' },
  { key: 'Body Treatments',     sub: 'Anti-cellulite, Madero, classic massage' },
  { key: "Men's Treatments",    sub: 'Back treatments and facials for men' },
];

export const TREATMENTS: Record<string, Treatment[]> = {
  'Packages & Offers': [
    { name: 'Microneedling + PRX-T33',               desc: 'Return visit combination',          duration: 60,  price: '3 898', by: ['Ludmila'] },
    { name: 'Microneedling + PRX-T33 + Cryotherapy', desc: 'New clients — special price',       duration: 60,  price: '1 498', by: ['Ludmila'] },
    { name: 'PRX-T33 Trial',                         desc: 'First-time offer',                  duration: 35,  price: '1 499', by: ['Ludmila'] },
    { name: 'Insculpt Chair Trial',                  desc: 'Introductory session',              duration: 45,  price: '495',   by: ['Ludmila'] },
    { name: 'Retinol Peeling 4-Pack',                desc: 'Series of four sessions',           duration: 30,  price: '4 796', by: ['Ludmila'] },
  ],
  'Microneedling': [
    { name: 'Dermapen Face',                         desc: 'Microneedling facial rejuvenation', duration: 45,  price: '2 598', by: ['Ludmila'] },
    { name: 'Dermapen Face & Neck',                  desc: 'Extended microneedling protocol',   duration: 60,  price: '3 198', by: ['Ludmila'] },
    { name: 'Dermapen Face, Neck & Décolletage',     desc: 'Full upper body microneedling',     duration: 90,  price: '3 798', by: ['Ludmila'] },
    { name: 'Dermapen Décolletage',                  desc: 'Targeted décolletage treatment',    duration: 40,  price: '2 498', by: ['Ludmila'] },
    { name: 'Dermapen',                              desc: 'Microneedling skin renewal',        duration: 60,  price: '2 500', by: ['Caroline'] },
    { name: 'Dermapen Booster',                      desc: 'Vial booster add-on to Dermapen',  duration: 5,   price: '500',   by: ['Caroline'] },
  ],
  'PRX-T33': [
    { name: 'PRX-T33 Face',                          desc: 'Biorevitalisation without needles', duration: 30,  price: '2 198', by: ['Ludmila'] },
    { name: 'PRX-T33 Face & Neck',                   desc: 'Extended biorevitalisation',        duration: 45,  price: '2 989', by: ['Ludmila'] },
    { name: 'PRX-T33 Face, Neck & Décolletage',      desc: 'Full upper body biorevitalisation', duration: 60,  price: '3 598', by: ['Ludmila'] },
    { name: 'Facial with PRX-T33',                   desc: 'Combined facial and PRX-T33',       duration: 75,  price: '2 498', by: ['Ludmila'] },
  ],
  'Insculpt Chair': [
    { name: 'Insculpt Chair',                        desc: 'Electromagnetic muscle stimulation', duration: 40, price: '1 495', by: ['Ludmila'] },
  ],
  'Facials': [
    { name: 'Multi Facial',                          desc: 'Personalised multi-step protocol',   duration: 60,  price: '2 995', by: ['Ludmila'] },
    { name: 'Skin Perfection Trio',                  desc: 'Advanced combination skin treatment', duration: 75, price: '5 000', by: ['Ludmila'] },
    { name: 'Deep Cleansing Facial',                 desc: 'Exuviance / Neostrata formulas',     duration: 60,  price: '1 548', by: ['Ludmila'] },
    { name: 'Classic Facial 70 min',                 desc: 'Classic Exuviance / Neostrata facial', duration: 70, price: '1 748', by: ['Ludmila'] },
    { name: 'Classic Facial 90 min',                 desc: 'Extended classic facial',             duration: 90,  price: '1 798', by: ['Ludmila'] },
    { name: 'Anti-Age Gold Mask',                    desc: 'With lash & brow tinting',            duration: 60,  price: '1 798', by: ['Ludmila'] },
    { name: 'Anti-Age Gold Mask Extended',           desc: '90-minute anti-ageing protocol',      duration: 90,  price: '1 898', by: ['Ludmila'] },
    { name: 'Milia Removal',                         desc: 'Professional extraction of milia',    duration: 30,  price: '598',   by: ['Ludmila', 'Caroline'] },
    { name: 'Ansiktsbehandling Klassisk',            desc: 'Classic facial treatment',            duration: 60,  price: '1 495', by: ['Caroline'] },
    { name: 'Ansiktsbehandling Lyx',                 desc: 'Luxury 90-minute facial',             duration: 90,  price: '1 895', by: ['Caroline'] },
    { name: 'Ansiktsbehandling Minilyx',             desc: 'Mini luxury facial',                  duration: 75,  price: '1 695', by: ['Caroline'] },
    { name: 'Aftersun & Moisture Boost',             desc: 'Soothing and hydrating facial',       duration: 30,  price: '795',   by: ['Caroline'] },
    { name: 'Teen Facial',                           desc: 'Targeted treatment for teen skin',    duration: 45,  price: '850',   by: ['Caroline'] },
    { name: 'RF-Lifting',                            desc: 'Radiofrequency skin tightening',      duration: 60,  price: '899',   by: ['Olena'] },
  ],
  'Peels': [
    { name: 'Retinol Peeling',                       desc: 'Cell renewal peel with vitamin A',    duration: 30,  price: '1 498', by: ['Ludmila', 'Caroline'] },
    { name: 'Lumilight Peel',                        desc: 'Brightening — includes homecare kit', duration: 40,  price: '1 998', by: ['Ludmila'] },
    { name: 'Rejuv Peel',                            desc: 'Rejuvenating — includes homecare kit', duration: 40, price: '1 998', by: ['Ludmila'] },
    { name: 'Purify Peel',                           desc: 'For acne-prone skin',                 duration: 40,  price: '1 998', by: ['Ludmila'] },
    { name: 'AHA Peel with Gold Mask',               desc: 'Exfoliating AHA with luxury mask',    duration: 30,  price: '799',   by: ['Ludmila'] },
    { name: 'Mela Peel',                             desc: 'Targeted pigmentation treatment',     duration: 30,  price: '2 800', by: ['Caroline'] },
    { name: 'TCA Peel 12%',                          desc: 'Professional medium-depth peel',      duration: 45,  price: '1 995', by: ['Caroline'] },
  ],
  'Advanced Skincare': [
    { name: 'Glow Treatment',                        desc: 'Advanced brightening protocol',       duration: 60,  price: '3 500', by: ['Caroline'] },
    { name: 'PhiArt Eye Polynukleotider',            desc: 'Eye area polynucleotide regeneration', duration: 25, price: '3 500', by: ['Caroline'] },
    { name: 'PhiArt Polynukleotider',                desc: 'Full face polynucleotide treatment',  duration: 60,  price: '5 000', by: ['Caroline'] },
    { name: 'Diathermy / Vessel Removal',            desc: 'Vascular lesion treatment',           duration: 35,  price: '595',   by: ['Caroline'] },
    { name: 'Diathermy Hair Removal',                desc: 'Permanent hair reduction',            duration: 60,  price: '900',   by: ['Caroline'] },
    { name: 'Cherry Angioma Removal',                desc: 'Removal of red skin spots',           duration: 35,  price: '595',   by: ['Caroline'] },
  ],
  'Brows & Lashes': [
    { name: 'Brow Tinting + Shaping + Plucking',     desc: 'Complete brow styling',               duration: 15,  price: '500',   by: ['Ludmila'] },
    { name: 'Brow Lift + Tint & Plucking',           desc: 'Lamination, tint and shaping',        duration: 45,  price: '850',   by: ['Caroline'] },
    { name: 'Brow Lift',                             desc: 'Brow lamination without tinting',     duration: 45,  price: '750',   by: ['Caroline'] },
    { name: 'Brow Tint + Plucking',                  desc: 'Brow colour and shaping',             duration: 30,  price: '295',   by: ['Caroline'] },
    { name: 'Lash & Brow Tint + Plucking',           desc: 'Combined lash and brow colour',       duration: 45,  price: '450',   by: ['Caroline'] },
    { name: 'Lash Tint',                             desc: 'Eyelash tinting',                     duration: 30,  price: '295',   by: ['Caroline'] },
    { name: 'Microblading',                          desc: 'Semi-permanent eyebrow tattoo',       duration: 195, price: '4 500', by: ['Caroline'] },
    { name: 'Microblading Touch-Up',                 desc: 'Follow-up microblading session',      duration: 90,  price: null,    by: ['Caroline'] },
    { name: 'Threading',                             desc: 'Facial hair removal by threading',    duration: 25,  price: '395',   by: ['Caroline'] },
  ],
  'Lashlift': [
    { name: 'Lashlift',                              desc: 'Lash lift for a natural curl effect',  duration: 45, price: '750',   by: ['Caroline'] },
    { name: 'Lashlift + Lash Tint',                  desc: 'Lash lift with lash tinting',          duration: 50, price: '900',   by: ['Caroline'] },
    { name: 'Lashlift + Lash & Brow Tint',           desc: 'Lash lift with full tinting',          duration: 50, price: '1 000', by: ['Caroline'] },
    { name: 'Lashlift & Brow Lift Combo',            desc: 'Lash and brow lift with colour',       duration: 60, price: '1 300', by: ['Caroline'] },
  ],
  'Massage': [
    { name: 'Raindrop Massage',                      desc: 'Aromatherapy raindrop technique',     duration: 60,  price: '1 498', by: ['Ludmila'] },
    { name: 'Head Massage',                          desc: 'Relaxing scalp and head massage',     duration: 30,  price: '599',   by: ['Olena'] },
    { name: 'Neck & Shoulders',                      desc: 'Targeted neck and shoulder massage',  duration: 30,  price: '599',   by: ['Olena'] },
    { name: 'Neck, Shoulders & Back',                desc: 'Upper body massage',                  duration: 45,  price: '699',   by: ['Olena'] },
    { name: 'Classic Wellness Massage',              desc: 'Full body wellness massage',          duration: 60,  price: '899',   by: ['Olena'] },
    { name: 'Relaxing Full Body Massage 60 min',     desc: 'Deep relaxation full body',           duration: 60,  price: '899',   by: ['Olena'] },
    { name: 'Therapeutic Deep Massage 60 min',       desc: 'Deep tissue therapeutic massage',     duration: 60,  price: '1 199', by: ['Olena'] },
    { name: 'Hot Stone Massage',                     desc: 'Warm stone relaxation massage',       duration: 60,  price: '999',   by: ['Olena'] },
    { name: 'Facial Massage',                        desc: 'Relaxing face and neck massage',      duration: 60,  price: '899',   by: ['Olena'] },
    { name: 'Cupping Massage',                       desc: 'Traditional cupping therapy',         duration: 60,  price: '899',   by: ['Olena'] },
    { name: 'Pregnancy Massage',                     desc: 'Safe and gentle massage for expectant mothers', duration: 60, price: '899', by: ['Olena'] },
    { name: 'Anti-Cellulite Massage 60 min',         desc: 'Targeted anti-cellulite massage',     duration: 60,  price: '999',   by: ['Olena'] },
    { name: 'Relaxing Full Body Massage 90 min',     desc: 'Extended full body relaxation',       duration: 90,  price: '1 199', by: ['Olena'] },
    { name: 'Therapeutic Deep Massage 90 min',       desc: 'Extended deep tissue massage',        duration: 90,  price: '1 399', by: ['Olena'] },
    { name: 'Total Recovery',                        desc: '120-minute complete body treatment',  duration: 120, price: '1 599', by: ['Olena'] },
  ],
  'Pressotherapy': [
    { name: 'Pressotherapy',                         desc: 'Lymphatic drainage pressotherapy',   duration: 45,  price: '599',   by: ['Olena'] },
    { name: 'Pressotherapy + Neck, Shoulders & Head', desc: 'Pressotherapy with upper body massage', duration: 45, price: '899', by: ['Olena'] },
    { name: 'Pressotherapy + Facial Massage',        desc: 'Pressotherapy with facial massage',  duration: 60,  price: '1 199', by: ['Olena'] },
  ],
  'RF Treatment': [
    { name: 'RF-Lifting',                            desc: 'Radiofrequency facial skin tightening', duration: 60, price: '899', by: ['Olena'] },
  ],
  'Hair Removal': [
    { name: 'Sugaring — Part of Face',               desc: 'One facial area',                    duration: 15,  price: '200',   by: ['Olena'] },
    { name: 'Sugaring — Full Face',                  desc: 'Complete facial sugaring',           duration: 30,  price: '480',   by: ['Olena'] },
    { name: 'Sugaring — Between Brows',              desc: 'Brow area',                          duration: 10,  price: '170',   by: ['Olena'] },
    { name: 'Sugaring — Underarms',                  desc: 'Underarm sugaring',                  duration: 20,  price: '320',   by: ['Olena'] },
    { name: 'Sugaring — Half Arms',                  desc: 'Lower arm sugaring',                 duration: 30,  price: '420',   by: ['Olena'] },
    { name: 'Sugaring — Full Arms',                  desc: 'Full arm sugaring',                  duration: 45,  price: '520',   by: ['Olena'] },
    { name: 'Sugaring — Half Legs',                  desc: 'Lower leg sugaring',                 duration: 40,  price: '600',   by: ['Olena'] },
    { name: 'Sugaring — Full Legs',                  desc: 'Full leg sugaring',                  duration: 60,  price: '800',   by: ['Olena'] },
    { name: 'Sugaring — Classic Bikini',             desc: 'Classic bikini line',                duration: 20,  price: '400',   by: ['Olena'] },
    { name: 'Sugaring — Medium Bikini',              desc: 'Extended bikini',                    duration: 30,  price: '480',   by: ['Olena'] },
    { name: 'Sugaring — Full Bikini',                desc: 'Full bikini sugaring',               duration: 45,  price: '690',   by: ['Olena'] },
    { name: 'Sugaring — Full Back',                  desc: 'Full back sugaring',                 duration: 30,  price: '480',   by: ['Olena'] },
    { name: 'Sugaring — Lower Back',                 desc: 'Lower back sugaring',                duration: 15,  price: '280',   by: ['Olena'] },
    { name: 'Sugaring — Stomach',                    desc: 'Stomach area sugaring',              duration: 15,  price: '280',   by: ['Olena'] },
    { name: 'Waxing — Lip or Chin',                  desc: 'Facial waxing',                      duration: 15,  price: '250',   by: ['Caroline'] },
  ],
  'Body Treatments': [
    { name: 'Anti-Cellulite Massage 30 min',         desc: 'Targeted anti-cellulite body massage', duration: 30, price: '795',  by: ['Caroline'] },
    { name: 'Madero Massage',                        desc: 'Wood therapy body contouring massage', duration: 60, price: '1 300', by: ['Caroline'] },
    { name: 'Classic Body Massage',                  desc: 'Classic relaxing body massage',        duration: 75, price: '1 000', by: ['Caroline'] },
  ],
  "Men's Treatments": [
    { name: 'AHA Back Treatment',                    desc: 'AHA exfoliating treatment for the back', duration: 60, price: '1 499', by: ['Ludmila'] },
    { name: 'Deep Cleansing Back',                   desc: 'Deep cleansing for back skin',           duration: 50, price: '895',   by: ['Ludmila'] },
    { name: 'Classic Facial for Men',                desc: 'Deep cleansing facial for men',          duration: 80, price: '1 698', by: ['Ludmila'] },
  ],
};

export const SERVICE_CATS: ServiceCategory[] = [
  { id: 'packages',     title: 'Packages & Offers',   treatments: TREATMENTS['Packages & Offers'] },
  { id: 'microneedling',title: 'Microneedling',        treatments: TREATMENTS['Microneedling'] },
  { id: 'prx',          title: 'PRX-T33',              treatments: TREATMENTS['PRX-T33'] },
  { id: 'insculpt',     title: 'Insculpt Chair',       treatments: TREATMENTS['Insculpt Chair'] },
  { id: 'facials',      title: 'Facials',              treatments: TREATMENTS['Facials'] },
  { id: 'peels',        title: 'Peels',                treatments: TREATMENTS['Peels'] },
  { id: 'advanced',     title: 'Advanced Skincare',    treatments: TREATMENTS['Advanced Skincare'] },
  { id: 'brows',        title: 'Brows & Lashes',       treatments: TREATMENTS['Brows & Lashes'] },
  { id: 'lashlift',     title: 'Lashlift',             treatments: TREATMENTS['Lashlift'] },
  { id: 'massage',      title: 'Massage',              treatments: TREATMENTS['Massage'] },
  { id: 'pressotherapy',title: 'Pressotherapy',        treatments: TREATMENTS['Pressotherapy'] },
  { id: 'rf',           title: 'RF Treatment',         treatments: TREATMENTS['RF Treatment'] },
  { id: 'hair-removal', title: 'Hair Removal',         treatments: TREATMENTS['Hair Removal'] },
  { id: 'body',         title: 'Body Treatments',      treatments: TREATMENTS['Body Treatments'] },
  { id: 'mens',         title: "Men's Treatments",     treatments: TREATMENTS["Men's Treatments"] },
];
