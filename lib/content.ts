/**
 * Single source of truth for preservenorthhomes.com — primary information hub.
 * Every page, metadata block, and JSON-LD block reads from this file.
 *
 * HOW TO BUMP FRESHNESS DATES:
 * When Mattamy Homes releases new Preserve North details (pricing, floor plans,
 * occupancy, incentives, deposit schedule), update LAST_UPDATED and LAST_UPDATED_ISO
 * here. Sitemap lastmod, footer, FAQ, JSON-LD dateModified, and disclaimer copy
 * all derive from these two constants.
 */

export const SITE_URL = "https://preservenorthhomes.com";
export const SITE_NAME = "preservenorthhomes.com";
export const SITE_ORG_NAME = "preservenorthhomes.com";
export const PROJECT_NAME = "Preserve North";
export const PROJECT_NAME_FULL = "Preserve North by Mattamy Homes";
export const WORDMARK = "Preserve North";
export const BUILDER = "Mattamy Homes";
export const CITY = "Oakville";
export const SALES_CENTRE_ADDRESS = "1388 Dundas Street West, Oakville, ON L6M 4L8";
export const LAST_UPDATED = "September 1, 2026";
export const LAST_UPDATED_ISO = "2026-09-01";
export const STATUS = "Coming Soon — Registration Open";
export const STATUS_BADGE = "Coming Soon — Registration Open";
export const TAGLINE = "Where New Feels Established";
export const SITE_SOURCE = "https://preservenorthhomes.com";

export const GEO = {
  // [UNVERIFIED — approximate] centroid of the North Oakville East Secondary Plan
  // Area near Dundas Street West & Sixth Line. Verify against the exact parcel before launch.
  latitude: 43.4945,
  longitude: -79.7378,
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Dundas%20Street%20West%20%26%20Sixth%20Line%2C%20Oakville%2C%20ON&z=14&output=embed";

export const HERO_EYEBROW = "PRE-CONSTRUCTION · OAKVILLE, ONTARIO · INFORMATION HUB";
export const HERO_SUBHEAD =
  "A complete public fact sheet for Preserve North Oakville — townhomes and detached homes by Mattamy Homes near Dundas Street West and Sixth Line, currently Coming Soon.";
export const CTA_LABEL = "Register for Preserve North Updates";
export const CTA_NAV_LABEL = "VIP Registration";
export const FORM_HEADING = "VIP Registration";
export const FORM_LEDE =
  "Register for Preserve North community updates. Free, with no purchase obligation. Registered buyers are typically notified first when floor plans and pricing are released.";

export const HERO_IMAGE = {
  src: "/images/preserve-north-hero.webp",
  alt: "Preserve North Oakville woodland trail near Dundas Street West and Sixth Line in North Oakville",
  caption:
    "Trail and woodland context for Preserve North Oakville. Official architectural renderings have not been released by Mattamy Homes as of September 1, 2026.",
  width: 1536,
  height: 1024,
};

export const GALLERY_IMAGES = [
  {
    src: "/images/preserve-north-hero.webp",
    alt: "Preserve North Oakville woodland trail context used as a rendering placeholder",
    caption:
      "Woodland and trail context near Preserve North. Independent neighbourhood-context photography, not an official Mattamy Homes rendering of Preserve North.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-nhs-trail.webp",
    alt: "Preserve North renderings placeholder — Natural Heritage System trail in North Oakville",
    caption:
      "Multi-use trail through woodland typical of North Oakville’s Natural Heritage System. Per the Town of Oakville Urban Design Brief, Preserve North is planned around an NHS corridor with a connected trail network.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-existing-neighbourhood.webp",
    alt: "Existing Preserve community streetscape illustrating the neighbourhood Preserve North will extend",
    caption:
      "Established North Oakville streetscape illustrating the 2- to 3-storey character of earlier Preserve phases. Neighbourhood-context photography, not a rendering of unreleased Preserve North elevations.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-neighbourhood-park.webp",
    alt: "Neighbourhood park meadow context planned near Preserve North Oakville",
    caption:
      "Park-meadow context illustrating the kind of neighbourhood greenspace described in Oakville’s Urban Design Brief for Phase 4, which plans a future neighbourhood park beside a future public elementary school site.",
    width: 1536,
    height: 1024,
  },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Preserve North. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of September 1, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Preserve North and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Preserve North | Oakville by Mattamy Homes",
    description:
      "Preserve North Oakville is Mattamy Homes' Phase 4 community of townhomes and detached homes in North Oakville. Coming Soon — register for the public fact sheet.",
    h1: "Preserve North Oakville — New Townhomes & Detached Homes by Mattamy Homes",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Preserve North Floor Plans | Oakville Homes",
    description:
      "Preserve North floor plans have not been released. Planned townhomes and detached homes in Oakville's Phase 4 Preserve community, with sizes still to be announced.",
    h1: "Preserve North Floor Plans — Townhomes & Detached Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Preserve North Price List | Coming Soon",
    description:
      "Preserve North prices are unreleased as of September 2026. Register to be notified when Mattamy Homes publishes the Oakville Coming Soon price list.",
    h1: "Preserve North Prices — Coming Soon Price List",
  },
  location: {
    path: "/location",
    title: "Preserve North Location | North Oakville",
    description:
      "Preserve North location: North Oakville near Dundas Street West, Sixth Line, and Burnhamthorpe Road East, with trails, transit, and a planned school site.",
    h1: "Preserve North Location — North Oakville",
  },
  gallery: {
    path: "/gallery",
    title: "Preserve North Renderings | Oakville Site Plan",
    description:
      "Preserve North renderings and an Oakville site plan have not been published. Neighbourhood-context photography until Mattamy Homes releases official elevations.",
    h1: "Preserve North Renderings — Oakville Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Preserve North FAQ | Oakville Buyer Answers",
    description:
      "Preserve North FAQ covering what the community is, who builds it, where it sits in Oakville, home types, VIP registration, and Coming Soon answers.",
    h1: "Preserve North FAQ — Oakville Buyer Answers",
  },
  register: {
    path: "/register",
    title: "Preserve North VIP Registration | Updates",
    description:
      "Preserve North VIP registration — free community updates when Mattamy Homes releases Oakville floor plans, pricing, and a launch date. No purchase obligation.",
    h1: "Preserve North VIP Registration",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Preserve North Oakville",
    description:
      "Your Preserve North VIP registration has been received. You will be notified when pricing and floor plans are released.",
    h1: "Registration received",
    robots: { index: false, follow: false },
  },
  guide: {
    path: "/blog/oakville-pre-construction-guide",
    title: "Oakville Pre-Construction Guide 2026",
    description:
      "Oakville pre-construction guide 2026: what to know before you buy a new home — deposits, occupancy, assignment, schools, and how to read a Coming Soon file.",
    h1: "Oakville Pre-Construction Guide 2026: What to Know Before You Buy",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | preservenorthhomes.com",
    description:
      "How this independent Preserve North information site at preservenorthhomes.com collects, stores, and protects registration data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | preservenorthhomes.com",
    description:
      "Terms of use for this independent Preserve North information and registration website at preservenorthhomes.com.",
    h1: "Terms of Use",
  },
};

