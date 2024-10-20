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
  UnixDate: { input: number; output: number; }
};

export type AdminGroupSimple = {
  __typename?: 'AdminGroupSimple';
  /** 建立日期 */
  createdAt: Scalars['UnixDate']['output'];
  /** 名稱 */
  name: Scalars['String']['output'];
  /** 操作人 */
  operator: Scalars['String']['output'];
  uid: Scalars['ID']['output'];
};

export type AdminGroupWithCount = {
  __typename?: 'AdminGroupWithCount';
  adminCount: Scalars['Int']['output'];
  /** 建立日期 */
  createdAt: Scalars['UnixDate']['output'];
  /** 名稱 */
  name: Scalars['String']['output'];
  /** 操作人 */
  operator: Scalars['String']['output'];
  uid: Scalars['ID']['output'];
};

export type AdminGroupWithPermissions = {
  __typename?: 'AdminGroupWithPermissions';
  adminCount: Scalars['Int']['output'];
  /** 建立日期 */
  createdAt: Scalars['UnixDate']['output'];
  /** 名稱 */
  name: Scalars['String']['output'];
  /** 操作人 */
  operator: Scalars['String']['output'];
  permissions: Array<AdminPermission>;
  uid: Scalars['ID']['output'];
};

export type AdminPermission = {
  __typename?: 'AdminPermission';
  /** 頁面 key */
  key: Scalars['String']['output'];
  /** 權限 */
  mode: PermissionMode;
};

export type AdminWithGroup = {
  __typename?: 'AdminWithGroup';
  /** 帳號 */
  account: Scalars['String']['output'];
  adminGroup: AdminGroupSimple;
  /** 建立日期 */
  createdAt: Scalars['UnixDate']['output'];
  uid: Scalars['ID']['output'];
};

export type AdminWithGroupList = {
  __typename?: 'AdminWithGroupList';
  list: Array<AdminWithGroup>;
  total: Scalars['Int']['output'];
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

export type LoginOutput = {
  __typename?: 'LoginOutput';
  /** token */
  accessToken: Scalars['String']['output'];
  /** 過期時間 */
  expiresAt: Scalars['UnixDate']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adminChangePwd: Scalars['Boolean']['output'];
  adminCreate: Scalars['Boolean']['output'];
  adminGroupCreate: Scalars['Boolean']['output'];
  adminGroupRemove: Scalars['Boolean']['output'];
  adminGroupUpdate: Scalars['Boolean']['output'];
  adminLogin: LoginOutput;
  adminRemove: Scalars['Boolean']['output'];
  adminUpdate: Scalars['Boolean']['output'];
};


export type MutationAdminChangePwdArgs = {
  in: ChangePwdInput;
};


export type MutationAdminCreateArgs = {
  in: CreateAdminInputEntry;
};


export type MutationAdminGroupCreateArgs = {
  in: CreateAdminGroupInputEntry;
};


export type MutationAdminGroupRemoveArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationAdminGroupUpdateArgs = {
  in: UpdateAdminGroupInputEntry;
};


export type MutationAdminLoginArgs = {
  in: LoginInputEntry;
};


export type MutationAdminRemoveArgs = {
  uid: Scalars['ID']['input'];
};


export type MutationAdminUpdateArgs = {
  in: UpdateAdminInputEntry;
};

export type Page = {
  __typename?: 'Page';
  /** 頁面唯一標識 */
  key: Scalars['String']['output'];
  /** 頁面名稱 */
  label: Scalars['String']['output'];
  /** 頁面節點層級 */
  level: Scalars['Int']['output'];
  /** 頁面允許權限 */
  mode: PermissionMode;
  /** 父頁面標識 */
  parentKey: Scalars['String']['output'];
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

export type Query = {
  __typename?: 'Query';
  adminCheckDuplicateAccount: Scalars['Boolean']['output'];
  adminDetail: AdminWithGroup;
  adminGroupAll: Array<AdminGroupWithCount>;
  adminGroupDetail: AdminGroupWithPermissions;
  adminGroupOptions: Array<AdminGroupSimple>;
  adminList: AdminWithGroupList;
  adminLoginWhoami: AdminWithGroup;
  hello: Scalars['String']['output'];
  pageRouterAll: Array<Page>;
};


export type QueryAdminCheckDuplicateAccountArgs = {
  in: CheckDuplicateAdminAccountInputEntry;
};


export type QueryAdminDetailArgs = {
  uid: Scalars['ID']['input'];
};


export type QueryAdminGroupDetailArgs = {
  uid: Scalars['String']['input'];
};


export type QueryAdminListArgs = {
  in: SearchAdminInputEntry;
};

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

export type AdminLoginMutationVariables = Exact<{
  in: LoginInputEntry;
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'LoginOutput', accessToken: string, expiresAt: number } };
