export {}

declare global {
  namespace NodeJS {
    interface Global {
      mongo: {
        conn: any
        promise: Promise<any>
      }
    }
  }
}
