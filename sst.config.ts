/// <reference path="./.sst/platform/config.d.ts" />

import { Prettify } from "./.sst/platform/src/components/component";
import { Input } from "./.sst/platform/src/components/input";

export default $config({
  app(input) {
    return {
      name: "ineffable-emailer",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: getProfile(input?.stage),
        },
      },
    };
  },
  async run() {
    const email = new sst.aws.Email("MyEmail", {
      sender: getSender($app.stage),
    });

    const api = new sst.aws.Function("MyApi", {
      handler: "src/sender.sendEmail",
      link: [email],
      url: getUrl($app.stage),
    });

    return {
      url: api.url,
    };
  },
});

const getProfile = (stage: string) => {
  switch (stage) {
    case "production":
      return "production";
    case "staging":
      return "staging";
    case "dev":
      return "dev";
    default:
      return "dev";
  }
};

const getSender = (stage: string) => {
  switch (stage) {
    case "production":
      return "info@ineffableconsulting.com";
    default:
      return `info+${stage}@ineffableconsulting.com`;
  }
};

const getUrl = (stage: string): Input<boolean | { cors?: any }> => {
  switch (stage) {
    case "production":
    case "staging":
      return {
        cors: {
          allowMethods: ["POST"],
          allowOrigins: ["https://ineffableconsulting.com"],
        },
      };
    default:
      return true;
  }
};
