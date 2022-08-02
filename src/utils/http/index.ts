import { clone, merge } from 'lodash-es';

import { CreateAxiosOptions } from '/#/axios';
import { Axios } from './axios';
import { transform } from './axiosTransform';

const { VITE_GLOB_API_URL } = import.meta.env;

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new Axios(
    merge(
      {
        /** 数据处理方法 */
        transform: clone(transform),
        /** 配置项 */
        requestOptions: {
          /** 是否拼接请求 */
          joinPrefix: true,
          /** 请求代理 */
          urlPrefix: VITE_GLOB_API_URL,
          /** params 添加时间戳 */
          joinTime: true,
          /** 是否返回原始响应头 */
          isReturnNativeResponse: false,
          /** 是否获取 res.data 的数据 */
          isReturnOneResponse: false,
          /** 是否获取 res.data.data 的数据 */
          isTransformResponse: false,
        },
      },
      opt || {},
    ),
  );
}

export const defHttp = createAxios();