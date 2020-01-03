import { useApiUrl } from "@/config/apiUrl.js";

export default {
  version: 0.1,
  timeout: 60000,
  apiPrefix: "",
  requestRetry: 4,
  requestRetryDelay: 800,
  tokenKey: "ACCESS_TOKEN",
  userInfoKey: "USER_INFO",
  apiUrl: useApiUrl,
  corporation: "公司名教育科技（北京）有限公司",
  siteName: "ElementUi管理后台"
};
