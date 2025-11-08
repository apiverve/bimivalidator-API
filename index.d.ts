declare module '@apiverve/bimivalidator' {
  export interface bimivalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface bimivalidatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class bimivalidatorWrapper {
    constructor(options: bimivalidatorOptions);

    execute(callback: (error: any, data: bimivalidatorResponse | null) => void): Promise<bimivalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: bimivalidatorResponse | null) => void): Promise<bimivalidatorResponse>;
    execute(query?: Record<string, any>): Promise<bimivalidatorResponse>;
  }
}
