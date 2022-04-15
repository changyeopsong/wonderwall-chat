/**
 * @Todo
 * type, enum 등으로 변경
 **/

export const enum Sector {
    Music = 1,
    Film = 2,
    Creativity = 3
}

export const enum ClassAccessible {
    None = 0,
    Single = 1,
    Sector = 2,
    SingleAndSector = 3,
    Free = 4,
    FreeAndSingle = 5,
    FreeAndSector = 6,
    FreeAndSingleAndSector = 7
}

export const Secret = {
    HACKLE_ID: process.env.REACT_APP_HACKLE_ID,
    GA_ID: process.env.REACT_APP_GA_ID,
    OPTIMIZE_ID: process.env.REACT_APP_OPTIMIZE_ID,
    GTM_ID: process.env.REACT_APP_GTM_ID,
    PIXEL_ID: process.env.REACT_APP_PIXEL_ID,
    KAKAO_ID: process.env.REACT_APP_KAKAO_ID,
    NAVER_ID: process.env.REACT_APP_NAVER_ID,
    DAUM_CONVERSION_ACCOUNT_ID: process.env.REACT_APP_DAUM_CONVERSION_ACCOUNT_ID,
    FIREHOSE_ACCESS_KEY_ID: process.env.REACT_APP_FIREHOSE_ACCESS_KEY_ID,
    FIREHOSE_SECRET_ACCESS_KEY: process.env.REACT_APP_FIREHOSE_SECRET_ACCESS_KEY,
    KAKAO_SDK_KEY: process.env.REACT_APP_KAKAO_SDK_KEY,
    CHANNEL_KEY: process.env.REACT_APP_CHANNEL_KEY,
    SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN
};

export const Env = {
    Dev: 'dev',
    Stage: 'stage',
    Prod: 'prod',
    isDev: process.env.REACT_APP_ENV === 'dev',
    isStage: process.env.REACT_APP_ENV === 'stage',
    isProd: process.env.REACT_APP_ENV === 'prod',
    isValid: () => Env.isDev || Env.isStage || Env.isProd
};

export const Billing = {
    MERCHANT_ID: 'imp27606495'
};

export const CouponStatus = {
    Usable: 'usable',
    Used: 'used',
    Expired: 'expire',
    Refunded: 'refund',
    Canceled: 'cancel'
};

export type AccessibleClassType = 'single' | 'free' | 'sector';

export const GoodsType = {
    FreePass: 'class:freepass',
    FreePassGift: 'class:freepass:gift',
    SectorPass: 'class:sector',
    SectorPassGift: 'class:sector:gift',
    SinglePass: 'class:single',
    SinglePassGift: 'class:single:gift',
    StoreDelivery: 'store:delivery',
    StoreDeliveryFee: 'store:delivery:fee',
    StoreDeliveryKMC: 'store:delivery:kmc',
    VideoCall: 'video:call',
    ArtlabVideo: 'artlab:video',
    Package: 'package',
    PackageFreePass: 'package:class:freepass',
    PackageSinglePass: 'package:class:single',
    PackageStoreDelivery: 'package:store:delivery',
    PackageStoreDeliveryKMC: 'package:store:delivery:kmc',
    PackageVideoCall: 'package:video:call',
    PackageArtlabVideo: 'package:artlab:video',
    PackageStageLive: 'package:stage:live',
    PackageStageVod: 'package:stage:vod',
    StageLive: 'stage:live',
    StageVod: 'stage:vod'
};

export type TGoodsType =
    | 'class:freepass'
    | 'class:freepass:gift'
    | 'class:single'
    | 'class:single:gift'
    | 'class:sector'
    | 'class:sector:gift'
    | 'campaign'
    | 'partner:class:freepass'
    | 'partner:class:single'
    | 'partner:class:sector'
    | 'store:delivery'
    | 'store:delivery:fee'
    | 'package'
    | 'package:class:freepass'
    | 'package:class:sector'
    | 'package:class:single'
    | 'package:campaign'
    | 'package:store:delivery'
    | 'package:stage:live'
    | 'package:stage:vod'
    | 'stage:live'
    | 'stage:vod';

export type GoodsStatusType = 'ready' | 'soldout' | 'waiting';

export type GoodsOptionStatusType = 'ready' | 'soldout' | 'waiting';

export const GoodsOptionStatus: Record<string, GoodsStatusType> = {
    Ready: 'ready',
    SoldOut: 'soldout',
    Waiting: 'waiting'
};

