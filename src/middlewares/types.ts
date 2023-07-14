export interface IMessageResponse {
  message: string;
}

export interface IErrorResponse extends IMessageResponse {
  stack?: string;
}
