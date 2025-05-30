// 配置选项
export interface TronScanConfig {
  apikey?: string; // 改为可选参数
  apiKey?: string; // 添加 apiKey 支持，兼容两种写法
  baseURL?: string;
  timeout?: number;
}

// ======================
// API 响应基础类型
// ======================

/**
 * API 通用响应接口
 */
export interface ApiResponse<T = any> {
  /**
   * 状态码
   * @type {number}
   */
  code?: number;
  /**
   * 响应数据
   * @type {T}
   */
  data?: T;
  /**
   * 错误信息
   * @type {string}
   */
  message?: string;
  /**
   * 是否成功
   * @type {boolean}
   */
  success?: boolean;
  /**
   * 总数
   * @type {number}
   */
  total?: number;
}

// ======================
// 分页和查询参数
// ======================

/**
 * 分页参数接口
 */
export interface PaginationParams {
  /**
   * 页码
   * @type {number}
   */
  start?: number;
  /**
   * 每页数量
   * @type {number}
   */
  limit?: number;
  /**
   * 排序方式
   * @type {string}
   */
  sort?: string;
  /**
   * 排序字段
   * @type {string}
   */
  sortby?: string;
}

/**
 * 搜索参数接口
 */
export interface SearchParams {
  /**
   * 搜索关键词
   * @type {string}
   */
  q: string;
  /**
   * 搜索类型
   * @type {string}
   */
  type?: string;
}

/**
 * 账户查询参数接口
 */
export interface AccountParams extends PaginationParams {
  /**
   * 账户地址
   * @type {string}
   */
  address?: string;
  /**
   * 包含 Token
   * @type {boolean}
   */
  includeToken?: boolean;
}

/**
 * 交易查询参数接口
 */
export interface TransactionParams extends PaginationParams {
  /**
   * 账户地址
   * @type {string}
   */
  address?: string;
  /**
   * 区块号
   * @type {number}
   */
  block?: number;
  /**
   * 开始时间
   * @type {number}
   */
  start?: number;
  /**
   * 结束时间
   * @type {number}
   */
  end?: number;
  /**
   * 交易类型
   * @type {string}
   */
  type?: string;
}

/**
 * 区块查询参数接口
 */
export interface BlockParams extends PaginationParams {
  /**
   * 区块号
   * @type {number}
   */
  number?: number;
  /**
   * 区块哈希
   * @type {string}
   */
  hash?: string;
}

/**
 * Token 查询参数接口
 */
export interface TokenParams extends PaginationParams {
  /**
   * Token ID
   * @type {string}
   */
  id?: string;
  /**
   * Token 名称
   * @type {string}
   */
  name?: string;
  /**
   * Token 类型
   * @type {string}
   */
  type?: string;
}

/**
 * 见证人查询参数接口
 */
export interface WitnessParams extends PaginationParams {
  /**
   * 见证人地址
   * @type {string}
   */
  address?: string;
  /**
   * 是否是超级代表
   * @type {boolean}
   */
  isSR?: boolean;
}

// ======================
// 基础数据接口
// ======================

/**
 * 账户基础信息接口
 */
export interface Account {
  /**
   * 地址
   * @type {string}
   */
  address: string;
  /**
   * 余额 (TRX)
   * @type {number}
   */
  balance: number;
  /**
   * 账户类型
   * @type {string}
   */
  type?: string;
  /**
   * 账户名称
   * @type {string}
   */
  account_name?: string;
  /**
   * 创建时间
   * @type {number}
   */
  create_time?: number;
  /**
   * 最新操作时间
   * @type {number}
   */
  latest_opration_time?: number;
}

/**
 * 交易基础信息接口
 */
export interface Transaction {
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 区块号
   * @type {number}
   */
  block?: number;
  /**
   * 时间戳
   * @type {number}
   */
  timestamp: number;
  /**
   * 发送者地址
   * @type {string}
   */
  ownerAddress?: string;
  /**
   * 接收者地址
   * @type {string}
   */
  toAddress?: string;
  /**
   * 金额
   * @type {number}
   */
  amount?: number;
  /**
   * 交易类型
   * @type {string}
   */
  contractType?: string;
  /**
   * 确认状态
   * @type {boolean}
   */
  confirmed?: boolean;
  /**
   * 交易费用
   * @type {number}
   */
  cost?: any;
}

/**
 * 区块基础信息接口
 */
export interface Block {
  /**
   * 区块号
   * @type {number}
   */
  number: number;
  /**
   * 区块哈希
   * @type {string}
   */
  hash: string;
  /**
   * 时间戳
   * @type {number}
   */
  timestamp: number;
  /**
   * 父区块哈希
   * @type {string}
   */
  parentHash: string;
  /**
   * 见证人地址
   * @type {string}
   */
  witnessAddress: string;
  /**
   * 交易数量
   * @type {number}
   */
  nrOfTrx: number;
  /**
   * 区块大小
   * @type {number}
   */
  size: number;
}

/**
 * Token 基础信息接口
 */
export interface Token {
  /**
   * Token ID
   * @type {string}
   */
  id: string;
  /**
   * Token 名称
   * @type {string}
   */
  name: string;
  /**
   * Token 缩写
   * @type {string}
   */
  abbr: string;
  /**
   * 小数位数
   * @type {number}
   */
  precision: number;
  /**
   * 总供应量
   * @type {string}
   */
  totalSupply: string;
  /**
   * 发行者地址
   * @type {string}
   */
  ownerAddress: string;
  /**
   * Token 描述
   * @type {string}
   */
  description?: string;
  /**
   * 网站 URL
   * @type {string}
   */
  url?: string;
}

/**
 * 见证人基础信息接口
 */
export interface Witness {
  /**
   * 见证人地址
   * @type {string}
   */
  address: string;
  /**
   * 见证人名称
   * @type {string}
   */
  name?: string;
  /**
   * 得票数
   * @type {number}
   */
  voteCount: number;
  /**
   * 是否是超级代表
   * @type {boolean}
   */
  isSR: boolean;
  /**
   * 排名
   * @type {number}
   */
  rank?: number;
  /**
   * 网站 URL
   * @type {string}
   */
  url?: string;
}

/**
 * 统计信息接口
 */
export interface Statistics {
  /**
   * 总账户数
   * @type {number}
   */
  totalAccounts: number;
  /**
   * 总交易数
   * @type {number}
   */
  totalTransactions: number;
  /**
   * 总区块数
   * @type {number}
   */
  totalBlocks: number;
  /**
   * 在线节点数
   * @type {number}
   */
  onlineNodes: number;
  /**
   * 最新区块号
   * @type {number}
   */
  latestBlock: number;
  /**
   * TPS (每秒交易数)
   * @type {number}
   */
  tps: number;
}

// ======================
// 通用基础类型
// ======================

/**
 * 通用合约信息接口
 */
export interface ContractInfo {
  /**
   * 标签1
   * @type {string}
   */
  tag1?: string;
  /**
   * 标签1链接
   * @type {string}
   */
  tag1Url?: string;
  /**
   * 名称
   * @type {string}
   */
  name?: string;
  /**
   * 是否VIP
   * @type {boolean}
   */
  vip?: boolean;
  /**
   * 是否开源
   * @type {boolean}
   */
  open_source?: boolean;
  /**
   * 项目Logo
   * @type {string}
   */
  project_logo?: string;
}

/**
 * 通用Token信息接口
 */
export interface TokenInfo {
  /**
   * Token ID
   * @type {string}
   */
  tokenId: string;
  /**
   * Token 缩写
   * @type {string}
   */
  tokenAbbr: string;
  /**
   * Token 名称
   * @type {string}
   */
  tokenName: string;
  /**
   * Token 小数位数
   * @type {number}
   */
  tokenDecimal: number;
  /**
   * Token 是否显示
   * @type {number}
   */
  tokenCanShow: number;
  /**
   * Token 类型
   * @type {string}
   */
  tokenType: string;
  /**
   * Token Logo
   * @type {string}
   */
  tokenLogo: string;
  /**
   * Token 等级
   * @type {string}
   */
  tokenLevel?: string;
  /**
   * 发行者地址
   * @type {string}
   */
  issuerAddr?: string;
  /**
   * 是否是 VIP
   * @type {boolean}
   */
  vip: boolean;
}

/**
 * 合约映射表接口
 */
export interface ContractMap {
  [address: string]: boolean;
}

/**
 * 合约信息映射接口
 */
export interface ContractInfoMap {
  [contractAddress: string]: ContractInfo;
}

// ======================
// 账户相关接口
// ======================

/**
 * 账户信息接口
 */
