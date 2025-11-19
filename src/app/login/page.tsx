import { signIn } from "@/auth";
import styles from "./page.module.css";
import { Discord } from "iconoir-react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawRedirect = (await searchParams).redirect;
  const redirectTo = !rawRedirect ? "/" : rawRedirect.toString();

  return (
    <section className={styles.container}>
      <form
        action={async () => {
          "use server";
          await signIn("discord", { redirectTo });
        }}
        className={styles.form}
      >
        <h2>Sign in</h2>
        <p>Hey! I need you to login to see that.</p>
        <button type="submit" className="primary">
          <Discord />
          Sign in with Discord
        </button>
      </form>
    </section>
  );
}
