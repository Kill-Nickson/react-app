import { thronesApi as api } from "../thronesApiSlice";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    putAccountsChangePasswordById: build.mutation<
      PutAccountsChangePasswordByIdApiResponse,
      PutAccountsChangePasswordByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/change-password/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.changePassword,
      }),
    }),
    patchAccountsChangePasswordById: build.mutation<
      PatchAccountsChangePasswordByIdApiResponse,
      PatchAccountsChangePasswordByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/change-password/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.changePassword,
      }),
    }),
    putAccountsClientAvatarsById: build.mutation<
      PutAccountsClientAvatarsByIdApiResponse,
      PutAccountsClientAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/client-avatars/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    patchAccountsClientAvatarsById: build.mutation<
      PatchAccountsClientAvatarsByIdApiResponse,
      PatchAccountsClientAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/client-avatars/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    deleteAccountsClientAvatarsById: build.mutation<
      DeleteAccountsClientAvatarsByIdApiResponse,
      DeleteAccountsClientAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/client-avatars/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    accountsClientsList: build.query<
      AccountsClientsListApiResponse,
      AccountsClientsListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/clients/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    accountsClientsCreate: build.mutation<
      AccountsClientsCreateApiResponse,
      AccountsClientsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/clients/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    accountsClientsRead: build.query<
      AccountsClientsReadApiResponse,
      AccountsClientsReadApiArg
    >({
      query: (queryArg) => ({ url: `/accounts/clients/${queryArg.id}/` }),
    }),
    accountsClientsUpdate: build.mutation<
      AccountsClientsUpdateApiResponse,
      AccountsClientsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/clients/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    accountsClientsPartialUpdate: build.mutation<
      AccountsClientsPartialUpdateApiResponse,
      AccountsClientsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/clients/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    accountsClientsDelete: build.mutation<
      AccountsClientsDeleteApiResponse,
      AccountsClientsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/clients/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    postAccountsConvertToken: build.mutation<
      PostAccountsConvertTokenApiResponse,
      PostAccountsConvertTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/convert-token/`,
        method: "POST",
        body: queryArg.documentedConvertToken,
      }),
    }),
    getCsrfToken: build.query<GetCsrfTokenApiResponse, GetCsrfTokenApiArg>({
      query: () => ({ url: `/accounts/csrf/` }),
    }),
    accountsLoginCreate: build.mutation<
      AccountsLoginCreateApiResponse,
      AccountsLoginCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/login/`,
        method: "POST",
        body: queryArg.tokenObtainPairWithExpiration,
      }),
    }),
    accountsLogoutCreate: build.mutation<
      AccountsLogoutCreateApiResponse,
      AccountsLogoutCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/logout/`,
        method: "POST",
        body: queryArg.logout,
      }),
    }),
    getAccountsPasswordResetRedirectByToken: build.query<
      GetAccountsPasswordResetRedirectByTokenApiResponse,
      GetAccountsPasswordResetRedirectByTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password-reset-redirect/${queryArg.token}/`,
      }),
    }),
    postAccountsPasswordReset: build.mutation<
      PostAccountsPasswordResetApiResponse,
      PostAccountsPasswordResetApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password-reset/`,
        method: "POST",
        body: queryArg.requestResetPasswordToken,
      }),
    }),
    postAccountsPasswordResetConfirm: build.mutation<
      PostAccountsPasswordResetConfirmApiResponse,
      PostAccountsPasswordResetConfirmApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password-reset/confirm/`,
        method: "POST",
        body: queryArg.passwordToken,
      }),
    }),
    postAccountsPasswordResetValidateToken: build.mutation<
      PostAccountsPasswordResetValidateTokenApiResponse,
      PostAccountsPasswordResetValidateTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/password-reset/validate_token/`,
        method: "POST",
        body: queryArg.resetToken,
      }),
    }),
    postAccountsRefreshToken: build.mutation<
      PostAccountsRefreshTokenApiResponse,
      PostAccountsRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/refresh-token/`,
        method: "POST",
        body: queryArg.tokenRefreshWithExpiration,
      }),
    }),
    accountsSessionLogin: build.mutation<
      AccountsSessionLoginApiResponse,
      AccountsSessionLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/session-login/`,
        method: "POST",
        body: queryArg.sessionLogin,
      }),
    }),
    accountsSessionLogout: build.mutation<
      AccountsSessionLogoutApiResponse,
      AccountsSessionLogoutApiArg
    >({
      query: () => ({ url: `/accounts/session-logout/`, method: "DELETE" }),
    }),
    putAccountsUserAvatarsById: build.mutation<
      PutAccountsUserAvatarsByIdApiResponse,
      PutAccountsUserAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/user-avatars/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    patchAccountsUserAvatarsById: build.mutation<
      PatchAccountsUserAvatarsByIdApiResponse,
      PatchAccountsUserAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/user-avatars/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    deleteAccountsUserAvatarsById: build.mutation<
      DeleteAccountsUserAvatarsByIdApiResponse,
      DeleteAccountsUserAvatarsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/user-avatars/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    accountsUsersList: build.query<
      AccountsUsersListApiResponse,
      AccountsUsersListApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    accountsUsersCreate: build.mutation<
      AccountsUsersCreateApiResponse,
      AccountsUsersCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    accountsUsersActivateCreate: build.mutation<
      AccountsUsersActivateCreateApiResponse,
      AccountsUsersActivateCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/activate/`,
        method: "POST",
        body: queryArg.passwordToken,
      }),
    }),
    accountsUsersInviteCreate: build.mutation<
      AccountsUsersInviteCreateApiResponse,
      AccountsUsersInviteCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/invite/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    accountsUsersRead: build.query<
      AccountsUsersReadApiResponse,
      AccountsUsersReadApiArg
    >({
      query: (queryArg) => ({ url: `/accounts/users/${queryArg.id}/` }),
    }),
    accountsUsersUpdate: build.mutation<
      AccountsUsersUpdateApiResponse,
      AccountsUsersUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    accountsUsersPartialUpdate: build.mutation<
      AccountsUsersPartialUpdateApiResponse,
      AccountsUsersPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    accountsUsersDelete: build.mutation<
      AccountsUsersDeleteApiResponse,
      AccountsUsersDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/accounts/users/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    postAuthConvertToken: build.mutation<
      PostAuthConvertTokenApiResponse,
      PostAuthConvertTokenApiArg
    >({
      query: () => ({ url: `/auth/convert-token/`, method: "POST" }),
    }),
    postAuthDisconnectBackend: build.mutation<
      PostAuthDisconnectBackendApiResponse,
      PostAuthDisconnectBackendApiArg
    >({
      query: () => ({ url: `/auth/disconnect-backend/`, method: "POST" }),
    }),
    postAuthInvalidateRefreshTokens: build.mutation<
      PostAuthInvalidateRefreshTokensApiResponse,
      PostAuthInvalidateRefreshTokensApiArg
    >({
      query: () => ({
        url: `/auth/invalidate-refresh-tokens/`,
        method: "POST",
      }),
    }),
    postAuthInvalidateSessions: build.mutation<
      PostAuthInvalidateSessionsApiResponse,
      PostAuthInvalidateSessionsApiArg
    >({
      query: () => ({ url: `/auth/invalidate-sessions/`, method: "POST" }),
    }),
    postAuthRevokeToken: build.mutation<
      PostAuthRevokeTokenApiResponse,
      PostAuthRevokeTokenApiArg
    >({
      query: () => ({ url: `/auth/revoke-token/`, method: "POST" }),
    }),
    authTokenCreate: build.mutation<
      AuthTokenCreateApiResponse,
      AuthTokenCreateApiArg
    >({
      query: () => ({ url: `/auth/token/`, method: "POST" }),
    }),
    productsList: build.query<ProductsListApiResponse, ProductsListApiArg>({
      query: (queryArg) => ({
        url: `/products/`,
        params: {
          search: queryArg.search,
          ordering: queryArg.ordering,
          page: queryArg.page,
          per_page: queryArg.perPage,
          only_user_products: queryArg.onlyUserProducts,
          scanning_time_lt: queryArg.scanningTimeLt,
          authored: queryArg.authored,
          verified: queryArg.verified,
        },
      }),
    }),
    productsCreate: build.mutation<
      ProductsCreateApiResponse,
      ProductsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/products/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    productsPost: build.mutation<ProductsPostApiResponse, ProductsPostApiArg>({
      query: (queryArg) => ({
        url: `/products/extract-text/`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getProductsProductByBarcode: build.query<
      GetProductsProductByBarcodeApiResponse,
      GetProductsProductByBarcodeApiArg
    >({
      query: (queryArg) => ({
        url: `/products/product-by-barcode/`,
        params: { barcode: queryArg.barcode },
      }),
    }),
    productsRead: build.query<ProductsReadApiResponse, ProductsReadApiArg>({
      query: (queryArg) => ({ url: `/products/${queryArg.id}/` }),
    }),
    productsUpdate: build.mutation<
      ProductsUpdateApiResponse,
      ProductsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/products/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    productsPartialUpdate: build.mutation<
      ProductsPartialUpdateApiResponse,
      ProductsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/products/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    questionnairesList: build.query<
      QuestionnairesListApiResponse,
      QuestionnairesListApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/`,
        params: {
          product: queryArg.product,
          page: queryArg.page,
          per_page: queryArg.perPage,
        },
      }),
    }),
    questionnairesCreate: build.mutation<
      QuestionnairesCreateApiResponse,
      QuestionnairesCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/`,
        method: "POST",
        body: queryArg.questionnaireCreate,
      }),
    }),
    questionnairesAnswersList: build.query<
      QuestionnairesAnswersListApiResponse,
      QuestionnairesAnswersListApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    questionnairesAnswersCreate: build.mutation<
      QuestionnairesAnswersCreateApiResponse,
      QuestionnairesAnswersCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/`,
        method: "POST",
        body: queryArg.answerCreate,
      }),
    }),
    questionnairesAnswersRespondUpdate: build.mutation<
      QuestionnairesAnswersRespondUpdateApiResponse,
      QuestionnairesAnswersRespondUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/respond/`,
        method: "PUT",
        body: queryArg.answerResponds,
      }),
    }),
    questionnairesAnswersRead: build.query<
      QuestionnairesAnswersReadApiResponse,
      QuestionnairesAnswersReadApiArg
    >({
      query: (queryArg) => ({ url: `/questionnaires/answers/${queryArg.id}/` }),
    }),
    questionnairesAnswersUpdate: build.mutation<
      QuestionnairesAnswersUpdateApiResponse,
      QuestionnairesAnswersUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.answerUpdate,
      }),
    }),
    questionnairesAnswersPartialUpdate: build.mutation<
      QuestionnairesAnswersPartialUpdateApiResponse,
      QuestionnairesAnswersPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.answerUpdate,
      }),
    }),
    questionnairesAnswersDelete: build.mutation<
      QuestionnairesAnswersDeleteApiResponse,
      QuestionnairesAnswersDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/answers/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    questionnairesCampaignsList: build.query<
      QuestionnairesCampaignsListApiResponse,
      QuestionnairesCampaignsListApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    questionnairesCampaignsCreate: build.mutation<
      QuestionnairesCampaignsCreateApiResponse,
      QuestionnairesCampaignsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/`,
        method: "POST",
        body: queryArg.campaignCreate,
      }),
    }),
    questionnairesCampaignsRead: build.query<
      QuestionnairesCampaignsReadApiResponse,
      QuestionnairesCampaignsReadApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/${queryArg.id}/`,
      }),
    }),
    questionnairesCampaignsUpdate: build.mutation<
      QuestionnairesCampaignsUpdateApiResponse,
      QuestionnairesCampaignsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.campaignUpdate,
      }),
    }),
    questionnairesCampaignsPartialUpdate: build.mutation<
      QuestionnairesCampaignsPartialUpdateApiResponse,
      QuestionnairesCampaignsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.campaignUpdate,
      }),
    }),
    questionnairesCampaignsDelete: build.mutation<
      QuestionnairesCampaignsDeleteApiResponse,
      QuestionnairesCampaignsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/campaigns/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    questionnairesQuestionsList: build.query<
      QuestionnairesQuestionsListApiResponse,
      QuestionnairesQuestionsListApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    questionnairesQuestionsCreate: build.mutation<
      QuestionnairesQuestionsCreateApiResponse,
      QuestionnairesQuestionsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/`,
        method: "POST",
        body: queryArg.questionCreate,
      }),
    }),
    questionnairesQuestionsRead: build.query<
      QuestionnairesQuestionsReadApiResponse,
      QuestionnairesQuestionsReadApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/${queryArg.id}/`,
      }),
    }),
    questionnairesQuestionsUpdate: build.mutation<
      QuestionnairesQuestionsUpdateApiResponse,
      QuestionnairesQuestionsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.questionUpdate,
      }),
    }),
    questionnairesQuestionsPartialUpdate: build.mutation<
      QuestionnairesQuestionsPartialUpdateApiResponse,
      QuestionnairesQuestionsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.questionUpdate,
      }),
    }),
    questionnairesQuestionsDelete: build.mutation<
      QuestionnairesQuestionsDeleteApiResponse,
      QuestionnairesQuestionsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/questions/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    questionnairesReportsList: build.query<
      QuestionnairesReportsListApiResponse,
      QuestionnairesReportsListApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/reports/`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    questionnairesReportsRead: build.query<
      QuestionnairesReportsReadApiResponse,
      QuestionnairesReportsReadApiArg
    >({
      query: (queryArg) => ({ url: `/questionnaires/reports/${queryArg.id}/` }),
    }),
    questionnairesRead: build.query<
      QuestionnairesReadApiResponse,
      QuestionnairesReadApiArg
    >({
      query: (queryArg) => ({ url: `/questionnaires/${queryArg.id}/` }),
    }),
    questionnairesUpdate: build.mutation<
      QuestionnairesUpdateApiResponse,
      QuestionnairesUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.questionnaireUpdate,
      }),
    }),
    questionnairesPartialUpdate: build.mutation<
      QuestionnairesPartialUpdateApiResponse,
      QuestionnairesPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.questionnaireUpdate,
      }),
    }),
    questionnairesDelete: build.mutation<
      QuestionnairesDeleteApiResponse,
      QuestionnairesDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/questionnaires/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as thronesApi };
export type PutAccountsChangePasswordByIdApiResponse =
  /** status 200  */ DetailResponse;
export type PutAccountsChangePasswordByIdApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  changePassword: ChangePassword;
};
export type PatchAccountsChangePasswordByIdApiResponse =
  /** status 200  */ DetailResponse;
export type PatchAccountsChangePasswordByIdApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  changePassword: ChangePassword;
};
export type PutAccountsClientAvatarsByIdApiResponse =
  /** status 200  */ ClientRead;
export type PutAccountsClientAvatarsByIdApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
  body: {
    image: Blob;
  };
};
export type PatchAccountsClientAvatarsByIdApiResponse =
  /** status 200  */ ClientRead;
export type PatchAccountsClientAvatarsByIdApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
  body: {
    image: Blob;
  };
};
export type DeleteAccountsClientAvatarsByIdApiResponse =
  /** status 204  */ Empty;
export type DeleteAccountsClientAvatarsByIdApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
};
export type AccountsClientsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ClientRead[];
};
export type AccountsClientsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type AccountsClientsCreateApiResponse = /** status 201  */ ClientRead;
export type AccountsClientsCreateApiArg = {
  body: {
    name: string;
    domain: string;
    email?: string;
    image?: Blob;
  };
};
export type AccountsClientsReadApiResponse = /** status 200  */ ClientRead;
export type AccountsClientsReadApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
};
export type AccountsClientsUpdateApiResponse = /** status 200  */ ClientRead;
export type AccountsClientsUpdateApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
  body: {
    name: string;
    domain: string;
    email?: string;
  };
};
export type AccountsClientsPartialUpdateApiResponse =
  /** status 200  */ ClientRead;
export type AccountsClientsPartialUpdateApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
  body: {
    name: string;
    domain: string;
    email?: string;
  };
};
export type AccountsClientsDeleteApiResponse = unknown;
export type AccountsClientsDeleteApiArg = {
  /** A unique integer value identifying this client. */
  id: number;
};
export type PostAccountsConvertTokenApiResponse =
  /** status 201  */ ConvertTokenResponseRead;
export type PostAccountsConvertTokenApiArg = {
  documentedConvertToken: DocumentedConvertToken;
};
export type GetCsrfTokenApiResponse = unknown;
export type GetCsrfTokenApiArg = void;
export type AccountsLoginCreateApiResponse =
  /** status 200  */ TokenWithExpirationResponseRead;
export type AccountsLoginCreateApiArg = {
  tokenObtainPairWithExpiration: TokenObtainPairWithExpiration;
};
export type AccountsLogoutCreateApiResponse = /** status 205  */ DetailResponse;
export type AccountsLogoutCreateApiArg = {
  logout: Logout;
};
export type GetAccountsPasswordResetRedirectByTokenApiResponse =
  /** status 200  */ Empty;
export type GetAccountsPasswordResetRedirectByTokenApiArg = {
  token: string;
};
export type PostAccountsPasswordResetApiResponse =
  /** status 201  */ DetailResponse;
export type PostAccountsPasswordResetApiArg = {
  requestResetPasswordToken: RequestResetPasswordToken;
};
export type PostAccountsPasswordResetConfirmApiResponse =
  /** status 201  */ PasswordToken;
export type PostAccountsPasswordResetConfirmApiArg = {
  passwordToken: PasswordToken;
};
export type PostAccountsPasswordResetValidateTokenApiResponse =
  /** status 201  */ ResetToken;
export type PostAccountsPasswordResetValidateTokenApiArg = {
  resetToken: ResetToken;
};
export type PostAccountsRefreshTokenApiResponse =
  /** status 200  */ TokenWithExpirationResponseRead;
export type PostAccountsRefreshTokenApiArg = {
  tokenRefreshWithExpiration: TokenRefreshWithExpiration;
};
export type AccountsSessionLoginApiResponse = /** status 200  */ UserRead;
export type AccountsSessionLoginApiArg = {
  sessionLogin: SessionLogin;
};
export type AccountsSessionLogoutApiResponse = unknown;
export type AccountsSessionLogoutApiArg = void;
export type PutAccountsUserAvatarsByIdApiResponse = /** status 200  */ UserRead;
export type PutAccountsUserAvatarsByIdApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  body: {
    image: Blob;
  };
};
export type PatchAccountsUserAvatarsByIdApiResponse =
  /** status 200  */ UserRead;
export type PatchAccountsUserAvatarsByIdApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  body: {
    image: Blob;
  };
};
export type DeleteAccountsUserAvatarsByIdApiResponse = /** status 204  */ Empty;
export type DeleteAccountsUserAvatarsByIdApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
};
export type AccountsUsersListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: UserRead[];
};
export type AccountsUsersListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type AccountsUsersCreateApiResponse = /** status 201  */ UserRead;
export type AccountsUsersCreateApiArg = {
  body: {
    email: string;
    client_id?: number;
    first_name: string;
    last_name: string;
    password: string;
    password2: string;
    image?: Blob;
  };
};
export type AccountsUsersActivateCreateApiResponse =
  /** status 201  */ PasswordToken;
export type AccountsUsersActivateCreateApiArg = {
  passwordToken: PasswordToken;
};
export type AccountsUsersInviteCreateApiResponse = /** status 201  */ UserRead;
export type AccountsUsersInviteCreateApiArg = {
  body: {
    email: string;
    client_id: number;
    first_name: string;
    last_name: string;
    image?: Blob;
  };
};
export type AccountsUsersReadApiResponse = /** status 200  */ UserRead;
export type AccountsUsersReadApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
};
export type AccountsUsersUpdateApiResponse = /** status 200  */ UserRead;
export type AccountsUsersUpdateApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  body: {
    email: string;
    first_name?: string;
    last_name?: string;
    client_id?: number;
  };
};
export type AccountsUsersPartialUpdateApiResponse = /** status 200  */ UserRead;
export type AccountsUsersPartialUpdateApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  body: {
    email: string;
    first_name?: string;
    last_name?: string;
    client_id?: number;
  };
};
export type AccountsUsersDeleteApiResponse = unknown;
export type AccountsUsersDeleteApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
};
export type PostAuthConvertTokenApiResponse = unknown;
export type PostAuthConvertTokenApiArg = void;
export type PostAuthDisconnectBackendApiResponse = unknown;
export type PostAuthDisconnectBackendApiArg = void;
export type PostAuthInvalidateRefreshTokensApiResponse = unknown;
export type PostAuthInvalidateRefreshTokensApiArg = void;
export type PostAuthInvalidateSessionsApiResponse = unknown;
export type PostAuthInvalidateSessionsApiArg = void;
export type PostAuthRevokeTokenApiResponse = unknown;
export type PostAuthRevokeTokenApiArg = void;
export type AuthTokenCreateApiResponse = unknown;
export type AuthTokenCreateApiArg = void;
export type ProductsListApiResponse = /** status 200  */ PaginatedProductRead;
export type ProductsListApiArg = {
  /** A search term. */
  search?: string;
  /** Which field to use when ordering the results. */
  ordering?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
  /** Filter only user's saved products */
  onlyUserProducts?: boolean;
  /** Filter products scanned before the passed datetime (Available only with 'only_user_products=true') */
  scanningTimeLt?: any;
  /** Filter products added by the requesting user */
  authored?: boolean;
  /** Filter products by the user who created a product (Available only with 'authored=true') */
  verified?: boolean;
};
export type ProductsCreateApiResponse = /** status 201  */ ProductRead;
export type ProductsCreateApiArg = {
  body: {
    name?: string;
    quantity?: string;
    category?: "food" | "cosmetics" | "tech";
    barcode: string;
    description?: string;
    ingredients?: string;
    /** Keeps front image stored by us */
    front_image?: Blob;
    /** Keeps back image stored by us */
    back_image?: Blob;
  };
};
export type ProductsPostApiResponse = /** status 200  */ ExtractTextResponse;
export type ProductsPostApiArg = {
  body: {
    /** Image with text to extract */
    text_image?: Blob;
    /** Type of text to extract. Currently available: 'ingredients', 'description' */
    text_type?: string;
  };
};
export type GetProductsProductByBarcodeApiResponse =
  /** status 200  */ ProductRetrieveRead;
export type GetProductsProductByBarcodeApiArg = {
  barcode: string;
};
export type ProductsReadApiResponse = /** status 200  */ ProductRetrieveRead;
export type ProductsReadApiArg = {
  id: string;
};
export type ProductsUpdateApiResponse = /** status 200  */ ProductUpdateRead;
export type ProductsUpdateApiArg = {
  id: string;
  body: {
    name?: string;
    quantity?: string;
    category?: "food" | "cosmetics" | "tech";
    barcode: string;
    description?: string;
    ingredients?: string;
    /** Keeps front image stored by us */
    front_image?: Blob;
    /** Keeps back image stored by us */
    back_image?: Blob;
  };
};
export type ProductsPartialUpdateApiResponse =
  /** status 200  */ ProductPartialUpdateRead;
export type ProductsPartialUpdateApiArg = {
  id: string;
  body: {
    name?: string;
    quantity?: string;
    category?: "food" | "cosmetics" | "tech";
    barcode?: string;
    description?: string;
    ingredients?: string;
    /** Keeps front image stored by us */
    front_image?: Blob;
    /** Keeps back image stored by us */
    back_image?: Blob;
  };
};
export type QuestionnairesListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: QuestionnaireListRead[];
};
export type QuestionnairesListApiArg = {
  product?: string;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type QuestionnairesCreateApiResponse =
  /** status 201  */ QuestionnaireRead;
export type QuestionnairesCreateApiArg = {
  questionnaireCreate: QuestionnaireCreate;
};
export type QuestionnairesAnswersListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: AnswerListRead[];
};
export type QuestionnairesAnswersListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type QuestionnairesAnswersCreateApiResponse =
  /** status 201  */ AnswerRead;
export type QuestionnairesAnswersCreateApiArg = {
  answerCreate: AnswerCreate;
};
export type QuestionnairesAnswersRespondUpdateApiResponse = unknown;
export type QuestionnairesAnswersRespondUpdateApiArg = {
  answerResponds: AnswerResponds;
};
export type QuestionnairesAnswersReadApiResponse =
  /** status 200  */ AnswerRead;
export type QuestionnairesAnswersReadApiArg = {
  /** A unique integer value identifying this answer. */
  id: number;
};
export type QuestionnairesAnswersUpdateApiResponse =
  /** status 200  */ AnswerRead;
export type QuestionnairesAnswersUpdateApiArg = {
  /** A unique integer value identifying this answer. */
  id: number;
  answerUpdate: AnswerUpdate;
};
export type QuestionnairesAnswersPartialUpdateApiResponse =
  /** status 200  */ AnswerRead;
export type QuestionnairesAnswersPartialUpdateApiArg = {
  /** A unique integer value identifying this answer. */
  id: number;
  answerUpdate: AnswerUpdate;
};
export type QuestionnairesAnswersDeleteApiResponse = unknown;
export type QuestionnairesAnswersDeleteApiArg = {
  /** A unique integer value identifying this answer. */
  id: number;
};
export type QuestionnairesCampaignsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: CampaignListRead[];
};
export type QuestionnairesCampaignsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type QuestionnairesCampaignsCreateApiResponse =
  /** status 201  */ CampaignRead;
export type QuestionnairesCampaignsCreateApiArg = {
  campaignCreate: CampaignCreate;
};
export type QuestionnairesCampaignsReadApiResponse =
  /** status 200  */ CampaignRead;
export type QuestionnairesCampaignsReadApiArg = {
  /** A unique integer value identifying this campaign. */
  id: number;
};
export type QuestionnairesCampaignsUpdateApiResponse =
  /** status 200  */ CampaignRead;
export type QuestionnairesCampaignsUpdateApiArg = {
  /** A unique integer value identifying this campaign. */
  id: number;
  campaignUpdate: CampaignUpdate;
};
export type QuestionnairesCampaignsPartialUpdateApiResponse =
  /** status 200  */ CampaignRead;
export type QuestionnairesCampaignsPartialUpdateApiArg = {
  /** A unique integer value identifying this campaign. */
  id: number;
  campaignUpdate: CampaignUpdate;
};
export type QuestionnairesCampaignsDeleteApiResponse = unknown;
export type QuestionnairesCampaignsDeleteApiArg = {
  /** A unique integer value identifying this campaign. */
  id: number;
};
export type QuestionnairesQuestionsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: QuestionListRead[];
};
export type QuestionnairesQuestionsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type QuestionnairesQuestionsCreateApiResponse =
  /** status 201  */ QuestionRead;
export type QuestionnairesQuestionsCreateApiArg = {
  questionCreate: QuestionCreate;
};
export type QuestionnairesQuestionsReadApiResponse =
  /** status 200  */ QuestionRead;
export type QuestionnairesQuestionsReadApiArg = {
  /** A unique integer value identifying this question. */
  id: number;
};
export type QuestionnairesQuestionsUpdateApiResponse =
  /** status 200  */ QuestionRead;
export type QuestionnairesQuestionsUpdateApiArg = {
  /** A unique integer value identifying this question. */
  id: number;
  questionUpdate: QuestionUpdate;
};
export type QuestionnairesQuestionsPartialUpdateApiResponse =
  /** status 200  */ QuestionRead;
export type QuestionnairesQuestionsPartialUpdateApiArg = {
  /** A unique integer value identifying this question. */
  id: number;
  questionUpdate: QuestionUpdate;
};
export type QuestionnairesQuestionsDeleteApiResponse = unknown;
export type QuestionnairesQuestionsDeleteApiArg = {
  /** A unique integer value identifying this question. */
  id: number;
};
export type QuestionnairesReportsListApiResponse = /** status 200  */ {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: ReportListRead[];
};
export type QuestionnairesReportsListApiArg = {
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  perPage?: number;
};
export type QuestionnairesReportsReadApiResponse =
  /** status 200  */ ReportRead;
export type QuestionnairesReportsReadApiArg = {
  /** A unique integer value identifying this report. */
  id: number;
};
export type QuestionnairesReadApiResponse =
  /** status 200  */ QuestionnaireRead;
export type QuestionnairesReadApiArg = {
  /** A unique integer value identifying this questionnaire. */
  id: number;
};
export type QuestionnairesUpdateApiResponse =
  /** status 200  */ QuestionnaireRead;
export type QuestionnairesUpdateApiArg = {
  /** A unique integer value identifying this questionnaire. */
  id: number;
  questionnaireUpdate: QuestionnaireUpdate;
};
export type QuestionnairesPartialUpdateApiResponse =
  /** status 200  */ QuestionnaireRead;
export type QuestionnairesPartialUpdateApiArg = {
  /** A unique integer value identifying this questionnaire. */
  id: number;
  questionnaireUpdate: QuestionnaireUpdate;
};
export type QuestionnairesDeleteApiResponse = unknown;
export type QuestionnairesDeleteApiArg = {
  /** A unique integer value identifying this questionnaire. */
  id: number;
};
export type DetailResponse = {
  detail: string;
};
export type ChangePasswordError = {
  old_password: string[];
  password: string[];
};
export type ChangePassword = {
  old_password: string;
  password: string;
  password2: string;
};
export type Client = {
  name: string;
  domain: string;
  email?: string | null;
};
export type ClientRead = {
  id?: number;
  name: string;
  domain: string;
  email?: string | null;
  avatar_url?: string;
};
export type Empty = {};
export type ValidationErrorsResponse = {
  details: {
    [key: string]: string | null;
  };
};
export type ConvertTokenResponse = {
  refresh: string;
  access: string;
};
export type ConvertTokenResponseRead = {
  refresh: string;
  access: string;
  refresh_token_expires_at?: string;
  access_token_expires_at?: string;
  user_id?: string;
};
export type DocumentedConvertToken = {
  /** Grant type. Example='convert_token' */
  grant_type: string;
  /** Oauth2 backend. Example='google-oauth2','facebook', 'apple-id' */
  backend: string;
  /** Client id from the django oauth application. Example='f7XdU...' */
  client_id: string;
  /** Client secret from the django oauth application. Example='HsrrX...' */
  client_secret: string;
  /** Oauth2 access token. Example='ya29.ew...' */
  token: string;
};
export type TokenWithExpirationResponse = {
  refresh: string;
};
export type TokenWithExpirationResponseRead = {
  refresh: string;
  access?: string;
  user_id?: number;
  refresh_token_expires_at?: string;
  access_token_expires_at?: string;
};
export type TokenObtainPairWithExpiration = {
  email: string;
  password: string;
};
export type Logout = {
  refresh_token: string;
};
export type RequestResetPasswordToken = {
  email: string;
};
export type PasswordToken = {
  password: string;
  token: string;
};
export type ResetToken = {
  token: string;
};
export type DetailCodeResponse = {
  detail: string;
  code: string;
};
export type TokenRefreshWithExpiration = {
  refresh: string;
};
export type TokenRefreshWithExpirationRead = {
  refresh: string;
  access?: string;
};
export type User = {
  email: string;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: boolean;
  first_name?: string;
  last_name?: string;
  client?: Client;
};
export type UserRead = {
  id?: number;
  email: string;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  is_active?: boolean;
  first_name?: string;
  last_name?: string;
  client?: ClientRead;
  avatar_url?: string;
};
export type SessionLogin = {
  username: string;
  password: string;
};
export type Product = {
  name?: string | null;
  category?: "food" | "cosmetics" | "tech";
  quantity?: string | null;
  /** Keeps url of remote front image */
  front_image_url?: string | null;
  /** Keeps url of remote back image */
  back_image_url?: string | null;
  score?: number | null;
};
export type ProductRead = {
  id?: number;
  name?: string | null;
  category?: "food" | "cosmetics" | "tech";
  quantity?: string | null;
  /** Keeps url of remote front image */
  front_image_url?: string | null;
  /** Keeps front image stored by us */
  front_image?: string | null;
  /** Keeps url of remote back image */
  back_image_url?: string | null;
  /** Keeps back image stored by us */
  back_image?: string | null;
  score?: number | null;
  color?: string;
  scanning_time?: string | null;
};
export type PaginatedProduct = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
};
export type PaginatedProductRead = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductRead[];
};
export type ExtractTextResponse = {
  /** Result of test extraction. */
  extracted_text: string;
};
export type HealthMetrics = {
  additives_score: number | null;
  nutriscore_score: number | null;
};
export type PackagingMetrics = {};
export type PackagingMetricsRead = {
  features?: string[];
};
export type ClimateMetrics = {};
export type ClimateMetricsRead = {
  features?: string[];
};
export type ProductMetrics = {
  health?: HealthMetrics;
  packaging?: PackagingMetrics;
  climate?: ClimateMetrics;
};
export type ProductMetricsRead = {
  health?: HealthMetrics;
  packaging?: PackagingMetricsRead;
  climate?: ClimateMetricsRead;
};
export type Answer = {
  title: string;
  order?: number;
};
export type AnswerRead = {
  id?: number;
  title: string;
  order?: number;
};
export type Question = {
  answers: Answer[];
  title: string;
  type: "freetext" | "yes_no" | "likert_scale";
  order?: number;
};
export type QuestionRead = {
  id?: number;
  answers: AnswerRead[];
  title: string;
  type: "freetext" | "yes_no" | "likert_scale";
  order?: number;
};
export type Questionnaire = {
  title: string;
  product: number;
  questions: Question[];
};
export type QuestionnaireRead = {
  id?: number;
  title: string;
  product: number;
  questions: QuestionRead[];
};
export type ProductRetrieve = {
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  /** Keeps url of remote front image */
  front_image_url?: string | null;
  /** Keeps url of remote back image */
  back_image_url?: string | null;
  barcode: string;
  description?: string | null;
  ingredients?: string | null;
  score?: number | null;
  metrics?: ProductMetrics;
  author?: number | null;
  verified?: boolean;
  active_questionnaire?: Questionnaire;
};
export type ProductSection = {
  title: string;
  type: string;
  score: number;
  color: string;
};
export type ProductSectionRead = {
  title: string;
  type: string;
  score: number;
  color: string;
  icon_url?: string;
};
export type ProductRetrieveRead = {
  id?: number;
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  /** Keeps url of remote front image */
  front_image_url?: string | null;
  /** Keeps front image stored by us */
  front_image?: string | null;
  /** Keeps url of remote back image */
  back_image_url?: string | null;
  /** Keeps back image stored by us */
  back_image?: string | null;
  barcode: string;
  description?: string | null;
  ingredients?: string | null;
  score?: number | null;
  color?: string;
  scanning_time?: string | null;
  sections?: ProductSectionRead[];
  metrics?: ProductMetricsRead;
  author?: number | null;
  verified?: boolean;
  active_questionnaire?: QuestionnaireRead;
};
export type ProductUpdate = {
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  barcode: string;
  description?: string | null;
  ingredients?: string | null;
};
export type ProductUpdateRead = {
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  barcode: string;
  description?: string | null;
  ingredients?: string | null;
  /** Keeps front image stored by us */
  front_image?: string | null;
  /** Keeps back image stored by us */
  back_image?: string | null;
};
export type ProductPartialUpdate = {
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  barcode?: string;
  description?: string | null;
  ingredients?: string | null;
};
export type ProductPartialUpdateRead = {
  name?: string | null;
  quantity?: string | null;
  category?: "food" | "cosmetics" | "tech";
  barcode?: string;
  description?: string | null;
  ingredients?: string | null;
  /** Keeps front image stored by us */
  front_image?: string | null;
  /** Keeps back image stored by us */
  back_image?: string | null;
};
export type QuestionnaireList = {
  title: string;
  product: number;
  status?: "draft" | "published";
};
export type QuestionnaireListRead = {
  id?: number;
  title: string;
  product: number;
  status?: "draft" | "published";
};
export type QuestionnaireCreate = {
  title: string;
  product: number;
};
export type QuestionnaireCreateRead = {
  id?: number;
  title: string;
  product: number;
};
export type AnswerList = {
  title: string;
  order?: number;
  question: number;
};
export type AnswerListRead = {
  id?: number;
  title: string;
  order?: number;
  question: number;
};
export type AnswerCreate = {
  title: string;
  question: number;
};
export type AnswerRespond = {
  answer: number;
  question: number;
  content?: string;
};
export type AnswerResponds = {
  questionnaire: number;
  responds: AnswerRespond[];
};
export type AnswerUpdate = {
  title: string;
  order?: number;
};
export type CampaignList = {
  title: string;
  status?: "draft" | "in_queue" | "running" | "finished";
  questionnaire: number;
  start_date: string;
  end_date: string;
};
export type CampaignListRead = {
  id?: number;
  title: string;
  status?: "draft" | "in_queue" | "running" | "finished";
  questionnaire: number;
  start_date: string;
  end_date: string;
};
export type Campaign = {
  title: string;
  status?: "draft" | "in_queue" | "running" | "finished";
  questionnaire: number;
  start_date: string;
  end_date: string;
};
export type CampaignRead = {
  id?: number;
  title: string;
  status?: "draft" | "in_queue" | "running" | "finished";
  questionnaire: number;
  start_date: string;
  end_date: string;
};
export type CampaignCreate = {
  title: string;
  questionnaire: number;
  start_date: string;
  end_date: string;
  client: number;
};
export type CampaignUpdate = {
  title: string;
};
export type QuestionList = {
  title: string;
  type: "freetext" | "yes_no" | "likert_scale";
  order?: number;
};
export type QuestionListRead = {
  id?: number;
  title: string;
  type: "freetext" | "yes_no" | "likert_scale";
  order?: number;
};
export type QuestionCreate = {
  title: string;
  type: "freetext" | "yes_no" | "likert_scale";
  questionnaire: number;
};
export type QuestionUpdate = {
  title: string;
  order?: number;
};
export type ReportList = {
  title: string;
  campaign: number;
};
export type ReportListRead = {
  id?: number;
  title: string;
  campaign: number;
};
export type Report = {
  title: string;
  campaign: number;
  results?: object;
};
export type ReportRead = {
  id?: number;
  title: string;
  campaign: number;
  results?: object;
};
export type QuestionnaireUpdate = {
  title: string;
  status?: "draft" | "published";
};
export type QuestionnaireUpdateRead = {
  id?: number;
  title: string;
  status?: "draft" | "published";
};
export const {
  usePutAccountsChangePasswordByIdMutation,
  usePatchAccountsChangePasswordByIdMutation,
  usePutAccountsClientAvatarsByIdMutation,
  usePatchAccountsClientAvatarsByIdMutation,
  useDeleteAccountsClientAvatarsByIdMutation,
  useAccountsClientsListQuery,
  useAccountsClientsCreateMutation,
  useAccountsClientsReadQuery,
  useAccountsClientsUpdateMutation,
  useAccountsClientsPartialUpdateMutation,
  useAccountsClientsDeleteMutation,
  usePostAccountsConvertTokenMutation,
  useGetCsrfTokenQuery,
  useAccountsLoginCreateMutation,
  useAccountsLogoutCreateMutation,
  useGetAccountsPasswordResetRedirectByTokenQuery,
  usePostAccountsPasswordResetMutation,
  usePostAccountsPasswordResetConfirmMutation,
  usePostAccountsPasswordResetValidateTokenMutation,
  usePostAccountsRefreshTokenMutation,
  useAccountsSessionLoginMutation,
  useAccountsSessionLogoutMutation,
  usePutAccountsUserAvatarsByIdMutation,
  usePatchAccountsUserAvatarsByIdMutation,
  useDeleteAccountsUserAvatarsByIdMutation,
  useAccountsUsersListQuery,
  useAccountsUsersCreateMutation,
  useAccountsUsersActivateCreateMutation,
  useAccountsUsersInviteCreateMutation,
  useAccountsUsersReadQuery,
  useAccountsUsersUpdateMutation,
  useAccountsUsersPartialUpdateMutation,
  useAccountsUsersDeleteMutation,
  usePostAuthConvertTokenMutation,
  usePostAuthDisconnectBackendMutation,
  usePostAuthInvalidateRefreshTokensMutation,
  usePostAuthInvalidateSessionsMutation,
  usePostAuthRevokeTokenMutation,
  useAuthTokenCreateMutation,
  useProductsListQuery,
  useProductsCreateMutation,
  useProductsPostMutation,
  useGetProductsProductByBarcodeQuery,
  useProductsReadQuery,
  useProductsUpdateMutation,
  useProductsPartialUpdateMutation,
  useQuestionnairesListQuery,
  useQuestionnairesCreateMutation,
  useQuestionnairesAnswersListQuery,
  useQuestionnairesAnswersCreateMutation,
  useQuestionnairesAnswersRespondUpdateMutation,
  useQuestionnairesAnswersReadQuery,
  useQuestionnairesAnswersUpdateMutation,
  useQuestionnairesAnswersPartialUpdateMutation,
  useQuestionnairesAnswersDeleteMutation,
  useQuestionnairesCampaignsListQuery,
  useQuestionnairesCampaignsCreateMutation,
  useQuestionnairesCampaignsReadQuery,
  useQuestionnairesCampaignsUpdateMutation,
  useQuestionnairesCampaignsPartialUpdateMutation,
  useQuestionnairesCampaignsDeleteMutation,
  useQuestionnairesQuestionsListQuery,
  useQuestionnairesQuestionsCreateMutation,
  useQuestionnairesQuestionsReadQuery,
  useQuestionnairesQuestionsUpdateMutation,
  useQuestionnairesQuestionsPartialUpdateMutation,
  useQuestionnairesQuestionsDeleteMutation,
  useQuestionnairesReportsListQuery,
  useQuestionnairesReportsReadQuery,
  useQuestionnairesReadQuery,
  useQuestionnairesUpdateMutation,
  useQuestionnairesPartialUpdateMutation,
  useQuestionnairesDeleteMutation,
} = injectedRtkApi;