export interface AccountInfo {
  /**
   * 输出交易数量
   * @type {number}
   */
  transactions_out: number;
  /**
   * 获取的带宽抵押冻结数量
   * @type {number}
   */
  acquiredDelegateFrozenForBandWidth: number;
  /**
   * 奖励数量
   * @type {number}
   */
  rewardNum: number;
  /**
   * 灰色标签
   * @type {string}
   */
  greyTag: string;
  /**
   * 所有者权限
   */
  ownerPermission: {
    /**
     * 密钥列表
     * @type {Array<{address: string; weight: number}>}
     */
    keys: Array<{
      /**
       * 地址
       * @type {string}
       */
      address: string;
      /**
       * 权重
       * @type {number}
       */
      weight: number;
    }>;
    /**
     * 阈值
     * @type {number}
     */
    threshold: number;
    /**
     * 权限名称
     * @type {string}
     */
    permission_name: string;
  };
  /**
   * 红色标签
   * @type {string}
   */
  redTag: string;
  /**
   * 公共标签
   * @type {string}
   */
  publicTag: string;
  /**
   * 带有价格的代币列表
   * @type {Array<Object>}
   */
  withPriceTokens: Array<{
    /**
     * 金额
     * @type {string}
     */
    amount: string;
    /**
     * 代币价格（TRX）
     * @type {number}
     */
    tokenPriceInTrx: number;
    /**
     * 代币ID
     * @type {string}
     */
    tokenId: string;
    /**
     * 余额
     * @type {string}
     */
    balance: string;
    /**
     * 代币名称
     * @type {string}
     */
    tokenName: string;
    /**
     * 代币小数位数
     * @type {number}
     */
    tokenDecimal: number;
    /**
     * 代币缩写
     * @type {string}
     */
    tokenAbbr: string;
    /**
     * 代币是否显示
     * @type {number}
     */
    tokenCanShow: number;
    /**
     * 代币类型
     * @type {string}
     */
    tokenType: string;
    /**
     * 是否VIP
     * @type {boolean}
     */
    vip: boolean;
    /**
     * 代币logo
     * @type {string}
     */
    tokenLogo: string;
  }>;
  /**
   * 抵押冻结能量
   * @type {number}
   */
  delegateFrozenForEnergy: number;
  /**
   * 余额
   * @type {number}
   */
  balance: number;
  /**
   * 反馈风险
   * @type {boolean}
   */
  feedbackRisk: boolean;
  /**
   * 总投票数
   * @type {number}
   */
  voteTotal: number;
  /**
   * 总冻结数量
   * @type {number}
   */
  totalFrozen: number;
  /**
   * 委托信息
   */
  delegated: any;
  /**
   * 输入交易数量
   * @type {number}
   */
  transactions_in: number;
  /**
   * 最新操作时间
   * @type {number}
   */
  latest_operation_time: number;
  /**
   * 总交易数量
   * @type {number}
   */
  totalTransactionCount: number;
  /**
   * 代表信息
   */
  representative: {
    /**
     * 上次提现时间
     * @type {number}
     */
    lastWithDrawTime: number;
    /**
     * 允许量
     * @type {number}
     */
    allowance: number;
    /**
     * 是否启用
     * @type {boolean}
     */
    enabled: boolean;
    /**
     * URL
     * @type {string}
     */
    url: string;
  };
  /**
   * 带宽冻结数量
   * @type {number}
   */
  frozenForBandWidth: number;
  /**
   * 公告
   * @type {string}
   */
  announcement: string;
  /**
   * 奖励
   * @type {number}
   */
  reward: number;
  /**
   * 地址标签Logo
   * @type {string}
   */
  addressTagLogo: string;
  /**
   * 允许交换列表
   * @type {Array<any>}
   */
  allowExchange: Array<any>;
  /**
   * 地址
   * @type {string}
   */
  address: string;
  /**
   * 冻结供应列表
   * @type {Array<any>}
   */
  frozen_supply: Array<any>;
  /**
   * 带宽信息
   */
  bandwidth: {
    /**
     * 剩余能量
     * @type {number}
     */
    energyRemaining: number;
    /**
     * 总能量限制
     * @type {number}
     */
    totalEnergyLimit: number;
    /**
     * 总能量权重
     * @type {number}
     */
    totalEnergyWeight: number;
    /**
     * 已使用网络
     * @type {number}
     */
    netUsed: number;
    /**
     * 存储限制
     * @type {number}
     */
    storageLimit: number;
    /**
     * 存储百分比
     * @type {number}
     */
    storagePercentage: number;
    /**
     * 资产信息
     */
    assets: {
      [key: string]: {
        /**
         * 网络百分比
         * @type {number}
         */
        netPercentage: number;
        /**
         * 网络限制
         * @type {number}
         */
        netLimit: number;
        /**
         * 剩余网络
         * @type {number}
         */
        netRemaining: number;
        /**
         * 已使用网络
         * @type {number}
         */
        netUsed: number;
      };
    };
    /**
     * 网络百分比
     * @type {number}
     */
    netPercentage: number;
    /**
     * 已使用存储
     * @type {number}
     */
    storageUsed: number;
    /**
     * 剩余存储
     * @type {number}
     */
    storageRemaining: number;
    /**
     * 免费网络限制
     * @type {number}
     */
    freeNetLimit: number;
    /**
     * 已使用能量
     * @type {number}
     */
    energyUsed: number;
    /**
     * 剩余免费网络
     * @type {number}
     */
    freeNetRemaining: number;
    /**
     * 网络限制
     * @type {number}
     */
    netLimit: number;
    /**
     * 剩余网络
     * @type {number}
     */
    netRemaining: number;
    /**
     * 能量限制
     * @type {number}
     */
    energyLimit: number;
    /**
     * 已使用免费网络
     * @type {number}
     */
    freeNetUsed: number;
    /**
     * 总网络权重
     * @type {number}
     */
    totalNetWeight: number;
    /**
     * 免费网络百分比
     * @type {number}
     */
    freeNetPercentage: number;
    /**
     * 能量百分比
     * @type {number}
     */
    energyPercentage: number;
    /**
     * 总网络限制
     * @type {number}
     */
    totalNetLimit: number;
  };
  /**
   * 创建日期
   * @type {number}
   */
  date_created: number;
  /**
   * 账户类型
   * @type {number}
   */
  accountType: number;
  /**
   * 交换列表
   * @type {Array<any>}
   */
  exchanges: Array<any>;
  /**
   * 冻结信息
   */
  frozen: {
    /**
     * 总冻结数量
     * @type {number}
     */
    total: number;
    /**
     * 余额列表
     * @type {Array<any>}
     */
    balances: Array<any>;
  };
  /**
   * 账户资源
   */
  accountResource: {
    /**
     * 冻结能量余额
     */
    frozen_balance_for_energy: any;
  };
  /**
   * 交易数量
   * @type {number}
   */
  transactions: number;
  /**
   * 蓝色标签
   * @type {string}
   */
  blueTag: string;
  /**
   * 是否见证人
   * @type {number}
   */
  witness: number;
  /**
   * 抵押冻结带宽
   * @type {number}
   */
  delegateFrozenForBandWidth: number;
  /**
   * 账户名称
   * @type {string}
   */
  name: string;
  /**
   * 能量冻结数量
   * @type {number}
   */
  frozenForEnergy: number;
  /**
   * 是否激活
   * @type {boolean}
   */
  activated: boolean;
  /**
   * 获取的能量抵押冻结数量
   * @type {number}
   */
  acquiredDelegateFrozenForEnergy: number;
  /**
   * 活动权限列表
   */
  activePermissions: Array<{
    /**
     * 操作
     * @type {string}
     */
    operations: string;
    /**
     * 密钥列表
     * @type {Array<{address: string; weight: number}>}
     */
    keys: Array<{
      /**
       * 地址
       * @type {string}
       */
      address: string;
      /**
       * 权重
       * @type {number}
       */
      weight: number;
    }>;
    /**
     * 阈值
     * @type {number}
     */
    threshold: number;
    /**
     * ID
     * @type {number}
     */
    id: number;
    /**
     * 类型
     * @type {string}
     */
    type: string;
    /**
     * 权限名称
     * @type {string}
     */
    permission_name: string;
  }>;
}

/**
 * 账户代币列表查询参数
 */
export interface AccountTokenListQueryParams {
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 起始编号。默认值: 0
   * @type {number}
   */
  start?: number;
  /**
   * 每页显示的数量。默认值: 20
   * @type {number}
   */
  limit?: number;
  /**
   * 是否隐藏小余额的代币。0: 隐藏 (默认) 1: 显示
   * @type {0 | 1}
   */
  hidden?: 0 | 1;
  /**
   * 代币类型。1: TRC20 2: TRC721 3: ALL (默认) 4: TRC1155
   * @type {1 | 2 | 3 | 4}
   */
  show?: 1 | 2 | 3 | 4;
  /**
   * 排序字段。1: 价格 2: 数量 (默认) 3: 总量
   * @type {1 | 2 | 3}
   */
  sortBy?: 1 | 2 | 3;
  /**
   * 排序方式。0: 降序 (默认) 1: 升序
   * @type {0 | 1}
   */
  sortType?: 0 | 1;
  /**
   * 指定代币 ID 或代币地址
   * @type {string}
   */
  token?: string;
  /**
   * 资产类型。0: ALL 1: 仅代币 (默认) 2: 仅凭证代币
   * @type {0 | 1 | 2}
   */
  assetType?: 0 | 1 | 2;
}

/**
 * 资产列表响应数据接口
 */
export interface AccountTokenListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 数据列表
   * @type {AccountTokenListData[]}
   */
  data: AccountTokenListData[];
  /**
   * 合约映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
}

/**
 * 资产数据接口
 */
