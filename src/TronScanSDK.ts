import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import {
  AccountAuthorizationChangeRecordsQueryParams,
  AccountAuthorizationChangeRecordsResponse,
  AccountDataWithTransactionsQueryParams,
  AccountDataWithTransactionsResponse,
  AccountInfo,
  AccountResourceQueryParams,
  AccountResourceResponse,
  AccountSecurityCheckResponse,
  AccountTokenListQueryParams,
  AccountTokenListResponse,
  AccountTransactionDataQueryParams,
  AccountTransactionDataResponse,
  AccountWalletTokenOverviewResponse,
  ApprovalListQueryParams,
  ApprovalListResponse,
  BlockListQueryParams,
  BlockListResponse,
  ContractDetailResponse,
  ContractEventQueryParams,
  ContractEventResponse,
  DailyAnalyticsDataQueryParams,
  DailyAnalyticsDataResponse,
  InternalTransactionListQueryParams,
  InternalTransactionListResponse,
  TokenDetailsQueryParams,
  TokenPriceQueryParams,
  TokenPriceResponse,
  TransactionDetail,
  TransactionListQueryParams,
  TransactionListResponse,
  TransferQueryParams,
  TransferResponse,
  Trc20OrTrc721TransfersListQueryParams,
  Trc20OrTrc721TransfersListResponse,
  Trc20TransferListQueryParams,
  Trc20TransferListResponse,
  Trc20Trc721Trc1155TokenListResponse,
  TronScanConfig,
  TrxAndTrc10TransfersListQueryParams,
  TrxAndTrc10TransfersListResponse,
  TrxStakingRateQueryParams,
  TrxStakingRateResponse,
  TrxTransferListQueryParams,
  TrxTransferListResponse,
} from "./types";

export class TronScanSDK {
  private client: AxiosInstance;
  private apikey?: string;

  constructor(config: TronScanConfig = {}) {
    this.apikey = config.apiKey || config.apikey;
    this.client = axios.create({
      baseURL: config.baseURL || "https://apilist.tronscanapi.com/api",
      timeout: config.timeout || 10 * 1000,
      headers: {
        ...(this.apikey && { "TRON-PRO-API-KEY": this.apikey }),
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        console.error(
          "TronScan API Error:",
          error.response?.data || error.message
        );
        throw error;
      }
    );
  }

  /**
   * 设置 API Key
   */
  setApiKey(apikey: string): void {
    this.apikey = apikey;
    this.client.defaults.headers["TRON-PRO-API-KEY"] = apikey;
  }

  /**
   * 通用请求方法
   * @param config 请求配置
   * @returns 响应数据
   */
  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    const response = await this.client.request<T>(config);
    return response.data;
  }

  // ===== 账户相关 API =====

  /**
   * 获取账户信息
   * @link https://docs.tronscan.org/api-endpoints/account#get-account-detail-information
   * @param address 账户地址
   * @returns 账户信息
   */
  async getAccountDetail(address: string): Promise<AccountInfo> {
    return this.request<AccountInfo>({
      url: "/accountv2",
      params: { address },
    });
  }

  /**
   * 获取账户代币列表
   * @link https://docs.tronscan.org/api-endpoints/account#get-account-list
   * @param params 查询参数
   * @returns 代币列表
   */
  async getAccountTokenList(
    params: AccountTokenListQueryParams
  ): Promise<AccountTokenListResponse> {
    return this.request<AccountTokenListResponse>({
      url: "/account/tokens",
      params,
    });
  }

  /**
   * 获取账户资源列表
   * @link https://docs.tronscan.org/api-endpoints/account#get-a-list-of-account-resources
   * @param params 查询参数
   * @returns 账户资源列表
   */
  async getAccountResource(
    params: AccountResourceQueryParams
  ): Promise<AccountResourceResponse> {
    return this.request<AccountResourceResponse>({
      url: "/account/resource",
      params,
    });
  }

  /**
   * 获取账户授权列表
   * @link https://docs.tronscan.org/api-endpoints/account#get-approval-list
   * @param params 查询参数
   * @returns 账户授权列表
   */
  async getAccountApprovalList(
    params: ApprovalListQueryParams
  ): Promise<ApprovalListResponse> {
    return this.request<ApprovalListResponse>({
      url: "/account/approve/list",
      params,
    });
  }

  /**
   * 获取账户授权变更记录
   * @link https://docs.tronscan.org/api-endpoints/account#get-account-authorization-change-records
   * @param params 查询参数
   * @returns 账户授权变更记录
   */
  async getAccountAuthorizationChangeRecords(
    params: AccountAuthorizationChangeRecordsQueryParams
  ): Promise<AccountAuthorizationChangeRecordsResponse> {
    return this.request<AccountAuthorizationChangeRecordsResponse>({
      url: "/account/approve/change",
      params,
    });
  }

