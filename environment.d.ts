declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
      HYGRAPH_URL: string;
      HYGRAPH_TOKEN: string;
    }
  }
}

export {};
