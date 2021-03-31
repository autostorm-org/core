import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  ad?: Maybe<Ad>;
  findFirstAd?: Maybe<Ad>;
  ads: Array<Ad>;
  aggregateAd: AggregateAd;
  adPlan?: Maybe<AdPlan>;
  findFirstAdPlan?: Maybe<AdPlan>;
  adPlans: Array<AdPlan>;
  aggregateAdPlan: AggregateAdPlan;
  carMake?: Maybe<CarMake>;
  findFirstCarMake?: Maybe<CarMake>;
  carMakes: Array<CarMake>;
  aggregateCarMake: AggregateCarMake;
  carModel?: Maybe<CarModel>;
  findFirstCarModel?: Maybe<CarModel>;
  carModels: Array<CarModel>;
  aggregateCarModel: AggregateCarModel;
  region?: Maybe<Region>;
  findFirstRegion?: Maybe<Region>;
  regions: Array<Region>;
  aggregateRegion: AggregateRegion;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  me: MeResponse;
};


export type QueryAdArgs = {
  where: AdWhereUniqueInput;
};


export type QueryFindFirstAdArgs = {
  where?: Maybe<AdWhereInput>;
  orderBy?: Maybe<Array<AdOrderByInput>>;
  cursor?: Maybe<AdWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<AdScalarFieldEnum>>;
};


export type QueryAdsArgs = {
  where?: Maybe<AdWhereInput>;
  orderBy?: Maybe<Array<AdOrderByInput>>;
  cursor?: Maybe<AdWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<AdScalarFieldEnum>>;
};