export interface AccountTokenListData {
  /**
   * 金额
   * @type {string}
   */
  amount?: string;
  /**
   * 数量
   * @type {number}
   */
  quantity: number;
  /**
   * 代币ID
   * @type {string}
   */
  tokenId: string;
  /**
   * 代币美元价格
   * @type {number}
   */
  tokenPriceInUsd?: number;
  /**
   * 代币名称
   * @type {string}
   */
  tokenName: string;
  /**
   * 代币简称
   * @type {string}
   */
  tokenAbbr: string;
  /**
   * 代币是否显示
   * @type {number}
   */
  tokenCanShow: number;
  /**
   * 代币Logo
   * @type {string}
   */
  tokenLogo: string;
  /**
   * 代币TRX价格
   * @type {number}
   */
  tokenPriceInTrx?: number;
  /**
   * 美元金额
   * @type {number}
   */
  amountInUsd?: number;
  /**
   * 余额
   * @type {string}
   */
  balance: string;
  /**
   * 代币小数位数
   * @type {number}
   */
  tokenDecimal: number;
  /**
   * 代币类型
   * @type {string}
   */
  tokenType: string;
  /**
   * 是否VIP
   * @type {boolean}
   */
  vip: boolean;
  /**
   * 所有者地址 (TRC10)
   * @type {string}
   */
  owner_address?: string;
  /**
   * 转账次数 (TRC10)
   * @type {number}
   */
  transferCount?: number;
  /**
   * 持有者数量 (TRC10)
   * @type {number}
   */
  nrOfTokenHolders?: number;
  /**
   * 项目名称 (TRC20)
   * @type {string}
   */
  project?: string;
}

/**
 * 获取账户资源列表查询参数接口
 */
export interface AccountResourceQueryParams {
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 起始编号。默认值: 0
   * @type {number}
   */
  start?: number;
  /**
   * 每页显示的数量。默认值: 20
   * @type {number}
   */
  limit?: number;
  /**
   * 抵押类型。1-为自己冻结 2-为他人冻结 3-他人为自己冻结，其他情况默认处理
   * @type {1 | 2 | 3}
   */
  type?: 1 | 2 | 3;
  /**
   * 资源类型。0: 返回带宽和能量的数据 1: 仅返回带宽的数据 2: 仅返回能量的数据
   * @type {0 | 1 | 2}
   */
  resourceType?: 0 | 1 | 2;
}

/**
 * 账户资源列表响应数据接口
 */
export interface AccountResourceResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 数据列表
   * @type {AccountResourceData[]}
   */
  data: AccountResourceData[];
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
}

/**
 * 账户资源数据接口
 */
export interface AccountResourceData {
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 时间戳
   * @type {number}
   */
  timestamp: number;
  /**
   * 所有者地址
   * @type {string}
   */
  ownerAddress: string;
  /**
   * 接收者地址
   * @type {string}
   */
  receiverAddress: string;
  /**
   * 资源类型 (ENERGY 或 BANDWIDTH)
   * @type {string}
   */
  resource: string;
  /**
   * 冻结余额
   * @type {number}
   */
  frozenBalance: number;
  /**
   * 过期时间
   * @type {number}
   */
  expireTime: number;
  /**
   * 资源值
   * @type {string}
   */
  resourceValue: string;
}

/**
 * 指定账户的授权列表查询参数接口
 */
export interface ApprovalListQueryParams {
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 每页显示的数量。默认值: 20
   * @type {number}
   */
  limit?: number;
  /**
   * 起始编号。默认值: 0
   * @type {number}
   */
  start?: number;
  /**
   * 聚合类型。按项目或代币
   * @type {string}  ('project' | 'token')
   */
  type?: "project" | "token";
  /**
   * 用于请求移动数据, transfer=mobile
   * @type {string} ('mobile')
   */
  transfer?: "mobile";
  /**
   * 用于请求移动数据，此参数指定关联的ID，与type参数一起使用。当type=project时，该字段值表示指定的project_id；当type=token时，该字段值表示指定的token_id
   * @type {string}
   */
  relatedId?: string;
}

/**
 * 授权列表响应数据接口
 */
export interface ApprovalListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 数据列表 (当前示例为空数组)
   * @type {any[]}
   */
  data: any[];
  /**
   * 合约映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
}

/**
 * 账户授权变更记录查询参数接口
 */
export interface AccountAuthorizationChangeRecordsQueryParams {
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 起始编号。默认值: 0
   * @type {number}
   */
  start?: number;
  /**
   * 每页显示的数量。默认值: 20
   * @type {number}
   */
  limit?: number;
  /**
   * 类型必须设置为 approve
   * @type {string} ('approve')
   */
  type: "approve";
  /**
   * Token 类型。1: TRC20, 2: TRC721, 3: ALL (默认), 4: TRC1155
   * @type {number} (1 | 2 | 3 | 4)
   */
  show?: 1 | 2 | 3 | 4;
  /**
   * 发起者地址
   * @type {string}
   */
  from_address?: string;
  /**
   * 接收者地址
   * @type {string}
   */
  to_address?: string;
}

/**
 * 账户授权变更记录响应数据接口
 */
export interface AccountAuthorizationChangeRecordsResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 合约映射，contract address 为 key，boolean 值为 value
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 数据列表
   * @type {AuthorizationChangeData[]}
   */
  data: AuthorizationChangeData[];
  /**
   * 合约信息，contract address 为 key
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
}

/**
 * 授权变更数据接口
 */
export interface AuthorizationChangeData {
  /**
   * 创建日期 (时间戳，毫秒)
   * @type {number}
   */
  date_created: number;
  /**
   * 是否无限额度
   * @type {boolean}
   */
  unlimited: boolean;
  /**
   * 是否撤销
   * @type {boolean}
   */
  revert: boolean;
  /**
   * 所有者地址
   * @type {string}
   */
  owner_address: string;
  /**
   * 接收者地址
   * @type {string}
   */
  to_address: string;
  /**
   * 类型 (approve)
   * @type {string}
   */
  type: string;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 合约返回状态
   * @type {string}
   */
  contract_ret: string;
  /**
   * 金额 (字符串形式)
   * @type {string}
   */
  amount_str: string;
  /**
   * 发起者地址
   * @type {string}
   */
  from_address: string;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
}

/**
 * 获取账户每日分析数据列表的查询参数接口
 */
export interface DailyAnalyticsDataQueryParams {
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 开始时间戳，精确到毫秒
   * @type {number}
   */
  start_timestamp: number;
  /**
   * 结束时间戳，精确到毫秒
   * @type {number}
   */
  end_timestamp: number;
  /**
   * 类型:
   *   0: 余额 (TRX 余额，当日 TRX 的价格，使用 USDT 计算)
   *   1: Token 转移 (转移数量 [trx, trc10, trc20] 和转移的 Token 数量 [需要去重])
   *   2: 能量消耗 (当前账户触发的交易消耗的能量来自冻结 TRX，消耗的能量来自燃烧 TRX，消耗的能量由合约部署者提供，总能量消耗)
   *   3: 带宽消耗 (当前账户触发的交易消耗的带宽来自冻结 TRX 或免费带宽，消耗的带宽来自燃烧 TRX)
   *   4: 交易 (当前账户发起和接收的交易数量)
   * @type {0 | 1 | 2 | 3 | 4}
   */
  type: 0 | 1 | 2 | 3 | 4;
}

/**
 * 账户每日分析数据列表的响应数据接口
 */
export interface DailyAnalyticsDataResponse {
  /**
   * 数据大小/数量
   * @type {number}
   */
  size: number;
  /**
   * 数据列表
   * @type {DailyAnalyticsData[]}
   */
  data: DailyAnalyticsData[];
}

/**
 * 每日分析数据接口
 */
export interface DailyAnalyticsData {
  /**
   * 日期 (YYYY-MM-DD 格式)
   * @type {string}
   */
  day: string;
  /**
   * TRX 数量
   * @type {string}
   */
  trx_amount: string;
  /**
   * USDT 数量
   * @type {string}
   */
  usdt_amount: string;
  /**
   * TRX 价格 (以 USDT 计)
   * @type {number}
   */
  price: number;
}

/**
 * 账户钱包 Token 概览的响应数据接口
 */
export interface AccountWalletTokenOverviewResponse {
  /**
   * 总资产 (以 TRX 计)
   * @type {number}
   */
  totalAssetInTrx: number;
  /**
   * Token 数据列表
   * @type {AccountWalletTokenOverviewTokenData[]}
   */
  data: AccountWalletTokenOverviewTokenData[];
  /**
   * Token 总数
   * @type {number}
   */
  totalTokenCount: number;
  /**
   * 总资产 (以 USD 计)
   * @type {number}
   */
  totalAssetInUsd: number;
}

/**
 * Token 数据接口
 */
export interface AccountWalletTokenOverviewTokenData {
  /**
   * Token ID
   * 当 tokenId 为 "_" 时代表 TRX
   * @type {string}
   */
  tokenId: string;
  /**
   * Token 名称
   * @type {string}
   */
  tokenName: string;
  /**
   * Token 精度
   * @type {number}
   */
  tokenDecimal: number;
  /**
   * Token 缩写
   * @type {string}
   */
  tokenAbbr: string;
  /**
   * Token 是否可显示
   * @type {number}  0:否 1:是
   */
  tokenCanShow: number;
  /**
   * Token 类型
   * @type {"trc10" | "trc20" | "trc721" | "trc1155"}
   */
  tokenType: "trc10" | "trc20" | "trc721" | "trc1155";
  /**
   * Token Logo URL
   * @type {string}
   */
  tokenLogo: string;
  /**
   * 是否为 VIP Token
   * @type {boolean}
   */
  vip: boolean;
  /**
   * 余额
   * 注意：需要根据 tokenDecimal 进行精度转换
   * @type {string}
   */
  balance: string;
  /**
   * Token 价格 (以 TRX 计)
   * @type {number}
   */
  tokenPriceInTrx: number;
  /**
   * Token 价格 (以 USD 计)
   * @type {number}
   */
  tokenPriceInUsd: number;
  /**
   * 资产 (以 TRX 计)
   * @type {number}
   */
  assetInTrx: number;
  /**
   * 资产 (以 USD 计)
   * @type {number}
   */
  assetInUsd: number;
  /**
   * 占比
   * @type {number}
   */
  percent: number;
}

