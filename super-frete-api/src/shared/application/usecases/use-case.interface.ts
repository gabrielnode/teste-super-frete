export interface IUsecase<Output, Input = any> {
  execute(input?: Input): Output | Promise<Output>;
}