export type QueryAggregateAdArgs = {
  where?: Maybe<AdWhereInput>;
  orderBy?: Maybe<Array<AdOrderByInput>>;
  cursor?: Maybe<AdWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAdPlanArgs = {
  where: AdPlanWhereUniqueInput;
};


export type QueryFindFirstAdPlanArgs = {
  where?: Maybe<AdPlanWhereInput>;
  orderBy?: Maybe<Array<AdPlanOrderByInput>>;
  cursor?: Maybe<AdPlanWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<AdPlanScalarFieldEnum>>;
};


export type QueryAdPlansArgs = {
  where?: Maybe<AdPlanWhereInput>;
  orderBy?: Maybe<Array<AdPlanOrderByInput>>;
  cursor?: Maybe<AdPlanWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<AdPlanScalarFieldEnum>>;
};


export type QueryAggregateAdPlanArgs = {
  where?: Maybe<AdPlanWhereInput>;
  orderBy?: Maybe<Array<AdPlanOrderByInput>>;
  cursor?: Maybe<AdPlanWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCarMakeArgs = {
  where: CarMakeWhereUniqueInput;
};


export type QueryFindFirstCarMakeArgs = {
  where?: Maybe<CarMakeWhereInput>;
  orderBy?: Maybe<Array<CarMakeOrderByInput>>;
  cursor?: Maybe<CarMakeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CarMakeScalarFieldEnum>>;
};


export type QueryCarMakesArgs = {
  where?: Maybe<CarMakeWhereInput>;
  orderBy?: Maybe<Array<CarMakeOrderByInput>>;
  cursor?: Maybe<CarMakeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CarMakeScalarFieldEnum>>;
};


export type QueryAggregateCarMakeArgs = {
  where?: Maybe<CarMakeWhereInput>;
  orderBy?: Maybe<Array<CarMakeOrderByInput>>;
  cursor?: Maybe<CarMakeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCarModelArgs = {
  where: CarModelWhereUniqueInput;
};


export type QueryFindFirstCarModelArgs = {
  where?: Maybe<CarModelWhereInput>;
  orderBy?: Maybe<Array<CarModelOrderByInput>>;
  cursor?: Maybe<CarModelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CarModelScalarFieldEnum>>;
};


export type QueryCarModelsArgs = {
  where?: Maybe<CarModelWhereInput>;
  orderBy?: Maybe<Array<CarModelOrderByInput>>;
  cursor?: Maybe<CarModelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<CarModelScalarFieldEnum>>;
};


export type QueryAggregateCarModelArgs = {
  where?: Maybe<CarModelWhereInput>;
  orderBy?: Maybe<Array<CarModelOrderByInput>>;
  cursor?: Maybe<CarModelWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRegionArgs = {
  where: RegionWhereUniqueInput;
};


export type QueryFindFirstRegionArgs = {
  where?: Maybe<RegionWhereInput>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  cursor?: Maybe<RegionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RegionScalarFieldEnum>>;
};


export type QueryRegionsArgs = {
  where?: Maybe<RegionWhereInput>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  cursor?: Maybe<RegionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<RegionScalarFieldEnum>>;
};


export type QueryAggregateRegionArgs = {
  where?: Maybe<RegionWhereInput>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  cursor?: Maybe<RegionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['String'];
  status: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  regionId: Scalars['String'];
  adPlanId: Scalars['String'];
  userId: Scalars['String'];
  carId: Scalars['String'];
};


export type AdWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AdWhereInput = {
  AND?: Maybe<Array<AdWhereInput>>;
  OR?: Maybe<Array<AdWhereInput>>;
  NOT?: Maybe<Array<AdWhereInput>>;
  id?: Maybe<StringFilter>;
  status?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  publishedDate?: Maybe<DateTimeFilter>;
  creatorStepi?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  transactionType?: Maybe<StringFilter>;
  region?: Maybe<RegionRelationFilter>;
  regionId?: Maybe<StringFilter>;
  plan?: Maybe<AdPlanRelationFilter>;
  adPlanId?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  AdImage?: Maybe<AdImageListRelationFilter>;
  car?: Maybe<CarRelationFilter>;
  carId?: Maybe<StringFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type RegionRelationFilter = {
  is?: Maybe<RegionWhereInput>;
  isNot?: Maybe<RegionWhereInput>;
};

export type RegionWhereInput = {
  AND?: Maybe<Array<RegionWhereInput>>;
  OR?: Maybe<Array<RegionWhereInput>>;
  NOT?: Maybe<Array<RegionWhereInput>>;
  id?: Maybe<StringFilter>;
  regionName?: Maybe<StringFilter>;
  Ad?: Maybe<AdListRelationFilter>;
};

export type AdListRelationFilter = {
  every?: Maybe<AdWhereInput>;
  some?: Maybe<AdWhereInput>;
  none?: Maybe<AdWhereInput>;
};

export type AdPlanRelationFilter = {
  is?: Maybe<AdPlanWhereInput>;
  isNot?: Maybe<AdPlanWhereInput>;
};

export type AdPlanWhereInput = {
  AND?: Maybe<Array<AdPlanWhereInput>>;
  OR?: Maybe<Array<AdPlanWhereInput>>;
  NOT?: Maybe<Array<AdPlanWhereInput>>;
  id?: Maybe<StringFilter>;
  adPlanName?: Maybe<StringFilter>;
  adPlanPrice?: Maybe<IntFilter>;
  Ad?: Maybe<AdListRelationFilter>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  owner?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  Ad?: Maybe<AdListRelationFilter>;
};

export type AdImageListRelationFilter = {
  every?: Maybe<AdImageWhereInput>;
  some?: Maybe<AdImageWhereInput>;
  none?: Maybe<AdImageWhereInput>;
};

export type AdImageWhereInput = {
  AND?: Maybe<Array<AdImageWhereInput>>;
  OR?: Maybe<Array<AdImageWhereInput>>;
  NOT?: Maybe<Array<AdImageWhereInput>>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  ad?: Maybe<AdRelationFilter>;
  adId?: Maybe<StringFilter>;
};

export type AdRelationFilter = {
  is?: Maybe<AdWhereInput>;
  isNot?: Maybe<AdWhereInput>;
};

export type CarRelationFilter = {
  is?: Maybe<CarWhereInput>;
  isNot?: Maybe<CarWhereInput>;
};

export type CarWhereInput = {
  AND?: Maybe<Array<CarWhereInput>>;
  OR?: Maybe<Array<CarWhereInput>>;
  NOT?: Maybe<Array<CarWhereInput>>;
  id?: Maybe<StringFilter>;
  carTrim?: Maybe<StringFilter>;
  carYear?: Maybe<IntFilter>;
  carTransmission?: Maybe<StringFilter>;
  fuelType?: Maybe<StringFilter>;
  bodyType?: Maybe<StringFilter>;
  driveTrain?: Maybe<StringFilter>;
  sellerType?: Maybe<StringFilter>;
  Ad?: Maybe<AdRelationFilter>;
  carModel?: Maybe<CarModelRelationFilter>;
  carModelId?: Maybe<StringFilter>;
};

export type CarModelRelationFilter = {
  is?: Maybe<CarModelWhereInput>;
  isNot?: Maybe<CarModelWhereInput>;
};

export type CarModelWhereInput = {
  AND?: Maybe<Array<CarModelWhereInput>>;
  OR?: Maybe<Array<CarModelWhereInput>>;
  NOT?: Maybe<Array<CarModelWhereInput>>;
  id?: Maybe<StringFilter>;
  modelName?: Maybe<StringFilter>;
  make?: Maybe<CarMakeRelationFilter>;
  carMakeId?: Maybe<StringFilter>;
  Car?: Maybe<CarListRelationFilter>;
};

export type CarMakeRelationFilter = {
  is?: Maybe<CarMakeWhereInput>;
  isNot?: Maybe<CarMakeWhereInput>;
};

export type CarMakeWhereInput = {
  AND?: Maybe<Array<CarMakeWhereInput>>;
  OR?: Maybe<Array<CarMakeWhereInput>>;
  NOT?: Maybe<Array<CarMakeWhereInput>>;
  id?: Maybe<StringFilter>;
  makeName?: Maybe<StringFilter>;
  CarModel?: Maybe<CarModelListRelationFilter>;
};

export type CarModelListRelationFilter = {
  every?: Maybe<CarModelWhereInput>;
  some?: Maybe<CarModelWhereInput>;
  none?: Maybe<CarModelWhereInput>;
};

export type CarListRelationFilter = {
  every?: Maybe<CarWhereInput>;
  some?: Maybe<CarWhereInput>;
  none?: Maybe<CarWhereInput>;
};

export type AdOrderByInput = {
  id?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  publishedDate?: Maybe<SortOrder>;
  creatorStepi?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  transactionType?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
  adPlanId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  carId?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum AdScalarFieldEnum {
  Id = 'id',
  Status = 'status',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  PublishedDate = 'publishedDate',
  CreatorStepi = 'creatorStepi',
  Title = 'title',
  Description = 'description',
  Price = 'price',
  TransactionType = 'transactionType',
  RegionId = 'regionId',
  AdPlanId = 'adPlanId',
  UserId = 'userId',
  CarId = 'carId'
}

export type AggregateAd = {
  __typename?: 'AggregateAd';
  count?: Maybe<AdCountAggregate>;
  avg?: Maybe<AdAvgAggregate>;
  sum?: Maybe<AdSumAggregate>;
  min?: Maybe<AdMinAggregate>;
  max?: Maybe<AdMaxAggregate>;
};

export type AdCountAggregate = {
  __typename?: 'AdCountAggregate';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  publishedDate?: Maybe<Scalars['Int']>;
  creatorStepi: Scalars['Int'];
  title?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  price: Scalars['Int'];
  transactionType?: Maybe<Scalars['Int']>;
  regionId?: Maybe<Scalars['Int']>;
  adPlanId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  carId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type AdAvgAggregate = {
  __typename?: 'AdAvgAggregate';
  creatorStepi: Scalars['Float'];
  price: Scalars['Float'];
};

export type AdSumAggregate = {
  __typename?: 'AdSumAggregate';
  creatorStepi: Scalars['Int'];
  price: Scalars['Float'];
};

export type AdMinAggregate = {
  __typename?: 'AdMinAggregate';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  creatorStepi: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  transactionType?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['String']>;
  adPlanId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export type AdMaxAggregate = {
  __typename?: 'AdMaxAggregate';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  creatorStepi: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  transactionType?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['String']>;
  adPlanId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['String']>;
};

export type AdPlan = {
  __typename?: 'AdPlan';
  id: Scalars['String'];
  adPlanName: Scalars['String'];
  adPlanPrice: Scalars['Int'];
};

export type AdPlanWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AdPlanOrderByInput = {
  id?: Maybe<SortOrder>;
  adPlanName?: Maybe<SortOrder>;
  adPlanPrice?: Maybe<SortOrder>;
};

export enum AdPlanScalarFieldEnum {
  Id = 'id',
  AdPlanName = 'adPlanName',
  AdPlanPrice = 'adPlanPrice'
}

export type AggregateAdPlan = {
  __typename?: 'AggregateAdPlan';
  count?: Maybe<AdPlanCountAggregate>;
  avg?: Maybe<AdPlanAvgAggregate>;
  sum?: Maybe<AdPlanSumAggregate>;
  min?: Maybe<AdPlanMinAggregate>;
  max?: Maybe<AdPlanMaxAggregate>;
};

export type AdPlanCountAggregate = {
  __typename?: 'AdPlanCountAggregate';
  id?: Maybe<Scalars['Int']>;
  adPlanName?: Maybe<Scalars['Int']>;
  adPlanPrice: Scalars['Int'];
  _all: Scalars['Int'];
};

export type AdPlanAvgAggregate = {
  __typename?: 'AdPlanAvgAggregate';
  adPlanPrice: Scalars['Float'];
};

export type AdPlanSumAggregate = {
  __typename?: 'AdPlanSumAggregate';
  adPlanPrice: Scalars['Int'];
};

export type AdPlanMinAggregate = {
  __typename?: 'AdPlanMinAggregate';
  id?: Maybe<Scalars['String']>;
  adPlanName?: Maybe<Scalars['String']>;
  adPlanPrice: Scalars['Int'];
};

export type AdPlanMaxAggregate = {
  __typename?: 'AdPlanMaxAggregate';
  id?: Maybe<Scalars['String']>;
  adPlanName?: Maybe<Scalars['String']>;
  adPlanPrice: Scalars['Int'];
};

export type CarMake = {
  __typename?: 'CarMake';
  id: Scalars['String'];
  makeName: Scalars['String'];
};

export type CarMakeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CarMakeOrderByInput = {
  id?: Maybe<SortOrder>;
  makeName?: Maybe<SortOrder>;
};

export enum CarMakeScalarFieldEnum {
  Id = 'id',
  MakeName = 'makeName'
}

export type AggregateCarMake = {
  __typename?: 'AggregateCarMake';
  count?: Maybe<CarMakeCountAggregate>;
  min?: Maybe<CarMakeMinAggregate>;
  max?: Maybe<CarMakeMaxAggregate>;
};

export type CarMakeCountAggregate = {
  __typename?: 'CarMakeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  makeName?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CarMakeMinAggregate = {
  __typename?: 'CarMakeMinAggregate';
  id?: Maybe<Scalars['String']>;
  makeName?: Maybe<Scalars['String']>;
};

export type CarMakeMaxAggregate = {
  __typename?: 'CarMakeMaxAggregate';
  id?: Maybe<Scalars['String']>;
  makeName?: Maybe<Scalars['String']>;
};

export type CarModel = {
  __typename?: 'CarModel';
  id: Scalars['String'];
  modelName: Scalars['String'];
  carMakeId: Scalars['String'];
};

export type CarModelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CarModelOrderByInput = {
  id?: Maybe<SortOrder>;
  modelName?: Maybe<SortOrder>;
  carMakeId?: Maybe<SortOrder>;
};

export enum CarModelScalarFieldEnum {
  Id = 'id',
  ModelName = 'modelName',
  CarMakeId = 'carMakeId'
}

export type AggregateCarModel = {
  __typename?: 'AggregateCarModel';
  count?: Maybe<CarModelCountAggregate>;
  min?: Maybe<CarModelMinAggregate>;
  max?: Maybe<CarModelMaxAggregate>;
};

export type CarModelCountAggregate = {
  __typename?: 'CarModelCountAggregate';
  id?: Maybe<Scalars['Int']>;
  modelName?: Maybe<Scalars['Int']>;
  carMakeId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type CarModelMinAggregate = {
  __typename?: 'CarModelMinAggregate';
  id?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  carMakeId?: Maybe<Scalars['String']>;
};

export type CarModelMaxAggregate = {
  __typename?: 'CarModelMaxAggregate';
  id?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  carMakeId?: Maybe<Scalars['String']>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['String'];
  regionName: Scalars['String'];
};

export type RegionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type RegionOrderByInput = {
  id?: Maybe<SortOrder>;
  regionName?: Maybe<SortOrder>;
};

export enum RegionScalarFieldEnum {
  Id = 'id',
  RegionName = 'regionName'
}

export type AggregateRegion = {
  __typename?: 'AggregateRegion';
  count?: Maybe<RegionCountAggregate>;
  min?: Maybe<RegionMinAggregate>;
  max?: Maybe<RegionMaxAggregate>;
};

export type RegionCountAggregate = {
  __typename?: 'RegionCountAggregate';
  id?: Maybe<Scalars['Int']>;
  regionName?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type RegionMinAggregate = {
  __typename?: 'RegionMinAggregate';
  id?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
};

export type RegionMaxAggregate = {
  __typename?: 'RegionMaxAggregate';
  id?: Maybe<Scalars['String']>;
  regionName?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  owner: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  owner?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Owner = 'owner',
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type MeResponse = {
  __typename?: 'MeResponse';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  deleteAd?: Maybe<Ad>;
  updateAd?: Maybe<Ad>;
  deleteManyAd: BatchPayload;
  updateManyAd: BatchPayload;
  upsertAd: Ad;
  createAdPlan: AdPlan;
  deleteAdPlan?: Maybe<AdPlan>;
  updateAdPlan?: Maybe<AdPlan>;
  deleteManyAdPlan: BatchPayload;
  updateManyAdPlan: BatchPayload;
  upsertAdPlan: AdPlan;
  createCarMake: CarMake;
  deleteCarMake?: Maybe<CarMake>;
  updateCarMake?: Maybe<CarMake>;
  deleteManyCarMake: BatchPayload;
  updateManyCarMake: BatchPayload;
  upsertCarMake: CarMake;
  createCarModel: CarModel;
  deleteCarModel?: Maybe<CarModel>;
  updateCarModel?: Maybe<CarModel>;
  deleteManyCarModel: BatchPayload;
  updateManyCarModel: BatchPayload;
  upsertCarModel: CarModel;
  createRegion: Region;
  deleteRegion?: Maybe<Region>;
  updateRegion?: Maybe<Region>;
  deleteManyRegion: BatchPayload;
  updateManyRegion: BatchPayload;
  upsertRegion: Region;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  updateManyUser: BatchPayload;
  upsertUser: User;
  register: AuthResponse;
  login: AuthResponse;
  verifyEmail: AuthResponse;
  resetVerifyEmailToken: AuthResponse;
  requestResetPassword: AuthResponse;
  resetPassword: AuthResponse;
};


export type MutationCreateAdArgs = {
  data: AdCreateInput;
};


export type MutationDeleteAdArgs = {
  where: AdWhereUniqueInput;
};


export type MutationUpdateAdArgs = {
  data: AdUpdateInput;
  where: AdWhereUniqueInput;
};


export type MutationDeleteManyAdArgs = {
  where?: Maybe<AdWhereInput>;
};


export type MutationUpdateManyAdArgs = {
  data: AdUpdateManyMutationInput;
  where?: Maybe<AdWhereInput>;
};


export type MutationUpsertAdArgs = {
  where: AdWhereUniqueInput;
  create: AdCreateInput;
  update: AdUpdateInput;
};


export type MutationCreateAdPlanArgs = {
  data: AdPlanCreateInput;
};


export type MutationDeleteAdPlanArgs = {
  where: AdPlanWhereUniqueInput;
};


export type MutationUpdateAdPlanArgs = {
  data: AdPlanUpdateInput;
  where: AdPlanWhereUniqueInput;
};


export type MutationDeleteManyAdPlanArgs = {
  where?: Maybe<AdPlanWhereInput>;
};


export type MutationUpdateManyAdPlanArgs = {
  data: AdPlanUpdateManyMutationInput;
  where?: Maybe<AdPlanWhereInput>;
};


export type MutationUpsertAdPlanArgs = {
  where: AdPlanWhereUniqueInput;
  create: AdPlanCreateInput;
  update: AdPlanUpdateInput;
};


export type MutationCreateCarMakeArgs = {
  data: CarMakeCreateInput;
};


export type MutationDeleteCarMakeArgs = {
  where: CarMakeWhereUniqueInput;
};


export type MutationUpdateCarMakeArgs = {
  data: CarMakeUpdateInput;
  where: CarMakeWhereUniqueInput;
};


export type MutationDeleteManyCarMakeArgs = {
  where?: Maybe<CarMakeWhereInput>;
};


export type MutationUpdateManyCarMakeArgs = {
  data: CarMakeUpdateManyMutationInput;
  where?: Maybe<CarMakeWhereInput>;
};


export type MutationUpsertCarMakeArgs = {
  where: CarMakeWhereUniqueInput;
  create: CarMakeCreateInput;
  update: CarMakeUpdateInput;
};


export type MutationCreateCarModelArgs = {
  data: CarModelCreateInput;
};


export type MutationDeleteCarModelArgs = {
  where: CarModelWhereUniqueInput;
};


export type MutationUpdateCarModelArgs = {
  data: CarModelUpdateInput;
  where: CarModelWhereUniqueInput;
};


export type MutationDeleteManyCarModelArgs = {
  where?: Maybe<CarModelWhereInput>;
};


export type MutationUpdateManyCarModelArgs = {
  data: CarModelUpdateManyMutationInput;
  where?: Maybe<CarModelWhereInput>;
};


export type MutationUpsertCarModelArgs = {
  where: CarModelWhereUniqueInput;
  create: CarModelCreateInput;
  update: CarModelUpdateInput;
};


export type MutationCreateRegionArgs = {
  data: RegionCreateInput;
};


export type MutationDeleteRegionArgs = {
  where: RegionWhereUniqueInput;
};


export type MutationUpdateRegionArgs = {
  data: RegionUpdateInput;
  where: RegionWhereUniqueInput;
};


export type MutationDeleteManyRegionArgs = {
  where?: Maybe<RegionWhereInput>;
};


export type MutationUpdateManyRegionArgs = {
  data: RegionUpdateManyMutationInput;
  where?: Maybe<RegionWhereInput>;
};


export type MutationUpsertRegionArgs = {
  where: RegionWhereUniqueInput;
  create: RegionCreateInput;
  update: RegionUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationResetVerifyEmailTokenArgs = {
  email: Scalars['String'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  newPasswordConfirm: Scalars['String'];
  token: Scalars['String'];
};

export type AdCreateInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  region: RegionCreateOneWithoutAdInput;
  plan: AdPlanCreateOneWithoutAdInput;
  user: UserCreateOneWithoutAdInput;
  AdImage?: Maybe<AdImageCreateManyWithoutAdInput>;
  car: CarCreateOneWithoutAdInput;
};

export type RegionCreateOneWithoutAdInput = {
  create?: Maybe<RegionCreateWithoutAdInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutAdInput>;
};

export type RegionCreateWithoutAdInput = {
  id?: Maybe<Scalars['String']>;
  regionName: Scalars['String'];
};

export type RegionCreateOrConnectWithoutAdInput = {
  where: RegionWhereUniqueInput;
  create: RegionCreateWithoutAdInput;
};

export type AdPlanCreateOneWithoutAdInput = {
  create?: Maybe<AdPlanCreateWithoutAdInput>;
  connect?: Maybe<AdPlanWhereUniqueInput>;
  connectOrCreate?: Maybe<AdPlanCreateOrConnectWithoutAdInput>;
};

export type AdPlanCreateWithoutAdInput = {
  id?: Maybe<Scalars['String']>;
  adPlanName: Scalars['String'];
  adPlanPrice: Scalars['Int'];
};

export type AdPlanCreateOrConnectWithoutAdInput = {
  where: AdPlanWhereUniqueInput;
  create: AdPlanCreateWithoutAdInput;
};

export type UserCreateOneWithoutAdInput = {
  create?: Maybe<UserCreateWithoutAdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAdInput>;
};

export type UserCreateWithoutAdInput = {
  id?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserCreateOrConnectWithoutAdInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAdInput;
};

export type AdImageCreateManyWithoutAdInput = {
  create?: Maybe<Array<AdImageCreateWithoutAdInput>>;
  connect?: Maybe<Array<AdImageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AdImageCreateOrConnectWithoutadInput>>;
};

export type AdImageCreateWithoutAdInput = {
  id?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type AdImageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AdImageCreateOrConnectWithoutadInput = {
  where: AdImageWhereUniqueInput;
  create: AdImageCreateWithoutAdInput;
};

export type CarCreateOneWithoutAdInput = {
  create?: Maybe<CarCreateWithoutAdInput>;
  connect?: Maybe<CarWhereUniqueInput>;
  connectOrCreate?: Maybe<CarCreateOrConnectWithoutAdInput>;
};

export type CarCreateWithoutAdInput = {
  id?: Maybe<Scalars['String']>;
  carTrim: Scalars['String'];
  carYear: Scalars['Int'];
  carTransmission: Scalars['String'];
  fuelType: Scalars['String'];
  bodyType: Scalars['String'];
  driveTrain: Scalars['String'];
  sellerType: Scalars['String'];
  carModel: CarModelCreateOneWithoutCarInput;
};

export type CarModelCreateOneWithoutCarInput = {
  create?: Maybe<CarModelCreateWithoutCarInput>;
  connect?: Maybe<CarModelWhereUniqueInput>;
  connectOrCreate?: Maybe<CarModelCreateOrConnectWithoutCarInput>;
};

export type CarModelCreateWithoutCarInput = {
  id?: Maybe<Scalars['String']>;
  modelName: Scalars['String'];
  make: CarMakeCreateOneWithoutCarModelInput;
};

export type CarMakeCreateOneWithoutCarModelInput = {
  create?: Maybe<CarMakeCreateWithoutCarModelInput>;
  connect?: Maybe<CarMakeWhereUniqueInput>;
  connectOrCreate?: Maybe<CarMakeCreateOrConnectWithoutCarModelInput>;
};

export type CarMakeCreateWithoutCarModelInput = {
  id?: Maybe<Scalars['String']>;
  makeName: Scalars['String'];
};

export type CarMakeCreateOrConnectWithoutCarModelInput = {
  where: CarMakeWhereUniqueInput;
  create: CarMakeCreateWithoutCarModelInput;
};

export type CarModelCreateOrConnectWithoutCarInput = {
  where: CarModelWhereUniqueInput;
  create: CarModelCreateWithoutCarInput;
};

export type CarWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CarCreateOrConnectWithoutAdInput = {
  where: CarWhereUniqueInput;
  create: CarCreateWithoutAdInput;
};

export type AdUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutAdInput>;
  plan?: Maybe<AdPlanUpdateOneRequiredWithoutAdInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  AdImage?: Maybe<AdImageUpdateManyWithoutAdInput>;
  car?: Maybe<CarUpdateOneRequiredWithoutAdInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type RegionUpdateOneRequiredWithoutAdInput = {
  create?: Maybe<RegionCreateWithoutAdInput>;
  connect?: Maybe<RegionWhereUniqueInput>;
  update?: Maybe<RegionUpdateWithoutAdInput>;
  upsert?: Maybe<RegionUpsertWithoutAdInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutAdInput>;
};

export type RegionUpdateWithoutAdInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regionName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RegionUpsertWithoutAdInput = {
  update: RegionUpdateWithoutAdInput;
  create: RegionCreateWithoutAdInput;
};

export type AdPlanUpdateOneRequiredWithoutAdInput = {
  create?: Maybe<AdPlanCreateWithoutAdInput>;
  connect?: Maybe<AdPlanWhereUniqueInput>;
  update?: Maybe<AdPlanUpdateWithoutAdInput>;
  upsert?: Maybe<AdPlanUpsertWithoutAdInput>;
  connectOrCreate?: Maybe<AdPlanCreateOrConnectWithoutAdInput>;
};

export type AdPlanUpdateWithoutAdInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanName?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanPrice?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AdPlanUpsertWithoutAdInput = {
  update: AdPlanUpdateWithoutAdInput;
  create: AdPlanCreateWithoutAdInput;
};

export type UserUpdateOneRequiredWithoutAdInput = {
  create?: Maybe<UserCreateWithoutAdInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutAdInput>;
  upsert?: Maybe<UserUpsertWithoutAdInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAdInput>;
};

export type UserUpdateWithoutAdInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdInput = {
  update: UserUpdateWithoutAdInput;
  create: UserCreateWithoutAdInput;
};

export type AdImageUpdateManyWithoutAdInput = {
  create?: Maybe<Array<AdImageCreateWithoutAdInput>>;
  connect?: Maybe<Array<AdImageWhereUniqueInput>>;
  set?: Maybe<Array<AdImageWhereUniqueInput>>;
  disconnect?: Maybe<Array<AdImageWhereUniqueInput>>;
  delete?: Maybe<Array<AdImageWhereUniqueInput>>;
  update?: Maybe<Array<AdImageUpdateWithWhereUniqueWithoutAdInput>>;
  updateMany?: Maybe<Array<AdImageUpdateManyWithWhereWithoutAdInput>>;
  deleteMany?: Maybe<Array<AdImageScalarWhereInput>>;
  upsert?: Maybe<Array<AdImageUpsertWithWhereUniqueWithoutAdInput>>;
  connectOrCreate?: Maybe<Array<AdImageCreateOrConnectWithoutadInput>>;
};

export type AdImageUpdateWithWhereUniqueWithoutAdInput = {
  where: AdImageWhereUniqueInput;
  data: AdImageUpdateWithoutAdInput;
};

export type AdImageUpdateWithoutAdInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdImageUpdateManyWithWhereWithoutAdInput = {
  where: AdImageScalarWhereInput;
  data: AdImageUpdateManyMutationInput;
};

export type AdImageScalarWhereInput = {
  AND?: Maybe<Array<AdImageScalarWhereInput>>;
  OR?: Maybe<Array<AdImageScalarWhereInput>>;
  NOT?: Maybe<Array<AdImageScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  adId?: Maybe<StringFilter>;
};

export type AdImageUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdImageUpsertWithWhereUniqueWithoutAdInput = {
  where: AdImageWhereUniqueInput;
  update: AdImageUpdateWithoutAdInput;
  create: AdImageCreateWithoutAdInput;
};

export type CarUpdateOneRequiredWithoutAdInput = {
  create?: Maybe<CarCreateWithoutAdInput>;
  connect?: Maybe<CarWhereUniqueInput>;
  update?: Maybe<CarUpdateWithoutAdInput>;
  upsert?: Maybe<CarUpsertWithoutAdInput>;
  connectOrCreate?: Maybe<CarCreateOrConnectWithoutAdInput>;
};

export type CarUpdateWithoutAdInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  carTrim?: Maybe<StringFieldUpdateOperationsInput>;
  carYear?: Maybe<IntFieldUpdateOperationsInput>;
  carTransmission?: Maybe<StringFieldUpdateOperationsInput>;
  fuelType?: Maybe<StringFieldUpdateOperationsInput>;
  bodyType?: Maybe<StringFieldUpdateOperationsInput>;
  driveTrain?: Maybe<StringFieldUpdateOperationsInput>;
  sellerType?: Maybe<StringFieldUpdateOperationsInput>;
  carModel?: Maybe<CarModelUpdateOneRequiredWithoutCarInput>;
};

export type CarModelUpdateOneRequiredWithoutCarInput = {
  create?: Maybe<CarModelCreateWithoutCarInput>;
  connect?: Maybe<CarModelWhereUniqueInput>;
  update?: Maybe<CarModelUpdateWithoutCarInput>;
  upsert?: Maybe<CarModelUpsertWithoutCarInput>;
  connectOrCreate?: Maybe<CarModelCreateOrConnectWithoutCarInput>;
};

export type CarModelUpdateWithoutCarInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  modelName?: Maybe<StringFieldUpdateOperationsInput>;
  make?: Maybe<CarMakeUpdateOneRequiredWithoutCarModelInput>;
};

export type CarMakeUpdateOneRequiredWithoutCarModelInput = {
  create?: Maybe<CarMakeCreateWithoutCarModelInput>;
  connect?: Maybe<CarMakeWhereUniqueInput>;
  update?: Maybe<CarMakeUpdateWithoutCarModelInput>;
  upsert?: Maybe<CarMakeUpsertWithoutCarModelInput>;
  connectOrCreate?: Maybe<CarMakeCreateOrConnectWithoutCarModelInput>;
};

export type CarMakeUpdateWithoutCarModelInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  makeName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CarMakeUpsertWithoutCarModelInput = {
  update: CarMakeUpdateWithoutCarModelInput;
  create: CarMakeCreateWithoutCarModelInput;
};

export type CarModelUpsertWithoutCarInput = {
  update: CarModelUpdateWithoutCarInput;
  create: CarModelCreateWithoutCarInput;
};

export type CarUpsertWithoutAdInput = {
  update: CarUpdateWithoutAdInput;
  create: CarCreateWithoutAdInput;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type AdUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AdPlanCreateInput = {
  id?: Maybe<Scalars['String']>;
  adPlanName: Scalars['String'];
  adPlanPrice: Scalars['Int'];
  Ad?: Maybe<AdCreateManyWithoutPlanInput>;
};

export type AdCreateManyWithoutPlanInput = {
  create?: Maybe<Array<AdCreateWithoutPlanInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutplanInput>>;
};

export type AdCreateWithoutPlanInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  region: RegionCreateOneWithoutAdInput;
  user: UserCreateOneWithoutAdInput;
  AdImage?: Maybe<AdImageCreateManyWithoutAdInput>;
  car: CarCreateOneWithoutAdInput;
};

export type AdCreateOrConnectWithoutplanInput = {
  where: AdWhereUniqueInput;
  create: AdCreateWithoutPlanInput;
};

export type AdPlanUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanName?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanPrice?: Maybe<IntFieldUpdateOperationsInput>;
  Ad?: Maybe<AdUpdateManyWithoutPlanInput>;
};

export type AdUpdateManyWithoutPlanInput = {
  create?: Maybe<Array<AdCreateWithoutPlanInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  set?: Maybe<Array<AdWhereUniqueInput>>;
  disconnect?: Maybe<Array<AdWhereUniqueInput>>;
  delete?: Maybe<Array<AdWhereUniqueInput>>;
  update?: Maybe<Array<AdUpdateWithWhereUniqueWithoutPlanInput>>;
  updateMany?: Maybe<Array<AdUpdateManyWithWhereWithoutPlanInput>>;
  deleteMany?: Maybe<Array<AdScalarWhereInput>>;
  upsert?: Maybe<Array<AdUpsertWithWhereUniqueWithoutPlanInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutplanInput>>;
};

export type AdUpdateWithWhereUniqueWithoutPlanInput = {
  where: AdWhereUniqueInput;
  data: AdUpdateWithoutPlanInput;
};

export type AdUpdateWithoutPlanInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutAdInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  AdImage?: Maybe<AdImageUpdateManyWithoutAdInput>;
  car?: Maybe<CarUpdateOneRequiredWithoutAdInput>;
};

export type AdUpdateManyWithWhereWithoutPlanInput = {
  where: AdScalarWhereInput;
  data: AdUpdateManyMutationInput;
};

export type AdScalarWhereInput = {
  AND?: Maybe<Array<AdScalarWhereInput>>;
  OR?: Maybe<Array<AdScalarWhereInput>>;
  NOT?: Maybe<Array<AdScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  status?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  publishedDate?: Maybe<DateTimeFilter>;
  creatorStepi?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  transactionType?: Maybe<StringFilter>;
  regionId?: Maybe<StringFilter>;
  adPlanId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  carId?: Maybe<StringFilter>;
};

export type AdUpsertWithWhereUniqueWithoutPlanInput = {
  where: AdWhereUniqueInput;
  update: AdUpdateWithoutPlanInput;
  create: AdCreateWithoutPlanInput;
};

export type AdPlanUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanName?: Maybe<StringFieldUpdateOperationsInput>;
  adPlanPrice?: Maybe<IntFieldUpdateOperationsInput>;
};

export type CarMakeCreateInput = {
  id?: Maybe<Scalars['String']>;
  makeName: Scalars['String'];
  CarModel?: Maybe<CarModelCreateManyWithoutMakeInput>;
};

export type CarModelCreateManyWithoutMakeInput = {
  create?: Maybe<Array<CarModelCreateWithoutMakeInput>>;
  connect?: Maybe<Array<CarModelWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CarModelCreateOrConnectWithoutmakeInput>>;
};

export type CarModelCreateWithoutMakeInput = {
  id?: Maybe<Scalars['String']>;
  modelName: Scalars['String'];
  Car?: Maybe<CarCreateManyWithoutCarModelInput>;
};

export type CarCreateManyWithoutCarModelInput = {
  create?: Maybe<Array<CarCreateWithoutCarModelInput>>;
  connect?: Maybe<Array<CarWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CarCreateOrConnectWithoutcarModelInput>>;
};

export type CarCreateWithoutCarModelInput = {
  id?: Maybe<Scalars['String']>;
  carTrim: Scalars['String'];
  carYear: Scalars['Int'];
  carTransmission: Scalars['String'];
  fuelType: Scalars['String'];
  bodyType: Scalars['String'];
  driveTrain: Scalars['String'];
  sellerType: Scalars['String'];
  Ad?: Maybe<AdCreateOneWithoutCarInput>;
};

export type AdCreateOneWithoutCarInput = {
  create?: Maybe<AdCreateWithoutCarInput>;
  connect?: Maybe<AdWhereUniqueInput>;
  connectOrCreate?: Maybe<AdCreateOrConnectWithoutcarInput>;
};

export type AdCreateWithoutCarInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  region: RegionCreateOneWithoutAdInput;
  plan: AdPlanCreateOneWithoutAdInput;
  user: UserCreateOneWithoutAdInput;
  AdImage?: Maybe<AdImageCreateManyWithoutAdInput>;
};

export type AdCreateOrConnectWithoutcarInput = {
  where: AdWhereUniqueInput;
  create: AdCreateWithoutCarInput;
};

export type CarCreateOrConnectWithoutcarModelInput = {
  where: CarWhereUniqueInput;
  create: CarCreateWithoutCarModelInput;
};

export type CarModelCreateOrConnectWithoutmakeInput = {
  where: CarModelWhereUniqueInput;
  create: CarModelCreateWithoutMakeInput;
};

export type CarMakeUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  makeName?: Maybe<StringFieldUpdateOperationsInput>;
  CarModel?: Maybe<CarModelUpdateManyWithoutMakeInput>;
};

export type CarModelUpdateManyWithoutMakeInput = {
  create?: Maybe<Array<CarModelCreateWithoutMakeInput>>;
  connect?: Maybe<Array<CarModelWhereUniqueInput>>;
  set?: Maybe<Array<CarModelWhereUniqueInput>>;
  disconnect?: Maybe<Array<CarModelWhereUniqueInput>>;
  delete?: Maybe<Array<CarModelWhereUniqueInput>>;
  update?: Maybe<Array<CarModelUpdateWithWhereUniqueWithoutMakeInput>>;
  updateMany?: Maybe<Array<CarModelUpdateManyWithWhereWithoutMakeInput>>;
  deleteMany?: Maybe<Array<CarModelScalarWhereInput>>;
  upsert?: Maybe<Array<CarModelUpsertWithWhereUniqueWithoutMakeInput>>;
  connectOrCreate?: Maybe<Array<CarModelCreateOrConnectWithoutmakeInput>>;
};

export type CarModelUpdateWithWhereUniqueWithoutMakeInput = {
  where: CarModelWhereUniqueInput;
  data: CarModelUpdateWithoutMakeInput;
};

export type CarModelUpdateWithoutMakeInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  modelName?: Maybe<StringFieldUpdateOperationsInput>;
  Car?: Maybe<CarUpdateManyWithoutCarModelInput>;
};

export type CarUpdateManyWithoutCarModelInput = {
  create?: Maybe<Array<CarCreateWithoutCarModelInput>>;
  connect?: Maybe<Array<CarWhereUniqueInput>>;
  set?: Maybe<Array<CarWhereUniqueInput>>;
  disconnect?: Maybe<Array<CarWhereUniqueInput>>;
  delete?: Maybe<Array<CarWhereUniqueInput>>;
  update?: Maybe<Array<CarUpdateWithWhereUniqueWithoutCarModelInput>>;
  updateMany?: Maybe<Array<CarUpdateManyWithWhereWithoutCarModelInput>>;
  deleteMany?: Maybe<Array<CarScalarWhereInput>>;
  upsert?: Maybe<Array<CarUpsertWithWhereUniqueWithoutCarModelInput>>;
  connectOrCreate?: Maybe<Array<CarCreateOrConnectWithoutcarModelInput>>;
};

export type CarUpdateWithWhereUniqueWithoutCarModelInput = {
  where: CarWhereUniqueInput;
  data: CarUpdateWithoutCarModelInput;
};

export type CarUpdateWithoutCarModelInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  carTrim?: Maybe<StringFieldUpdateOperationsInput>;
  carYear?: Maybe<IntFieldUpdateOperationsInput>;
  carTransmission?: Maybe<StringFieldUpdateOperationsInput>;
  fuelType?: Maybe<StringFieldUpdateOperationsInput>;
  bodyType?: Maybe<StringFieldUpdateOperationsInput>;
  driveTrain?: Maybe<StringFieldUpdateOperationsInput>;
  sellerType?: Maybe<StringFieldUpdateOperationsInput>;
  Ad?: Maybe<AdUpdateOneWithoutCarInput>;
};

export type AdUpdateOneWithoutCarInput = {
  create?: Maybe<AdCreateWithoutCarInput>;
  connect?: Maybe<AdWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AdUpdateWithoutCarInput>;
  upsert?: Maybe<AdUpsertWithoutCarInput>;
  connectOrCreate?: Maybe<AdCreateOrConnectWithoutcarInput>;
};

export type AdUpdateWithoutCarInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutAdInput>;
  plan?: Maybe<AdPlanUpdateOneRequiredWithoutAdInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  AdImage?: Maybe<AdImageUpdateManyWithoutAdInput>;
};

export type AdUpsertWithoutCarInput = {
  update: AdUpdateWithoutCarInput;
  create: AdCreateWithoutCarInput;
};

export type CarUpdateManyWithWhereWithoutCarModelInput = {
  where: CarScalarWhereInput;
  data: CarUpdateManyMutationInput;
};

export type CarScalarWhereInput = {
  AND?: Maybe<Array<CarScalarWhereInput>>;
  OR?: Maybe<Array<CarScalarWhereInput>>;
  NOT?: Maybe<Array<CarScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  carTrim?: Maybe<StringFilter>;
  carYear?: Maybe<IntFilter>;
  carTransmission?: Maybe<StringFilter>;
  fuelType?: Maybe<StringFilter>;
  bodyType?: Maybe<StringFilter>;
  driveTrain?: Maybe<StringFilter>;
  sellerType?: Maybe<StringFilter>;
  carModelId?: Maybe<StringFilter>;
};

export type CarUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  carTrim?: Maybe<StringFieldUpdateOperationsInput>;
  carYear?: Maybe<IntFieldUpdateOperationsInput>;
  carTransmission?: Maybe<StringFieldUpdateOperationsInput>;
  fuelType?: Maybe<StringFieldUpdateOperationsInput>;
  bodyType?: Maybe<StringFieldUpdateOperationsInput>;
  driveTrain?: Maybe<StringFieldUpdateOperationsInput>;
  sellerType?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CarUpsertWithWhereUniqueWithoutCarModelInput = {
  where: CarWhereUniqueInput;
  update: CarUpdateWithoutCarModelInput;
  create: CarCreateWithoutCarModelInput;
};

export type CarModelUpdateManyWithWhereWithoutMakeInput = {
  where: CarModelScalarWhereInput;
  data: CarModelUpdateManyMutationInput;
};

export type CarModelScalarWhereInput = {
  AND?: Maybe<Array<CarModelScalarWhereInput>>;
  OR?: Maybe<Array<CarModelScalarWhereInput>>;
  NOT?: Maybe<Array<CarModelScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  modelName?: Maybe<StringFilter>;
  carMakeId?: Maybe<StringFilter>;
};

export type CarModelUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  modelName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CarModelUpsertWithWhereUniqueWithoutMakeInput = {
  where: CarModelWhereUniqueInput;
  update: CarModelUpdateWithoutMakeInput;
  create: CarModelCreateWithoutMakeInput;
};

export type CarMakeUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  makeName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CarModelCreateInput = {
  id?: Maybe<Scalars['String']>;
  modelName: Scalars['String'];
  make: CarMakeCreateOneWithoutCarModelInput;
  Car?: Maybe<CarCreateManyWithoutCarModelInput>;
};

export type CarModelUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  modelName?: Maybe<StringFieldUpdateOperationsInput>;
  make?: Maybe<CarMakeUpdateOneRequiredWithoutCarModelInput>;
  Car?: Maybe<CarUpdateManyWithoutCarModelInput>;
};

export type RegionCreateInput = {
  id?: Maybe<Scalars['String']>;
  regionName: Scalars['String'];
  Ad?: Maybe<AdCreateManyWithoutRegionInput>;
};

export type AdCreateManyWithoutRegionInput = {
  create?: Maybe<Array<AdCreateWithoutRegionInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutregionInput>>;
};

export type AdCreateWithoutRegionInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  plan: AdPlanCreateOneWithoutAdInput;
  user: UserCreateOneWithoutAdInput;
  AdImage?: Maybe<AdImageCreateManyWithoutAdInput>;
  car: CarCreateOneWithoutAdInput;
};

export type AdCreateOrConnectWithoutregionInput = {
  where: AdWhereUniqueInput;
  create: AdCreateWithoutRegionInput;
};

export type RegionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regionName?: Maybe<StringFieldUpdateOperationsInput>;
  Ad?: Maybe<AdUpdateManyWithoutRegionInput>;
};