export const NAV = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/oakville-pre-construction-guide", label: "Buyer Guide" },
] as const;

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Preserve North floor plans" },
  pricing: { href: "/pricing", text: "See Preserve North pricing & deposit structure" },
  location: { href: "/location", text: "Explore the Preserve North location" },
  faq: { href: "/faq", text: "Read the full Preserve North FAQ" },
  floorPlansPricing: { href: "/pricing", text: "Check current Preserve North pricing" },
  floorPlansRegister: { href: "/register", text: "Register for floor plan updates" },
  pricingRegister: {
    href: "/register",
    text: "Register to be notified when prices release",
  },
  locationFaq: { href: "/faq", text: "See more Preserve North location FAQs" },
  faqRegister: { href: "/register", text: "Register for Preserve North updates" },
  guide: {
    href: "/blog/oakville-pre-construction-guide",
    text: "Oakville Pre-Construction Guide 2026: What to Know Before You Buy",
  },
} as const;

export const QUICK_FACTS = [
  { label: "Builder", value: "Mattamy Homes" },
  { label: "Type", value: "Townhomes & Detached Homes" },
  { label: "Address / Area", value: "North Oakville — near Dundas Street West & Sixth Line" },
  { label: "City", value: "Oakville, Ontario" },
  { label: "Part of", value: "The Preserve (Phase 4)" },
  { label: "Site size", value: "107 acres (43.4 ha)" },
  { label: "Starting Price", value: "To be announced" },
  { label: "Deposit", value: "To be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Status", value: "Coming Soon — Registration Open" },
] as const;

export const HOME_ANSWER =
  "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, planned to offer townhomes and detached homes on the north edge of Mattamy's established Preserve neighbourhood. Located near Dundas Street West and Sixth Line, the project is currently in its Coming Soon stage, with pricing and floor plans to be released to registered buyers first.";

export const HOME_OVERVIEW = [
  "Preserve North Oakville is the name buyers, answer engines, and municipal files now use for Mattamy Homes' Phase 4 extension of The Preserve. The lands sit in the North Oakville East Secondary Plan Area, north of Dundas Street West, west of Sixth Line, and south of Burnhamthorpe Road East. Carding Mill Trail and Preserve Drive are planned to continue north from the occupied streets of Phases 1 through 3. The Town of Oakville's approved Urban Design Brief (DA-131705) describes a 107-acre (43.4 ha) study area organized around a Natural Heritage System corridor, with a future public elementary school and a future neighbourhood park sited centrally.",
  "Mattamy Homes' public Preserve North page, as of this update, is still a Coming Soon shell. Aggregator directories often list “The Preserve” as a category or point to Preserve West, then skip Phase 4 entirely. This independent hub exists so the sourced facts — builder, phase, boundaries, planned home types, school site, trail plan, and every figure that remains to be announced — live in crawlable HTML rather than in a JavaScript overlay. It is not the official Mattamy Homes website and does not speak for the builder.",
  "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. In Oakville the company has been delivering The Preserve since the early 2010s. Preserve West and East Preserve are the earlier, already-selling phases centred near the shared sales-information address at 1388 Dundas Street West, Oakville, ON L6M 4L8. Preserve North is the northern continuation of that same master plan, not a standalone greenfield with a new street pattern invented from scratch. The tagline associated with the community is “Where New Feels Established.”",
  "Housing in the Urban Design Brief is planned as single detached homes and street townhouses at 2 to 3 storeys, matching the architectural height range of the earlier Preserve phases. Detached lots are described from about 10.4 m to 15.25 m (roughly 34 to 50 feet), with the low-density area also referenced across a 34- to 65-foot range. A block of 22 street townhouses is proposed on the west side of Preserve Drive, south of the future public school. That 22-unit figure is a municipal planning number, subject to change, and is not a confirmed count of homes in the first sales release.",
  "As of September 1, 2026, Mattamy Homes has not released Preserve North floor plans, prices, a deposit schedule, incentives, occupancy, or a firm VIP launch date. Those cells stay labelled “to be announced” on this site until the builder publishes them. Registration through the five-field form is free and creates no purchase obligation. Registered buyers are typically notified first when a booklet and a price list appear. Use this page as the overview, then continue with the floor-plans, pricing, location, and FAQ pages for the same facts in more depth.",
];

