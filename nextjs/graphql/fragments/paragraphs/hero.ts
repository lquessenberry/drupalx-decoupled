export const ParagraphHeroFragment = /* GraphQL */ `
  fragment ParagraphHeroFragment on ParagraphHero {
    id
    __typename
    fieldTitle
    fieldSubtitle
    fieldBody {
      processed
    }
    fieldImage {
      url
      alt
    }
    fieldLink {
      url {
        path
      }
      title
    }
  }
`;
