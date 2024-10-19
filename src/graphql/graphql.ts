/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Unix Timestamp */
  UnixDate: { input: any; output: any; }
};

export type ChangePwdInput = {
  newPwd: Scalars['String']['input'];
  oldPwd: Scalars['String']['input'];
};

export type CheckDuplicateAdminAccountInputEntry = {
  account: Scalars['String']['input'];
  uid?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateAdminGroupInputEntry = {
  /** 群組名稱 */
  name: Scalars['String']['input'];
  permissions: Array<EditRuleInputEntry>;
};

export type CreateAdminInputEntry = {
  account: Scalars['String']['input'];
  groupUid: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type EditRuleInputEntry = {
  /** 頁面 key */
  key: Scalars['String']['input'];
  /** 權限 */
  mode: PermissionMode;
};

export type LoginInputEntry = {
  account: Scalars['String']['input'];
  pwd: Scalars['String']['input'];
};

export type PaginationInput = {
  /** 當前頁數 */
  currentPage: Scalars['Int']['input'];
  /** 取得資料數 */
  pageSize: Scalars['Int']['input'];
};

/** 權限 */
export enum PermissionMode {
  /** 無 */
  None = 'None',
  /** 讀 */
  R = 'R',
  /** 讀寫 */
  Rw = 'RW',
  /** 讀寫刪 */
  Rwd = 'RWD'
}

export type SearchAdminInputEntry = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
};

export type UpdateAdminGroupInputEntry = {
  /** 群組名稱 */
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<EditRuleInputEntry>>;
  uid: Scalars['ID']['input'];
};

export type UpdateAdminInputEntry = {
  groupUid?: InputMaybe<Scalars['ID']['input']>;
  pwd?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['ID']['input'];
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
