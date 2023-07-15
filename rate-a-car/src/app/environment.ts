const mode: 'dev' | 'prod' = 'dev';
const devUrl = 'http://127.0.0.1:8000';
const prodUrl = '';

const baseUrl = mode === 'dev' ? devUrl : prodUrl;

const config = {
  mode,
  baseUrl
}

export default config;