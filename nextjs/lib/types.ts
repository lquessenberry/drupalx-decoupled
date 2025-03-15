export interface ImageVariation {
  name: string;
  url: string;
  width?: number;
  height?: number;
}

export interface MediaImage {
  __typename?: string;
  id?: string;
  image?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
    variations?: ImageVariation[];
  };
}

export interface TextFormat {
  value?: string;
  processed?: string;
  format?: string;
  summary?: string;
}

export interface LinkFormat {
  url?: string;
  title?: string;
  internal?: boolean;
}

export interface DonorPerk {
  id: string;
  title: string;
  description?: TextFormat;
  image?: MediaImage;
}

export interface DonorPerkConnection {
  entities: DonorPerk[];
}

export interface NodeDonorPackage {
  id: string;
  title: string;
  description?: TextFormat;
  fieldPackagePerks?: DonorPerkConnection;
  fieldPackagePrice: number;
  status?: boolean;
}

export interface DonorPackageConnection {
  entities: NodeDonorPackage[];
}

export interface NodeDonorCampaign {
  id: string;
  title: string;
  description?: TextFormat;
  image?: MediaImage;
  goalAmount?: number;
  currentAmount?: number;
  packages?: DonorPackageConnection;
  startDate?: string;
  endDate?: string;
  status?: boolean;
}

export interface NodeDonorPerk {
  id: string;
  title: string;
  fieldDescription?: TextFormat;
  fieldImage?: MediaImage;
  fieldValue?: number;
  status?: boolean;
}
