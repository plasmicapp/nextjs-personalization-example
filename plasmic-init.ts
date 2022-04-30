import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      // ID of a project you are using
      id: "nmaGnTcLgTRnTSEV33RJjp",
      // API token for that project
      token: "LaVkw3uGWUc47q7svO6bpTkApdpaDvR6hBMuewhmmvukHpuHQanR8wEtYvwWbhMugEX7Z1aS21bLvfe5S4wA",
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
