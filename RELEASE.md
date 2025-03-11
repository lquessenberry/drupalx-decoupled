# Axanar DrupalX Development Log

## Overview
This document tracks the development progress of the Axanar donor system integration with DrupalX. It serves as both a development log and a guide for future contributors.

## Release History

### [0.1.0] - 2025-03-10
#### Initial Donor System Setup
- Created donor-related content types in Drupal (campaign, package, perk)
- Set up GraphQL fragments for content types
- Implemented basic NextJS components
- Added mock data system for development

### [0.2.0] - 2025-03-10
#### Basic UI Implementation
- Created campaign listing and detail pages
- Implemented component hierarchy (Campaign → Package → Perk)
- Added Storybook configuration for donor components
- Set up initial routing structure

## Development Roadmap

### Next Steps
1. [ ] Add loading states to components
2. [ ] Implement error handling
3. [ ] Complete Storybook stories for all components
4. [ ] Set up donation flow
5. [ ] Integrate with user authentication
6. [ ] Switch from mock to real data

### Known Issues
- RouteEntityUnion type not properly supporting NodeDonorCampaign type
- Using direct node queries instead of route queries as temporary solution
