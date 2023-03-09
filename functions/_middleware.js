import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "KJartan Udir", email: "kjartan.muller@udir.no" }],
    },
  ],
  from: { name: "Enquiry", email: "kjartan@muller.no" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});