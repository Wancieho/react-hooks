import React, { useEffect, useState } from "react";

import { regionAndLanguageConfig } from "../../config/freshdesk.config";

export const Freshdesk = () => {
  const [freshdeskId, setFreshdeskId] = useState();
  const [freshdeskLanguage, setFreshdeskLanguage] = useState();

  const loadWidget = () => {
    deleteWidget();

    window.fwSettings = { widget_id: freshdeskId, locale: freshdeskLanguage };

    if ("function" != typeof window.FreshworksWidget) {
      var n = function () {
        n.q.push(arguments);
      };
      n.q = [];
      window.FreshworksWidget = n;
    }

    const script = document.createElement("script");

    script.src = `https://widget.freshworks.com/widgets/${freshdeskId}.js`;
    script.id = "freshdesk";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    setTimeout(() => {
      window.FreshworksWidget("open");
    }, 2000);
  };

  const deleteWidget = () => {
    if (window.FreshworksWidget) {
      window.FreshworksWidget("destroy");

      delete window.FreshworksWidget;

      document.getElementById("freshdesk").remove();
    }
  };

  const setRegionLanguage = (id, language) => {
    setFreshdeskId(id);
    setFreshdeskLanguage(language);
  };

  useEffect(() => {
    if (freshdeskId && freshdeskLanguage) {
      loadWidget();
    }

    return () => {
      deleteWidget();
    };
  }, [freshdeskId, freshdeskLanguage]);

  return (
    <>
      {regionAndLanguageConfig.map((item, i) => (
        <button
          key={i}
          onClick={() => setRegionLanguage(item.id, item.language)}
        >
          {item.region} {item.language}
        </button>
      ))}
    </>
  );
};
