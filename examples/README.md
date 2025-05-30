# TronScan SDK 使用例子

这个目录包含了 TronScan SDK 的使用示例，展示了如何使用 SDK 的各种功能。

## 文件说明

### 📘 `quick-start.ts`
快速开始示例，包含最常用的功能：
- 查询账户余额
- 获取最新区块信息
- 查询合约详情
- 获取最新交易
- 地址验证和单位转换

### 📚 `usage-example.ts`
完整的使用示例，展示 SDK 的所有主要功能：
- 账户信息查询
- 代币列表获取
- 区块数据获取
- 交易记录查询
- TRC20 转账记录
- 合约详情查询
- 工具方法使用

## 运行示例

确保你已经安装了依赖：

```bash
bun install
```

### 运行快速开始示例
```bash
bun run example:quick
```

### 运行完整使用示例
```bash
bun run example:usage
```

### 直接运行文件
```bash
bun run examples/quick-start.ts
bun run examples/usage-example.ts
```

## API Key 配置

示例中使用的 API Key 为：``

你可以在代码中修改为自己的 API Key：

```typescript
const sdk = new TronScanSDK({
  apikey: 'your-api-key-here'
});
```

## 示例输出

运行示例后，你会看到类似以下的输出：

```
🚀 TronScan SDK 使用示例

📊 1. 获取账户信息
账户信息: {
  address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  balance: 0,
  bandwidth: 0,
  createTime: 2018-04-11T10:00:54.000Z
}

🪙 2. 获取账户代币列表
代币数量: 5
前几个代币: [
  { name: 'USDT', symbol: 'USDT', balance: '1000000' }
]
...
```

## 错误处理

示例中包含了基本的错误处理，如果遇到网络错误或 API 限制，会显示相应的错误信息而不会终止程序。

## 地址和哈希验证

示例中展示了如何验证 TRON 地址和交易哈希：

```typescript
// 地址验证
TronScanSDK.isValidTronAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t') // true
TronScanSDK.isValidTronAddress('invalid_address') // false

// 交易哈希验证
TronScanSDK.isValidTransactionHash('64位十六进制字符串') // true/false
```

## 单位转换

SDK 提供了 TRX 和 Sun 之间的转换工具：

```typescript
// 1 TRX = 1,000,000 Sun
TronScanSDK.sunToTrx(1000000) // 1
TronScanSDK.trxToSun(1) // 1000000
```

## 地址格式化

为了更好地显示长地址，SDK 提供了地址格式化功能：

```typescript
TronScanSDK.formatAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t')
// 输出: 'TR7NHq...gjLj6t'
``` 