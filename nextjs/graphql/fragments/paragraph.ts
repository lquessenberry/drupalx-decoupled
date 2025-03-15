export const ParagraphUnionFragment = /* GraphQL */ `
  fragment ParagraphUnionFragment on ParagraphUnion {
    __typename
    ...ParagraphTextFragment
    ...ParagraphAccordionFragment
    ...ParagraphCardGroupFragment
    ...ParagraphCarouselFragment
    ...ParagraphEmbedFragment
    ...ParagraphGalleryFragment
    ...ParagraphHeroFragment
    ...ParagraphLogoCollectionFragment
    ...ParagraphMediaFragment
    ...ParagraphNewsletterFragment
    ...ParagraphPricingFragment
    ...ParagraphQuoteFragment
    ...ParagraphSidebysideFragment
    ...ParagraphViewFragment
  }
`;
