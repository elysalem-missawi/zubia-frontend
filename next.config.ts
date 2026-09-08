import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts"
);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zubia-backend.onrender.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);