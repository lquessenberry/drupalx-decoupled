export const ParagraphAccordionFragment = /* GraphQL */ `
  fragment ParagraphAccordionFragment on ParagraphAccordion {
    id
    __typename
    fieldTitle
    fieldAccordionItems {
      entity {
        ...ParagraphAccordionItemFragment
      }
    }
  }
`;

export const ParagraphAccordionItemFragment = /* GraphQL */ `
  fragment ParagraphAccordionItemFragment on ParagraphAccordionItem {
    id
    __typename
    fieldTitle
    fieldBody {
      processed
    }
  }
`;

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

export const ParagraphCardGroupFragment = /* GraphQL */ `
  fragment ParagraphCardGroupFragment on ParagraphCardGroup {
    id
    __typename
    fieldTitle
    fieldCards {
      entity {
        ...ParagraphCardFragment
      }
    }
  }
`;

export const ParagraphCardFragment = /* GraphQL */ `
  fragment ParagraphCardFragment on ParagraphCard {
    id
    __typename
    fieldTitle
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