export const COMPARISON_ROWS = [
  { feature: "Phase", north: "Phase 4 of The Preserve", west: "Earlier Preserve phase" },
  { feature: "Status", north: "Coming Soon — registration only", west: "Already selling" },
  {
    feature: "Location",
    north: "North of the existing neighbourhood, toward Burnhamthorpe Road East",
    west: "Near 1388 Dundas Street West",
  },
  { feature: "Pricing", north: "To be announced", west: "Published through the active sales process" },
  {
    feature: "Trails",
    north: "Planned to inherit Phases 1–3 trails plus a new NHS corridor",
    west: "Existing trail network already in place",
  },
] as const;

export const COMPARISON_COPY = [
  "Preserve West is an earlier phase of Mattamy's Preserve community, already selling near 1388 Dundas Street West. Preserve North is the newer Phase 4 extension to the north of that existing neighbourhood, sharing the same builder, design vision, and connected trail network, but with its own distinct street layout, lot mix, and — once released — pricing.",
  "The comparison that can be written today is infrastructure timing, not a dollar spread. Preserve North inherits sidewalks, trails, and a neighbourhood-centre pattern already built through Phases 1–3. Preserve West already has a public sales process. Until Mattamy Homes releases a Preserve North price list, any claim that Phase 4 is cheaper, a better entry, or the last chance in The Preserve is unsupported.",
  "Other North Oakville campaigns along Dundas Street West, Sixth Line, and the Highway 407 edge compete for the same buyer. They do not share this Phase 4 lot mix or this NHS geometry. Do not import another project's model names or asking prices onto Preserve North.",
];

export const AEO_PASSAGES: { heading: string; text: string }[] = [
  {
    heading: "What is Preserve North and who is building it?",
    text: "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, offering townhomes and detached homes. It is Phase 4 of Mattamy's established Preserve community in North Oakville, situated north of Dundas Street West and west of Sixth Line. The project is currently in its Coming Soon registration stage.",
  },
  {
    heading: "Where is Preserve North located in Oakville?",
    text: "Preserve North sits in North Oakville, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, as an extension of Carding Mill Trail and Preserve Drive. It forms the northern extension of Mattamy's existing Preserve community within the North Oakville East Secondary Plan Area.",
  },
  {
    heading: "What home types will be available at Preserve North?",
    text: "Preserve North is planned to offer single detached homes on lots ranging from roughly 34 to 65 feet wide and a block of street townhouses near the future neighbourhood centre on Preserve Drive. Exact floor plans, sizes, and bedroom counts have not yet been released by Mattamy Homes as of the project's Coming Soon stage.",
  },
  {
    heading: "How much will homes at Preserve North cost?",
    text: "Mattamy Homes has not released pricing for Preserve North as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins. Nearby North Oakville pre-construction communities have recently launched in the $900,000 to $1.5 million-plus range.",
  },
  {
    heading: "Is Preserve North part of The Preserve community?",
    text: "Yes. Preserve North is Phase 4 of Mattamy Homes' broader Preserve master-planned community in North Oakville, following Phases 1 through 3, which are already built and selling under names such as Preserve West and East Preserve. It shares the same design vision and connects directly into the existing street and trail network.",
  },
  {
    heading: "When will Preserve North launch for sale?",
    text: "Mattamy Homes has not announced a firm sales launch date for Preserve North. The project is currently in a Coming Soon, registration-only stage, where interested buyers can sign up for community updates to be notified when floor plans, pricing, and a VIP launch date are announced.",
  },
  {
    heading: "What is the deposit structure for Preserve North?",
    text: "Preserve North's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registered buyers usually receive this information first, alongside pricing and floor plans.",
  },
  {
    heading: "How do I get VIP registration for Preserve North?",
    text: "Buyers can register for Preserve North community updates directly through this site's registration form, providing a first name, last name, email, and phone number. Registered buyers are typically notified ahead of the public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    heading: "What schools will serve Preserve North?",
    text: "Preserve North falls within North Oakville, an area generally served by the Halton District School Board and the Halton Catholic District School Board. A future public elementary school site is planned within the Preserve North (Phase 4) lands itself, adjacent to a future neighbourhood park. Exact school assignments should be confirmed with the relevant board before purchase.",
  },
  {
    heading: "Is Preserve North a good investment?",
    text: "Preserve North sits within an established, amenity-rich master-planned community in a supply-constrained Oakville market, which are generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the unreleased pricing, deposit structure, and closing timeline, and are encouraged to review the assignment and resale policy once Mattamy Homes publishes its agreement of purchase and sale.",
  },
  {
    heading: "How does Preserve North compare to Preserve West?",
    text: "Preserve West is an earlier, currently-selling phase of Mattamy's Preserve community centred near 1388 Dundas Street West, while Preserve North is the newer Phase 4 extension north of that existing neighbourhood. Both share the same builder, design vision, and trail network; Preserve North's specific pricing and floor plans have not yet been released.",
  },
  {
    heading: "What amenities and trails are near Preserve North?",
    text: "Preserve North is planned around a Natural Heritage System (NHS) corridor with a connected multi-use trail network, a future neighbourhood park, and a future public elementary school sited centrally within the community. It links directly into the existing trail and sidewalk network built through Phases 1-3 of The Preserve to the south.",
  },
  {
    heading: "What is the difference between Preserve North's townhomes and detached homes?",
    text: "Per Oakville's approved Urban Design Brief, Preserve North's street townhomes are planned in a block near the future neighbourhood centre on Preserve Drive, while single detached homes on lots of roughly 34 to 65 feet make up the majority of the community's low-density areas. Specific plan names, sizes, and pricing for each collection have not yet been released.",
  },
  {
    heading: "Who is Mattamy Homes and what is their track record in Oakville?",
    text: "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. In Oakville specifically, Mattamy has built the multi-phase Preserve community since the early 2010s, including Preserve West and East Preserve, with Preserve North (Phase 4) as its newest extension in North Oakville.",
  },
  {
    heading: "What highways and transit serve Preserve North?",
    text: "Preserve North is positioned in North Oakville with practical access to Highway 407 to the north and the Dundas Street West / Sixth Line corridor for east-west and north-south travel. An existing bus stop serves Preserve Drive roughly 575 metres south of the Phase 4 lands, connecting into Oakville Transit's broader network.",
  },
];