// ======================
// 合约相关接口
// ======================

/**
 * 合约详情信息响应数据接口
 */
export interface ContractDetailResponse {
  /**
   * 类型 (可能为 null)
   * @type {null}
   */
  type: null;
  /**
   * 数量
   * @type {number}
   */
  count: number;
  /**
   * 状态信息
   */
  status: {
    /**
     * 状态码
     * @type {number}
     */
    code: number;
    /**
     * 状态消息
     * @type {string}
     */
    message: string;
  };
  /**
   * 合约数据列表
   * @type {ContractDetail[]}
   */
  data: ContractDetail[];
}

/**
 * 合约详情数据接口
 */
export interface ContractDetail {
  /**
   * 合约地址
   * @type {string}
   */
  address: string;
  /**
   * 合约余额
   * @type {number}
   */
  balance: number;
  /**
   * 验证状态
   * @type {number}
   */
  verify_status: number;
  /**
   * 是否为代理合约
   * @type {boolean}
   */
  is_proxy: boolean;
  /**
   * 代理合约的实现
   * @type {string}
   */
  proxy_implementation: string;
  /**
   * 旧的代理合约实现
   * @type {string}
   */
  old_proxy_implementation: string;
  /**
   * 合约余额 (以 USD 计)
   * @type {number}
   */
  balanceInUsd: number;
  /**
   * 交易数量
   * @type {number}
   */
  trxCount: number;
  /**
   * 创建日期 (时间戳，毫秒)
   * @type {number}
   */
  date_created: number;
  /**
   * 调用值
   * @type {number}
   */
  call_value: number;
  /**
   * 调用 Token 值
   * @type {number}
   */
  call_token_value: number;
  /**
   * 调用 Token ID
   * @type {number}
   */
  call_token_id: number;
  /**
   * 调用 Token 信息
   */
  call_token_info: {
    /**
     * Token 信息
     */
    tokenInfo: TokenInfo;
  };
  /**
   * 合约名称
   * @type {string}
   */
  name: string;
  /**
   * 合约描述
   * @type {string}
   */
  description: string;
  /**
   * 标签 1
   * @type {string}
   */
  tag1: string;
  /**
   * 标签 1 URL
   * @type {string}
   */
  tag1Url: string;
  /**
   * 是否为 VIP
   * @type {boolean}
   */
  vip: boolean;
  /**
   * 是否有反馈风险
   * @type {boolean}
   */
  feedbackRisk: boolean;
  /**
   * 公告
   * @type {string}
   */
  announcement: string;
  /**
   * 蓝色标签
   * @type {string}
   */
  blueTag: string;
  /**
   * 蓝色标签 URL
   * @type {string}
   */
  blueTagUrl: string;
  /**
   * 灰色标签
   * @type {string}
   */
  greyTag: string;
  /**
   * 红色标签
   * @type {string}
   */
  redTag: string;
  /**
   * 公共标签
   * @type {string}
   */
  publicTag: string;
  /**
   * 创建者信息
   */
  creator: {
    /**
     * 创建者地址
     * @type {string}
     */
    address: string;
    /**
     * 地址是否为合约
     * @type {boolean}
     */
    address_is_contract: boolean;
    /**
     * 交易哈希
     * @type {string}
     */
    txHash: string;
    /**
     * Token 余额
     * @type {number}
     */
    token_balance: number;
    /**
     * 用户资源消耗百分比
     * @type {number}
     */
    consume_user_resource_percent: number;
    /**
     * 剩余能量
     * @type {number}
     */
    energy_remaining: number;
  };
  /**
   * 审计报告 URL
   * @type {string}
   */
  auditReportUrl: string;
  /**
   * 审计部门
   * @type {string}
   */
  auditDep: string;
  /**
   * 审计日期
   * @type {string}
   */
  auditDate: string;
  /**
   * 方法映射
   * @type {Record<string, string>}
   */
  methodMap: Record<string, string>;
  /**
   * 能量因子
   * @type {number}
   */
  energy_factor: number;
  /**
   * Token 信息
   */
  tokenInfo: TokenInfo;
  /**
   * 余额 (带有 Token)
   * @type {number}
   */
  balanceWithTokens: number;
  /**
   * 余额 (带有 Token，以 USD 计)
   * @type {number}
   */
  balanceWithTokensInUsd: number;
}

/**
 * 获取合约事件信息的查询参数接口
 */
export interface ContractEventQueryParams {
  /**
   * 合约地址
   * @type {string}
   */
  contractAddress: string;
  /**
   * 交易哈希列表
   * @type {string[] | undefined}
   */
  hashList?: string[];
  /**
   * 查询内容，支持区块号和事件名称
   * @type {string | number | undefined}
   */
  term?: string | number;
  /**
   * 每页数量，默认 20
   * @type {number | undefined}
   */
  limit?: number;
}

/**
 * 合约事件信息响应数据接口
 */
export interface ContractEventResponse {
  /**
   * 事件列表
   * @type {ContractEvent[]}
   */
  event_list: ContractEvent[];
  /**
   * 列表
   * @type {ContractTransaction[]}
   */
  list: ContractTransaction[];
}

/**
 * 合约事件接口
 */
export interface ContractEvent {
  /**
   * 区块号
   * @type {number}
   */
  block_number: number;
  /**
   * 区块时间戳 (毫秒)
   * @type {number}
   */
  block_timestamp: number;
  /**
   * 调用者合约地址
   * @type {string}
   */
  caller_contract_address: string;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 事件索引
   * @type {number}
   */
  event_index: number;
  /**
   * 事件名称
   * @type {string}
   */
  event_name: string;
  /**
   * 带主题的结果
   */
  result_with_topic: {
    /**
     * 索引参数
     * @type {IndexedParameter[]}
     */
    index: IndexedParameter[];
    /**
     * 主题
     * @type {string}
     */
    topic: string;
    /**
     * 数组数据
     * @type {DataParameter[]}
     */
    dataInArr: DataParameter[];
  };
  /**
   * 结果
   * @type {Record<string, string>}
   */
  result: Record<string, string>;
  /**
   * 结果类型
   * @type {Record<string, string>}
   */
  result_type: Record<string, string>;
  /**
   * 事件签名
   * @type {string}
   */
  event: string;
  /**
   * 交易 ID
   * @type {string}
   */
  transaction_id: string;
}

/**
 * 索引参数接口
 */
export interface IndexedParameter {
  /**
   * 参数名称
   * @type {string}
   */
  param: string;
  /**
   * 参数值
   * @type {string}
   */
  value: string;
}

/**
 * 数据参数接口
 */
export interface DataParameter {
  /**
   * 参数名称
   * @type {string}
   */
  param: string;
  /**
   * 参数值
   * @type {string}
   */
  value: string;
}

/**
 * 合约交易接口
 */
export interface ContractTransaction {
  /**
   * 所有者地址
   * @type {string}
   */
  owner_address: string;
  /**
   * 区块号
   * @type {number}
   */
  block: number;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 创建日期 (时间戳，毫秒)
   * @type {number}
   */
  date_created: number;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * Token ID
   * @type {number}
   */
  token_id: number;
  /**
   * Token 值
   * @type {number}
   */
  token_value: number;
  /**
   * 调用值
   * @type {number}
   */
  call_value: number;
  /**
   * 数据
   * @type {string}
   */
  data: string;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 方法名称
   * @type {string}
   */
  method: string;
  /**
   * 参数
   * @type {string}
   */
  parameter: string;
  /**
   * 日期 (YYYY-MM-DD)
   * @type {string}
   */
  day: string;
}

// ======================
// 交易相关接口
// ======================

/**
 * 获取交易列表的查询参数接口
 */
export interface TransactionListQueryParams {
  /**
   * 起始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页数量，默认为 10
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 起始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
  /**
   * 发送者地址
   * @type {string | undefined}
   */
  fromAddress?: string;
  /**
   * 接收者地址
   * @type {string | undefined}
   */
  toAddress?: string;
  /**
   * 涉及的 Token (多个 Token 之间用逗号分隔)
   * @type {string | undefined}
   */
  tokens?: string;
  /**
   * 区块号
   * @type {number | undefined}
   */
  block?: number;
  /**
   * 交易类型
   * @type {string | undefined}
   */
  type?: string;
  /**
   * 智能合约签名中调用的方法，每次只能指定一个值
   * @type {string | undefined}
   */
  method?: string;
}

/**
 * 交易列表响应数据接口
 */
export interface TransactionListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 交易数据列表
   * @type {TransactionData[]}
   */
  data: TransactionData[];
  /**
   * 整条链上的交易总数
   * @type {number}
   */
  wholeChainTxCount: number;
  /**
   * 合约地址映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
}

/**
 * 交易数据接口
 */
