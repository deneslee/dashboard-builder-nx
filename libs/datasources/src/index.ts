export interface DataSeries {
  name: string;
  fields: {
    name: string;
    type: 'time' | 'number' | 'string' | 'boolean';
    values: any[];
  }[];
}

export interface DatasourceQueryRequest {
  query: string;
  timeRange?: {
    from: number;
    to: number;
  };
  variables?: Record<string, string>;
}

export interface DatasourcePlugin {
  id: string;
  name: string;
  query(request: DatasourceQueryRequest): Promise<DataSeries[]>;
  testConnection?(): Promise<boolean>;
}

export class DatadogDatasource implements DatasourcePlugin {
  id = 'datadog';
  name = 'Datadog';

  async query(request: DatasourceQueryRequest): Promise<DataSeries[]> {
    console.log('Querying Datadog with:', request);
    return [];
  }
}

export class AzureSqlDatasource implements DatasourcePlugin {
  id = 'azure-sql';
  name = 'Azure SQL';

  async query(request: DatasourceQueryRequest): Promise<DataSeries[]> {
    console.log('Querying Azure SQL with:', request);
    return [];
  }
}
