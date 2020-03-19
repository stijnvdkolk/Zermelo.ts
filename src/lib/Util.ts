export const getApiURL = (school: string) => {
  return `https://${school}.zportal.nl/api/v3`;
};

export const createApiURL = (school: string, slug: string, accessToken: string) => {
  return `${getApiURL(school)}/${slug}${/\?/.test(slug) ? "&" : "?"}access_token=${accessToken}`;
};