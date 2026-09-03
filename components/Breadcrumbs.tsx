import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface-alt border-b border-border">
      <ol className="mx-auto flex max-w-[1200px] flex-wrap gap-2 px-4 py-3 text-sm text-text-muted sm:px-5">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span aria-current="page" className="text-text-primary">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand-primary underline-offset-2 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
