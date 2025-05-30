import { TronScanSDK } from "../src/index";

// 创建 SDK 实例
const sdk = new TronScanSDK({
  apikey: "",
});

// 示例地址
const EXAMPLE_ADDRESS = "你需要查询的地址"; // USDT合约地址

async function runExamples() {
  console.log("🚀 TronScan SDK 使用示例\n");

  try {
    // 1. 获取账户信息
    console.log("📊 1. 获取账户信息");
    const accountInfo = await sdk.getAccountDetail(EXAMPLE_ADDRESS);
    console.log("账户信息:", {
      address: accountInfo.address,
      balance: TronScanSDK.sunToTrx(accountInfo.balance || 0),
      bandwidth: accountInfo.bandwidth,
      createTime: TronScanSDK.formatTimestamp(accountInfo.date_created || 0),
    });
    console.log("");

    // 2. 获取账户代币列表
    console.log("🪙 2. 获取账户代币列表");
    const tokens = await sdk.getAccountTokenList({
      address: EXAMPLE_ADDRESS,
      start: 0,
      limit: 10,
    });
    console.log("代币数量:", tokens.total);
    if (tokens.data && tokens.data.length > 0) {
      console.log(
        "前几个代币:",
        tokens.data.slice(0, 3).map((token) => ({
          name: token.tokenName,
          symbol: token.tokenAbbr,
          balance: token.balance,
        }))
      );
    }
    console.log("");

    // 3. 获取最新区块
    console.log("📦 3. 获取最新区块信息");
    const blocks = await sdk.getBlockList({
      start: 0,
      limit: 5,
    });
    if (blocks.data && blocks.data.length > 0) {
      const latestBlock = blocks.data[0];
      console.log("最新区块:", {
        number: latestBlock.number,
        hash: latestBlock.hash,
        parentHash: latestBlock.parentHash,
        timestamp: TronScanSDK.formatTimestamp(latestBlock.timestamp || 0),
        transactionCount: latestBlock.nrOfTrx,
      });
    }
    console.log("");

    // 4. 获取交易列表
    console.log("📋 4. 获取最新交易");
    const transactions = await sdk.getTransactionList({
      start: 0,
      limit: 5,
    });
    if (transactions.data && transactions.data.length > 0) {
      console.log(
        "最新交易:",
        transactions.data.slice(0, 3).map((tx) => ({
          hash: tx.hash,
          block: tx.block,
          from: TronScanSDK.formatAddress(tx.ownerAddress || ""),
          timestamp: TronScanSDK.formatTimestamp(tx.timestamp || 0),
        }))
      );
    }
    console.log("");

    // 5. 获取TRC20转账记录
    console.log("💸 5. 获取TRC20转账记录");
    const trc20Transfers = await sdk.getTrc20OrTrc721TransfersList({
      start: 0,
      limit: 5,
      relatedAddress: EXAMPLE_ADDRESS,
    });
    if (
      trc20Transfers.token_transfers &&
      trc20Transfers.token_transfers.length > 0
    ) {
      console.log(
        "TRC20转账:",
        trc20Transfers.token_transfers.slice(0, 3).map((transfer) => ({
          hash: transfer.transaction_id,
          from: TronScanSDK.formatAddress(transfer.from_address || ""),
          to: TronScanSDK.formatAddress(transfer.to_address || ""),
          amount: transfer.quant,
          token: transfer.tokenInfo?.tokenName || "Unknown",
        }))
      );
    }
    console.log("");

    // 6. 获取代币详情
    console.log("🔍 6. 获取热门代币信息");
    const usdtAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    const tokenDetails = await sdk.getTokenDetails({
      start: 0,
      limit: 5,
      contract: usdtAddress,
    });
    if (tokenDetails.trc20_tokens && tokenDetails.trc20_tokens.length > 0) {
      console.log(
        "热门代币:",
        tokenDetails.trc20_tokens.slice(0, 3).map((token) => ({
          name: token.name,
          symbol: token.symbol,
          contractAddress: TronScanSDK.formatAddress(
            token.contract_address || ""
          ),
          holders: token.holders_count,
          totalSupply: token.total_supply,
        }))
      );
    }
    console.log("");

    // 7. 测试工具方法
    console.log("🛠️ 7. 工具方法示例");
    console.log("地址验证:", {
      validAddress: TronScanSDK.isValidTronAddress(
        "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
      ),
      invalidAddress: TronScanSDK.isValidTronAddress("invalid_address"),
    });

    console.log("单位转换:", {
      "1000000 Sun": TronScanSDK.sunToTrx(1000000) + " TRX",
      "1 TRX": TronScanSDK.trxToSun(1) + " Sun",
    });

    console.log("地址格式化:", {
      original: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      formatted: TronScanSDK.formatAddress(
        "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
      ),
    });
    console.log("");

    // 8. 获取合约详情
    console.log("📄 8. 获取合约详情");
    try {
      const contractDetail = await sdk.getContractDetail(usdtAddress);
      if (contractDetail.data && contractDetail.data.length > 0) {
        const contract = contractDetail.data[0];
        console.log("合约信息:", {
          contractAddress: contract.address,
          tokenName: contract.tokenInfo?.tokenName,
          tokenSymbol: contract.tokenInfo?.tokenAbbr,
          verified: contract.verify_status === 1,
          balance: TronScanSDK.sunToTrx(contract.balance),
          name: contract.name,
          description: contract.description,
        });
      } else {
        console.log("未找到合约信息");
      }
    } catch (error) {
      console.log(
        "获取合约详情失败:",
        error instanceof Error ? error.message : "未知错误"
      );
    }
    console.log("");

    console.log("✅ 所有示例执行完成！");
  } catch (error) {
    console.error("❌ 执行示例时发生错误:", error);
  }
}

// 运行示例
if (require.main === module) {
  runExamples().catch(console.error);
}

export { runExamples };
