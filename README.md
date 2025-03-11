# DrupalX Decoupled Starter with Axanar Donor System

[![CI](https://github.com/drupalninja/drupalx-decoupled/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/drupalninja/drupalx-decoupled/actions/workflows/ci.yml)
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

This project template leverages the DrupalX Decoupled distribution, featuring enhanced editorial capabilities, integrated GraphQL support and a Next.js frontend starter. The Axanar branch adds a complete donor management system with PayPal integration.

## What does the template do?

* Extends the [drupal-composer/drupal-project](https://github.com/drupal-composer/drupal-project) template
* Adds additional contributed modules including Commerce and PayPal integration
* Sets up [DDEV](https://ddev.com/) as the default development environment
* Installs the DrupalX recipe with Axanar donor system configuration
* Provides a Next.js frontend with Storybook component documentation

## Installing

### 1. Create your project:

```bash
composer create-project drupalninja/drupalx-decoupled:10.x-dev drupalx-decoupled-starter --no-interaction
cd drupalx-decoupled-starter
git checkout axanar
```

### 2. Configure permissions:

```bash
chmod -R 755 web/sites/default/files/
```

### 3. Set up DDEV:

```bash
ddev config
ddev start
ddev install
```

### 4. Enable Axanar and Commerce modules:

```bash
ddev drush en axanar_donor commerce commerce_checkout commerce_cart commerce_payment commerce_paypal -y
```

### 5. Set up the Next.js frontend:

```bash
cd nextjs
nvm install
npm install
```

### 6. Configure environment variables:

Create a `.env.local` file in the `nextjs` directory:

```env
NEXT_PUBLIC_DRUPAL_BASE_URL=https://drupalx-graphql.ddev.site
NEXT_PUBLIC_USE_MOCK_DATA=true
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

### 7. Start the development servers:

In one terminal:
```bash
cd nextjs
npm run dev
```

In another terminal:
```bash
cd nextjs
npm run storybook
```

## Accessing the Application

### Frontend Application
- Main application: [http://localhost:3000](http://localhost:3000)
- Campaigns page: [http://localhost:3000/campaigns](http://localhost:3000/campaigns)
- Individual campaign: [http://localhost:3000/campaign/axanar-film](http://localhost:3000/campaign/axanar-film)

### Storybook Documentation
- Component library: [http://localhost:6006](http://localhost:6006)
- Navigate to "Nodes/" section to view donor components:
  - DonorCampaign
  - DonorPackage
  - DonorPerk

### Drupal Backend
- Admin interface: [https://drupalx-graphql.ddev.site/admin](https://drupalx-graphql.ddev.site/admin)
- GraphQL explorer: [https://drupalx-graphql.ddev.site/graphql/explorer](https://drupalx-graphql.ddev.site/graphql/explorer)

## Development Workflow

1. **Mock Data Development**:
   - Set `NEXT_PUBLIC_USE_MOCK_DATA=true` for development without Drupal
   - Mock data is located in `nextjs/lib/mocks/donor.ts`

2. **Component Development**:
   - Use Storybook for component development and testing
   - Run `npm run storybook` to access the component library
   - Components are located in `nextjs/components/nodes/`

3. **GraphQL Integration**:
   - GraphQL fragments are in `web/modules/custom/axanar_donor/graphql/fragments/`
   - Operations are co-located with components in `operations/` directories
   - Use GraphQL explorer to test queries and mutations

4. **Payment Integration**:
   - Configure PayPal in Drupal Commerce settings
   - Set your PayPal Client ID in `.env.local`
   - Test payments using PayPal Sandbox mode

## Additional Resources

- See `RELEASE.md` for detailed development history and roadmap
- Check `DONOR-DATA.md` for content type structure and GraphQL integration
- Visit the [DrupalX Documentation](https://drupalx.org) for core framework details