export const HOME_LOCATION_AEO = AEO_PASSAGES.filter((item) =>
  [
    "Where is Preserve North located in Oakville?",
    "What highways and transit serve Preserve North?",
    "What schools will serve Preserve North?",
    "What amenities and trails are near Preserve North?",
  ].includes(item.heading),
);

export const FLOOR_PLAN_COLLECTIONS = [
  {
    name: "Townhomes",
    slug: "townhomes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned as street townhomes near the future neighbourhood centre on Preserve Drive, per Oakville's approved Urban Design Brief. Individual plan names, square footage, and bedroom counts have not yet been released by Mattamy Homes. Register to be notified when Preserve North floor plans are published.",
  },
  {
    name: "Detached Homes",
    slug: "detached-homes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned on lots ranging from roughly 34 to 65 feet across Preserve North's low-density areas, with 2 to 3-storey building heights. Individual plan names, square footage, and bedroom counts have not yet been released by Mattamy Homes. Register to be notified when Preserve North floor plans are published.",
  },
] as const;

export const FLOOR_PLANS_ANSWER =
  "Preserve North floor plans have not been released by Mattamy Homes as of the project's Coming Soon stage. Planned collection tiers are street townhomes near the future neighbourhood centre on Preserve Drive and single detached homes on lots of roughly 34 to 65 feet. Exact plan names, square footage, and bedroom counts will be published at VIP launch.";

export const FLOOR_PLANS_COPY = [
  "Preserve North floor plans are the booklet most buyers want first, and they are the document this page cannot yet display. Mattamy Homes has not issued plan names, interior dimensions, or bedroom and bathroom counts for Phase 4. What can be stated from municipal planning files is the product envelope: street townhomes near the future neighbourhood centre on Preserve Drive, and single detached homes on lots described from roughly 34 to 65 feet, at 2 to 3 storeys.",
  "On other Ontario communities, Mattamy typically structures a launch as named collections rather than a single undifferentiated list. Elevations, included features, and lot premiums are usually presented together with the floor plans at VIP. That pattern is a general Mattamy practice, not a confirmed Preserve North package. Until the builder publishes Preserve North-specific materials, treat collection structure as expected process rather than a guaranteed product mix.",
  "The Town of Oakville Urban Design Brief for Phase 4 is the current source for lot geometry. Single detached lots are described in a 10.4 m to 15.25 m range (approximately 34 to 50 feet), with the broader low-density area also referenced at 34 to 65 feet. Building heights are planned at 2 to 3 storeys. Those figures describe the planning envelope, not a marketed model, and they are not a substitute for a square-footage table.",
  "A block of 22 street townhouses is proposed on the west side of Preserve Drive, south of the future public school, per the same brief. That is a municipal planning figure, subject to change, and must not be read as a confirmed number of homes in the sales release. Preserve North's actual release count has not been announced. Anyone modelling absorption from a 22-unit block is mixing a planning diagram with a sales campaign.",
  "Registered buyers are typically notified first when Mattamy Homes publishes floor plans. There is no cost to register on this site, and registration does not reserve a specific lot or plan. Use the form on this page to request floor-plan updates, then review pricing status once figures are released.",
  "Until a booklet exists, the honest description of Preserve North floor plans is a pair of collection tiers plus the planning envelope. Street townhomes are planned near the future neighbourhood centre on Preserve Drive. Detached homes occupy the low-density remainder on lots described from roughly 34 to 65 feet, at 2 to 3 storeys. That is the entire confirmed product statement as of September 1, 2026.",
  "Most Oakville directories mention “The Preserve” as a category or list Preserve West, and skip Phase 4 entirely. A dedicated, crawlable floor-plans page that refuses to invent model names is the correct pre-launch state. When Mattamy releases plans, this page will add real cards — names, sizes, and bedroom counts — rather than remaining a placeholder. Do not treat another community's collection names as if they were Preserve North models.",
];

export const PRICING_ANSWER =
  "Mattamy Homes has not released pricing for Preserve North as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins. Nearby North Oakville pre-construction communities have recently launched in the $900,000 to $1.5 million-plus range.";

export const PRICING_AS_OF =
  "As of September 1, 2026, Mattamy Homes has not released pricing for Preserve North.";

export const PRICING_ROWS = [
  { type: "Townhomes", price: "To be announced", status: "Coming Soon" },
  { type: "Detached Homes", price: "To be announced", status: "Coming Soon" },
] as const;

