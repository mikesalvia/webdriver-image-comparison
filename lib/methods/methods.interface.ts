// @TODO: fix the any
export interface Methods {
  // The method to inject JS in the running instance
  executor: any;
  // The screenshot method
  screenShot: any;
}

export type TakeScreenShot = () => Promise<string>;

export type Executor = <T>(script: string | Function, ...var_args: any[]) => Promise<T>;
