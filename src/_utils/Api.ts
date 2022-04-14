import Axios, {AxiosRequestConfig} from 'axios';
import * as AxiosLogger from 'axios-logger';
import * as AxiosRetry from 'retry-axios';

// import {RefreshTokenVO} from './_vo';
import {Env, Path} from 'Constants';
// import {refreshToken, signOut} from '_api/Auth';
// import {ClientId, Country, Currency, Lang, Timezone} from '_utils/BrowserUtil';

export const instance = Axios.create({
    baseURL: `https://${Env.isProd || Env.isStage ? 'api' : 'api-dev'}.wonderwall.kr`,
    timeout: 10000
});

// set retry count
AxiosRetry.attach(instance);

// set logger
if (!Env.isProd) {
    instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
    instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
}

// set lang header
// instance.defaults.headers.common['lang'] = Lang;

// // set country header
// instance.defaults.headers.common['country'] = Country;

// // set timezone header
// instance.defaults.headers.common['timezone'] = Timezone;

// // set uuid header
// instance.defaults.headers.common['currency'] = Currency.code;

// // set uuid header
// instance.defaults.headers.common['uuid'] = ClientId;

/**
 * TODO: 추후 any => unknown 변경
 */
export const fetch = async <Response = any>(config: AxiosRequestConfig): Promise<Response> => {
    const {data} = await instance(config);
    console.log(data);

    if (data) {
        return data;
    }

    if (!data) {
        alert(data.message);

        try {
            // await signOut();

            window.location.href = Path.Home;
        } catch (err) {
            console.error(err);
        }

        throw new DuplicateLoginError();
    }

    throw new ApiError(data.code, data.message);
};

export const fetchAll = async (configs: AxiosRequestConfig[]) => {
    const res = await Promise.all(configs.map(instance));
    const data = res.map(res => res.data);
    const errorData = data.filter(data => data.code !== 200);

    if (errorData.length === 0) {
        return data.map(data => data.data);
    }

    const duplicateLoginError = errorData.find(data => data.code === 410);
    if (duplicateLoginError) {
        alert(duplicateLoginError.message);

        try {
            // await signOut();

            window.location.href = Path.Home;
        } catch (err) {
            console.error(err);
        }

        throw new DuplicateLoginError();
    }

    throw new ApiError(errorData[0].code, errorData[0].message);
};

export const fetchAllSettled = async (configs: AxiosRequestConfig[]) => {
    const res = await Promise.allSettled(configs.map(instance));

    return res.map(res => ({...(res.status === 'fulfilled' ? {...(res as PromiseFulfilledResult<any>)?.value.data, success: true} : {reason: (res as PromiseRejectedResult)?.reason, success: false})}));
};

export const setAccessToken = (token: string) => {
    instance.defaults.headers.common['Authorization'] = token;
};

// export const refreshTokenProcess = async () => {
//     return refreshToken()
//         .then(RefreshTokenVO.from)
//         .then(({token}) => {
//             setAccessToken(token);
//             return token;
//         })
//         .catch(err => {
//             if (err instanceof ApiError) {
//                 if (err.status === 401) return;

//                 if (err.status === 400) {
//                     alert(err.message);

//                     signOut().catch(() => alert(getString('retry_later')));

//                     return;
//                 }
//             }

//             alert(getString('retry_later'));
//         });
// };

// export const intervalRefreshToken = () => {
//     // signin, me 성공시 10분마다 실행
//     window.setInterval(() => {
//         refreshToken()
//             .then(RefreshTokenVO.from)
//             .then(({token}) => {
//                 setAccessToken(token);
//             })
//             .catch(err => {
//                 // 400(갑자기 유저 inactive, 토큰 만료)일 경우 alert, signOut
//                 if (err instanceof ApiError && err.status === 400) {
//                     alert(err.message);

//                     // signOut 성공시 reload, 실패시 alert
//                     signOut()
//                         .then(() => window.location.reload())
//                         .catch(() => alert(getString('retry_later')));
//                 }
//             });
//     }, 1000 * 60 * 10);
// };

export class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super();
        this.message = message;
        this.status = status;
    }
}

export class DuplicateLoginError extends Error {}
