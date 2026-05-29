import { API } from "../../types";
import { IpData } from "./types";

export async function getIpInfo(loader: API["loader"]): Promise<IpData> {
  loader.push();

  // ip-api.com works reliably from browser extensions (unlike ipwho.is which can return 405)
  const data = await fetch("http://ip-api.com/json/?fields=query,city,country")
    .then((res) => res.json())
    .catch(() =>
      // Fallback to ipwho.is if ip-api.com fails (e.g. HTTPS-only contexts)
      fetch("https://ipwho.is/").then((res) => res.json())
    )
    .finally(() => loader.pop());

  return {
    ip: data.query ?? data.ip,
    city: data.city,
    country: data.country,
  };
}