export type AdUpdateManyWithoutRegionInput = {
  create?: Maybe<Array<AdCreateWithoutRegionInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  set?: Maybe<Array<AdWhereUniqueInput>>;
  disconnect?: Maybe<Array<AdWhereUniqueInput>>;
  delete?: Maybe<Array<AdWhereUniqueInput>>;
  update?: Maybe<Array<AdUpdateWithWhereUniqueWithoutRegionInput>>;
  updateMany?: Maybe<Array<AdUpdateManyWithWhereWithoutRegionInput>>;
  deleteMany?: Maybe<Array<AdScalarWhereInput>>;
  upsert?: Maybe<Array<AdUpsertWithWhereUniqueWithoutRegionInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutregionInput>>;
};

export type AdUpdateWithWhereUniqueWithoutRegionInput = {
  where: AdWhereUniqueInput;
  data: AdUpdateWithoutRegionInput;
};

export type AdUpdateWithoutRegionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
  plan?: Maybe<AdPlanUpdateOneRequiredWithoutAdInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAdInput>;
  AdImage?: Maybe<AdImageUpdateManyWithoutAdInput>;
  car?: Maybe<CarUpdateOneRequiredWithoutAdInput>;
};

export type AdUpdateManyWithWhereWithoutRegionInput = {
  where: AdScalarWhereInput;
  data: AdUpdateManyMutationInput;
};

