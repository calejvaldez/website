import { Metadata } from "next";

export function metadataWith(
  webpageTitle: string,
  webpageDescription: string,
  webpageUrl: string,
  webpageHeaderUrl?: string,
): Metadata {
  const iconUrl =
    "https://gravatar.com/avatar/9ee4f31a2821014982fc155c5abbec7c92a71d30e6992673fdeb34324f45f1f8?s=50";
  const defaultHeaderUrl =
    "https://gravatar.com/avatar/9ee4f31a2821014982fc155c5abbec7c92a71d30e6992673fdeb34324f45f1f8?s=350";

  return {
    title: webpageTitle,
    description: webpageDescription,
    metadataBase: new URL(webpageUrl),
    icons: [iconUrl],
    openGraph: {
      type: "website",
      url: webpageUrl,
      title: webpageTitle,
      description: webpageDescription,
      images: webpageHeaderUrl || defaultHeaderUrl,
    },
    twitter: {
      card: "summary_large_image",
      site: webpageUrl,
      title: webpageTitle,
      description: webpageDescription,
      images: webpageHeaderUrl || defaultHeaderUrl,
    },
  };
}
