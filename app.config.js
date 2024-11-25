const getBundleID = () => {
  if (process.env.APP_VARIANT === "production") {
    return "com.jedidevyury.kitestmobile";
  }

  if (process.env.APP_VARIANT === "preview") {
    return "com.jedidevyury.kitestmobile.preview";
  }

  return "com.jedidevyury.kitestmobile.dev";
};

const getAppName = () => {
  if (process.env.APP_VARIANT === "production") {
    return "Ki Test Mobile";
  }

  if (process.env.APP_VARIANT === "preview") {
    return "Ki Test Mobile (Preview)";
  }

  return "Ki Test Mobile (Dev)";
};

const bundleID = getBundleID();

export default {
  expo: {
    name: getAppName(),
    slug: "ki-test-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#25292e",
    },
    updates: {
      url: "https://u.expo.dev/b97eecd8-7dc8-4940-985d-d77c033da7de",
      fallbackToCacheTimeout: 0,
    },
    scheme: "ki-test-mobile",
    ios: {
      buildNumber: "1.0.1",
      bundleIdentifier: bundleID,
      supportsTablet: true,
    },
    android: {
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: bundleID
    },
    owner: "jedidevyury",
    extra: {
      eas: {
        "projectId": "b97eecd8-7dc8-4940-985d-d77c033da7de"
      },
      updates: {
        "assetPatternsToBeBundled": [
          "**/*"
        ]
      }
    },
    runtimeVersion: {
      policy: "appVersion"
    }
  }
}
