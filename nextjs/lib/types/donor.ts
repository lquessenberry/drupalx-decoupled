export interface NodeDonorCampaign {
  id: string
  title: string
  status: boolean
  body?: {
    processed: string
    summary?: string
  }
  fieldCampaignGoal: number
  fieldPackages?: {
    entities: NodeDonorPackage[]
  }
  created: {
    timestamp: string
  }
  changed: {
    timestamp: string
  }
  path: {
    alias: string
    pid: string
    langcode: string
  }
}

export interface NodeDonorPackage {
  id: string
  title: string
  status: boolean
  fieldPackagePrice: number
  fieldPackagePerks?: {
    entities: NodeDonorPerk[]
  }
  created: {
    timestamp: string
  }
  changed: {
    timestamp: string
  }
  path: {
    alias: string
    pid: string
    langcode: string
  }
}

export interface NodeDonorPerk {
  id: string
  title: string
  status: boolean
  body?: {
    processed: string
    summary?: string
  }
  created: {
    timestamp: string
  }
  changed: {
    timestamp: string
  }
  path: {
    alias: string
    pid: string
    langcode: string
  }
}
