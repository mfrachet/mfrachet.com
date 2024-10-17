import Mixpanel from "mixpanel";

export const mixpanel = Mixpanel.init(
  import.meta.env.MIXPANEL_PROJECT_TOKEN as string,
  {
    host: "api-eu.mixpanel.com",
  }
);

export const track = (
  userId: string,
  event: string,
  properties: Record<string, any>
) => {
  if (import.meta.env.PROD) {
    // Forcing ip to localhost otherwise we locate the servers
    // https://docs.mixpanel.com/docs/tracking-methods/sdks/nodejs#sending-events
    return mixpanel.track(event, {
      distinct_id: userId,
      ...properties,
      ip: "127.0.0.1",
    });
  }

  console.log("[Mixpanel][track]", { event, properties });
};
