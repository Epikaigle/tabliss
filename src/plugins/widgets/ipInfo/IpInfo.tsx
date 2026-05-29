import React from "react";
import { usePushError } from "../../../api";
import { getIpInfo } from "./api";
import { defaultData, Props } from "./types";

const IpInfo: React.FC<Props> = ({
  cache,
  data = defaultData,
  setCache,
  loader,
}) => {
  const pushError = usePushError();
  React.useEffect(() => {
    getIpInfo(loader).then(setCache).catch(pushError);
  }, []);

  if (!cache) {
    return null;
  }

  const actualData = { ...defaultData, ...data };
  const info = [cache.ip];
  if (actualData.displayCity) info.push(cache.city);
  if (actualData.displayCountry) info.push(cache.country);

  return <div className="IpInfo">{info.join(", ")}</div>;
};

export default IpInfo;