export interface TransactionData {
  /**
   * 区块号
   * @type {number}
   */
  block: number;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 时间戳 (毫秒)
   * @type {number}
   */
  timestamp: number;
  /**
   * 所有者地址
   * @type {string}
   */
  ownerAddress: string;
  /**
   * 接收者地址列表
   * @type {string[]}
   */
  toAddressList: string[];
  /**
   * 接收者地址
   * @type {string}
   */
  toAddress: string;
  /**
   * 合约类型
   * @type {number}
   */
  contractType: number;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 是否回滚
   * @type {boolean}
   */
  revert: boolean;
  /**
   * 合约数据
   * @type {ContractData}
   */
  contractData: ContractData;
  /**
   * 智能合约调用
   * @type {string}
   */
  SmartCalls: string;
  /**
   * 事件
   * @type {string}
   */
  Events: string;
  /**
   * 交易ID
   * @type {string}
   */
  id: string;
  /**
   * 原始交易数据
   * @type {string}
   */
  data: string;
  /**
   * 交易费用
   * @type {string}
   */
  fee: string;
  /**
   * 合约执行结果
   * @type {string}
   */
  contractRet: string;
  /**
   * 交易结果
   * @type {string}
   */
  result: string;
  /**
   * 交易金额
   * @type {string}
   */
  amount: string;
  /**
   * 交易费用明细
   * @type {Cost}
   */
  cost: Cost;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * Token 类型
   * @type {string}
   */
  tokenType: string;
}

/**
 * 合约数据接口
 */
export interface ContractData {
  /**
   * 金额
   * @type {number}
   */
  amount: number;
  /**
   * 所有者地址
   * @type {string}
   */
  owner_address: string;
  /**
   * 接收者地址
   * @type {string}
   */
  to_address: string;
  /**
   * 资产名称
   * @type {string}
   */
  asset_name?: string;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address?: string;
  /**
   * 数据
   * @type {string}
   */
  data?: string;
}

/**
 * 交易费用明细接口
 */
export interface Cost {
  /**
   * 网络费用
   * @type {number}
   */
  net_fee: number;
  /**
   * 能量惩罚总计
   * @type {number}
   */
  energy_penalty_total: number;
  /**
   * 能量消耗
   * @type {number}
   */
  energy_usage: number;
  /**
   * 费用
   * @type {number}
   */
  fee: number;
  /**
   * 能量费用
   * @type {number}
   */
  energy_fee: number;
  /**
   * 能量消耗总计
   * @type {number}
   */
  energy_usage_total: number;
  /**
   * 原始能量消耗
   * @type {number}
   */
  origin_energy_usage: number;
  /**
   * 网络使用量
   * @type {number}
   */
  net_usage: number;
  /**
   * 网络费用成本
   * @type {number}
   */
  net_fee_cost?: number;
  /**
   * 能量费用成本
   * @type {number}
   */
  energy_fee_cost?: number;
  /**
   * 多重签名费用
   * @type {number}
   */
  multi_sign_fee?: number;
  /**
   * 备忘录费用
   * @type {number}
   */
  memoFee?: number;
  /**
   * 账户创建费用
   * @type {number}
   */
  account_create_fee?: number;
}

/**
 * 交易详情信息接口
 */
export interface TransactionDetail {
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 交易哈希值
   * @type {string}
   */
  hash: string;
  /**
   * 时间戳 (毫秒)
   * @type {number}
   */
  timestamp: number;
  /**
   * 所有者地址
   * @type {string}
   */
  ownerAddress: string;
  /**
   * 签名地址列表
   * @type {string[]}
   */
  signature_addresses: string[];
  /**
   * 合约类型
   * @type {number}
   */
  contractType: number;
  /**
   * 目标地址
   * @type {string}
   */
  toAddress: string;
  /**
   * 确认数
   * @type {number}
   */
  confirmations: number;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 是否回滚
   * @type {boolean}
   */
  revert: boolean;
  /**
   * 合约执行结果
   * @type {string}
   */
  contractRet: string;
  /**
   * 合约数据
   * @type {ContractData}
   */
  contractData: ContractData;
  /**
   * 费用信息
   * @type {Cost}
   */
  cost: Cost;
  /**
   * 数据
   * @type {string}
   */
  data: string;
  /**
   * 触发器信息
   * @type {Record<string, any>}
   */
  trigger_info: Record<string, any>;
  /**
   * 内部交易
   * @type {Record<string, any>}
   */
  internal_transactions: Record<string, any>;
  /**
   * SR确认列表
   * @type {SrConfirm[]}
   */
  srConfirmList: SrConfirm[];
  /**
   * 其他信息
   * @type {Record<string, any>}
   */
  info: Record<string, any>;
  /**
   * 地址标签
   * @type {Record<string, any>}
   */
  addressTag: Record<string, any>;
  /**
   * 合约信息
   * @type {Record<string, any>}
   */
  contractInfo: Record<string, any>;
  /**
   * 合约地址映射
   * @type {Record<string, boolean>}
   */
  contract_map: Record<string, boolean>;
}

/**
 * SR确认信息接口
 */
export interface SrConfirm {
  /**
   * 地址
   * @type {string}
   */
  address: string;
  /**
   * 名称
   * @type {string}
   */
  name: string;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 链接
   * @type {string}
   */
  url: string;
}

// ======================
// 转账相关接口
// ======================

/**
 * 获取 TRC20&721 转账列表的查询参数接口
 */
export interface Trc20OrTrc721TransfersListQueryParams {
  /**
   * 起始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页数量，默认为 10
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 合约地址
   * @type {string | undefined}
   */
  contract_address?: string;
  /**
   * 起始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
  /**
   * 是否只返回已确认的转账，默认为 true
   * @type {boolean | undefined}
   */
  confirm?: boolean;
  /**
   * 相关账户地址
   * @type {string | undefined}
   */
  relatedAddress?: string;
  /**
   * 发送者地址
   * @type {string | undefined}
   */
  fromAddress?: string;
  /**
   * 接收者地址
   * @type {string | undefined}
   */
  toAddress?: string;
}

/**
 * TRC20或TRC721转账列表响应数据接口
 */
export interface Trc20OrTrc721TransfersListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
  /**
   * Token 转账列表
   * @type {TokenTransfer[]}
   */
  token_transfers: TokenTransfer[];
}

/**
 * Token 转账信息接口
 */
export interface TokenTransfer {
  /**
   * 交易 ID
   * @type {string}
   */
  transaction_id: string;
  /**
   * 状态码
   * @type {number}
   */
  status: number;
  /**
   * 区块时间戳 (毫秒)
   * @type {number}
   */
  block_ts: number;
  /**
   * 发送者地址
   * @type {string}
   */
  from_address: string;
  /**
   * 发送者地址标签
   * @type {Record<string, any>}
   */
  from_address_tag: Record<string, any>;
  /**
   * 接收者地址
   * @type {string}
   */
  to_address: string;
  /**
   * 接收者地址标签
   * @type {Record<string, any>}
   */
  to_address_tag: Record<string, any>;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 数量
   * @type {string}
   */
  quant: string;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 合约执行结果
   * @type {string}
   */
  contractRet: string;
  /**
   * 最终结果
   * @type {string}
   */
  finalResult: string;
  /**
   * 是否回滚
   * @type {boolean}
   */
  revert: boolean;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 合约类型
   * @type {string}
   */
  contract_type: string;
  /**
   * 发送者地址是否为合约
   * @type {boolean}
   */
  fromAddressIsContract: boolean;
  /**
   * 接收者地址是否为合约
   * @type {boolean}
   */
  toAddressIsContract: boolean;
}

/**
 * 获取 TRX&TRC10 转账列表查询参数接口
 */
export interface TrxAndTrc10TransfersListQueryParams {
  /**
   * 排序类型
   * @type {string | undefined}
   */
  sort?: string;
  /**
   * 起始索引，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页转账数量
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 是否返回转账总数
   * @type {boolean | undefined}
   */
  count?: boolean;
  /**
   * 地址，如合约地址
   * @type {string | undefined}
   */
  address?: string;
  /**
   * 发送者地址
   * @type {string | undefined}
   */
  fromAddress?: string;
  /**
   * 接收者地址
   * @type {string | undefined}
   */
  toAddress?: string;
  /**
   * 指定的 tokens
   * @type {string | undefined}
   */
  tokens?: string;
  /**
   * 区块号
   * @type {number | undefined}
   */
  block?: number;
}

/**
 * TRX & TRC10 转账列表响应数据接口
 */
export interface TrxAndTrc10TransfersListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 数据列表
   * @type {TransferData[]}
   */
  data: TransferData[];
  /**
   * 合约地址映射表，key 为地址，value 为是否为合约
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
}

/**
 * 转账数据接口
 */
export interface TransferData {
  /**
   * 合约返回结果
   * @type {string}
   */
  contractRet: string;
  /**
   * 金额
   * @type {number}
   */
  amount: number;
  /**
   * 数据
   * @type {string}
   */
  data: string;
  /**
   * Token 名称
   * @type {string}
   */
  tokenName: string;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 交易哈希
   * @type {string}
   */
  transactionHash: string;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 转出地址
   * @type {string}
   */
  transferFromAddress: string;
  /**
   * 转入地址
   * @type {string}
   */
  transferToAddress: string;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * ID
   * @type {string}
   */
  id: string;
  /**
   * 时间戳（毫秒）
   * @type {number}
   */
  timestamp: number;
}

/**
 * 获取特定地址或区块的内部交易列表查询参数接口
 */