export type AdUpsertWithWhereUniqueWithoutRegionInput = {
  where: AdWhereUniqueInput;
  update: AdUpdateWithoutRegionInput;
  create: AdCreateWithoutRegionInput;
};

export type RegionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regionName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  Ad?: Maybe<AdCreateManyWithoutUserInput>;
};

export type AdCreateManyWithoutUserInput = {
  create?: Maybe<Array<AdCreateWithoutUserInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutuserInput>>;
};

export type AdCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedDate: Scalars['DateTime'];
  creatorStepi: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  transactionType: Scalars['String'];
  region: RegionCreateOneWithoutAdInput;
  plan: AdPlanCreateOneWithoutAdInput;
  AdImage?: Maybe<AdImageCreateManyWithoutAdInput>;
  car: CarCreateOneWithoutAdInput;
};

export type AdCreateOrConnectWithoutuserInput = {
  where: AdWhereUniqueInput;
  create: AdCreateWithoutUserInput;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  Ad?: Maybe<AdUpdateManyWithoutUserInput>;
};

export type AdUpdateManyWithoutUserInput = {
  create?: Maybe<Array<AdCreateWithoutUserInput>>;
  connect?: Maybe<Array<AdWhereUniqueInput>>;
  set?: Maybe<Array<AdWhereUniqueInput>>;
  disconnect?: Maybe<Array<AdWhereUniqueInput>>;
  delete?: Maybe<Array<AdWhereUniqueInput>>;
  update?: Maybe<Array<AdUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AdUpdateManyWithWhereWithoutUserInput>>;
  deleteMany?: Maybe<Array<AdScalarWhereInput>>;
  upsert?: Maybe<Array<AdUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<AdCreateOrConnectWithoutuserInput>>;
};