  /**
   * 获取账户每日分析数据
   * @link https://docs.tronscan.org/api-endpoints/account#get-list-of-daily-analytics-data-for-an-account-over-time
   * @param params 查询参数
   * @returns 账户每日分析数据
   */
  async getDailyAnalyticsData(
    params: DailyAnalyticsDataQueryParams
  ): Promise<DailyAnalyticsDataResponse> {
    return this.request<DailyAnalyticsDataResponse>({
      url: "/account/analysis",
      params,
    });
  }

  /**
   * 获取账户钱包 Token 概览
   * @link https://docs.tronscan.org/api-endpoints/account#get-account-wallet-token-overview
   * @param address 账户地址
   * @returns 账户钱包 Token 概览
   */
  async getAccountWalletTokenOverview(
    address: string
  ): Promise<AccountWalletTokenOverviewResponse> {
    return this.request<AccountWalletTokenOverviewResponse>({
      url: "/account/token_asset_overview",
      params: { address },
    });
  }

  // ===== 合约相关 API =====

  /**
   * 获取合约详情
   * @link https://docs.tronscan.org/api-endpoints/contract#get-contract-detail-information
   * @param address 合约地址
   * @returns 合约详情
   */
  async getContractDetail(contract: string): Promise<ContractDetailResponse> {
    return this.request<ContractDetailResponse>({
      url: "/contract",
      params: { contract },
    });
  }

  /**
   * 获取合约事件信息
   * @link https://docs.tronscan.org/api-endpoints/contract#get-event-information-of-the-contract
   * @param params 查询参数
   * @returns 合约事件信息
   */
  async getContractEvent(
    params: ContractEventQueryParams
  ): Promise<ContractEventResponse> {
    return this.request<ContractEventResponse>({
      url: "/contract/smart-contract-triggers-batch",
      params,
    });
  }

  // ===== 交易相关 API =====

  /**
   * 获取交易列表
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-a-list-of-transactions
   * @param params 查询参数
   * @returns 交易列表
   */
  async getTransactionList(
    params: TransactionListQueryParams
  ): Promise<TransactionListResponse> {
    return this.request<TransactionListResponse>({
      url: "/transaction",
      params,
    });
  }

  /**
   * 通过交易Hash获取交易详情
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-transaction-detail-information-by-transaction-hash
   * @param hash 交易哈希
   * @returns 交易详情
   */
  async getTransactionDetail(hash: string): Promise<TransactionDetail> {
    return this.request<TransactionDetail>({
      url: "/transaction-info",
      params: { hash },
    });
  }

  /**
   * 获取 TRC20 或 TRC721 代币转账列表
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-trc20-and-721-transfers-list
   * @param params 查询参数
   * @returns TRC20 或 TRC721 代币转账列表
   */
  async getTrc20OrTrc721TransfersList(
    params: Trc20OrTrc721TransfersListQueryParams
  ): Promise<Trc20OrTrc721TransfersListResponse> {
    return this.request<Trc20OrTrc721TransfersListResponse>({
      url: "/token_trc20/transfers",
      params,
    });
  }

  /**
   * 获取 TRX 和 TRC10 代币转账列表
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-trx-and-trc10-transfer-list
   * @param params 查询参数
   * @returns TRX 和 TRC10 代币转账列表
   */
  async getTrxAndTrc10TransfersList(
    params: TrxAndTrc10TransfersListQueryParams
  ): Promise<TrxAndTrc10TransfersListResponse> {
    return this.request<TrxAndTrc10TransfersListResponse>({
      url: "/transfer",
      params,
    });
  }

  /**
   * 获取特定地址或区块的内部交易列表
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-internal-transaction-list-for-special-address-or-block
   * @param params 查询参数
   * @returns 特定地址或区块的内部交易列表
   */
  async getInternalTransactionList(
    params: InternalTransactionListQueryParams
  ): Promise<InternalTransactionListResponse> {
    return this.request<InternalTransactionListResponse>({
      url: "/internal-transaction",
      params,
    });
  }

  /**
   * 获取账户交易数据
   * @link https://docs.tronscan.org/api-endpoints/transactions-and-transfers#get-accounts-transaction-datas
   * @param params 查询参数
   * @returns 账户交易数据
   */
  async getAccountTransactionData(
    params: AccountTransactionDataQueryParams
  ): Promise<AccountTransactionDataResponse> {
    return this.request<AccountTransactionDataResponse>({
      url: "/token_trc20/transfers-with-status",
      params,
    });
  }

  /**
   * 获取区块列表
   * @link https://docs.tronscan.org/api-endpoints/block#get-the-list-of-blocks-or-details-of-one-block
   * @param params 查询参数
   * @returns 区块列表
   */
  async getBlockList(params: BlockListQueryParams): Promise<BlockListResponse> {
    return this.request<BlockListResponse>({
      url: "/block",
      params,
    });
  }