export const GoodsStatus: Record<string, GoodsStatusType> = {
    Ready: 'ready',
    SoldOut: 'soldout',
    Waiting: 'waiting'
};

export type GoodsDeliveryStatusType = 'paid' | 'prepare' | 'shipping' | 'complete' | 'refund' | 'cancel' | 'untraced';

export type GoodsDeliveryDetailStatusType = 'shipping' | 'complete' | 'untraced';

export const Provider = {
    Local: 'local',
    LocalV2: 'localV2',
    Facebook: 'facebook',
    Google: 'google',
    Naver: 'naver',
    Kakao: 'kakao'
};

// Iamport Payment Status
export const PaymentStatus = {
    Ready: 'ready',
    Paid: 'paid',
    Canceled: 'cancelled',
    Failed: 'failed'
} as const;

export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];

export const PaymentPG = {
    Inicis: `html5_inicis${Env.isProd || Env.isStage ? '.MOIwonderw' : '.INIpayTest'}`, // 이니시스 웹표준
    InicisPhone: `html5_inicis${Env.isProd || Env.isStage ? '.MOIwonder2' : '.INIpayTest'}`, // 이니시스 웹표준 (휴대폰 소액결제용)
    Paypal: 'paypal', // 페이팔
    Nice: 'nice', // 나이스 페이
    Again: 'again', // 카드 등록 후 결제
    Kakao: `kakaopay${Env.isProd || Env.isStage ? '' : '.TC0ONETIME'}`, // 카카오페이
    Naver: 'naverpay', // 네이버페이 결제형
    Eximbay: 'eximbay', // 엑심베이
    Uplus: 'uplus' // 토스페이먼츠(구 유플러스)
} as const;

export type PaymentPGType = typeof PaymentPG[keyof typeof PaymentPG];

/**
 * PaymentMethod Type
 * card: 신용카드
 * trans: 실시간 계쫘이체
 * vbank: 가상계좌
 * phone: 휴대폰 소액결제
 * samsung: 삼성페이 (이니시스, KCP 전용)
 * kpay: KPay앱 호출 (이니시스 전용)
 * cultureland: 문화상품권 (이니시스, LGU+, KCP 전용)
 * smartculture: 스마트문상 (이니시스, LGU+, KCP 전용)
 * happymoney: 해피머니 (이니시스, KCP 전용)
 * booknlife: 도서문화상품권 (LGU+, KCP 전용)
 *
 * 아래는 Eximbay
 * unionpay: 유니온페이
 * alipay: 알리페이
 * tempay: 텐페이
 * wechat: 위쳇페이
 * molpay: 몰페이
 * paysbuy: 태국 paysbuy
 */
export type PaymentMethodType = 'card' | 'trans' | 'vbank' | 'phone' | 'samsung' | 'kpay' | 'cultureland' | 'smartculture' | 'happymoney' | 'booknlife' | 'unionpay' | 'alipay' | 'tenpay' | 'wechat' | 'molpay' | 'paysbuy';

// TODO: 추후 삭제
export const PaymentMethod = {
    Card: 'card', // 신용카드
    Trans: 'trans', // 실시간계좌이체
    Vbank: 'vbank', // 가상계좌
    Phone: 'phone', // 휴대폰 소액결제
    Samsung: 'samsung', // 삼성페이 (이니시스, KCP 전용)
    Kpay: 'kpay', // KPay앱 호출 (이니시스 전용)
    Cultureland: 'cultureland', // 문화상품권 (이니시스, LGU+, KCP 전용)
    Smartculture: 'smartculture', // 스마트문상 (이니시스, LGU+, KCP 전용)
    Happymoney: 'happymoney', // 해피머니 (이니시스, KCP 전용)
    Booknlife: 'booknlife', // 도서문화상품권 (LGU+, KCP 전용)

    // Eximbay method
    Unionpay: 'unionpay', // 유니온페이
    Alipay: 'alipay', // 알리페이
    Tenpay: 'tenpay', // 텐페이
    Wechat: 'wechat', // 위챗페이
    Molpay: 'molpay', // 몰페이
    Paysbuy: 'paysbuy' // 태국 paysbuy
};