export type AdUpdateWithWhereUniqueWithoutUserInput = {
  where: AdWhereUniqueInput;
  data: AdUpdateWithoutUserInput;
};

export type AdUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  publishedDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorStepi?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  transactionType?: Maybe<StringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutAdInput>;
  plan?: Maybe<AdPlanUpdateOneRequiredWithoutAdInput>;
  AdImage?: Maybe<AdImageUpdateManyWithoutAdInput>;
  car?: Maybe<CarUpdateOneRequiredWithoutAdInput>;
};

export type AdUpdateManyWithWhereWithoutUserInput = {
  where: AdScalarWhereInput;
  data: AdUpdateManyMutationInput;
};

export type AdUpsertWithWhereUniqueWithoutUserInput = {
  where: AdWhereUniqueInput;
  update: AdUpdateWithoutUserInput;
  create: AdCreateWithoutUserInput;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
};

export type RegularAdFragment = (
  { __typename?: 'Ad' }
  & Pick<Ad, 'id' | 'status' | 'createdAt' | 'updatedAt' | 'publishedDate' | 'creatorStepi' | 'title' | 'description' | 'price' | 'transactionType' | 'regionId' | 'adPlanId' | 'userId' | 'carId'>
);

export type RegularCarMakeFragment = (
  { __typename?: 'CarMake' }
  & Pick<CarMake, 'id' | 'makeName'>
);

