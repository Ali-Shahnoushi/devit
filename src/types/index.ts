/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type NullEnum = null

/**
 * * `M` - Male
 * * `F` - Female
 */
export enum GenderEnum {
    M = 'M',
    F = 'F',
}

export enum BlankEnum {
    Value = '',
}

export interface PasswordReset {
    /** @format email */
    email: string
    code: string
    new_password: string
    confirm_password: string
}

export interface PasswordResetCode {
    /** @format email */
    email: string
}

export interface UserAuth {
    username: string
    password: string
}

export interface UserInfo {
    /**
     * نام کاربری
     * الزامی. 150 کاراکتر یا کمتر. فقط شامل حروف، اعداد، و علامات @/./+/-/_
     * @maxLength 150
     * @pattern ^[\w.@+-]+$
     */
    username: string
    /** @format email */
    email: string
    /**
     * گذرواژه
     * @maxLength 128
     */
    password: string
    /**
     * نام
     * @maxLength 150
     */
    first_name?: string
    /**
     * نام خانوادگی
     * @maxLength 150
     */
    last_name?: string
    bio?: string | null
    gender?: GenderEnum | BlankEnum | NullEnum | null
    /** @format date */
    birthday?: string | null
    /** @format uri */
    avatar?: string | null
    followers: string
    following: string
}

export interface UserPreView {
    /**
     * نام کاربری
     * الزامی. 150 کاراکتر یا کمتر. فقط شامل حروف، اعداد، و علامات @/./+/-/_
     * @maxLength 150
     * @pattern ^[\w.@+-]+$
     */
    username: string
    /**
     * نام
     * @maxLength 150
     */
    first_name?: string
    /**
     * نام خانوادگی
     * @maxLength 150
     */
    last_name?: string
    /** @format uri */
    avatar?: string | null
    is_follow: string
}

export interface UserRegister {
    /** ID */
    pk: number
    /**
     * نام کاربری
     * الزامی. 150 کاراکتر یا کمتر. فقط شامل حروف، اعداد، و علامات @/./+/-/_
     * @maxLength 150
     * @pattern ^[\w.@+-]+$
     */
    username: string
    /** @format email */
    email: string
    /**
     * گذرواژه
     * @maxLength 128
     */
    password: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean
    /** request path */
    path: string
    /** content type of request body */
    type?: ContentType
    /** query params */
    query?: QueryParamsType
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat
    /** request body */
    body?: unknown
    /** base url */
    baseUrl?: string
    /** request cancellation token */
    cancelToken?: CancelToken
}

