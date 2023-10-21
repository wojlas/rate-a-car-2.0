export const version: 'dev' | 'prod' = 'dev';

export const apiUrl = version === 'dev' ? 'http://127.0.0.1:8000/' : '';