export interface InternalTransactionListQueryParams {
  /**
   * 起始索引，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页交易数量
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 特定地址。 必须指定 address、block 和 contract 参数中的至少一个
   * @type {string | undefined}
   */
  address?: string;
  /**
   * 发送者地址
   * @type {string | undefined}
   */
  contract?: string;
  /**
   * 区块号
   * @type {number | undefined}
   */
  block?: number;
}

/**
 * 获取特定地址或区块的内部交易列表响应数据接口
 */
export interface InternalTransactionListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 合约地址映射表，key 为地址，value 为是否为合约
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 数据列表
   * @type {InternalTransactionData[]}
   */
  data: InternalTransactionData[];
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
}

/**
 * 内部交易数据接口
 */
export interface InternalTransactionData {
  /**
   * 发送方地址
   * @type {string}
   */
  from: string;
  /**
   * 接收方地址
   * @type {string}
   */
  to: string;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 内部交易哈希
   * @type {string}
   */
  internal_hash: string;
  /**
   * 时间戳（毫秒）
   * @type {number}
   */
  timestamp: number;
  /**
   * 是否被拒绝
   * @type {boolean}
   */
  rejected: boolean;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 结果
   * @type {string}
   */
  result: string;
  /**
   * 是否回滚
   * @type {boolean}
   */
  revert: boolean;
  /**
   * 备注
   * @type {string}
   */
  note: string;
  /**
   * Token 列表
   * @type {TokenList}
   */
  token_list: TokenList;
  /**
   * Value 信息列表
   * @type {ValueInfo[]}
   */
  valueInfoList: ValueInfo[];
  /**
   * Token ID
   * @type {string}
   */
  token_id: string;
  /**
   * 调用值
   * @type {number}
   */
  call_value: number;
}

/**
 * Token 列表接口
 */
export interface TokenList {
  /**
   * Token ID
   * @type {string}
   */
  token_id: string;
  /**
   * 调用值
   * @type {number}
   */
  call_value: number;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
}

/**
 * Value 信息接口
 */
export interface ValueInfo {
  /**
   * Token ID
   * @type {string}
   */
  token_id: string;
  /**
   * 调用值
   * @type {number}
   */
  call_value: number;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
}

/**
 * 获取账户交易数据查询参数接口
 */
export interface AccountTransactionDataQueryParams {
  /**
   * 起始索引，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页交易数量
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * TRC20 Token 地址
   * @type {string | undefined}
   */
  trc20Id?: string;
  /**
   * 账户地址
   * @type {string | undefined}
   */
  address?: string;
  /**
   * 方向：0: 全部, 1: 转出, 2: 转入
   * @type {number | undefined}
   */
  direction?: number;
  /**
   * 是否包含授权交易。1: 包含, 0: 排除
   * @type {number | undefined}
   */
  db_version?: number;
  /**
   * 按创建时间排序。true/false
   * @type {boolean | undefined}
   */
  reverse?: boolean;
}

/**
 * 获取账户交易数据响应接口
 */
export interface AccountTransactionDataResponse {
  /**
   * 合约地址映射表
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 每页数量
   * @type {number}
   */
  page_size: number;
  /**
   * 状态码
   * @type {number}
   */
  code: number;
  /**
   * 数据列表
   * @type {AccountTransactionData[]}
   */
  data: AccountTransactionData[];
}

/**
 * 账户交易数据接口
 */
export interface AccountTransactionData {
  /**
   * 数量
   * @type {string}
   */
  amount: string;
  /**
   * 状态
   * @type {number}
   */
  status: number;
  /**
   * 授权数量
   * @type {string}
   */
  approval_amount: string;
  /**
   * 区块时间戳
   * @type {number}
   */
  block_timestamp: number;
  /**
   * 区块高度
   * @type {number}
   */
  block: number;
  /**
   * 发送方地址
   * @type {string}
   */
  from: string;
  /**
   * 接收方地址
   * @type {string}
   */
  to: string;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 是否已确认
   * @type {number}
   */
  confirmed: number;
  /**
   * 合约类型
   * @type {string}
   */
  contract_type: string;
  /**
   * 合约类型 (number)
   * @type {number}
   */
  contractType: number;
  /**
   * 是否回滚
   * @type {number}
   */
  revert: number;
  /**
   * 合约执行结果
   * @type {string}
   */
  contract_ret: string;
  /**
   * 最终结果
   * @type {string}
   */
  final_result: string;
  /**
   * 事件类型
   * @type {string}
   */
  event_type: string;
  /**
   * 发行地址
   * @type {string}
   */
  issue_address: string;
  /**
   * 小数位数
   * @type {number}
   */
  decimals: number;
  /**
   * Token 名称
   * @type {string}
   */
  token_name: string;
  /**
   * Token ID
   * @type {string}
   */
  id: string;
  /**
   * 方向，1：转出，2：转入
   * @type {number}
   */
  direction: number;
}

// ======================
// 区块相关接口
// ======================

/**
 * 获取区块列表或单个区块详情查询参数接口
 */
export interface BlockListQueryParams {
  /**
   * 起始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页条目数，默认为 10
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 超级代表地址
   * @type {string | undefined}
   */
  producer?: string;
  /**
   * 排序字段，仅支持按区块号排序，降序使用连字符 (-)
   * 默认: '-number'
   * @type {string | undefined}
   */
  sort?: string;
  /**
   * 起始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
}

/**
 * 区块列表响应接口
 */
export interface BlockListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 数据列表
   * @type {BlockData[]}
   */
  data: BlockData[];
}

/**
 * 区块数据接口
 */
export interface BlockData {
  /**
   * 区块号
   * @type {number}
   */
  number: number;
  /**
   * 哈希值
   * @type {string}
   */
  hash: string;
  /**
   * 大小
   * @type {number}
   */
  size: number;
  /**
   * 时间戳
   * @type {number}
   */
  timestamp: number;
  /**
   * 交易树根
   * @type {string}
   */
  txTrieRoot: string;
  /**
   * 父哈希
   * @type {string}
   */
  parentHash: string;
  /**
   * 见证人ID
   * @type {number}
   */
  witnessId: number;
  /**
   * 见证人地址
   * @type {string}
   */
  witnessAddress: string;
  /**
   * 交易数量
   * @type {number}
   */
  nrOfTrx: number;
  /**
   * 见证人名称
   * @type {string}
   */
  witnessName: string;
  /**
   * 版本
   * @type {string}
   */
  version: string;
  /**
   * 费用
   * @type {number}
   */
  fee: number;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * 确认数
   * @type {number}
   */
  confirmations: number;
  /**
   * 网络使用量
   * @type {number}
   */
  netUsage: number;
  /**
   * 能量使用量
   * @type {number}
   */
  energyUsage: number;
  /**
   * 区块奖励
   * @type {number}
   */
  blockReward: number;
  /**
   * 投票奖励
   * @type {number}
   */
  voteReward: number;
  /**
   * 是否回滚
   * @type {boolean}
   */
  revert: boolean;
}

// ======================
// Token相关接口
// ======================

/**
 * 获取 TRC20/TRC721/TRC1155 Token 详情查询参数接口
 */
export interface TokenDetailsQueryParams {
  /**
   * TRC20/TRC721/TRC1155 合约地址
   * @type {string | undefined}
   */
  contract?: string;
  /**
   * 返回数据类型。0: 仅白名单, 1: 所有, 2: 排除黑名单
   * @type {number | undefined}
   */
  showAll?: number;
  /**
   * 起始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页条目数，默认为 30
   * @type {number | undefined}
   */
  limit?: number;
}

/**
 * TRC20 Token 列表响应接口
 */
export interface Trc20Trc721Trc1155TokenListResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 合约映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 范围总数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * TRC20 Token 列表
   * @type {Trc20Token[]}
   */
  trc20_tokens: Trc20Token[];
}

/**
 * TRC20 Token 接口
 */
