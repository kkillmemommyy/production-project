import path from 'path';
import { buildWebpackConfig } from './config/build';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode ?? 'development';
  const port = env.port ?? 3000;

  const isDev = mode === 'development';

  const config = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port,
  });

  return config;
};
