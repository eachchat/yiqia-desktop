const { notarize } = require('electron-notarize');

exports.default = async function(context) {
    const { electronPlatformName, appOutDir } = context;
    const appId = context.packager.info.appInfo.id;

    if (electronPlatformName === 'darwin') {
        const appName = context.packager.appInfo.productFilename;
        // We get the password from keychain. The keychain stores
        // user IDs too, but apparently altool can't get the user ID
        // from the keychain, so we need to get it from the environment.
        const userId = "wangxin@workly.ai";
        if (userId === undefined) {
            console.log("*************************************");
            console.log("*   NOTARIZE_APPLE_ID is not set.   *");
            console.log("* This build will NOT be notarised. *");
            console.log("*************************************");
            return;
        }

        console.log("Notarising macOS app. This may be some time.");
        return await notarize({
            appBundleId: appId,
            appPath: `${appOutDir}/${appName}.app`,
            appleId: userId,
            appleIdPassword: 'dgcz-cnwf-bxoh-xtvo',
        });
    }
};