export interface Trc20Token {
  /**
   * 发行时间戳
   * @type {number}
   */
  issue_ts: number;
  /**
   * 符号
   * @type {string}
   */
  symbol: string;
  /**
   * 总成交额
   * @type {string}
   */
  totalTurnOver: string;
  /**
   * 灰色标签
   * @type {string}
   */
  greyTag: string;
  /**
   * 合约地址
   * @type {string}
   */
  contract_address: string;
  /**
   * 红色标签
   * @type {string}
   */
  redTag: string;
  /**
   * 公共标签
   * @type {string}
   */
  publicTag: string;
  /**
   * 收益
   * @type {string}
   */
  gain: string;
  /**
   * 主页
   * @type {string}
   */
  home_page: string;
  /**
   * 是否在 TVC Token 中
   * @type {boolean}
   */
  inTvcToken: boolean;
  /**
   * Token 描述
   * @type {string}
   */
  token_desc: string;
  /**
   * JustSwap 24 小时交易量
   * @type {number}
   */
  justSwapVolume24h: number;
  /**
   * TRX 价格
   * @type {number}
   */
  price_trx: number;
  /**
   * GitHub 地址
   * @type {string}
   */
  git_hub: string;
  /**
   * 价格
   * @type {string}
   */
  price: string;
  /**
   * 带小数位的总供应量
   * @type {string}
   */
  total_supply_with_decimals: string;
  /**
   * 24 小时交易数
   * @type {number}
   */
  transfer24h: number;
  /**
   * 社交媒体列表
   * @type {SocialMedia[]}
   */
  social_media_list: SocialMedia[];
  /**
   * JustSwap 24 小时交易量变化率
   * @type {number}
   */
  justSwapVolume24h_rate: number;
  /**
   * 是否为 VIP
   * @type {boolean}
   */
  vip: boolean;
  /**
   * 24 小时交易量变化率
   * @type {number}
   */
  volume24h_rate: number;
  /**
   * 邮箱
   * @type {string}
   */
  email: string;
  /**
   * 公告
   * @type {string}
   */
  announcement: string;
  /**
   * 图标 URL
   * @type {string}
   */
  icon_url: string;
  /**
   * 24 小时流动性变化率
   * @type {number}
   */
  liquidity24h_rate: number;
  /**
   * 总供应量
   * @type {number}
   */
  total_supply: number;
  /**
   * 等级
   * @type {string}
   */
  level: string;
  /**
   * 总供应量字符串
   * @type {string}
   */
  total_supply_str: string;
  /**
   * 24 小时交易量
   * @type {number}
   */
  volume24h: number;
  /**
   * 索引
   * @type {number}
   */
  index: number;
  /**
   * 合约名称
   * @type {string}
   */
  contract_name: string;
  /**
   * 蓝色标签
   * @type {string}
   */
  blueTag: string;
  /**
   * 24 小时交易数变化率
   * @type {number}
   */
  transfer24h_rate: number;
  /**
   * 市场信息
   * @type {MarketInfo}
   */
  market_info: MarketInfo;
  /**
   * 交易量
   * @type {number}
   */
  volume: number;
  /**
   * 发行地址
   * @type {string}
   */
  issue_address: string;
  /**
   * 交易数量
   * @type {number}
   */
  transfer_num: number;
  /**
   * 持有者数量
   * @type {number}
   */
  holders_count: number;
  /**
   * 24 小时流动性
   * @type {number}
   */
  liquidity24h: number;
  /**
   * Token 价格线
   * @type {TokenPriceLine}
   */
  tokenPriceLine: TokenPriceLine;
  /**
   * 小数位数
   * @type {number}
   */
  decimals: number;
  /**
   * 名称
   * @type {string}
   */
  name: string;
  /**
   * 发行时间
   * @type {string}
   */
  issue_time: string;
  /**
   * Token 类型
   * @type {string}
   */
  tokenType: string;
  /**
   * 白皮书
   * @type {string}
   */
  white_paper: string;
  /**
   * 社交媒体
   * @type {string}
   */
  social_media: string;
}

/**
 * 社交媒体接口
 */
export interface SocialMedia {
  /**
   * 名称
   * @type {string}
   */
  name: string;
  /**
   * URL 地址
   * @type {string}
   */
  url: string;
}

/**
 * 市场信息接口
 */
export interface MarketInfo {
  /**
   * fPrecision
   * @type {number}
   */
  fPrecision: number;
  /**
   * fShortName
   * @type {string}
   */
  fShortName: string;
  /**
   * fTokenAddr
   * @type {string}
   */
  fTokenAddr: string;
  /**
   * filter
   * @type {boolean}
   */
  filter: boolean;
  /**
   * 收益
   * @type {number}
   */
  gain: number;
  /**
   * 流动性
   * @type {number}
   */
  liquidity: number;
  /**
   * 交易对 URL 地址
   * @type {string}
   */
  pairUrl: string;
  /**
   * TRX 价格
   * @type {number}
   */
  priceInTrx: number;
  /**
   * 美元价格
   * @type {number}
   */
  priceInUsd: number;
  /**
   * sPrecision
   * @type {number}
   */
  sPrecision: number;
  /**
   * sShortName
   * @type {string}
   */
  sShortName: string;
  /**
   * 24 小时 TRX 交易量
   * @type {number}
   */
  volume24hInTrx: number;
}

/**
 * Token 价格线接口
 */
export interface TokenPriceLine {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 数据
   * @type {PriceData[]}
   */
  data: PriceData[];
}

/**
 * 价格数据接口
 */
export interface PriceData {
  /**
   * 美元价格
   * @type {string}
   */
  priceUsd: string;
  /**
   * 时间戳
   * @type {string}
   */
  time: string;
}

/**
 * 获取指定 Token 价格信息查询参数接口
 */
export interface TokenPriceQueryParams {
  /**
   * Token 缩写，默认为 "trx"
   * @type {string | undefined}
   */
  token?: string;
}

/**
 * Token 价格信息接口
 */
export interface TokenPriceResponse {
  /**
   * 以 TRX 计价的价格
   * @type {string}
   */
  price_in_trx: string;
  /**
   * 24 小时价格变动百分比
   * @type {string}
   */
  percent_change_24h: string;
  /**
   * 市值
   * @type {string}
   */
  market_cap: string;
  /**
   * 24 小时交易量变动百分比
   * @type {string}
   */
  volume_percent_change_24h: string;
  /**
   * 以美元计价的价格
   * @type {string}
   */
  price_in_usd: string;
  /**
   * 24 小时交易量
   * @type {string}
   */
  volume_24h: string;
  /**
   * 24 小时市值变动百分比
   * @type {string}
   */
  market_cap_percent_change_24h: string;
  /**
   * 来源
   * @type {string}
   */
  from: string;
  /**
   * 时间戳
   * @type {number}
   */
  time: number;
  /**
   * Token 缩写
   * @type {string}
   */
  token: string;
}

/**
 * 获取交易信息查询参数接口
 */
export interface TransferQueryParams {
  /**
   * TRC20/TRC721/TRC1155 合约地址
   * @type {string | undefined}
   */
  contract?: string;
  /**
   * 返回数据类型。0: 仅白名单; 1: 所有; 2: 排除黑名单
   * @type {number | undefined}
   */
  showAll?: number;
  /**
   * 查询 TRX 交易时，填写 'trx'
   * @type {string | undefined}
   */
  name?: string;
  /**
   * TRC10 发行者地址
   * @type {string | undefined}
   */
  issueAddress?: string;
  /**
   * 开始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
  /**
   * 查询地址
   * @type {string | undefined}
   */
  address?: string;
  /**
   * 与 'address' 参数相同
   * @type {string | undefined}
   */
  relatedAddress?: string;
  /**
   * 0: 返回固化交易; 1: 返回非固化交易; 不传值返回所有
   * @type {number | undefined}
   */
  confirm?: number;
  /**
   * 是否隐藏小额交易。1: 隐藏; 0: 不隐藏
   * @type {number | undefined}
   */
  filterTokenValue?: number;
}

/**
 * 交易信息响应数据接口
 */
export interface TransferResponse {
  /**
   * 总记录数
   * @type {number}
   */
  total: number;
  /**
   * 范围内总记录数
   * @type {number}
   */
  rangeTotal: number;
  /**
   * 数据列表
   * @type {Trc10TransferData[]}
   */
  Data: Trc10TransferData[];
}

/**
 * TRC10/TRX 交易数据接口
 */
export interface Trc10TransferData {
  /**
   * 区块 ID
   * @type {number}
   */
  blockId: number;
  /**
   * 交易哈希
   * @type {string}
   */
  transactionHash: string;
  /**
   * 时间戳
   * @type {number}
   */
  timestamp: number;
  /**
   * 转出地址
   * @type {string}
   */
  transferFromAddress: string;
  /**
   * 转入地址
   * @type {string}
   */
  transferToAddress: string;
  /**
   * 数量
   * @type {number}
   */
  amount: number;
  /**
   * Token 名称
   * @type {string}
   */
  tokenName: string;
  /**
   * 最终结果
   * @type {string}
   */
  finalResult: string;
  /**
   * 合约结果
   * @type {string}
   */
  contractRet: string;
  /**
   * 是否已确认
   * @type {boolean}
   */
  confirmed: boolean;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 转出地址是否为合约
   * @type {boolean}
   */
  fromAddressIsContract: boolean;
  /**
   * 转入地址是否为合约
   * @type {boolean}
   */
  toAddressIsContract: boolean;
}

/**
 * 获取特定地址 TRX 交易列表查询参数接口
 */
export interface TrxTransferListQueryParams {
  /**
   * 开始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页显示数量，默认为 20
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 查询地址
   * @type {string}
   */
  address: string;
  /**
   * 方向，默认为 1。1 表示入账交易，2 表示出账交易，0 表示全部
   * @type {number | undefined}
   */
  direction?: number;
  /**
   * 开始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
  /**
   * 默认为 0，表示过滤掉无效的 "to" 或 "from" 地址的交易
   * @type {number | undefined}
   */
  db_version?: number;
  /**
   * 是否按降序排列数据，默认为 true
   * @type {boolean | undefined}
   */
  reverse?: boolean;
  /**
   * 是否返回用于资源消耗的 TRX 燃烧数据，默认为 false
   * @type {boolean | undefined}
   */
  fee?: boolean;
}

/**
 * 特定地址 TRX 交易列表响应数据接口
 */
export interface TrxTransferListResponse {
  /**
   * 合约映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 每页大小
   * @type {number}
   */
  page_size: number;
  /**
   * 状态码
   * @type {number}
   */
  code: number;
  /**
   * 数据列表
   * @type {TrxTransferData[]}
   */
  data: TrxTransferData[];
}

/**
 * TRX 交易数据接口
 */
