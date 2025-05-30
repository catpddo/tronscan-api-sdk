import { TronScanSDK } from '../src/index';

// 快速开始示例
async function quickStart() {
  // 1. 初始化 SDK
  const sdk = new TronScanSDK({
    apikey: ''
  });

  console.log('🚀 TronScan SDK 快速开始\n');

  try {
    // 2. 查询账户余额
    console.log('💰 查询账户余额');
    const address = '你需要查询的地址';
    const account = await sdk.getAccountDetail(address);
    
    console.log(`地址: ${TronScanSDK.formatAddress(address)}`);
    console.log(`TRX 余额: ${TronScanSDK.sunToTrx(account.balance || 0)} TRX`);
    console.log(`带宽: ${account.bandwidth || 0}`);
    console.log('');

    // 3. 查询最新区块
    console.log('📦 最新区块信息');
    const blocks = await sdk.getBlockList({ start: 0, limit: 1 });
    if (blocks.data && blocks.data.length > 0) {
      const block = blocks.data[0];
      console.log(`最新区块: #${block.number}`);
      console.log(`区块哈希: ${TronScanSDK.formatAddress(block.hash || '')}`);
      console.log(`交易数: ${block.nrOfTrx || 0}`);
      console.log(`时间: ${TronScanSDK.formatTimestamp(block.timestamp || 0).toLocaleString()}`);
    }
    console.log('');

    // 4. 查询代币信息
    console.log('🪙 查询 USDT 合约信息');
    const usdtAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
    const contractDetail = await sdk.getContractDetail(usdtAddress);
    
    if (contractDetail.data && contractDetail.data.length > 0) {
      const contract = contractDetail.data[0];
      console.log(`合约地址: ${TronScanSDK.formatAddress(contract.address)}`);
      console.log(`代币名称: ${contract.tokenInfo?.tokenName || 'N/A'}`);
      console.log(`代币符号: ${contract.tokenInfo?.tokenAbbr || 'N/A'}`);
      console.log(`验证状态: ${contract.verify_status === 2 ? '已验证' : '未验证'}`);
    }
    console.log('');

    // 5. 查询最新交易
    console.log('📋 最新交易');
    const transactions = await sdk.getTransactionList({ start: 0, limit: 3 });
    if (transactions.data && transactions.data.length > 0) {
      transactions.data.forEach((tx, index) => {
        console.log(`${index + 1}. 交易哈希: ${TronScanSDK.formatAddress(tx.hash || '')}`);
        console.log(`   区块: #${tx.block || 0}`);
        console.log(`   发起者: ${TronScanSDK.formatAddress(tx.ownerAddress || '')}`);
        console.log(`   时间: ${TronScanSDK.formatTimestamp(tx.timestamp || 0).toLocaleString()}`);
        console.log('');
      });
    }

    console.log('✅ 快速开始示例完成！');

  } catch (error) {
    console.error('❌ 发生错误:', error);
  }
}

// 地址验证示例
function addressValidation() {
  console.log('🔍 地址验证示例');
  
  const testAddresses = [
    'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', // USDT 合约地址
    'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7', // 普通账户地址
    'invalid_address',                        // 无效地址
    'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj'     // 长度不足
  ];

  testAddresses.forEach(address => {
    const isValid = TronScanSDK.isValidTronAddress(address);
    console.log(`${address}: ${isValid ? '✅ 有效' : '❌ 无效'}`);
  });
  console.log('');
}

// 单位转换示例
function unitConversion() {
  console.log('🔄 单位转换示例');
  
  const examples = [
    { sun: 1000000, description: '1 TRX' },
    { sun: 1000000000, description: '1,000 TRX' },
    { sun: 1000000000000, description: '1,000,000 TRX' }
  ];

  examples.forEach(({ sun, description }) => {
    const trx = TronScanSDK.sunToTrx(sun);
    const backToSun = TronScanSDK.trxToSun(trx);
    console.log(`${sun.toLocaleString()} Sun = ${trx.toLocaleString()} TRX (${description})`);
    console.log(`反转: ${trx} TRX = ${backToSun.toLocaleString()} Sun`);
    console.log('');
  });
}

// 运行示例
async function main() {
  await quickStart();
  addressValidation();
  unitConversion();
}

if (require.main === module) {
  main().catch(console.error);
}

export { quickStart, addressValidation, unitConversion }; 