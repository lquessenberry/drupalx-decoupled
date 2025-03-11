export const mockDonorPerk = {
  id: 'perk-1',
  title: 'Digital Download',
  status: true,
  body: {
    processed: '<p>Get early access to digital downloads of the film.</p>',
    summary: 'Early access to digital content'
  },
  created: { timestamp: '2025-03-10T19:00:00' },
  changed: { timestamp: '2025-03-10T19:00:00' },
  path: { alias: '/perk/digital-download', pid: '1', langcode: 'en' }
}

export const mockDonorPackage = {
  id: 'package-1',
  title: 'Digital Supporter',
  status: true,
  fieldPackagePrice: 50,
  fieldPackagePerks: {
    entities: [mockDonorPerk]
  },
  created: { timestamp: '2025-03-10T19:00:00' },
  changed: { timestamp: '2025-03-10T19:00:00' },
  path: { alias: '/package/digital-supporter', pid: '2', langcode: 'en' }
}

export const mockDonorCampaign = {
  id: 'campaign-1',
  title: 'Axanar Film Production',
  status: true,
  body: {
    processed: '<p>Help us bring the story of Garth of Izar to life!</p>',
    summary: 'Support Axanar production'
  },
  fieldCampaignGoal: 100000,
  fieldPackages: {
    entities: [mockDonorPackage]
  },
  created: { timestamp: '2025-03-10T19:00:00' },
  changed: { timestamp: '2025-03-10T19:00:00' },
  path: { alias: '/campaign/axanar-film', pid: '3', langcode: 'en' }
}