  /**
   * 获取 TRC20/TRC721/TRC1155 Token 详情
   * @link https://docs.tronscan.org/api-endpoints/tokens#get-details-of-all-trc20-trc721-trc1155-tokens-or-specified-trc20-trc721-trc1155-tokens
   * @param params 查询参数
   * @returns TRC20/TRC721/TRC1155 Token 详情
   */
  async getTokenDetails(
    params: TokenDetailsQueryParams
  ): Promise<Trc20Trc721Trc1155TokenListResponse> {
    return this.request<Trc20Trc721Trc1155TokenListResponse>({
      url: "/token_trc20",
      params,
    });
  }

  /**
   * 获取指定 Token 价格信息
   * @link https://docs.tronscan.org/api-endpoints/tokens#get-the-price-information-of-a-specific-token
   * @param params 查询参数
   * @returns 指定 Token 价格信息
   */
  async getTokenPrice(
    params: TokenPriceQueryParams
  ): Promise<TokenPriceResponse> {
    return this.request<TokenPriceResponse>({
      url: "/token/price",
      params,
    });
  }

  /**
   * 获取交易信息
   * @link https://docs.tronscan.org/api-endpoints/tokens#get-one-trc10-trx-transfer-information
   * @param params 查询参数
   * @returns 交易信息
   */
  async getTransfer(params: TransferQueryParams): Promise<TransferResponse> {
    return this.request<TransferResponse>({
      url: "/asset/transfer",
      params,
    });
  }

  /**
   * 获取 TRX 转账列表
   * @link https://docs.tronscan.org/api-endpoints/wallet#get-the-list-of-trx-transfers-related-to-a-specific-address
   * @param params 查询参数
   * @returns TRX 转账列表
   */
  async getTrxTransferList(
    params: TrxTransferListQueryParams
  ): Promise<TrxTransferListResponse> {
    return this.request<TrxTransferListResponse>({
      url: "/transfer/trx",
      params,
    });
  }

  /**
   * 获取 TRC20 转账列表
   * @link https://docs.tronscan.org/api-endpoints/wallet#get-the-transfer-list-of-a-specific-trc20-token-for-a-certain-address
   * @param params 查询参数
   * @returns TRC20 转账列表
   */
  async getTrc20TransferList(
    params: Trc20TransferListQueryParams
  ): Promise<Trc20TransferListResponse> {
    return this.request<Trc20TransferListResponse>({
      url: "/transfer/trc20",
      params,
    });
  }

  /**
   * 获取 TRX 质押利率数据
   * @link https://docs.tronscan.org/api-endpoints/statistics#get-trx-staking-rate-data
   * @param params 查询参数
   * @returns TRX 质押利率数据
   */
  async getTrxStakingRate(
    params: TrxStakingRateQueryParams
  ): Promise<TrxStakingRateResponse> {
    return this.request<TrxStakingRateResponse>({
      url: "/freezeresource",
      params,
    });
  }

  /**
   * 获取账户交易数据
   * @link https://docs.tronscan.org/api-endpoints/deep-analysis#get-account-data-with-transaction-records-with-the-current-account
   * @param params 查询参数
   * @returns 账户交易数据
   */
  async getAccountDataWithTransactions(
    params: AccountDataWithTransactionsQueryParams
  ): Promise<AccountDataWithTransactionsResponse> {
    return this.request<AccountDataWithTransactionsResponse>({
      url: "/deep/account/relatedAccount",
      params,
    });
  }

  /**
   * 账户安全检查
   * @link https://docs.tronscan.org/security-service/security-service-api#check-account-security
   * @param address 账户地址
   * @returns 账户安全检查数据
   */
  async getAccountSecurityCheck(
    address: string
  ): Promise<AccountSecurityCheckResponse> {
    return this.request<AccountSecurityCheckResponse>({
      url: "/security/account/data",
      params: { address },
    });
  }

  // ===== 实用工具方法 =====

  /**
   * 从 Sun 转换为 TRX
   */
  static sunToTrx(sun: number | string): number {
    return Number(sun) / 1_000_000;
  }

  /**
   * 从 TRX 转换为 Sun
   */
  static trxToSun(trx: number | string): number {
    return Number(trx) * 1_000_000;
  }

  /**
   * 格式化地址 (显示前6位和后6位)
   */
  static formatAddress(address: string): string {
    if (!address || address.length < 12) return address;
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  }

  /**
   * 格式化时间戳
   */
  static formatTimestamp(timestamp: number): Date {
    return new Date(timestamp);
  }

  /**
   * 检查是否是有效的 TRON 地址
   */
  static isValidTronAddress(address: string): boolean {
    return /^T[a-zA-Z0-9]{33}$/.test(address);
  }

  /**
   * 检查是否是有效的交易哈希
   */
  static isValidTransactionHash(hash: string): boolean {
    return /^[a-fA-F0-9]{64}$/.test(hash);
  }
}
