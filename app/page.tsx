import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Let Us &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>digitalize &nbsp;</h1>
        <br />
        <h1 className={title()}>hoarding placing industry</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          A product which will help you to place multiple hoardings in a single
          shot🚀 Boost your presence and effectively reduce your price.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Get Started
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by signing up{" "}
            <Code color="primary">
              <Link href="/signup">Sign up</Link>
            </Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