export interface TrxTransferData {
  /**
   * 数量
   * @type {string}
   */
  amount: string;
  /**
   * 区块时间戳
   * @type {number}
   */
  block_timestamp: number;
  /**
   * 区块号
   * @type {number}
   */
  block: number;
  /**
   * 转出地址
   * @type {string}
   */
  from: string;
  /**
   * 转入地址
   * @type {string}
   */
  to: string;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 是否已确认
   * @type {number}
   */
  confirmed: number;
  /**
   * 合约类型
   * @type {string}
   */
  contract_type: string;
  /**
   * 合约类型 (number)
   * @type {number}
   */
  contractType: number;
  /**
   * 是否回滚
   * @type {number}
   */
  revert: number;
  /**
   * 合约结果
   * @type {string}
   */
  contract_ret: string;
  /**
   * 符号
   * @type {string}
   */
  symbol: string;
  /**
   * 发行地址
   * @type {string}
   */
  issue_address: string;
  /**
   * 小数位数
   * @type {number}
   */
  decimals: number;
  /**
   * Token 名称
   * @type {string}
   */
  token_name: string;
  /**
   * 方向，1：入账，2：出账
   * @type {number}
   */
  direction: number;
}

/**
 * 获取特定地址 TRC20 Token 交易列表查询参数接口
 */
export interface Trc20TransferListQueryParams {
  /**
   * 开始编号，默认为 0
   * @type {number | undefined}
   */
  start?: number;
  /**
   * 每页显示数量，默认为 20
   * @type {number | undefined}
   */
  limit?: number;
  /**
   * 查询地址
   * @type {string}
   */
  address: string;
  /**
   * TRC20 Token ID
   * @type {string}
   */
  trc20Id: string;
  /**
   * 方向，默认为 1。1 表示入账交易，2 表示出账交易，0 表示全部
   * @type {number | undefined}
   */
  direction?: number;
  /**
   * 开始时间戳
   * @type {number | undefined}
   */
  start_timestamp?: number;
  /**
   * 结束时间戳
   * @type {number | undefined}
   */
  end_timestamp?: number;
  /**
   * 默认为 0，表示过滤掉无效的 "to" 或 "from" 地址的交易
   * @type {number | undefined}
   */
  db_version?: number;
  /**
   * 是否按降序排列数据，默认为 true
   * @type {boolean | undefined}
   */
  reverse?: boolean;
}

/**
 * 特定地址 TRC20 Token 交易列表响应数据接口
 */
export interface Trc20TransferListResponse {
  /**
   * 合约映射
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * Token 信息
   * @type {TokenInfo}
   */
  tokenInfo: TokenInfo;
  /**
   * 每页大小
   * @type {number}
   */
  page_size: number;
  /**
   * 状态码
   * @type {number}
   */
  code: number;
  /**
   * 数据列表
   * @type {Trc20TransferData[]}
   */
  data: Trc20TransferData[];
}

/**
 * TRC20 交易数据接口
 */
export interface Trc20TransferData {
  /**
   * 数量
   * @type {string}
   */
  amount: string;
  /**
   * 状态
   * @type {number}
   */
  status: number;
  /**
   * 授权数量
   * @type {string}
   */
  approval_amount: string;
  /**
   * 区块时间戳
   * @type {number}
   */
  block_timestamp: number;
  /**
   * 区块号
   * @type {number}
   */
  block: number;
  /**
   * 转出地址
   * @type {string}
   */
  from: string;
  /**
   * 转入地址
   * @type {string}
   */
  to: string;
  /**
   * 交易哈希
   * @type {string}
   */
  hash: string;
  /**
   * 是否已确认
   * @type {number}
   */
  confirmed: number;
  /**
   * 合约类型
   * @type {string}
   */
  contract_type: string;
  /**
   * 合约类型 (number)
   * @type {number}
   */
  contractType: number;
  /**
   * 是否回滚
   * @type {number}
   */
  revert: number;
  /**
   * 合约结果
   * @type {string}
   */
  contract_ret: string;
  /**
   * 事件类型
   * @type {string}
   */
  event_type: string;
  /**
   * 发行地址
   * @type {string}
   */
  issue_address: string;
  /**
   * 小数位数
   * @type {number}
   */
  decimals: number;
  /**
   * Token 名称
   * @type {string}
   */
  token_name: string;
  /**
   * Token ID
   * @type {string}
   */
  id: string;
  /**
   * 方向，1：入账，2：出账
   * @type {number}
   */
  direction: number;
}

// ======================
// 质押相关接口
// ======================

/**
 * 获取 TRX 质押利率数据查询参数接口
 */
export interface TrxStakingRateQueryParams {
  /**
   * 开始时间，格式：yyyy-MM-dd
   * @type {string}
   */
  start_day: string;
  /**
   * 结束时间，格式：yyyy-MM-dd
   * @type {string}
   */
  end_day: string;
}

/**
 * TRX 质押利率数据响应接口
 */
export interface TrxStakingRateResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 最大值
   * @type {MaxMinData}
   */
  max: MaxMinData;
  /**
   * 最小值
   * @type {MaxMinData}
   */
  min: MaxMinData;
  /**
   * 数据列表
   * @type {StakingRateData[]}
   */
  data: StakingRateData[];
}

/**
 * 最大/最小值数据接口
 */
export interface MaxMinData {
  /**
   * 天 (时间戳)
   * @type {number}
   */
  day: number;
  /**
   * 参与者数量
   * @type {number}
   */
  caller_amount: number;
  /**
   * 参与者数量费率
   * @type {number}
   */
  caller_amount_rate: number;
}

/**
 * 质押利率数据接口
 */
export interface StakingRateData {
  /**
   * 天 (时间戳)
   * @type {number}
   */
  day: number;
  /**
   * 参与者数量
   * @type {number}
   */
  caller_amount: number;
  /**
   * 参与者数量费率
   * @type {number}
   */
  caller_amount_rate: number;
}

// ======================
// 其他接口
// ======================

/**
 * 获取包含交易记录的账户数据查询参数接口
 */
export interface AccountDataWithTransactionsQueryParams {
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 交易数量，以逗号分隔。例如：1,10 表示 1 到 10
   * @type {string}
   */
  txNum?: string;
  /**
   * 交易金额范围，以逗号分隔。例如：100,10000 表示 100 到 10000
   * @type {string}
   */
  txAmount?: string;
  /**
   * 转账类型：0 全部，1 转入，2 转出
   * @type {number}
   */
  direction?: number;
  /**
   * 关联地址
   * @type {string}
   */
  relatedAddress?: string;
  /**
   * 关联 Token
   * @type {string}
   */
  relatedToken?: string;
  /**
   * 开始时间，单位：秒
   * @type {number}
   */
  startTime?: number;
  /**
   * 结束时间，单位：秒
   * @type {number}
   */
  endTime?: number;
  /**
   * 排序字段：amountIn (转入金额), amountOut (转出金额), timesIn (转入次数), timesOut (转出次数)
   * @type {string}
   */
  sortby?: string;
  /**
   * 限制，最大 100
   * @type {number}
   */
  limit?: number;
}

/**
 * 包含交易记录的账户数据响应接口
 */
export interface AccountDataWithTransactionsResponse {
  /**
   * 总数
   * @type {number}
   */
  total: number;
  /**
   * 状态码: 0 表示成功
   * @type {number}
   */
  code: number;
  /**
   * 合约地址映射
   *  - key: 合约地址
   *  - value: 是否是合约
   * @type {ContractMap}
   */
  contractMap: ContractMap;
  /**
   * 账户数据列表
   * @type {AccountData[]}
   */
  data: AccountData[];
  /**
   * 合约信息
   * @type {ContractInfoMap}
   */
  contractInfo: ContractInfoMap;
  /**
   * 刷新时间信息
   */
  refreshTimeInfo: RefreshTimeInfo;
}

/**
 * 账户数据接口
 */
export interface AccountData {
  /**
   * 转入金额 (美元)
   * @type {number}
   */
  inAmountUsd: number;
  /**
   * 转出金额 (美元)
   * @type {number}
   */
  outAmountUsd: number;
  /**
   * 账户地址
   * @type {string}
   */
  address: string;
  /**
   * 地址标签
   * @type {string}
   */
  addressTag: string;
  /**
   * 转出数量
   * @type {number}
   */
  outNum: number;
  /**
   * 转入数量
   * @type {number}
   */
  inNum: number;
}

/**
 * 刷新时间信息接口
 */
export interface RefreshTimeInfo {
  /**
   * 刷新剩余时间（秒）
   * @type {number}
   */
  timeToRefresh: number;
  /**
   * 上次更新时间 (Unix 时间戳字符串)
   * @type {string}
   */
  lastUpdateTime: string;
}

/**
 * 账户安全检查响应接口
 */
export interface AccountSecurityCheckResponse {
  /**
   * 是否通过备注发送广告
   *  - true:  账户频繁发送广告
   *  - false: 账户不频繁发送广告
   * @type {boolean}
   */
  send_ad_by_memo: boolean;
  /**
   * 是否有欺诈交易
   *  - true: 有欺诈交易
   *  - false: 没有欺诈交易
   * @type {boolean}
   */
  has_fraud_transaction: boolean;
  /**
   * 是否为欺诈 Token 创建者
   *  - true: 是欺诈 Token 创建者
   *  - false: 不是欺诈 Token 创建者
   * @type {boolean}
   */
  fraud_token_creator: boolean;
  /**
   * 是否在稳定币黑名单中
   *  - true: 在黑名单中
   *  - false: 不在黑名单中
   * @type {boolean}
   */
  is_black_list: boolean;
} 