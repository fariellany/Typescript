// https://blog.csdn.net/weixin_38080573/article/details/92838045

// 高级类型Record
// type proxyKType = Record<K, T>

// 将 K中的所有属性值都转换为T类型，并将返回的新类型返回给proxyKType
type animal = 'dog' | 'pig' | 'snake'; // 当作 props的属性使用

interface props {
  name: string;
  age: number;
}
// 同时设置属性
type IPets = Record<animal | 'add', props>;

const animalsInfo: IPets = {
  dog: {
    name: 'dog',
    age: 222
  },
  pig: {
    name: 'dog',
    age: 222
  },
  snake: {
    name: 'dog',
    age: 222
  },
  add: {
    name: 'dog',
    age: 222
  }
};

//--------------------------- 声明方法

enum IHttpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put'
}

const methods = ['get', 'post', 'delete', 'put'];

interface IHttpFn {
  <T = any>(url: string, config?: any): Promise<T>;
}

type IHttp = Record<IHttpMethods, IHttpFn>;

const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
  map[method] = (url: string, options: any = {}) => {
    const { data, ...config } = options;
    return ('axios' as any)[method](url, data, config).then((res: any) => {
      if (res.data.errCode) {
        //todo somethins
      } else {
        //todo somethins
      }
    });
  };
  return map;
}, {});

export default httpMethods;
