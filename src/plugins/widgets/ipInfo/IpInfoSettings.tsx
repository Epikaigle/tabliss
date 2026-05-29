import React from "react";
import { defaultData, Props } from "./types";

const IpInfoSettings: React.FC<Props> = ({ data = defaultData, setData }) => {
  const actualData = { ...defaultData, ...data };
  return (
    <div className="IpInfoSettings">
      <label>
        <input
          type="checkbox"
          checked={actualData.displayCity}
          onChange={() => setData({ ...actualData, displayCity: !actualData.displayCity })}
        />
        Display City
      </label>

      <label>
        <input
          type="checkbox"
          checked={actualData.displayCountry}
          onChange={() =>
            setData({ ...actualData, displayCountry: !actualData.displayCountry })
          }
        />
        Display Country
      </label>
    </div>
  );
};

export default IpInfoSettings;