export type RegularCarModelFragment = (
  { __typename?: 'CarModel' }
  & Pick<CarModel, 'id' | 'modelName' | 'carMakeId'>
);

export type RegularMeFragment = (
  { __typename?: 'MeResponse' }
  & Pick<MeResponse, 'id' | 'email' | 'role' | 'firstName' | 'lastName'>
);

export type RegularRegionFragment = (
  { __typename?: 'Region' }
  & Pick<Region, 'id' | 'regionName'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'owner' | 'firstName' | 'lastName'>
);

export type CreateAdMutationVariables = Exact<{
  data: AdCreateInput;
}>;


export type CreateAdMutation = (
  { __typename?: 'Mutation' }
  & { createAd: (
    { __typename?: 'Ad' }
    & RegularAdFragment
  ) }
);

export type UpdateAdMutationVariables = Exact<{
  data: AdUpdateInput;
  where: AdWhereUniqueInput;
}>;


export type UpdateAdMutation = (
  { __typename?: 'Mutation' }
  & { updateAd?: Maybe<(
    { __typename?: 'Ad' }
    & RegularAdFragment
  )> }
);

export type DeleteAdMutationVariables = Exact<{
  where: AdWhereUniqueInput;
}>;


export type DeleteAdMutation = (
  { __typename?: 'Mutation' }
  & { deleteAd?: Maybe<(
    { __typename?: 'Ad' }
    & RegularAdFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type AdQueryVariables = Exact<{
  where: AdWhereUniqueInput;
}>;


export type AdQuery = (
  { __typename?: 'Query' }
  & { ad?: Maybe<(
    { __typename?: 'Ad' }
    & RegularAdFragment
  )> }
);

export type AdsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdsQuery = (
  { __typename?: 'Query' }
  & { ads: Array<(
    { __typename?: 'Ad' }
    & RegularAdFragment
  )> }
);

export type CarMakeQueryVariables = Exact<{
  where: CarMakeWhereUniqueInput;
}>;


export type CarMakeQuery = (
  { __typename?: 'Query' }
  & { carMake?: Maybe<(
    { __typename?: 'CarMake' }
    & RegularCarMakeFragment
  )> }
);

export type CarMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type CarMakesQuery = (
  { __typename?: 'Query' }
  & { carMakes: Array<(
    { __typename?: 'CarMake' }
    & RegularCarMakeFragment
  )> }
);

export type CarModelQueryVariables = Exact<{
  where: CarModelWhereUniqueInput;
}>;


export type CarModelQuery = (
  { __typename?: 'Query' }
  & { carModel?: Maybe<(
    { __typename?: 'CarModel' }
    & RegularCarModelFragment
  )> }
);

export type CarModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type CarModelsQuery = (
  { __typename?: 'Query' }
  & { carModels: Array<(
    { __typename?: 'CarModel' }
    & RegularCarModelFragment
  )> }
);

export type RegionQueryVariables = Exact<{
  where: RegionWhereUniqueInput;
}>;


export type RegionQuery = (
  { __typename?: 'Query' }
  & { region?: Maybe<(
    { __typename?: 'Region' }
    & RegularRegionFragment
  )> }
);

export type RegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegionsQuery = (
  { __typename?: 'Query' }
  & { regions: Array<(
    { __typename?: 'Region' }
    & RegularRegionFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'MeResponse' }
    & RegularMeFragment
  ) }
);

export const RegularAdFragmentDoc = gql`
    fragment RegularAd on Ad {
  id
  status
  createdAt
  updatedAt
  publishedDate
  creatorStepi
  title
  description
  price
  transactionType
  regionId
  adPlanId
  userId
  carId
}
    `;
export const RegularCarMakeFragmentDoc = gql`
    fragment RegularCarMake on CarMake {
  id
  makeName
}
    `;
export const RegularCarModelFragmentDoc = gql`
    fragment RegularCarModel on CarModel {
  id
  modelName
  carMakeId
}
    `;
export const RegularMeFragmentDoc = gql`
    fragment RegularMe on MeResponse {
  id
  email
  role
  firstName
  lastName
}
    `;
export const RegularRegionFragmentDoc = gql`
    fragment RegularRegion on Region {
  id
  regionName
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  owner
  firstName
  lastName
}
    `;
export const CreateAdDocument = gql`
    mutation createAd($data: AdCreateInput!) {
  createAd(data: $data) {
    ...RegularAd
  }
}
    ${RegularAdFragmentDoc}`;
export type CreateAdMutationFn = Apollo.MutationFunction<CreateAdMutation, CreateAdMutationVariables>;

/**
 * __useCreateAdMutation__
 *
 * To run a mutation, you first call `useCreateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdMutation, { data, loading, error }] = useCreateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdMutation, CreateAdMutationVariables>) {
        return Apollo.useMutation<CreateAdMutation, CreateAdMutationVariables>(CreateAdDocument, baseOptions);
      }
export type CreateAdMutationHookResult = ReturnType<typeof useCreateAdMutation>;
export type CreateAdMutationResult = Apollo.MutationResult<CreateAdMutation>;
export type CreateAdMutationOptions = Apollo.BaseMutationOptions<CreateAdMutation, CreateAdMutationVariables>;
export const UpdateAdDocument = gql`
    mutation updateAd($data: AdUpdateInput!, $where: AdWhereUniqueInput!) {
  updateAd(data: $data, where: $where) {
    ...RegularAd
  }
}
    ${RegularAdFragmentDoc}`;
export type UpdateAdMutationFn = Apollo.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;

/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
        return Apollo.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, baseOptions);
      }
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = Apollo.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = Apollo.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const DeleteAdDocument = gql`
    mutation deleteAd($where: AdWhereUniqueInput!) {
  deleteAd(where: $where) {
    ...RegularAd
  }
}
    ${RegularAdFragmentDoc}`;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, baseOptions);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($where: UserWhereUniqueInput!) {
  deleteUser(where: $where) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const AdDocument = gql`
    query Ad($where: AdWhereUniqueInput!) {
  ad(where: $where) {
    ...RegularAd
  }
}
    ${RegularAdFragmentDoc}`;

/**
 * __useAdQuery__
 *
 * To run a query within a React component, call `useAdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAdQuery(baseOptions: Apollo.QueryHookOptions<AdQuery, AdQueryVariables>) {
        return Apollo.useQuery<AdQuery, AdQueryVariables>(AdDocument, baseOptions);
      }
export function useAdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdQuery, AdQueryVariables>) {
          return Apollo.useLazyQuery<AdQuery, AdQueryVariables>(AdDocument, baseOptions);
        }
export type AdQueryHookResult = ReturnType<typeof useAdQuery>;
export type AdLazyQueryHookResult = ReturnType<typeof useAdLazyQuery>;
export type AdQueryResult = Apollo.QueryResult<AdQuery, AdQueryVariables>;
export const AdsDocument = gql`
    query Ads {
  ads {
    ...RegularAd
  }
}
    ${RegularAdFragmentDoc}`;

/**
 * __useAdsQuery__
 *
 * To run a query within a React component, call `useAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdsQuery(baseOptions?: Apollo.QueryHookOptions<AdsQuery, AdsQueryVariables>) {
        return Apollo.useQuery<AdsQuery, AdsQueryVariables>(AdsDocument, baseOptions);
      }
export function useAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdsQuery, AdsQueryVariables>) {
          return Apollo.useLazyQuery<AdsQuery, AdsQueryVariables>(AdsDocument, baseOptions);
        }
export type AdsQueryHookResult = ReturnType<typeof useAdsQuery>;
export type AdsLazyQueryHookResult = ReturnType<typeof useAdsLazyQuery>;
export type AdsQueryResult = Apollo.QueryResult<AdsQuery, AdsQueryVariables>;
export const CarMakeDocument = gql`
    query CarMake($where: CarMakeWhereUniqueInput!) {
  carMake(where: $where) {
    ...RegularCarMake
  }
}
    ${RegularCarMakeFragmentDoc}`;

/**
 * __useCarMakeQuery__
 *
 * To run a query within a React component, call `useCarMakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarMakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarMakeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCarMakeQuery(baseOptions: Apollo.QueryHookOptions<CarMakeQuery, CarMakeQueryVariables>) {
        return Apollo.useQuery<CarMakeQuery, CarMakeQueryVariables>(CarMakeDocument, baseOptions);
      }
export function useCarMakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarMakeQuery, CarMakeQueryVariables>) {
          return Apollo.useLazyQuery<CarMakeQuery, CarMakeQueryVariables>(CarMakeDocument, baseOptions);
        }
export type CarMakeQueryHookResult = ReturnType<typeof useCarMakeQuery>;
export type CarMakeLazyQueryHookResult = ReturnType<typeof useCarMakeLazyQuery>;
export type CarMakeQueryResult = Apollo.QueryResult<CarMakeQuery, CarMakeQueryVariables>;
export const CarMakesDocument = gql`
    query CarMakes {
  carMakes {
    ...RegularCarMake
  }
}
    ${RegularCarMakeFragmentDoc}`;

/**
 * __useCarMakesQuery__
 *
 * To run a query within a React component, call `useCarMakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarMakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarMakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarMakesQuery(baseOptions?: Apollo.QueryHookOptions<CarMakesQuery, CarMakesQueryVariables>) {
        return Apollo.useQuery<CarMakesQuery, CarMakesQueryVariables>(CarMakesDocument, baseOptions);
      }
export function useCarMakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarMakesQuery, CarMakesQueryVariables>) {
          return Apollo.useLazyQuery<CarMakesQuery, CarMakesQueryVariables>(CarMakesDocument, baseOptions);
        }
export type CarMakesQueryHookResult = ReturnType<typeof useCarMakesQuery>;
export type CarMakesLazyQueryHookResult = ReturnType<typeof useCarMakesLazyQuery>;
export type CarMakesQueryResult = Apollo.QueryResult<CarMakesQuery, CarMakesQueryVariables>;
export const CarModelDocument = gql`
    query CarModel($where: CarModelWhereUniqueInput!) {
  carModel(where: $where) {
    ...RegularCarModel
  }
}
    ${RegularCarModelFragmentDoc}`;

/**
 * __useCarModelQuery__
 *
 * To run a query within a React component, call `useCarModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarModelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarModelQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCarModelQuery(baseOptions: Apollo.QueryHookOptions<CarModelQuery, CarModelQueryVariables>) {
        return Apollo.useQuery<CarModelQuery, CarModelQueryVariables>(CarModelDocument, baseOptions);
      }
export function useCarModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarModelQuery, CarModelQueryVariables>) {
          return Apollo.useLazyQuery<CarModelQuery, CarModelQueryVariables>(CarModelDocument, baseOptions);
        }
export type CarModelQueryHookResult = ReturnType<typeof useCarModelQuery>;
export type CarModelLazyQueryHookResult = ReturnType<typeof useCarModelLazyQuery>;
export type CarModelQueryResult = Apollo.QueryResult<CarModelQuery, CarModelQueryVariables>;
export const CarModelsDocument = gql`
    query CarModels {
  carModels {
    ...RegularCarModel
  }
}
    ${RegularCarModelFragmentDoc}`;

/**
 * __useCarModelsQuery__
 *
 * To run a query within a React component, call `useCarModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarModelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarModelsQuery(baseOptions?: Apollo.QueryHookOptions<CarModelsQuery, CarModelsQueryVariables>) {
        return Apollo.useQuery<CarModelsQuery, CarModelsQueryVariables>(CarModelsDocument, baseOptions);
      }
export function useCarModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarModelsQuery, CarModelsQueryVariables>) {
          return Apollo.useLazyQuery<CarModelsQuery, CarModelsQueryVariables>(CarModelsDocument, baseOptions);
        }
export type CarModelsQueryHookResult = ReturnType<typeof useCarModelsQuery>;
export type CarModelsLazyQueryHookResult = ReturnType<typeof useCarModelsLazyQuery>;
export type CarModelsQueryResult = Apollo.QueryResult<CarModelsQuery, CarModelsQueryVariables>;
export const RegionDocument = gql`
    query Region($where: RegionWhereUniqueInput!) {
  region(where: $where) {
    ...RegularRegion
  }
}
    ${RegularRegionFragmentDoc}`;

/**
 * __useRegionQuery__
 *
 * To run a query within a React component, call `useRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegionQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRegionQuery(baseOptions: Apollo.QueryHookOptions<RegionQuery, RegionQueryVariables>) {
        return Apollo.useQuery<RegionQuery, RegionQueryVariables>(RegionDocument, baseOptions);
      }
export function useRegionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegionQuery, RegionQueryVariables>) {
          return Apollo.useLazyQuery<RegionQuery, RegionQueryVariables>(RegionDocument, baseOptions);
        }
export type RegionQueryHookResult = ReturnType<typeof useRegionQuery>;
export type RegionLazyQueryHookResult = ReturnType<typeof useRegionLazyQuery>;
export type RegionQueryResult = Apollo.QueryResult<RegionQuery, RegionQueryVariables>;
export const RegionsDocument = gql`
    query Regions {
  regions {
    ...RegularRegion
  }
}
    ${RegularRegionFragmentDoc}`;

/**
 * __useRegionsQuery__
 *
 * To run a query within a React component, call `useRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRegionsQuery(baseOptions?: Apollo.QueryHookOptions<RegionsQuery, RegionsQueryVariables>) {
        return Apollo.useQuery<RegionsQuery, RegionsQueryVariables>(RegionsDocument, baseOptions);
      }
export function useRegionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegionsQuery, RegionsQueryVariables>) {
          return Apollo.useLazyQuery<RegionsQuery, RegionsQueryVariables>(RegionsDocument, baseOptions);
        }
export type RegionsQueryHookResult = ReturnType<typeof useRegionsQuery>;
export type RegionsLazyQueryHookResult = ReturnType<typeof useRegionsLazyQuery>;
export type RegionsQueryResult = Apollo.QueryResult<RegionsQuery, RegionsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularMe
  }
}
    ${RegularMeFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;