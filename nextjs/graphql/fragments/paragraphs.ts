export const ParagraphTextFragment = /* GraphQL */ `
  fragment ParagraphTextFragment on ParagraphText {
    id
    text
  }
`;

export const ParagraphHeroFragment = /* GraphQL */ `
  fragment ParagraphHeroFragment on ParagraphHero {
    id
    heading
    heroLayout
    summary {
      processed
    }
    media {
      ...MediaImageFragment
    }
    link {
      url
      title
    }
    link2 {
      url
      title
    }
  }
`;

export const ParagraphAccordionFragment = /* GraphQL */ `
  fragment ParagraphAccordionFragment on ParagraphAccordion {
    id
    title
    accordionItem {
      entities {
        ...ParagraphAccordionItemFragment
      }
    }
  }
`;

export const ParagraphAccordionItemFragment = /* GraphQL */ `
  fragment ParagraphAccordionItemFragment on ParagraphAccordionItem {
    id
    title
    body {
      processed
    }
  }
`;

export const ParagraphCardGroupFragment = /* GraphQL */ `
  fragment ParagraphCardGroupFragment on ParagraphCardGroup {
    id
    title
    card {
      ...ParagraphCardFragment
    }
  }
`;

export const ParagraphCardFragment = /* GraphQL */ `
  fragment ParagraphCardFragment on ParagraphCard {
    id
    title
    summary
    media {
      ...MediaImageFragment
    }
    link {
      url
      title
    }
  }
`;

export const ParagraphMediaFragment = /* GraphQL */ `
  fragment ParagraphMediaFragment on ParagraphMedia {
    id
    title
    media {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphQuoteFragment = /* GraphQL */ `
  fragment ParagraphQuoteFragment on ParagraphQuote {
    id
    quote
    author
    jobTitle
    thumb {
      ...MediaImageFragment
    }
    logo {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphStatsItemFragment = /* GraphQL */ `
  fragment ParagraphStatsItemFragment on ParagraphStatsItem {
    id
    title
    summary
    icon
    customIcon {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphGalleryFragment = /* GraphQL */ `
  fragment ParagraphGalleryFragment on ParagraphGallery {
    id
    title
    body {
      processed
    }
    mediaItem {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphSidebysideFragment = /* GraphQL */ `
  fragment ParagraphSidebysideFragment on ParagraphSidebyside {
    id
    title
    eyebrow
    summary {
      processed
    }
    media {
      ...MediaImageFragment
    }
    sidebysideLayout
    link {
      url
      title
    }
    features {
      ...ParagraphBulletFragment
      ...ParagraphStatsItemFragment
    }
  }
`;

export const ParagraphBulletFragment = /* GraphQL */ `
  fragment ParagraphBulletFragment on ParagraphBullet {
    id
    title
    body {
      processed
    }
  }
`;

export const ParagraphCarouselFragment = /* GraphQL */ `
  fragment ParagraphCarouselFragment on ParagraphCarousel {
    id
    carouselItem {
      ...ParagraphCarouselItemFragment
    }
  }
`;

export const ParagraphCarouselItemFragment = /* GraphQL */ `
  fragment ParagraphCarouselItemFragment on ParagraphCarouselItem {
    id
    title
    summary
    media {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphEmbedFragment = /* GraphQL */ `
  fragment ParagraphEmbedFragment on ParagraphEmbed {
    id
    title
    script
  }
`;

export const ParagraphNewsletterFragment = /* GraphQL */ `
  fragment ParagraphNewsletterFragment on ParagraphNewsletter {
    id
    title
    summary {
      processed
    }
  }
`;

export const ParagraphViewFragment = /* GraphQL */ `
  fragment ParagraphViewFragment on ParagraphView {
    id
    view {
      id
      display
    }
  }
`;

export const ParagraphLogoCollectionFragment = /* GraphQL */ `
  fragment ParagraphLogoCollectionFragment on ParagraphLogoCollection {
    id
    title
    mediaItem {
      ...MediaImageFragment
    }
  }
`;

export const ParagraphUnionFragment = /* GraphQL */ `
  fragment ParagraphUnionFragment on ParagraphUnion {
    __typename
    ...ParagraphTextFragment
    ...ParagraphHeroFragment
    ...ParagraphAccordionFragment
    ...ParagraphCardGroupFragment
    ...ParagraphMediaFragment
    ...ParagraphQuoteFragment
    ...ParagraphStatsItemFragment
    ...ParagraphGalleryFragment
    ...ParagraphSidebysideFragment
    ...ParagraphBulletFragment
    ...ParagraphCarouselFragment
    ...ParagraphCarouselItemFragment
    ...ParagraphEmbedFragment
    ...ParagraphNewsletterFragment
    ...ParagraphViewFragment
    ...ParagraphLogoCollectionFragment
  }
`;
