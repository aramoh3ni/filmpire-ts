/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_REACT_APP_TMDB_KEY: string
  readonly VITE_REACT_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
