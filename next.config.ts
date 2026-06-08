import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // All photos are now local under /public/img — no remote hosts needed.
  },
  // Hide the small Next.js / Turbopack dev indicator that floats in the
  // bottom-right corner during local dev. It shouldn't be confused for site UI.
  devIndicators: false,
};

export default withNextIntl(nextConfig);
