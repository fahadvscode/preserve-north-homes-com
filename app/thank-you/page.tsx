import { JsonLd } from "@/components/JsonLd";
import { ThankYouEvents } from "@/components/ThankYouEvents";
import { CtaLink } from "@/components/CtaLink";
import { PageHeader, Section } from "@/components/LayoutBits";
import { PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.thankYou();

export default function ThankYouPage() {
  const meta = PAGE_META.thankYou;
  return (
    <>
      <ThankYouEvents />
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank you", path: "/thank-you" },
        ])}
      />
      <PageHeader
        h1={meta.h1}
        lede="The Registration Team will notify you when Preserve North pricing, floor plans, and a VIP launch date are released. There is no purchase obligation."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Thank you", href: "/thank-you" },
        ]}
      />
      <Section labelledBy="next">
        <h2 id="next" className="font-display text-2xl font-semibold text-brand-deep">
          While you wait
        </h2>
        <p className="mt-4 max-w-[62ch] text-text-primary">
          The buyer guide and FAQ collect the sourced facts available today, including how to
          read an Oakville pre-construction file before a price list exists, and what remains
          unpublished for Preserve North.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/blog/oakville-pre-construction-guide" location="thank_you">
            Read the Oakville pre-construction guide
          </CtaLink>
          <CtaLink href="/faq" location="thank_you_faq" variant="text" className="btn-primary">
            Preserve North FAQ
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
