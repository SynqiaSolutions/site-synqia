import Link from "next/link";

interface RegionalServiceLinksProps {
  servicePath: string;
  serviceLabel: string;
}

export default function RegionalServiceLinks({
  servicePath,
  serviceLabel,
}: RegionalServiceLinksProps) {
  return (
    <section className="relative border-t border-hairline py-12">
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Atendemos empresas de Goiás e região. Veja também{" "}
          <Link
            href={servicePath}
            className="font-medium text-primary hover:underline"
          >
            {serviceLabel} em Goiás
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