export type RequestParams = Omit<
    FullRequestParams,
    'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string
    baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
    securityWorker?: (
        securityData: SecurityDataType | null
    ) => Promise<RequestParams | void> | RequestParams | void
    customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
    extends Response {
    data: D
    error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = ''
    private securityData: SecurityDataType | null = null
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
    private abortControllers = new Map<CancelToken, AbortController>()
    private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
        fetch(...fetchParams)

    private baseApiParams: RequestParams = {
        credentials: 'same-origin',
        headers: {},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig)
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data
    }

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key)
        return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key])
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key]
        return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {}
        const keys = Object.keys(query).filter(
            (key) => 'undefined' !== typeof query[key]
        )
        return keys
            .map((key) =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key)
            )
            .join('&')
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery)
        return queryString ? `?${queryString}` : ''
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null &&
            (typeof input === 'object' || typeof input === 'string')
                ? JSON.stringify(input)
                : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== 'string'
                ? JSON.stringify(input)
                : input,
        [ContentType.FormData]: (input: any) =>
            Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key]
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === 'object' && property !== null
                          ? JSON.stringify(property)
                          : `${property}`
                )
                return formData
            }, new FormData()),
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
    }

    protected mergeRequestParams(
        params1: RequestParams,
        params2?: RequestParams
    ): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        }
    }

    protected createAbortSignal = (
        cancelToken: CancelToken
    ): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken)
            if (abortController) {
                return abortController.signal
            }
            return void 0
        }

        const abortController = new AbortController()
        this.abortControllers.set(cancelToken, abortController)
        return abortController.signal
    }

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken)

        if (abortController) {
            abortController.abort()
            this.abortControllers.delete(cancelToken)
        }
    }

    public request = async <T = any, E = any>({
        body,
        secure,
        path,
        type,
        query,
        format,
        baseUrl,
        cancelToken,
        ...params
    }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === 'boolean'
                ? secure
                : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {}
        const requestParams = this.mergeRequestParams(params, secureParams)
        const queryString = query && this.toQueryString(query)
        const payloadFormatter =
            this.contentFormatters[type || ContentType.Json]
        const responseFormat = format || requestParams.format

        return this.customFetch(
            `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
            {
                ...requestParams,
                headers: {
                    ...(requestParams.headers || {}),
                    ...(type && type !== ContentType.FormData
                        ? { 'Content-Type': type }
                        : {}),
                },
                signal:
                    (cancelToken
                        ? this.createAbortSignal(cancelToken)
                        : requestParams.signal) || null,
                body:
                    typeof body === 'undefined' || body === null
                        ? null
                        : payloadFormatter(body),
            }
        ).then(async (response) => {
            const r = response.clone() as HttpResponse<T, E>
            r.data = null as unknown as T
            r.error = null as unknown as E

            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                      .then((data) => {
                          if (r.ok) {
                              r.data = data
                          } else {
                              r.error = data
                          }
                          return r
                      })
                      .catch((e) => {
                          r.error = e
                          return r
                      })

            if (cancelToken) {
                this.abortControllers.delete(cancelToken)
            }

            if (!response.ok) throw data
            return data
        })
    }
}

/**
 * @title No title
 * @version 0.0.0
 */
export class Api<
    SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * No description
         *
         * @tags api
         * @name ApiAuthActivateRetrieve
         * @request GET:/api/auth/activate/{uidb64}/{token}/
         * @secure
         */
        apiAuthActivateRetrieve: (
            token: string,
            uidb64: string,
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/api/auth/activate/${uidb64}/${token}/`,
                method: 'GET',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthMeRetrieve
         * @request GET:/api/auth/me/
         */
        apiAuthMeRetrieve: (params: RequestParams = {}) =>
            this.request<UserInfo, any>({
                path: `/api/auth/me/`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthMeUpdate
         * @request PUT:/api/auth/me/
         */
        apiAuthMeUpdate: (data: UserInfo, params: RequestParams = {}) =>
            this.request<UserInfo, any>({
                path: `/api/auth/me/`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthPasswordResetCreate
         * @request POST:/api/auth/password_reset/
         */
        apiAuthPasswordResetCreate: (
            data: PasswordReset,
            params: RequestParams = {}
        ) =>
            this.request<PasswordReset, any>({
                path: `/api/auth/password_reset/`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthPasswordResetCodeCreate
         * @request POST:/api/auth/password_reset_code/
         */
        apiAuthPasswordResetCodeCreate: (
            data: PasswordResetCode,
            params: RequestParams = {}
        ) =>
            this.request<PasswordResetCode, any>({
                path: `/api/auth/password_reset_code/`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthRefreshFromCookieCreate
         * @request POST:/api/auth/refresh_from_cookie/
         * @secure
         */
        apiAuthRefreshFromCookieCreate: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/auth/refresh_from_cookie/`,
                method: 'POST',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthSearchRetrieve
         * @request GET:/api/auth/search/{search}/
         * @secure
         */
        apiAuthSearchRetrieve: (search: string, params: RequestParams = {}) =>
            this.request<UserPreView, any>({
                path: `/api/auth/search/${search}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthSendActivationCreate
         * @request POST:/api/auth/send_activation/
         */
        apiAuthSendActivationCreate: (
            data: UserAuth,
            params: RequestParams = {}
        ) =>
            this.request<UserAuth, any>({
                path: `/api/auth/send_activation/`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthSigninCreate
         * @request POST:/api/auth/signin/
         */
        apiAuthSigninCreate: (data: UserAuth, params: RequestParams = {}) =>
            this.request<UserAuth, any>({
                path: `/api/auth/signin/`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthSignoutCreate
         * @request POST:/api/auth/signout/
         * @secure
         */
        apiAuthSignoutCreate: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/auth/signout/`,
                method: 'POST',
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthSignupCreate
         * @request POST:/api/auth/signup/
         */
        apiAuthSignupCreate: (data: UserRegister, params: RequestParams = {}) =>
            this.request<UserRegister, any>({
                path: `/api/auth/signup/`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthUserRetrieve
         * @request GET:/api/auth/user/{username}/
         * @secure
         */
        apiAuthUserRetrieve: (username: string, params: RequestParams = {}) =>
            this.request<UserInfo, any>({
                path: `/api/auth/user/${username}/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthUserFollowCreate
         * @request POST:/api/auth/user/{username}/follow/
         */
        apiAuthUserFollowCreate: (
            username: string,
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/api/auth/user/${username}/follow/`,
                method: 'POST',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthUserFollowDestroy
         * @request DELETE:/api/auth/user/{username}/follow/
         */
        apiAuthUserFollowDestroy: (
            username: string,
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/api/auth/user/${username}/follow/`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthUserFollowersRetrieve
         * @request GET:/api/auth/user/{username}/followers/
         * @secure
         */
        apiAuthUserFollowersRetrieve: (
            username: string,
            params: RequestParams = {}
        ) =>
            this.request<UserPreView, any>({
                path: `/api/auth/user/${username}/followers/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags api
         * @name ApiAuthUserFollowingRetrieve
         * @request GET:/api/auth/user/{username}/following/
         * @secure
         */
        apiAuthUserFollowingRetrieve: (
            username: string,
            params: RequestParams = {}
        ) =>
            this.request<UserPreView, any>({
                path: `/api/auth/user/${username}/following/`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description OpenApi3 schema for this API. Format can be selected via content negotiation. - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
         *
         * @tags api
         * @name ApiSchemaRetrieve
         * @request GET:/api/schema/
         * @secure
         */
        apiSchemaRetrieve: (
            query?: {
                format?: 'json' | 'yaml'
                lang?:
                    | 'af'
                    | 'ar'
                    | 'ar-dz'
                    | 'ast'
                    | 'az'
                    | 'be'
                    | 'bg'
                    | 'bn'
                    | 'br'
                    | 'bs'
                    | 'ca'
                    | 'ckb'
                    | 'cs'
                    | 'cy'
                    | 'da'
                    | 'de'
                    | 'dsb'
                    | 'el'
                    | 'en'
                    | 'en-au'
                    | 'en-gb'
                    | 'eo'
                    | 'es'
                    | 'es-ar'
                    | 'es-co'
                    | 'es-mx'
                    | 'es-ni'
                    | 'es-ve'
                    | 'et'
                    | 'eu'
                    | 'fa'
                    | 'fi'
                    | 'fr'
                    | 'fy'
                    | 'ga'
                    | 'gd'
                    | 'gl'
                    | 'he'
                    | 'hi'
                    | 'hr'
                    | 'hsb'
                    | 'hu'
                    | 'hy'
                    | 'ia'
                    | 'id'
                    | 'ig'
                    | 'io'
                    | 'is'
                    | 'it'
                    | 'ja'
                    | 'ka'
                    | 'kab'
                    | 'kk'
                    | 'km'
                    | 'kn'
                    | 'ko'
                    | 'ky'
                    | 'lb'
                    | 'lt'
                    | 'lv'
                    | 'mk'
                    | 'ml'
                    | 'mn'
                    | 'mr'
                    | 'ms'
                    | 'my'
                    | 'nb'
                    | 'ne'
                    | 'nl'
                    | 'nn'
                    | 'os'
                    | 'pa'
                    | 'pl'
                    | 'pt'
                    | 'pt-br'
                    | 'ro'
                    | 'ru'
                    | 'sk'
                    | 'sl'
                    | 'sq'
                    | 'sr'
                    | 'sr-latn'
                    | 'sv'
                    | 'sw'
                    | 'ta'
                    | 'te'
                    | 'tg'
                    | 'th'
                    | 'tk'
                    | 'tr'
                    | 'tt'
                    | 'udm'
                    | 'ug'
                    | 'uk'
                    | 'ur'
                    | 'uz'
                    | 'vi'
                    | 'zh-hans'
                    | 'zh-hant'
            },
            params: RequestParams = {}
        ) =>
            this.request<Record<string, any>, any>({
                path: `/api/schema/`,
                method: 'GET',
                query: query,
                secure: true,
                format: 'json',
                ...params,
            }),
    }
}
