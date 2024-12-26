import path from 'path';
import { buildWebpackConfig } from './config/build/';
import { BuildPaths } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build'),
};

const mode = 'development';
const isDev = mode === 'development';

const config = buildWebpackConfig({
  paths,
  mode,
  isDev,
});

export default config;
