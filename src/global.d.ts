declare module '*.jpg' {
    const value: File;
    export default value;
}
declare module '*.png' {
    const value: File;
    export default value;
}
declare module '*.svg' {
    const value: File;
    export default value;
}
declare module '*.pdf' {
    const value: File;
    export default value;
}

declare module 'reshake';

declare interface Window {
    // ChannelIO
    ChannelIO?: any;
    ChannelIOInitialized?: boolean;
    attachEvent?: (event: string, callback: () => void) => void;

    Kakao?: any;
    // iamport
    IMP?: any;
    Hls: any;

    kakaoPixel?: any;
    wcs?: any;
    wcs_do?: any;
    wcs_add?: any;
    _nasa?: any;

    DaumConversionDctSv?: any;
    DaumConversionAccountID?: any;
    DaumConversionScriptLoaded?: any;
}
