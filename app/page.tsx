import { Logo } from "@/components/logo";
import { PhoneForm } from "@/components/phone-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
      <div className="flex flex-col justify-center items-center gap-y-8">
        <Link aria-label="Home" href="/">
          <Logo className="w-16 flex-none" />
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="font-heading text-2xl font-semibold">
              WhatsApp Send
            </h1>
            <p className="text-sm text-foreground">
              Send a message to a Whatsapp number without saving it
            </p>
          </div>

          <PhoneForm />

          <p className="px-8 text-center text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> This website is not affiliated with
            WhatsApp Inc. in any way.
          </p>
        </div>
      </div>
    </div>
  );
}
