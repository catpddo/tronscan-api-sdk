import { describe, test, expect, beforeEach, vi } from 'vitest';
import { TronScanSDK } from '../src/index';
import axios from 'axios';

// Mock axios
vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('TronScanSDK', () => {
  let sdk: TronScanSDK;
  const mockApiKey = '';

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock axios.create
    const mockAxiosInstance = {
      request: vi.fn(),
      defaults: {
        headers: {}
      },
      interceptors: {
        response: {
          use: vi.fn()
        }
      }
    };
    
    mockedAxios.create = vi.fn().mockReturnValue(mockAxiosInstance);
    
    sdk = new TronScanSDK({
      apikey: mockApiKey
    });
  });

  describe('构造函数', () => {
    test('应该正确初始化 SDK', () => {
      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: 'https://apilist.tronscanapi.com/api',
        timeout: 10000,
        headers: {
          'TRON-PRO-API-KEY': mockApiKey,
          'Content-Type': 'application/json'
        }
      });
    });

    test('应该支持自定义配置', () => {
      const customConfig = {
        apikey: 'custom-key',
        baseURL: 'https://custom.api.com',
        timeout: 5000
      };

      new TronScanSDK(customConfig);

      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: customConfig.baseURL,
        timeout: customConfig.timeout,
        headers: {
          'TRON-PRO-API-KEY': customConfig.apikey,
          'Content-Type': 'application/json'
        }
      });
    });

    test('应该使用默认配置', () => {
      new TronScanSDK();

      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: 'https://apilist.tronscanapi.com/api',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
  });

  describe('setApiKey', () => {
    test('应该正确设置 API Key', () => {
      const newApiKey = 'new-api-key';
      const mockInstance = mockedAxios.create();
      
      sdk.setApiKey(newApiKey);
      
      expect(mockInstance.defaults.headers['TRON-PRO-API-KEY']).toBe(newApiKey);
    });
  });

  describe('账户相关 API', () => {
    test('getAccountDetail 应该返回账户信息', async () => {
      const mockResponse = {
        data: {
          address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
          balance: 1000000,
          bandwidth: 5000
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const result = await sdk.getAccountDetail('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/accountv2',
        params: { address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t' }
      });
      expect(result).toEqual(mockResponse.data);
    });

    test('getAccountTokenList 应该返回代币列表', async () => {
      const mockResponse = {
        data: {
          total: 10,
          data: [
            {
              tokenName: 'USDT',
              tokenAbbr: 'USDT',
              balance: '1000000'
            }
          ]
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const params = {
        address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
        start: 0,
        limit: 10
      };

      const result = await sdk.getAccountTokenList(params);

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/account/tokens',
        params
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('交易相关 API', () => {
    test('getTransactionDetail 应该返回交易详情', async () => {
      const mockResponse = {
        data: {
          hash: '123abc',
          block: 12345,
          timestamp: 1640995200000
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const result = await sdk.getTransactionDetail('123abc');

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/transaction-info',
        params: { hash: '123abc' }
      });
      expect(result).toEqual(mockResponse.data);
    });

    test('getTransactionList 应该返回交易列表', async () => {
      const mockResponse = {
        data: {
          total: 100,
          data: [
            {
              hash: '123abc',
              block: 12345,
              ownerAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
              timestamp: 1640995200000
            }
          ]
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const params = {
        start: 0,
        limit: 20
      };

      const result = await sdk.getTransactionList(params);

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/transaction',
        params
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('区块相关 API', () => {
    test('getBlockList 应该返回区块列表', async () => {
      const mockResponse = {
        data: {
          total: 50,
          data: [
            {
              number: 12345,
              hash: 'block123',
              parentHash: 'parent123',
              timestamp: 1640995200000,
              nrOfTrx: 10
            }
          ]
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const params = {
        start: 0,
        limit: 10
      };

      const result = await sdk.getBlockList(params);

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/block',
        params
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('代币相关 API', () => {
    test('getTokenDetails 应该返回代币详情', async () => {
      const mockResponse = {
        data: {
          trc20_tokens: [
            {
              name: 'USDT',
              symbol: 'USDT',
              contract_address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
              holders_count: 1000000,
              total_supply: '1000000000'
            }
          ]
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const params = {
        start: 0,
        limit: 10
      };

      const result = await sdk.getTokenDetails(params);

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/token_trc20',
        params
      });
      expect(result).toEqual(mockResponse.data);
    });

    test('getTokenPrice 应该返回代币价格', async () => {
      const mockResponse = {
        data: {
          price: 1.0,
          priceInTrx: 10.5
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockResolvedValue(mockResponse);

      const params = {
        token: 'usdt'
      };

      const result = await sdk.getTokenPrice(params);

      expect(mockInstance.request).toHaveBeenCalledWith({
        url: '/token/price',
        params
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('工具方法', () => {
    test('sunToTrx 应该正确转换', () => {
      expect(TronScanSDK.sunToTrx(1000000)).toBe(1);
      expect(TronScanSDK.sunToTrx('2000000')).toBe(2);
      expect(TronScanSDK.sunToTrx(0)).toBe(0);
    });

    test('trxToSun 应该正确转换', () => {
      expect(TronScanSDK.trxToSun(1)).toBe(1000000);
      expect(TronScanSDK.trxToSun('2')).toBe(2000000);
      expect(TronScanSDK.trxToSun(0)).toBe(0);
    });

    test('formatAddress 应该正确格式化地址', () => {
      const address = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
      expect(TronScanSDK.formatAddress(address)).toBe('TR7NHq...gjLj6t');
      expect(TronScanSDK.formatAddress('short')).toBe('short');
      expect(TronScanSDK.formatAddress('')).toBe('');
    });

    test('formatTimestamp 应该正确格式化时间戳', () => {
      const timestamp = 1640995200000;
      const result = TronScanSDK.formatTimestamp(timestamp);
      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(timestamp);
    });

    test('isValidTronAddress 应该正确验证 TRON 地址', () => {
      expect(TronScanSDK.isValidTronAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t')).toBe(true);
      expect(TronScanSDK.isValidTronAddress('TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7')).toBe(true);
      expect(TronScanSDK.isValidTronAddress('invalid_address')).toBe(false);
      expect(TronScanSDK.isValidTronAddress('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6')).toBe(false); // 长度不足
      expect(TronScanSDK.isValidTronAddress('BR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t')).toBe(false); // 不是以T开头
    });

    test('isValidTransactionHash 应该正确验证交易哈希', () => {
      expect(TronScanSDK.isValidTransactionHash('5c8af1e5e89ba3d1efe3b6d6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9b6')).toBe(true);
      expect(TronScanSDK.isValidTransactionHash('1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef')).toBe(true);
      expect(TronScanSDK.isValidTransactionHash('invalid_hash')).toBe(false);
      expect(TronScanSDK.isValidTransactionHash('5c8af1e5e89ba3d1efe3b6d6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9')).toBe(false); // 长度不足
      expect(TronScanSDK.isValidTransactionHash('5c8af1e5e89ba3d1efe3b6d6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9b6b3b6b9b6g')).toBe(false); // 包含非十六进制字符
    });
  });

  describe('错误处理', () => {
    test('应该正确处理网络错误', async () => {
      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockRejectedValue(new Error('Network Error'));

      await expect(sdk.getAccountDetail('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t')).rejects.toThrow('Network Error');
    });

    test('应该正确处理 API 错误响应', async () => {
      const mockError = {
        response: {
          data: {
            error: 'Invalid address'
          }
        }
      };

      const mockInstance = mockedAxios.create();
      mockInstance.request = vi.fn().mockRejectedValue(mockError);

      await expect(sdk.getAccountDetail('invalid_address')).rejects.toEqual(mockError);
    });
  });
}); 