export const DEPOSIT_ROWS = [
  { milestone: "Initial deposit on signing", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Second staged deposit", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Subsequent staged deposits", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Balance on closing", amount: "To be announced", due: "Occupancy to be announced" },
] as const;

export const INCENTIVE_ROWS = [
  { item: "Decor dollars / design studio credit", status: "To be announced" },
  { item: "Capped development charges", status: "To be announced" },
  { item: "Assignment fee policy", status: "To be announced" },
  { item: "Other launch incentives", status: "To be announced" },
] as const;

export const PRICING_COPY = [
  "Preserve North prices have not been published. This page records the Coming Soon price-list status for the information hub: every cell below reads “To be announced” until Mattamy Homes issues a VIP list. Nearby North Oakville pre-construction communities have recently launched from the $900,000s to over $1.5 million; those figures are corridor context, not a Preserve North offer and not a forecast.",
  "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities. The usual pattern — an initial deposit on signing, then further deposits at set intervals before occupancy — is described here as general process, not as a confirmed Preserve North schedule. Amounts, percentages, and due dates remain to be announced.",
  "Incentives such as decor dollars or capped development charges have appeared on other Mattamy Ontario launches in the past. Any Preserve North-specific incentive will be confirmed at VIP launch, not before. This site will not invent a number to fill a template slot.",
  "Occupancy and closing dates are likewise unreleased. Registered buyers are typically notified first when a VIP launch date and an occupancy window are set. Register to be notified when prices release.",
  "Fabricating a starting price to rank for a query would be both inaccurate and a compliance failure. When Mattamy Homes issues a VIP list, the last-updated date in the site source file is the switch that republishes these tables. Until that day, the only accurate statement is that pricing has not been released.",
  "A general Mattamy Ontario VIP launch still tends to look like this: registered buyers receive a notice, a sales centre appointment window opens, collections and prices are presented together, and a staged deposit schedule is attached to the agreement of purchase and sale. None of those intervals is confirmed for Preserve North. Occupancy remains to be announced.",
  "Lot premiums, elevation premiums, and included-feature packages usually move the real price more than a collection’s opening number. None of those adders is public for Preserve North. Development-charge treatment, assignment fees, rental restrictions, and POTL or freehold confirmation for the townhouse block belong in the purchase agreement, not on a guess. E.&O.E. Information current as of September 1, 2026.",
];

export const LOCATION_ANSWER =
  "Preserve North sits in North Oakville, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, as an extension of Carding Mill Trail and Preserve Drive. It forms the northern extension of Mattamy's existing Preserve community within the North Oakville East Secondary Plan Area.";

export const LOCATION_COPY = {
  intro: [
    "Preserve North location is the part of the public record that can be written down today, even while floor plans and prices remain unpublished. The Phase 4 lands sit north of Dundas Street West, south of Burnhamthorpe Road East, and west of Sixth Line. Carding Mill Trail and Preserve Drive are planned to continue north from the already-built Preserve community. Those named edges are the ones a listing, a school-board query, or an answer engine should repeat.",
    "Mattamy Homes lists a shared Preserve sales-information point at 1388 Dundas Street West, Oakville, ON L6M 4L8 — the same centre used for earlier Preserve phases. That address is a sales-centre reference, not a claim that every Preserve North lot fronts Dundas Street West, and it is not a substitute for a Phase 4 lot plan.",
    "Highway 407 to the north and the Dundas Street West / Sixth Line pair are the named corridors for this part of Oakville: east-west employment access, north-south movement toward Milton and Mississauga, and a regional highway edge that earlier Preserve phases already use. Drive times vary with traffic and should be verified by each buyer; the highway relationship is the planning fact, not a guaranteed commute clock.",
    "The approximate map pin used on this site is 43.4945, −79.7378. That coordinate is flagged as unverified and approximate — a centroid near Dundas Street West and Sixth Line inside the North Oakville East Secondary Plan Area, not a surveyed lot corner. Confirm the exact parcel against the builder’s released plan and the Town of Oakville’s files before relying on it for anything more than orientation.",
  ],
  masterPlan: [
    "Phase 4 is the northern continuation of a master plan that already has streets, trails, and a neighbourhood-centre pattern on the ground. The Town of Oakville Urban Design Brief (DA-131705) describes a 107-acre (43.4 ha) combined study area organized around a Natural Heritage System corridor, with a future public elementary school and neighbourhood park sited centrally.",
    "Housing in that brief is planned as single detached homes and street townhouses at 2 to 3 storeys. Lot widths for singles are described from about 10.4 m to 15.25 m (roughly 34 to 50 feet), with the low-density area also referenced across a 34- to 65-foot range. A 22-unit street-townhouse block is proposed on the west side of Preserve Drive, south of the future public school — a planning figure, subject to change.",
    "The Neighbourhood Centre to the north is planned for retail and mixed-use potential, giving Phase 4 a walkable commercial edge that many standalone Oakville launches still have to invent. To the south, Phases 1–3 already supply the street grid Preserve North is designed to join. For anyone trying to picture daily life before a marketing site plan exists, that south fabric is the first place to look.",
    "Named nearby product for context, not as substitutes: Preserve West and East Preserve are the earlier Mattamy phases of the same community. Other North Oakville pre-construction campaigns along Dundas Street West and Sixth Line compete for the same buyer, but they do not share this Phase 4 lot mix or this NHS geometry.",
    "Site size remains 107 acres (43.4 ha) for the combined Phase 4 study area. That figure is large enough to include NHS lands, a school block, a park, detached lots, and the townhouse block — which is why a unit count for the sales release has not been inferred from acreage on this site.",
  ],
  transit: [
    "Preserve North is positioned in North Oakville with practical access to Highway 407 to the north and the Dundas Street West / Sixth Line corridor for east-west and north-south travel. Those named roads are the transit and highway facts this page is willing to state. Door-to-office minutes are not.",
    "An existing Oakville Transit bus stop serves Preserve Drive at Sixteen Mile Drive, roughly 575 metres south of the Phase 4 lands, connecting into Oakville Transit's broader network. That stop already exists because earlier Preserve phases are occupied — another master-plan inheritance rather than a future promise.",
    "Dundas Street West is the east-west arterial along the southern edge of this planning area; Sixth Line is the north-south arterial along the east. Highway 407 sits to the north of Burnhamthorpe Road East. Those three named roads, plus the existing bus stop, are the complete highway-and-transit statement as of September 1, 2026.",
  ],
  schools: [
    "Preserve North falls within North Oakville, an area generally served by the Halton District School Board and the Halton Catholic District School Board. A future public elementary school site is planned within the Preserve North (Phase 4) lands itself, adjacent to a future neighbourhood park.",
    "Exact school assignments should be confirmed with the relevant board before purchase. Named catchment schools for this exact parcel are not confirmed on this site. [UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.]",
    "A planned elementary site is not an open school. Secondary-school catchments, French immersion, and Catholic versus public assignment can all differ from a neighbour one street south. This page will not name a specific school as “the Preserve North school” until a board confirms it.",
  ],
  trails: [
    "Preserve North is planned around a Natural Heritage System (NHS) corridor with a connected multi-use trail, a signed bike route along Carding Mill Trail, and a future neighbourhood park. These connect directly into the existing trail network built through Phases 1–3 of The Preserve to the south, per the Town of Oakville's approved trail plan.",
    "Trail segments inside Phase 4 will be delivered with the new streets rather than appearing overnight; confirm staging with occupancy documents. The green spine is part of why municipal planners organized the 107-acre study area the way they did, and it is part of why this location page can be more specific than “north Oakville new homes.”",
    "Taken together, the Preserve North location story is a master-plan continuation: Burnhamthorpe Road East to the north, Dundas Street West to the south, Sixth Line to the east, Carding Mill Trail and Preserve Drive running through, NHS lands as the green spine, a future school and park in the centre, Highway 407 to the north, and an existing bus stop already serving the occupied streets to the south.",
  ],
};

export const FAQ_PAGE_INTRO =
  "This Preserve North FAQ is the Oakville buyer-answer set for a Coming Soon community: what Preserve North is, who builds it, where the lands sit, which home types are planned, what remains unreleased, and how VIP registration works. Every answer below is written to stand alone if quoted by an answer engine. Unreleased figures stay labelled as to be announced. Last updated: September 1, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is Preserve North?",
    a: "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, planned to offer single detached homes and street townhomes. It is Phase 4 of Mattamy's established Preserve community, located north of Dundas Street West and west of Sixth Line, and is currently in a Coming Soon, registration-only stage.",
  },
  {
    q: "Who is the builder behind Preserve North?",
    a: "Preserve North is being built by Mattamy Homes, Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. Mattamy has built the multi-phase Preserve community in Oakville since the early 2010s, including the already-selling Preserve West and East Preserve phases.",
  },
  {
    q: "Where exactly is Preserve North located?",
    a: "Preserve North sits in North Oakville within the North Oakville East Secondary Plan Area, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, extending Carding Mill Trail and Preserve Drive northward from the existing Preserve community.",
  },
  {
    q: "What home types and sizes are available at Preserve North?",
    a: "Per the Town of Oakville's approved Urban Design Brief, Preserve North is planned to include single detached homes on lots ranging from roughly 34 to 65 feet and a block of 22 planned street townhouses near the future neighbourhood centre on Preserve Drive. Exact floor plans and square footage have not yet been released by Mattamy Homes.",
  },
  {
    q: "How much do homes at Preserve North cost?",
    a: "Mattamy Homes has not released pricing for Preserve North as of its Coming Soon stage. Registered buyers typically receive first access to pricing and floor plans once the VIP launch phase begins; nearby North Oakville pre-construction communities have recently launched from the $900,000s to over $1.5 million.",
  },
  {
    q: "What schools serve Preserve North?",
    a: "Preserve North falls within North Oakville, generally served by the Halton District School Board and the Halton Catholic District School Board. Notably, a future public elementary school site is planned within the Preserve North (Phase 4) lands themselves, adjacent to a future neighbourhood park. Buyers should confirm exact school catchments with the relevant board before purchasing.",
  },
  {
    q: "How do I get VIP access to Preserve North?",
    a: "You can register for Preserve North community updates directly on this site using the five-field form — first name, last name, email, and phone. Registered buyers are typically notified ahead of the general public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    q: "What is the deposit structure for Preserve North?",
    a: "Preserve North's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registering for updates is the fastest way to receive this information when it is released.",
  },
  {
    q: "When is the launch or occupancy for Preserve North?",
    a: "Mattamy Homes has not announced a firm sales launch date or occupancy timeline for Preserve North. The project is currently in a Coming Soon, registration-only stage; registered buyers are typically notified first when a VIP launch date is set.",
  },
  {
    q: "Are there incentives at Preserve North?",
    a: "Incentives for Preserve North have not been announced as of its Coming Soon stage. Mattamy Homes has offered incentives such as decor dollars or capped development charges on other Ontario launches in the past; any Preserve North-specific incentives will be confirmed at VIP launch, not before.",
  },
  {
    q: "Is there a cost to register for Preserve North?",
    a: "No. Registering for Preserve North community updates is free and simply adds you to Mattamy Homes' notification list for this project. There is no obligation to purchase and no cost associated with registering.",
  },
  {
    q: "What is the assignment or rental policy at Preserve North?",
    a: "Mattamy Homes has not published an assignment or rental policy specific to Preserve North, as the project has not yet reached its agreement of purchase and sale stage. Assignment and rental terms are typically detailed in the builder's purchase agreement at VIP launch — confirm directly with Mattamy Homes before relying on any third-party summary.",
  },
  {
    q: "How does Preserve North compare to other Oakville pre-construction communities?",
    a: "Preserve North benefits from sitting inside an already-established master-planned community — The Preserve — with existing trails, streets, and a nearby neighbourhood centre already built out through Phases 1-3. Compared to standalone new-launch projects elsewhere in Oakville, it inherits infrastructure and amenities that are already in place rather than years away.",
  },
  {
    q: "Is Preserve North a good investment?",
    a: "Preserve North sits within an established, amenity-rich master-planned community in a supply-constrained Oakville market — generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the currently unreleased pricing, deposit schedule, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its purchase agreement.",
  },
  {
    q: "How is Preserve North different from Preserve West?",
    a: "Preserve West is an earlier phase of Mattamy's Preserve community, already selling near 1388 Dundas Street West. Preserve North is the newer Phase 4 extension to the north of that existing neighbourhood, sharing the same builder, design vision, and connected trail network, but with its own distinct street layout, lot mix, and — once released — pricing.",
  },
  {
    q: "What trails and green space are near Preserve North?",
    a: "Preserve North is planned around a Natural Heritage System (NHS) corridor with a connected multi-use trail, a signed bike route along Carding Mill Trail, and a future neighbourhood park. These connect directly into the existing trail network built through Phases 1-3 of The Preserve to the south, per the Town of Oakville's approved trail plan.",
  },
];

