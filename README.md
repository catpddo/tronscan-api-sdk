# TronScan API SDK

基于 [TronScan API](https://docs.tronscan.org/) 的 TypeScript/JavaScript SDK，提供完整的 TRON 区块链数据查询功能。

## 特性

- 🔒 **类型安全** - 完整的 TypeScript 类型定义
- 🚀 **现代化** - 支持 ES6+ 和 CommonJS
- 📦 **轻量级** - 最小化依赖，仅依赖 axios
- 🛠 **易用性** - 简洁的 API 设计
- 🔑 **API Key 支持** - 支持 TronScan Pro API Key
- 🌐 **全面覆盖** - 涵盖所有主要 API 端点
- ⚡ **高性能** - 优化的请求处理和错误处理
- 🎯 **工具方法** - 内置实用工具函数

## 安装

使用 bun（推荐）：

```bash
bun add @pddo/tronscan-api-sdk
```

使用 npm：

```bash
npm install @pddo/tronscan-api-sdk
```

## 快速开始

### 基本用法

```typescript
import { TronScanSDK } from '@pddo/tronscan-api-sdk';

// 不使用 API Key（有限制）
const sdk = new TronScanSDK();

// 使用 API Key（推荐）
const sdk = new TronScanSDK({
  apikey: 'your-api-key-here'
});

// 自定义配置
const sdk = new TronScanSDK({
  apikey: 'your-api-key-here',
  baseURL: 'https://apilist.tronscanapi.com/api',
  timeout: 10000
});
```

### 获取账户信息

```typescript
// 获取账户详细信息
const account = await sdk.getAccountDetail('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
console.log(`地址: ${account.address}`);
console.log(`余额: ${TronScanSDK.sunToTrx(account.balance)} TRX`);

// 获取账户代币列表
const tokens = await sdk.getAccountTokenList({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  start: 0,
  limit: 20
});

// 获取账户资源信息
const resources = await sdk.getAccountResource({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  type: 1,
  resourceType: 0
});

// 获取账户钱包代币概览
const overview = await sdk.getAccountWalletTokenOverview('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
```

### 交易查询

```typescript
// 获取交易列表
const transactions = await sdk.getTransactionList({
  start: 0,
  limit: 50
});

// 通过哈希获取交易详情
const txDetail = await sdk.getTransactionDetail('transaction-hash');

// 获取 TRC20/TRC721 转账记录
const trc20Transfers = await sdk.getTrc20OrTrc721TransfersList({
  start: 0,
  limit: 100
});

// 获取 TRX 和 TRC10 转账记录
const trxTransfers = await sdk.getTrxAndTrc10TransfersList({
  start: 0,
  limit: 100,
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
});

// 获取内部交易列表
const internalTxs = await sdk.getInternalTransactionList({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  start: 0,
  limit: 50
});
```

### 区块查询

```typescript
// 获取区块列表
const blocks = await sdk.getBlockList({
  start: 0,
  limit: 20
});

// 获取最新区块信息
const latestBlocks = await sdk.getBlockList({
  start: 0,
  limit: 1
});
```

### 代币信息

```typescript
// 获取 TRC20/TRC721/TRC1155 代币详情
const tokenDetails = await sdk.getTokenDetails({
  start: 0,
  limit: 50
});

// 获取代币价格信息
const tokenPrice = await sdk.getTokenPrice({
  token: 'usdt'
});
```

### 合约相关

```typescript
// 获取合约详情
const contractDetail = await sdk.getContractDetail('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');

// 获取合约事件
const contractEvents = await sdk.getContractEvent({
  contractAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  limit: 20
});
```

### 钱包功能

```typescript
// 获取 TRX 转账列表
const trxTransfers = await sdk.getTrxTransferList({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  start: 0,
  limit: 50
});

// 获取 TRC20 转账列表
const trc20Transfers = await sdk.getTrc20TransferList({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  contract_address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  start: 0,
  limit: 50
});
```

### 统计和分析

```typescript
// 获取账户每日分析数据
const analytics = await sdk.getDailyAnalyticsData({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
});

// 获取 TRX 质押利率数据
const stakingRate = await sdk.getTrxStakingRate({
  start: 0,
  limit: 30
});

// 获取账户数据和相关交易
const accountData = await sdk.getAccountDataWithTransactions({
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
});
```

### 安全功能

```typescript
// 账户安全检查
const securityCheck = await sdk.getAccountSecurityCheck('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
```

## 工具方法

SDK 提供了多个实用的静态工具方法：

```typescript
// 单位转换
const trxAmount = TronScanSDK.sunToTrx(1000000); // 1 TRX
const sunAmount = TronScanSDK.trxToSun(1); // 1000000 Sun

// 地址格式化
const shortAddress = TronScanSDK.formatAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
// 输出: "TR7NHq...gjLj6t"

// 地址验证
const isValidAddress = TronScanSDK.isValidTronAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');
console.log(isValidAddress); // true

// 交易哈希验证
const isValidHash = TronScanSDK.isValidTransactionHash('64位十六进制字符串');
console.log(isValidHash); // true/false

// 时间戳格式化
const date = TronScanSDK.formatTimestamp(1640995200000);
console.log(date); // Date 对象
```

## API 配置

```typescript
const sdk = new TronScanSDK({
  apikey: 'your-api-key',                               // 可选，API 密钥
  apiKey: 'your-api-key',                               // 可选，支持两种写法
  baseURL: 'https://apilist.tronscanapi.com/api',      // 可选，API 基础 URL
  timeout: 10000                                        // 可选，超时时间（毫秒）
});

// 动态设置 API Key
sdk.setApiKey('new-api-key');
```

## 错误处理

```typescript
try {
  const account = await sdk.getAccountDetail('invalid-address');
} catch (error) {
  console.error('请求失败:', error);
  
  if (error.response) {
    // API 返回错误
    console.error('状态码:', error.response.status);
    console.error('错误信息:', error.response.data);
  } else if (error.request) {
    // 网络错误
    console.error('网络错误:', error.message);
  }
}
```

## 运行示例

项目包含了完整的使用示例：

```bash
# 安装依赖
bun install

# 运行快速开始示例
bun run example:quick

# 运行完整使用示例
bun run example:usage

# 运行测试
bun test

# 运行集成测试
bun run test:integration

# 运行测试覆盖率
bun run test:coverage
```

查看 `examples/` 目录获取更多使用示例。

## API Key 获取

1. 访问 [TronScan API Keys 页面](https://tronscan.org/#/tools/api-keys)
2. 登录您的账户
3. 点击 "Add" 按钮创建新的 API Key
4. 输入应用名称并配置安全选项
5. 复制生成的 API Key 到您的应用中

## 支持的 API 端点

### 账户相关
- `getAccountDetail(address)` - 获取账户详细信息
- `getAccountTokenList(params)` - 获取账户代币列表
- `getAccountResource(params)` - 获取账户资源列表
- `getAccountApprovalList(params)` - 获取账户授权列表
- `getAccountAuthorizationChangeRecords(params)` - 获取账户授权变更记录
- `getDailyAnalyticsData(params)` - 获取账户每日分析数据
- `getAccountWalletTokenOverview(address)` - 获取账户钱包代币概览

### 合约相关
- `getContractDetail(address)` - 获取合约详情
- `getContractEvent(params)` - 获取合约事件信息

### 交易相关
- `getTransactionList(params)` - 获取交易列表
- `getTransactionDetail(hash)` - 通过哈希获取交易详情
- `getTrc20OrTrc721TransfersList(params)` - 获取 TRC20/TRC721 转账列表
- `getTrxAndTrc10TransfersList(params)` - 获取 TRX/TRC10 转账列表
- `getInternalTransactionList(params)` - 获取内部交易列表
- `getAccountTransactionData(params)` - 获取账户交易数据

### 区块相关
- `getBlockList(params)` - 获取区块列表

### 代币相关
- `getTokenDetails(params)` - 获取 TRC20/TRC721/TRC1155 代币详情
- `getTokenPrice(params)` - 获取指定代币价格信息
- `getTransfer(params)` - 获取交易信息

### 钱包相关
- `getTrxTransferList(params)` - 获取 TRX 转账列表
- `getTrc20TransferList(params)` - 获取 TRC20 转账列表

### 统计相关
- `getTrxStakingRate(params)` - 获取 TRX 质押利率数据
- `getAccountDataWithTransactions(params)` - 获取账户数据和相关交易

### 安全相关
- `getAccountSecurityCheck(address)` - 账户安全检查

## 类型支持

SDK 提供了完整的 TypeScript 类型支持，包括：

- 所有 API 请求参数的类型定义
- 所有 API 响应数据的类型定义
- 配置选项的类型定义
- 工具方法的类型定义

导入类型：

```typescript
import { 
  TronScanSDK, 
  TronScanConfig,
  AccountInfo,
  TransactionDetail,
  BlockListResponse
} from '@pddo/tronscan-api-sdk';
```

## 开发

```bash
# 克隆项目
git clone https://github.com/your-org/tronscan-api-sdk.git

# 安装依赖
bun install

# 开发模式
bun run dev

# 构建
bun run build

# 运行测试
bun test

# 代码检查
bun run lint

# 修复代码问题
bun run lint:fix

# 类型检查
bun run type-check
```

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

在提交之前，请确保：

1. 代码通过所有测试
2. 代码符合 ESLint 规范
3. 添加了相应的类型定义
4. 更新了相关文档

## 支持

如果您在使用过程中遇到问题，请：

1. 查看 [TronScan API 文档](https://docs.tronscan.org/)
2. 查看项目的 `examples/` 目录
3. 在 GitHub 上提交 Issue
4. 联系 TronScan 客服获取 API 相关支持

## 更新日志

### v1.0.0
- 🎉 首次发布
- ✅ 支持所有主要 TronScan API 端点
- ✅ 完整的 TypeScript 类型支持
- ✅ 内置实用工具方法
- ✅ 完整的测试覆盖
- ✅ 详细的使用示例 