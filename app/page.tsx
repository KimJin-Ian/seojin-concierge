import { redirect } from "next/navigation";

/**
 * Root "/" — middleware handles language detection and redirects to /{lang}.
 * This fallback redirect ensures the page is never left blank.
 */
export default function RootPage() {
  redirect("/ko");
}