export const REGISTER_LEDE =
  "Registering for Preserve North community updates is how buyers typically receive first access to floor plans and pricing when they are released, plus advance notice of the VIP launch date. There is no purchase obligation and no cost to register.";

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog/oakville-pre-construction-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const BLOG_GUIDE = {
  lede: "Oakville pre-construction in 2026 still asks the same practical questions: who is building, where the land sits, what the deposit will require, when occupancy might arrive, and which clauses in the purchase agreement will actually bind you. This guide walks through those questions before a price list exists, using Preserve North as a current Coming Soon example inside an established master plan.",
  sections: [
    {
      h2: "What “knowing before you buy” actually means in 2026",
      paragraphs: [
        "A useful 2026 question is not whether Oakville “always goes up.” Oakville is a supply-constrained GTA municipality with employment access, school-board demand, and a planning framework that limits how fast new ground-oriented housing can appear. Those are generally favourable fundamentals. They are not a guarantee of appreciation, allocation, or rental yield on any one project.",
        "Pre-construction adds three clocks that resale does not. Deposits leave a buyer’s account years before occupancy. Occupancy can move. Assignment and rental rules live in a builder’s agreement, not in a brochure. A purchase that looks simple on a launch weekend can look expensive if the deposit is front-loaded, the close is delayed, or assignment is tightly restricted.",
        "This guide does not rank builders or name a best Oakville launch. It explains how to read a Coming Soon file so that when a VIP list appears, the comparison is documents-first. Preserve North is used because it is a current North Oakville example: Mattamy Homes, Phase 4 of The Preserve, pricing not released as of September 1, 2026.",
      ],
    },
    {
      h2: "The 2026 Oakville pre-construction backdrop — without invented statistics",
      paragraphs: [
        "Oakville’s North Oakville East Secondary Plan Area is the planning container for much of the new ground-oriented product north of Dundas Street West. That framework, not a marketing map, is why communities such as The Preserve are organized around Natural Heritage System lands, school blocks, and neighbourhood centres rather than leftover storm ponds.",
        "Recent North Oakville pre-construction launches have opened in a wide band from the $900,000s to over $1.5 million. That range is corridor context. It is not a City of Oakville average, not a 2026 forecast, and not a Preserve North price. Lot width, collection, parking, and included features will move any new list more than a headline average.",
        "Interest rates, lender stress tests, and household incomes in 2026 will do as much to set absorption as any trail network. This page will not invent a rate path or a price-growth percentage. Buyers should run their own carrying-cost models with their lender and accountant, including land-transfer tax in Halton, legal fees, and HST treatment for a qualifying new home.",
      ],
    },
    {
      h2: "How to read a Coming Soon project before a booklet exists",
      paragraphs: [
        "Start with what is sourced. For Preserve North that means Mattamy Homes as builder, a 107-acre (43.4 ha) Phase 4 study area, planned townhomes and detached homes, 2- to 3-storey heights, and named edges: Burnhamthorpe Road East, Dundas Street West, Sixth Line, Carding Mill Trail, Preserve Drive. Occupancy, deposits, incentives, and interior sizes are to be announced.",
        "Next, separate location continuity from execution risk. An extension of an occupied street grid is a different kind of file from a first shovel on a greenfield. Preserve North connects into earlier Preserve phases that already have trails and a neighbourhood-centre pattern. That continuity can support daily-life questions later. It does not tell you what Mattamy will ask in 2026 dollars.",
        "Then wait for the documents that actually bind money: the price list, the deposit schedule, the occupancy target, and the agreement of purchase and sale. Until those exist, registration is an information request, not an allocation. Registering on this independent site is free and creates no purchase obligation.",
      ],
    },
    {
      h2: "Deposits, occupancy, and the cash that sits in between",
      paragraphs: [
        "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities: an initial deposit on signing, then further deposits at intervals before occupancy. That is a general pattern, not a confirmed Preserve North schedule. Amounts and due dates remain to be announced.",
        "The practical implication of staging is liquidity. A schedule that asks for a large share in the first ninety days is a different product from one that spreads deposits over two years. Opportunity cost, not just the headline price, is the comparison. Occupancy for Preserve North is to be announced, so any model that assumes a specific closing year is speculative.",
        "Carrying costs after occupancy include property tax, insurance, utilities, and — if townhomes are confirmed as POTL rather than freehold — a common-element fee. This site omits a maintenance-fee line until that tenure is confirmed. Do not copy a POTL number from another Oakville townhouse project onto Preserve North.",
      ],
    },
    {
      h2: "Assignment, rental, and the clauses that decide fit",
      paragraphs: [
        "Mattamy Homes has not published an assignment or rental policy specific to Preserve North, because the project has not reached its agreement of purchase and sale stage. Assignment fees, consent windows, and occupancy-before-rental rules are typically detailed in that agreement at VIP launch.",
        "Third-party summaries of other Mattamy communities are not Preserve North policy. A buyer who needs to assign before occupancy, or to rent on closing, should read the Preserve North agreement when it exists and confirm directly with Mattamy Homes. This independent site will not invent a fee or a yes/no.",
        "Resale after closing is a different legal event from assignment. Oakville ground-oriented resale in The Preserve’s earlier phases is the natural comparable set for Preserve North once closings occur. Until then, using Preserve West asking prices as a Phase 4 forecast confuses two releases.",
      ],
    },
    {
      h2: "Schools, trails, and highways as facts — not as slogans",
      paragraphs: [
        "Highway 407 to the north and the Dundas Street West / Sixth Line corridor are the named access facts for Preserve North. An existing Oakville Transit stop on Preserve Drive at Sixteen Mile Drive sits about 575 metres south of the Phase 4 lands. Those are orientation details. They are not a promise of a future GO station or a door-to-office minute count.",
        "Schools are a core Oakville household question. Preserve North falls within North Oakville, generally served by the Halton District School Board and the Halton Catholic District School Board, with a future public elementary school site planned inside Phase 4 beside a future neighbourhood park. Exact catchments should be confirmed with those boards. Named schools for this parcel are not listed here as confirmed.",
        "NHS trails, a signed bike route along Carding Mill Trail, and a future neighbourhood park are the green-space facts in the approved trail plan. They connect into earlier Preserve phases. Staging of new trail segments will follow the new streets. Buyers should not assume day-one trail completion on occupancy.",
      ],
    },
    {
      h2: "Preserve North as a worked example of a Coming Soon hub file",
      paragraphs: [
        "Preserve North Oakville is Phase 4 of Mattamy’s Preserve community. Preserve West is already selling near 1388 Dundas Street West. Phase 4 extends north toward Burnhamthorpe Road East. Both share the builder, the 2- to 3-storey design range, and the trail network. They do not share a published price list.",
        "The Urban Design Brief emphasizes singles on roughly 34- to 65-foot lots plus a planned street-townhouse block near the future neighbourhood centre on Preserve Drive. That mix affects both how the street will feel and which collection a household might wait for. It is not a ranking, and the 22-townhouse figure remains a planning number subject to change.",
        "If you are using this guide because you typed “Preserve North” or “Preserve North Oakville” into a search box, the next useful pages on this site are the fact-sheet home, the floor-plans placeholder, the price-list status table, the location map, and the sixteen-question FAQ. Register if you want notice when Mattamy Homes publishes the missing booklet.",
      ],
    },
    {
      h2: "A practical 2026 checklist before signing anything",
      paragraphs: [
        "Ask for the dated price list, the collection booklet with square footage, the deposit schedule with calendar dates, the occupancy target, and the assignment and rental clauses. If a salesperson or a website cannot produce those, the file is still Coming Soon — which is exactly where Preserve North sits as of this guide.",
        "Run land-transfer tax, legal, development charges, and HST treatment with a lawyer and accountant who work in Halton. Oakville is not Toronto; municipal land-transfer layers differ. Do not use a downtown condo worksheet on a North Oakville detached lot.",
        "Compare the launch against Preserve West’s then-current documents and against other North Oakville campaigns on Dundas Street West and Sixth Line, using like-for-like lot width and parking. Then decide. This site will publish Preserve North prices and floor plans when Mattamy Homes does. Until then, the buyer-guide answer is: sourced location facts, incomplete numbers, register for the list, and do not treat an unreleased project as a closed case. E.&O.E. Information current as of September 1, 2026.",
      ],
    },
  ],
};

export const GALLERY_INTRO =
  "Official architectural renderings and a public marketing site plan for Preserve North have not been released by Mattamy Homes as of September 1, 2026. Renderings will be added here once released by Mattamy Homes. Until then, this gallery shows neighbourhood-context photography of trails, woodland, and the established Preserve-area street character that Phase 4 is planned to extend — clearly labelled so it is never mistaken for a project rendering.";

export const FOOTER_BLURB =
  "Independent information hub for Preserve North by Mattamy Homes in Oakville, Ontario. Not the official builder website.";
