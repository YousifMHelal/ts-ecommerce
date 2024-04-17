import WidthContainer from "@/components/WidthContainer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Clover, Download, ShieldCheck } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: Download,
    description:
      "Get your asset deliver to your email in seconds and download it right away.",
  },
  {
    name: "Guaranteed Quality",
    icon: ShieldCheck,
    description:
      "Every asset on our platform is verified by our team to ensure our hightest quality standards.",
  },
  {
    name: "For the planet",
    icon: Clover,
    description:
      "we've placed 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <WidthContainer>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-500">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            welcome to DigitalHippo. every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col mt-6 gap-6 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Brows Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </WidthContainer>

      <section className="border-t border-gray-200 bg-gray-50">
        <WidthContainer className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {
              perks.map(perk => (
                <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{ perk.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </WidthContainer>
      </section>
    </>
  );
}
