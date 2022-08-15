// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  const target = <any>window;
  target.gtag('config', process.env.GA_MEASUREMENT_ID as string, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  const target = <any>window;
  target.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