export const Color = {
    white: '#f2f2f2',
    whiteAlpha: (alpha?: number) => `rgba(255, 255, 255, ${alpha || 0.5})`,
    creamWhite: '#d8d8d8',
    black: '#000000',
    deepDarkGrey: '#181817',
    lightGrey: '#626262',
    blackAlpha30: 'rgba(0, 0, 0, 0.3)',
    blackAlpha50: 'rgba(0, 0, 0, 0.5)',
    blackAlpha60: 'rgba(0, 0, 0, 0.6)',
    blackTwo: '#333333',
    bloodOrange: '#ff4d00',
    coral: '#ff3b3b',
    lightBurgundy: '#9c304b',
    lightPurple: '#af65e0',
    naverGreen: '#1EC800',
    googleGrey: '#ebebeb',
    facebookBlue: '#1877f2',
    kakaoYellow: '#ffa800',
    kakaoButton: '#ffe812',
    KakaoButtonText: '#3e4042',
    creamGold: '#d8b082',
    azure: '#0091ff',
    gray: '#c4c4c4',
    grayTwo: '#3d3d3d',
    darkGray: '#2d2d2d',
    Grey5: '#181818'
};

export const Dimension = {
    maxWidth: '1200px',
    contentMaxWidth: '928px',
    Tablet: '1000px',
    Phone: '767px'
};

export const BreakPoint = {
    Phone: `@media (max-width : ${Dimension.Phone})`, // Only Phone
    Tablet: `@media (min-width : ${Dimension.Phone}) and (max-width : ${Dimension.Tablet})`, // Only Tablet .. Tablet만
    PC: `@media (min-width : ${Dimension.Tablet})`, // Only PC
    BelowThanMaxWidth: `@media (max-width : ${Dimension.maxWidth})`, // Only PC
    GreaterThanTablet: `@media (min-width : ${Dimension.Tablet})`, // Bigger Than Tablet .. Tablet 보다 큰거 전부다
    GreaterThanPhone: `@media (min-width : ${Dimension.Phone})`, // Bigger Than Phone .. Phone보다 큰거 전부다
    BelowThanTablet: `@media (max-width : ${Dimension.Tablet})`, // Smaller Than Tablet Max size .. Tablet 포함 보다 작은것도 전부다
    escapeMedia: (breakPoint: string) => breakPoint.replace('@media ', '')
} as const;

export const SignInStatus = {
    Pass: 'pass',
    Newbie: 'newbie',
    Bounce: 'bounce',
    Pending: 'pending'
};

export const Path = {
    Home: '/',
    Class: '/class',
    Chapter: '/chapter',
    Settings: '/settings',
    MyClass: '/myClass',
    FAQ: '/faq',
    Policy: '/policy',
    Refund: '/refund',
    Terms: '/terms',
    Notice: '/notice',
    ArtLab: '/artlab',
    ArtLabEpisode: '/artlab/episode',
    Goods: '/goods',
    Order: '/order',
    Cart: '/cart',
    SignIn: '/signin',
    SignUp: '/signup',
    OrderComplete: '/orderComplete',
    FindPassword: '/findPassword',
    ResetPassword: '/resetPassword',
    SearchResult: '/search',
    Draw: '/draw',
    Promotion: '/promotion',
    B2B: '/b2b',
    Curation: '/curation',
    Store: '/store',
    Product: '/product',
    Collaboration: '/collaboration',
    Edition: '/edition',
    Stage: '/stage',
    StageEpisode: '/stage/episode',

    FacebookCallback: '/auth/facebook',
    FacebookCallbackLink: '/auth/facebook/link',
    GoogleCallback: '/auth/google',
    GoogleCallbackLink: '/auth/google/link',
    KakaoCallback: '/auth/kakao',
    KakaoCallbackLink: '/auth/kakao/link'
};

export const LanguageCodeList = ['ko', 'en', 'ja'] as const;

export type LanguageCode = typeof LanguageCodeList[number];

type LanguageType = {
    [T in LanguageCode]: {
        name: 'English' | '한국어' | '日本語';
    };
};

export const Languages: LanguageType = {
    en: {
        name: 'English'
    },
    ko: {
        name: '한국어'
    },
    ja: {
        name: '日本語'
    }
};

export const CurrencyCodeList = ['KRW', 'USD'] as const;

export type CurrencyCode = typeof CurrencyCodeList[number];

export type CurrencyType = {
    [T in CurrencyCode]: {
        code: CurrencyCode;
        symbol: '₩' | '$';
        name: '원' | 'Dollar';
    };
};

export const Currencies: CurrencyType = {
    KRW: {
        code: 'KRW',
        symbol: '₩',
        name: '원'
    },
    USD: {
        code: 'USD',
        symbol: '$',
        name: 'Dollar'
    }
};
