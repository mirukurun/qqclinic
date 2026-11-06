# Queens Qoncept Clinic

Website for Queens Qoncept Clinic, a beauty and aesthetic clinic on Birger Jarlsgatan in Stockholm. I designed and built it.

**Live:** [qqclinic.vercel.app](https://qqclinic.vercel.app)

## What it does

- **Services.** Every treatment with description, duration and price, grouped by category (facials, peels, microneedling, massage, body treatments and more).
- **Specialists.** Each specialist has a profile with the treatments they offer.
- **Booking flow.** A visitor can start from a treatment or from a specialist. The flow narrows the choice step by step and then sends the visitor to that specialist's page on Bokadirekt, where the clinic already takes bookings. Treatments can be linked directly, so a "Book" button on any service opens the flow with that treatment already selected.
- **Two languages.** English and Swedish, switchable in the header.
- **Gallery, about and contact pages**, with an interactive map of the clinic.

## Built with

- Next.js 15 (App Router) and React 19
- TypeScript
- Leaflet for the map
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

## Editing content

- Treatments, prices and specialists: `src/lib/data.ts`
- All interface text in both languages: `src/lib/i18n.ts`
