export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A cursor for use in pagination. */
  Cursor: { input: any; output: any; }
  /** An email address. */
  Email: { input: any; output: any; }
  /**
   * An HTML string
   *
   * Content of this type is deemed safe by the server for raw output given the
   * origin and the context of its usage. The HTML can still contain scripts or style
   * tags where the creating user had permission to input these.
   */
  Html: { input: any; output: any; }
  /** A field whose value conforms to the standard E.164 */
  PhoneNumber: { input: any; output: any; }
  /** RFC 3339 compliant time string. */
  Time: { input: any; output: any; }
  /** A field whose value exists in the standard IANA Time Zone Database. */
  TimeZone: { input: any; output: any; }
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  Timestamp: { input: any; output: any; }
  /** Untyped structured data. Eg JSON, configuration, settings, attributes. */
  UntypedStructuredData: { input: any; output: any; }
  /** User roles. */
  UserRoles: { input: any; output: any; }
  /** A string that will have a value of format ±hh:mm */
  UtcOffset: { input: any; output: any; }
};

/** A paginated set of results. */
export type Connection = {
  /** The edges of this connection. */
  edges: Array<Edge>;
  /** The nodes of the edges of this connection. */
  nodes: Array<EdgeNode>;
  /** Information to aid in pagination. */
  pageInfo: ConnectionPageInfo;
};

/** Information about the page in a connection. */
export type ConnectionPageInfo = {
  __typename?: 'ConnectionPageInfo';
  /** The cursor for the last element in this page. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** Whether there are more pages in this connection. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Whether there are previous pages in this connection. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** The cursor for the first element in this page. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** Choose how your sorts will occur and on which field. */
export enum ConnectionSortKeys {
  /** Sort by creation date */
  CreatedAt = 'CREATED_AT',
  /** Sort by promoted status. */
  Promoted = 'PROMOTED',
  /** Sort by sticky status. */
  Sticky = 'STICKY',
  /** Sort by entity title. */
  Title = 'TITLE',
  /** Sort by updated date */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by term weight. */
  Weight = 'WEIGHT'
}

/** A Date range has a start and an end. */
export type DateRange = {
  __typename?: 'DateRange';
  /** The end of the date range. */
  end?: Maybe<DateTime>;
  /** The start of the date range. */
  start?: Maybe<DateTime>;
};

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  /** A string that will have a value of format ±hh:mm */
  offset: Scalars['UtcOffset']['output'];
  /** RFC 3339 compliant time string. */
  time: Scalars['Time']['output'];
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  timestamp: Scalars['Timestamp']['output'];
  /** A field whose value exists in the standard IANA Time Zone Database. */
  timezone: Scalars['TimeZone']['output'];
};

/**
 * An edge in a connection.
 * Provides the cursor to fetch data based on the position of the associated
 * node. Specific edge implementations may provide more information about the
 * relationship they represent.
 */
export type Edge = {
  cursor: Scalars['Cursor']['output'];
  node: EdgeNode;
};

/** This entity is accessible over an Edge connection. */
export type EdgeNode = {
  id: Scalars['ID']['output'];
};

/** A file object to represent an managed file. */
export type File = {
  __typename?: 'File';
  /** The description of the file. */
  description?: Maybe<Scalars['String']['output']>;
  /** The mime type of the file. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The name of the file. */
  name?: Maybe<Scalars['String']['output']>;
  /** The size of the file in bytes. */
  size: Scalars['Int']['output'];
  /** The URL of the file. */
  url: Scalars['String']['output'];
};

/** A image object to represent an managed file. */
export type Image = {
  __typename?: 'Image';
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']['output']>;
  /** The height of the image. */
  height: Scalars['Int']['output'];
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']['output']>;
  /** The size of the image in bytes. */
  size: Scalars['Int']['output'];
  /** Contents of the image, if the mime is `image/svg+xml` and size <= `100 KB`. */
  svg?: Maybe<Scalars['String']['output']>;
  /** The title text of the image. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
  /** Image variations control different sizes and formats for images. */
  variations?: Maybe<Array<ImageStyleDerivative>>;
  /** The width of the image. */
  width: Scalars['Int']['output'];
};


/** A image object to represent an managed file. */
export type ImageVariationsArgs = {
  styles?: InputMaybe<Array<InputMaybe<ImageStyleAvailable>>>;
};

/** Entity type image_style. */
export type ImageStyle = ImageStyleInterface & {
  __typename?: 'ImageStyle';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** List of image styles available to use. */
export enum ImageStyleAvailable {
  /** Hero Large */
  Herol = 'HEROL',
  /** Hero Large 2x */
  Herolx2 = 'HEROLX2',
  /** Hero Medium */
  Herom = 'HEROM',
  /** Hero Medium 2x */
  Heromx2 = 'HEROMX2',
  /** Hero Small */
  Heros = 'HEROS',
  /** Hero Small 2x */
  Herosx2 = 'HEROSX2',
  /** 1:1 Large (800 x 800) */
  I11Large = 'I11LARGE',
  /** 1:1 Medium (400 x 400) */
  I11Medium = 'I11MEDIUM',
  /** 1:1 Small */
  I11Small = 'I11SMALL',
  /** 4:3 Large (800 x 600) */
  I43Large = 'I43LARGE',
  /** 4:3 Large 2x (1280 x 960) */
  I43Large2X = 'I43LARGE2X',
  /** 4:3 Medium (640 x 480) */
  I43Medium = 'I43MEDIUM',
  /** 4:3 Small (420x 315) */
  I43Small = 'I43SMALL',
  /** 16:9 Large 2x (1280 x 720) */
  I169Large2X = 'I169LARGE2X',
  /** 16:9 Extra Large (720 x 405) */
  I169Xlarge = 'I169XLARGE',
  /** Large (480×480) */
  Large = 'LARGE',
  /** Linkit result thumbnail */
  LinkitResultThumbnail = 'LINKIT_RESULT_THUMBNAIL',
  /** Media Library thumbnail (220×220) */
  MediaLibrary = 'MEDIA_LIBRARY',
  /** Medium (220×220) */
  Medium = 'MEDIUM',
  /** Thumbnail (100×100) */
  Thumbnail = 'THUMBNAIL'
}

/** ImageStyle derivatives for an Image. */
export type ImageStyleDerivative = {
  __typename?: 'ImageStyleDerivative';
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** Entity type image_style. */
export type ImageStyleInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Entity type image_style. */
export type ImageStyleUnion = ImageStyle;

/** Generic input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  /** The language direction. */
  direction?: Maybe<Scalars['String']['output']>;
  /** The language code. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The language name. */
  name?: Maybe<Scalars['String']['output']>;
};

/** A link. */
export type Link = {
  __typename?: 'Link';
  /** Whether the link is internal to this website. */
  internal: Scalars['Boolean']['output'];
  /** The title of the link. */
  title?: Maybe<Scalars['String']['output']>;
  /** The URL of the link. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Basic image media type. */
export type MediaImage = EdgeNode & MediaInterface & MetaTagInterface & {
  __typename?: 'MediaImage';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Image */
  image?: Maybe<Image>;
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A paginated set of results for MediaImage. */
export type MediaImageConnection = Connection & {
  __typename?: 'MediaImageConnection';
  edges: Array<MediaImageEdge>;
  nodes: Array<MediaImage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaImage. */
export type MediaImageEdge = Edge & {
  __typename?: 'MediaImageEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaImage;
};

/** Entity type media. */
export type MediaInterface = {
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** Image type to use with SVGs. */
export type MediaSvgImage = EdgeNode & MediaInterface & MetaTagInterface & {
  __typename?: 'MediaSvgImage';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Image */
  image: Image;
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A paginated set of results for MediaSvgImage. */
export type MediaSvgImageConnection = Connection & {
  __typename?: 'MediaSvgImageConnection';
  edges: Array<MediaSvgImageEdge>;
  nodes: Array<MediaSvgImage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaSvgImage. */
export type MediaSvgImageEdge = Edge & {
  __typename?: 'MediaSvgImageEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaSvgImage;
};

/** Entity type media. */
export type MediaUnion = MediaImage | MediaSvgImage | MediaVideo;

/** Upload remote video media. */
export type MediaVideo = EdgeNode & MediaInterface & MetaTagInterface & {
  __typename?: 'MediaVideo';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** Remote video URL */
  source: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A paginated set of results for MediaVideo. */
export type MediaVideoConnection = Connection & {
  __typename?: 'MediaVideoConnection';
  edges: Array<MediaVideoEdge>;
  nodes: Array<MediaVideo>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for MediaVideo. */
export type MediaVideoEdge = Edge & {
  __typename?: 'MediaVideoEdge';
  cursor: Scalars['Cursor']['output'];
  node: MediaVideo;
};

/** Entity type menu. */
export type Menu = MenuInterface & {
  __typename?: 'Menu';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** Footer */
  Footer = 'FOOTER',
  /** Main navigation */
  Main = 'MAIN'
}

/** Entity type menu. */
export type MenuInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String']['output'];
};

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Attributes of this menu item. */
  attributes: MenuItemAttributes;
  /** Child menu items of this menu item. */
  children: Array<MenuItem>;
  /** The description of the menu item. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether this menu item is intended to be expanded. */
  expanded: Scalars['Boolean']['output'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Whether this menu item links to an internal route. */
  internal: Scalars['Boolean']['output'];
  /** The language of the menu item. */
  langcode: Language;
  /** The route this menu item uses. Route loading can be disabled per menu type. */
  route?: Maybe<RouteUnion>;
  /** The title of the menu item. */
  title: Scalars['String']['output'];
  /** The URL of the menu item. */
  url?: Maybe<Scalars['String']['output']>;
};

/** Menu item options set within the CMS. */
export type MenuItemAttributes = {
  __typename?: 'MenuItemAttributes';
  class?: Maybe<Scalars['String']['output']>;
};

/** Entity type menu. */
export type MenuUnion = Menu;

/** A meta tag element. */
export type MetaTag = {
  /** The HTML tag for this meta element. */
  tag: Scalars['String']['output'];
};

/** This entity has meta tags enabled. */
export type MetaTagInterface = {
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
};

/** A meta link element. */
export type MetaTagLink = MetaTag & {
  __typename?: 'MetaTagLink';
  /** The meta tag element attributes. */
  attributes: MetaTagLinkAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String']['output'];
};

/** A meta link element's attributes. */
export type MetaTagLinkAttributes = {
  __typename?: 'MetaTagLinkAttributes';
  /** Specifies the location of the linked document. */
  href?: Maybe<Scalars['String']['output']>;
  /** Specifies the location of the linked document. */
  hreflang?: Maybe<Scalars['String']['output']>;
  /** Specifies on what device the linked document will be displayed. */
  media?: Maybe<Scalars['String']['output']>;
  /** Specifies the relationship between the current document and the linked document. */
  rel?: Maybe<Scalars['String']['output']>;
  /** Specifies the size of the linked resource. Only for rel="icon". */
  sizes?: Maybe<Scalars['String']['output']>;
  /** Specifies the media type of the linked document. */
  type?: Maybe<Scalars['String']['output']>;
};

/** A meta property element. */
export type MetaTagProperty = MetaTag & {
  __typename?: 'MetaTagProperty';
  /** The meta tag element attributes. */
  attributes: MetaTagPropertyAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String']['output'];
};

/** A meta property element's attributes. */
export type MetaTagPropertyAttributes = {
  __typename?: 'MetaTagPropertyAttributes';
  /** The content attribute of the meta tag. */
  content?: Maybe<Scalars['String']['output']>;
  /** The property attribute of the meta tag. */
  property?: Maybe<Scalars['String']['output']>;
};

/** A meta script element. */
export type MetaTagScript = MetaTag & {
  __typename?: 'MetaTagScript';
  /** The meta tag element attributes. */
  attributes: MetaTagScriptAttributes;
  /** The content of the script tag. */
  content?: Maybe<Scalars['String']['output']>;
  /** The HTML tag for this meta element. */
  tag: Scalars['String']['output'];
};

/** A meta script element's attributes. */
export type MetaTagScriptAttributes = {
  __typename?: 'MetaTagScriptAttributes';
  /** The integrity attribute of the script tag. */
  integrity?: Maybe<Scalars['String']['output']>;
  /** The src attribute of the script tag. */
  src?: Maybe<Scalars['String']['output']>;
  /** The type attribute of the script tag. */
  type?: Maybe<Scalars['String']['output']>;
};

/** A meta tag element. */
export type MetaTagUnion = MetaTagLink | MetaTagProperty | MetaTagScript | MetaTagValue;

/** A meta content element. */
export type MetaTagValue = MetaTag & {
  __typename?: 'MetaTagValue';
  /** The meta tag element attributes. */
  attributes: MetaTagValueAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String']['output'];
};

/** A meta content element's attributes. */
export type MetaTagValueAttributes = {
  __typename?: 'MetaTagValueAttributes';
  /** The content attribute of the meta tag. */
  content?: Maybe<Scalars['String']['output']>;
  /** The name attribute of the meta tag. */
  name?: Maybe<Scalars['String']['output']>;
};

/** The schema's entry-point for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder for mutation extension. */
  _: Scalars['Boolean']['output'];
};

/**
 * The Article content type represents a written piece published in a newspaper,
 * magazine, or online platform. It serves as a platform for sharing information,
 * insights, stories, or opinions on a specific topic, catering to diverse
 * audiences and interests.
 */
export type NodeArticle = EdgeNode & MetaTagInterface & NodeInterface & {
  __typename?: 'NodeArticle';
  /** The author of this content. */
  author?: Maybe<User>;
  /** Authors */
  authors?: Maybe<Array<TermUnion>>;
  /** Body */
  body?: Maybe<TextSummary>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** Article lead paragraph. */
  lead: Text;
  /** Media */
  media: MediaUnion;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Tags */
  tags?: Maybe<Array<TermUnion>>;
  /** Thumbnail */
  thumbnail?: Maybe<MediaUnion>;
  /** Title */
  title: Scalars['String']['output'];
};

/** A paginated set of results for NodeArticle. */
export type NodeArticleConnection = Connection & {
  __typename?: 'NodeArticleConnection';
  edges: Array<NodeArticleEdge>;
  nodes: Array<NodeArticle>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodeArticle. */
export type NodeArticleEdge = Edge & {
  __typename?: 'NodeArticleEdge';
  cursor: Scalars['Cursor']['output'];
  node: NodeArticle;
};

/** Entity type node. */
export type NodeInterface = {
  /** The author of this content. */
  author?: Maybe<User>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/**
 * The Layout Page empowers you to create dynamic and visually appealing page
 * layouts using Layout Builder's intuitive drag-and-drop interface. Whether you're
 * designing landing pages, product showcases, or blog layouts, this feature-rich
 * tool offers unparalleled flexibility and customization options.
 */
export type NodeLanding = EdgeNode & MetaTagInterface & NodeInterface & {
  __typename?: 'NodeLanding';
  /** The author of this content. */
  author?: Maybe<User>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** Components */
  content: Array<ParagraphUnion>;
  /** The date and time that the content was created. */
  created: DateTime;
  /** Optionally hide page title. */
  hidePageTitle?: Maybe<Scalars['Boolean']['output']>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Thumbnail */
  thumbnail?: Maybe<MediaUnion>;
  /** Title */
  title: Scalars['String']['output'];
};

/** A paginated set of results for NodeLanding. */
export type NodeLandingConnection = Connection & {
  __typename?: 'NodeLandingConnection';
  edges: Array<NodeLandingEdge>;
  nodes: Array<NodeLanding>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodeLanding. */
export type NodeLandingEdge = Edge & {
  __typename?: 'NodeLandingEdge';
  cursor: Scalars['Cursor']['output'];
  node: NodeLanding;
};

/**
 * The Basic Page serves as a platform for displaying static content on your
 * website, such as an 'About Us' page, contact information, or general company
 * information. It provides a simple and straightforward layout to convey essential
 * information to visitors.
 */
export type NodePage = EdgeNode & MetaTagInterface & NodeInterface & {
  __typename?: 'NodePage';
  /** The author of this content. */
  author?: Maybe<User>;
  /** Body */
  body?: Maybe<TextSummary>;
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The date and time that the content was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Language */
  langcode: Language;
  /** Add an optional hero image to this page. */
  media?: Maybe<MediaUnion>;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Promoted to front page */
  promote: Scalars['Boolean']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean']['output'];
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Thumbnail */
  thumbnail?: Maybe<MediaUnion>;
  /** Title */
  title: Scalars['String']['output'];
};

/** A paginated set of results for NodePage. */
export type NodePageConnection = Connection & {
  __typename?: 'NodePageConnection';
  edges: Array<NodePageEdge>;
  nodes: Array<NodePage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodePage. */
export type NodePageEdge = Edge & {
  __typename?: 'NodePageEdge';
  cursor: Scalars['Cursor']['output'];
  node: NodePage;
};

/** Entity type node. */
export type NodeUnion = NodeArticle | NodeLanding | NodePage;

/**
 * The Accordion component is ideal for rendering FAQs or similar title-description
 * pairings, allowing users to expand and collapse sections for a clean, organized
 */
export type ParagraphAccordion = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphAccordion';
  /** List of title/description pairings used to populate the accordion. */
  accordionItem: Array<ParagraphUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for the accordion. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphAccordion. */
export type ParagraphAccordionConnection = Connection & {
  __typename?: 'ParagraphAccordionConnection';
  edges: Array<ParagraphAccordionEdge>;
  nodes: Array<ParagraphAccordion>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphAccordion. */
export type ParagraphAccordionEdge = Edge & {
  __typename?: 'ParagraphAccordionEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphAccordion;
};

/** Title, description pairing to be used inside of an accordion. */
export type ParagraphAccordionItem = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphAccordionItem';
  /** Item description. */
  body: TextSummary;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Optional call to action link that is exposed when the item is expanded. */
  link?: Maybe<Link>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** The primary heading for item description. */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphAccordionItem. */
export type ParagraphAccordionItemConnection = Connection & {
  __typename?: 'ParagraphAccordionItemConnection';
  edges: Array<ParagraphAccordionItemEdge>;
  nodes: Array<ParagraphAccordionItem>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphAccordionItem. */
export type ParagraphAccordionItemEdge = Edge & {
  __typename?: 'ParagraphAccordionItemEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphAccordionItem;
};

/** Item paragraph used to display icon list items within components. */
export type ParagraphBullet = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphBullet';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Material icon name. */
  icon: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Summary */
  summary: Text;
};

/** A paginated set of results for ParagraphBullet. */
export type ParagraphBulletConnection = Connection & {
  __typename?: 'ParagraphBulletConnection';
  edges: Array<ParagraphBulletEdge>;
  nodes: Array<ParagraphBullet>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphBullet. */
export type ParagraphBulletEdge = Edge & {
  __typename?: 'ParagraphBulletEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphBullet;
};

/** A teaser to a piece of content, local or external. */
export type ParagraphCard = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphCard';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Link */
  link?: Maybe<Link>;
  /** Media */
  media?: Maybe<MediaUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphCard. */
export type ParagraphCardConnection = Connection & {
  __typename?: 'ParagraphCardConnection';
  edges: Array<ParagraphCardEdge>;
  nodes: Array<ParagraphCard>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphCard. */
export type ParagraphCardEdge = Edge & {
  __typename?: 'ParagraphCardEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphCard;
};

/**
 * The Card Group Feature allows editors to highlight collections of content items
 * using grouped card layouts, ideal for showcasing articles, products, services,
 * or other content types.
 */
export type ParagraphCardGroup = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphCardGroup';
  /** Card */
  card: Array<ParagraphUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for the card list. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphCardGroup. */
export type ParagraphCardGroupConnection = Connection & {
  __typename?: 'ParagraphCardGroupConnection';
  edges: Array<ParagraphCardGroupEdge>;
  nodes: Array<ParagraphCardGroup>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphCardGroup. */
export type ParagraphCardGroupEdge = Edge & {
  __typename?: 'ParagraphCardGroupEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphCardGroup;
};

/**
 * The Carousel component lets you rotate through a collection of media items in an
 * interactive slider, perfect for showcasing related content in limited space to
 * enhance user engagement and visual appeal.
 */
export type ParagraphCarousel = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphCarousel';
  /** Build a collection of items for the carousel component. */
  carouselItem: Array<ParagraphUnion>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/** A paginated set of results for ParagraphCarousel. */
export type ParagraphCarouselConnection = Connection & {
  __typename?: 'ParagraphCarouselConnection';
  edges: Array<ParagraphCarouselEdge>;
  nodes: Array<ParagraphCarousel>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphCarousel. */
export type ParagraphCarouselEdge = Edge & {
  __typename?: 'ParagraphCarouselEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphCarousel;
};

/** Carousel item for the Carousel component. */
export type ParagraphCarouselItem = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphCarouselItem';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Carousel media item. */
  media: MediaUnion;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Carousel item summary. */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphCarouselItem. */
export type ParagraphCarouselItemConnection = Connection & {
  __typename?: 'ParagraphCarouselItemConnection';
  edges: Array<ParagraphCarouselItemEdge>;
  nodes: Array<ParagraphCarouselItem>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphCarouselItem. */
export type ParagraphCarouselItemEdge = Edge & {
  __typename?: 'ParagraphCarouselItemEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphCarouselItem;
};

/**
 * The Embed Component seamlessly integrates third-party scripts into your web
 * pages, ideal for incorporating videos, social media feeds, maps, and other
 * interactive elements.
 */
export type ParagraphEmbed = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphEmbed';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Paste the third-party script embed here. */
  script?: Maybe<Text>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for the embedded content. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphEmbed. */
export type ParagraphEmbedConnection = Connection & {
  __typename?: 'ParagraphEmbedConnection';
  edges: Array<ParagraphEmbedEdge>;
  nodes: Array<ParagraphEmbed>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphEmbed. */
export type ParagraphEmbedEdge = Edge & {
  __typename?: 'ParagraphEmbedEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphEmbed;
};

/**
 * The Media Gallery component showcases a collection of media items, including
 * images, in a visually appealing and organized manner, perfect for portfolios,
 * photo albums, and product showcases.
 */
export type ParagraphGallery = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphGallery';
  /** Body */
  body?: Maybe<TextSummary>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Add collection of media library items. */
  mediaItem: Array<MediaUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphGallery. */
export type ParagraphGalleryConnection = Connection & {
  __typename?: 'ParagraphGalleryConnection';
  edges: Array<ParagraphGalleryEdge>;
  nodes: Array<ParagraphGallery>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphGallery. */
export type ParagraphGalleryEdge = Edge & {
  __typename?: 'ParagraphGalleryEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphGallery;
};

/**
 * The Hero Component, designed for impactful promotional teasers with large images
 * at the top of a page, highlights key messages, announcements, or featured
 */
export type ParagraphHero = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphHero';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Heading */
  heading?: Maybe<Text>;
  /** Hero Layout */
  heroLayout: Scalars['String']['output'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Optional call to action link. */
  link?: Maybe<Link>;
  /** Optional link. */
  link2?: Maybe<Link>;
  /** Featured media item for the hero. */
  media?: Maybe<MediaUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the teaser summary for the hero. */
  summary?: Maybe<Text>;
};

/** A paginated set of results for ParagraphHero. */
export type ParagraphHeroConnection = Connection & {
  __typename?: 'ParagraphHeroConnection';
  edges: Array<ParagraphHeroEdge>;
  nodes: Array<ParagraphHero>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphHero. */
export type ParagraphHeroEdge = Edge & {
  __typename?: 'ParagraphHeroEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphHero;
};

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
};

/**
 * The Logo Collection paragraph type allows users to display multiple logos,
 * typically used to showcase partner organizations, clients, or sponsors on a
 */
export type ParagraphLogoCollection = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphLogoCollection';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Add collection of media library items. */
  mediaItem: Array<MediaUnion>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for the collection. */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphLogoCollection. */
export type ParagraphLogoCollectionConnection = Connection & {
  __typename?: 'ParagraphLogoCollectionConnection';
  edges: Array<ParagraphLogoCollectionEdge>;
  nodes: Array<ParagraphLogoCollection>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphLogoCollection. */
export type ParagraphLogoCollectionEdge = Edge & {
  __typename?: 'ParagraphLogoCollectionEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphLogoCollection;
};

/**
 * The Media Component allows you to place images, videos, or audio files on your
 * web pages, seamlessly integrating media assets to enhance the user experience.
 */
export type ParagraphMedia = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphMedia';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Media library item. */
  media: MediaUnion;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for an embedded media item. */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated set of results for ParagraphMedia. */
export type ParagraphMediaConnection = Connection & {
  __typename?: 'ParagraphMediaConnection';
  edges: Array<ParagraphMediaEdge>;
  nodes: Array<ParagraphMedia>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphMedia. */
export type ParagraphMediaEdge = Edge & {
  __typename?: 'ParagraphMediaEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphMedia;
};

/**
 * The Newsletter Form Component seamlessly integrates a custom signup form into
 * web pages, streamlining subscriber information collection to build and engage
 * your audience effectively.
 */
export type ParagraphNewsletter = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphNewsletter';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Newsletter summary. */
  summary?: Maybe<Text>;
  /** Newsletter title. */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphNewsletter. */
export type ParagraphNewsletterConnection = Connection & {
  __typename?: 'ParagraphNewsletterConnection';
  edges: Array<ParagraphNewsletterEdge>;
  nodes: Array<ParagraphNewsletter>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphNewsletter. */
export type ParagraphNewsletterEdge = Edge & {
  __typename?: 'ParagraphNewsletterEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphNewsletter;
};

/**
 * The Quote Component effectively highlights testimonials or impactful statements
 * on web pages, adding credibility by showcasing customer feedback, endorsements,
 * or memorable phrases.
 */
export type ParagraphQuote = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphQuote';
  /** Author of the quote. */
  author: Scalars['String']['output'];
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** Title of the author. */
  jobTitle?: Maybe<Scalars['String']['output']>;
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Logo */
  logo?: Maybe<MediaUnion>;
  /** Author quote or testimonial. */
  quote: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Thumb */
  thumb?: Maybe<MediaUnion>;
};

/** A paginated set of results for ParagraphQuote. */
export type ParagraphQuoteConnection = Connection & {
  __typename?: 'ParagraphQuoteConnection';
  edges: Array<ParagraphQuoteEdge>;
  nodes: Array<ParagraphQuote>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphQuote. */
export type ParagraphQuoteEdge = Edge & {
  __typename?: 'ParagraphQuoteEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphQuote;
};

/**
 * A side-by-side teaser visually previews content with an image or video on one
 * side and a brief text summary or call-to-action on the other, creating an
 * engaging and balanced presentation.
 */
export type ParagraphSidebyside = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphSidebyside';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Provide a short label for this content. */
  eyebrow?: Maybe<Scalars['String']['output']>;
  /**
   * Optional featured items to display within the content area. It is best to not
   * mix items (ie bullets or stats) in the same component.
   */
  features?: Maybe<Array<ParagraphUnion>>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Provide an internal or external link. */
  link?: Maybe<Link>;
  /** Embed a media item from the media library. */
  media: MediaUnion;
  /** Select the display layout for this component. */
  sidebysideLayout: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide a brief description of the content being featured. */
  summary: Text;
  /** Provide the primary heading for the Side-by-side block. */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphSidebyside. */
export type ParagraphSidebysideConnection = Connection & {
  __typename?: 'ParagraphSidebysideConnection';
  edges: Array<ParagraphSidebysideEdge>;
  nodes: Array<ParagraphSidebyside>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphSidebyside. */
export type ParagraphSidebysideEdge = Edge & {
  __typename?: 'ParagraphSidebysideEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphSidebyside;
};

/** A list of title + summaries that belong to the stats block. */
export type ParagraphStatsItem = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphStatsItem';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Custom Icon */
  customIcon?: Maybe<MediaUnion>;
  /** Material icon name. */
  icon?: Maybe<Scalars['String']['output']>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Summary */
  summary: Scalars['String']['output'];
  /** Title */
  title: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphStatsItem. */
export type ParagraphStatsItemConnection = Connection & {
  __typename?: 'ParagraphStatsItemConnection';
  edges: Array<ParagraphStatsItemEdge>;
  nodes: Array<ParagraphStatsItem>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphStatsItem. */
export type ParagraphStatsItemEdge = Edge & {
  __typename?: 'ParagraphStatsItemEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphStatsItem;
};

/**
 * The Text Block Component offers a versatile solution for displaying textual
 * content on web pages, seamlessly incorporating information, narratives, or
 * instructions into your design.
 */
export type ParagraphText = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphText';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Text */
  text: Scalars['String']['output'];
};

/** A paginated set of results for ParagraphText. */
export type ParagraphTextConnection = Connection & {
  __typename?: 'ParagraphTextConnection';
  edges: Array<ParagraphTextEdge>;
  nodes: Array<ParagraphText>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphText. */
export type ParagraphTextEdge = Edge & {
  __typename?: 'ParagraphTextEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphText;
};

/** Entity type paragraph. */
export type ParagraphUnion = ParagraphAccordion | ParagraphAccordionItem | ParagraphBullet | ParagraphCard | ParagraphCardGroup | ParagraphCarousel | ParagraphCarouselItem | ParagraphEmbed | ParagraphGallery | ParagraphHero | ParagraphLogoCollection | ParagraphMedia | ParagraphNewsletter | ParagraphQuote | ParagraphSidebyside | ParagraphStatsItem | ParagraphText | ParagraphView;

/**
 * The Views Component renders Drupal views directly on web pages, ideal for
 * displaying dynamic content lists like news articles, blog posts, and product
 */
export type ParagraphView = EdgeNode & ParagraphInterface & {
  __typename?: 'ParagraphView';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Optional call to action link. */
  link?: Maybe<Link>;
  /** Published */
  status: Scalars['Boolean']['output'];
  /** Provide the primary heading for the list view. */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. Views Reference
   */
  viewsRef: ViewResultUnion;
};


/**
 * The Views Component renders Drupal views directly on web pages, ideal for
 * displaying dynamic content lists like news articles, blog posts, and product
 */
export type ParagraphViewViewsRefArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated set of results for ParagraphView. */
export type ParagraphViewConnection = Connection & {
  __typename?: 'ParagraphViewConnection';
  edges: Array<ParagraphViewEdge>;
  nodes: Array<ParagraphView>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for ParagraphView. */
export type ParagraphViewEdge = Edge & {
  __typename?: 'ParagraphViewEdge';
  cursor: Scalars['Cursor']['output'];
  node: ParagraphView;
};

/** The schema's entry-point for queries. */
export type Query = {
  __typename?: 'Query';
  /** Schema information. */
  info: SchemaInformation;
  /** Load a Media entity by id. */
  media?: Maybe<MediaUnion>;
  /** List of all MediaImage on the platform. */
  mediaImages: MediaImageConnection;
  /** List of all MediaSvgImage on the platform. */
  mediaSvgImages: MediaSvgImageConnection;
  /** List of all MediaVideo on the platform. */
  mediaVideos: MediaVideoConnection;
  /** Load a Menu by name. */
  menu?: Maybe<Menu>;
  /** Load a Node entity by id. */
  node?: Maybe<NodeUnion>;
  /** List of all NodeArticle on the platform. */
  nodeArticles: NodeArticleConnection;
  /** List of all NodeLanding on the platform. */
  nodeLandings: NodeLandingConnection;
  /** List of all NodePage on the platform. */
  nodePages: NodePageConnection;
  /** Load a Paragraph entity by id. */
  paragraph?: Maybe<ParagraphUnion>;
  /** List of all ParagraphAccordionItem on the platform. */
  paragraphAccordionItems: ParagraphAccordionItemConnection;
  /** List of all ParagraphAccordion on the platform. */
  paragraphAccordions: ParagraphAccordionConnection;
  /** List of all ParagraphBullet on the platform. */
  paragraphBullets: ParagraphBulletConnection;
  /** List of all ParagraphCardGroup on the platform. */
  paragraphCardGroups: ParagraphCardGroupConnection;
  /** List of all ParagraphCard on the platform. */
  paragraphCards: ParagraphCardConnection;
  /** List of all ParagraphCarouselItem on the platform. */
  paragraphCarouselItems: ParagraphCarouselItemConnection;
  /** List of all ParagraphCarousel on the platform. */
  paragraphCarousels: ParagraphCarouselConnection;
  /** List of all ParagraphEmbed on the platform. */
  paragraphEmbeds: ParagraphEmbedConnection;
  /** List of all ParagraphGallery on the platform. */
  paragraphGalleries: ParagraphGalleryConnection;
  /** List of all ParagraphHero on the platform. */
  paragraphHeroes: ParagraphHeroConnection;
  /** List of all ParagraphLogoCollection on the platform. */
  paragraphLogoCollections: ParagraphLogoCollectionConnection;
  /** List of all ParagraphMedia on the platform. */
  paragraphMediaItems: ParagraphMediaConnection;
  /** List of all ParagraphNewsletter on the platform. */
  paragraphNewsletters: ParagraphNewsletterConnection;
  /** List of all ParagraphQuote on the platform. */
  paragraphQuotes: ParagraphQuoteConnection;
  /** List of all ParagraphSidebyside on the platform. */
  paragraphSidebysides: ParagraphSidebysideConnection;
  /** List of all ParagraphStatsItem on the platform. */
  paragraphStatsItems: ParagraphStatsItemConnection;
  /** List of all ParagraphText on the platform. */
  paragraphTexts: ParagraphTextConnection;
  /** List of all ParagraphView on the platform. */
  paragraphViews: ParagraphViewConnection;
  /** Load a content preview. */
  preview?: Maybe<NodeUnion>;
  /** Recent content. */
  recentCardsArticleCards?: Maybe<RecentCardsArticleCardsResult>;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
  /** Load a Term entity by id. */
  term?: Maybe<TermUnion>;
  /** List of all TermAuthor on the platform. */
  termAuthors: TermAuthorConnection;
  /** List of all TermTag on the platform. */
  termTags: TermTagConnection;
  /** Load a User entity by id. */
  user?: Maybe<User>;
  /** List of all User on the platform. */
  users: UserConnection;
  /** Get information about the currently authenticated user. NULL if not logged in. */
  viewer?: Maybe<User>;
};


/** The schema's entry-point for queries. */
export type QueryMediaArgs = {
  id: Scalars['ID']['input'];
  revision?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryMediaImagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryMediaSvgImagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryMediaVideosArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryMenuArgs = {
  name: MenuAvailable;
};


/** The schema's entry-point for queries. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  revision?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryNodeArticlesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryNodeLandingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryNodePagesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphArgs = {
  id: Scalars['ID']['input'];
  revision?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphAccordionItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphAccordionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphBulletsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphCardGroupsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphCardsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphCarouselItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphCarouselsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphEmbedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphGalleriesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphHeroesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphLogoCollectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphMediaItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphNewslettersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphQuotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphSidebysidesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphStatsItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphTextsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryParagraphViewsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryPreviewArgs = {
  id: Scalars['ID']['input'];
  langcode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryRecentCardsArticleCardsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryRouteArgs = {
  path: Scalars['String']['input'];
};


/** The schema's entry-point for queries. */
export type QueryTermArgs = {
  id: Scalars['ID']['input'];
  revision?: InputMaybe<Scalars['ID']['input']>;
};


/** The schema's entry-point for queries. */
export type QueryTermAuthorsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryTermTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};


/** The schema's entry-point for queries. */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


/** The schema's entry-point for queries. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/** Recent content. */
export type RecentCardsArticleCardsResult = View & {
  __typename?: 'RecentCardsArticleCardsResult';
  /** The description of the view. */
  description?: Maybe<Scalars['String']['output']>;
  /** The machine name of the display. */
  display: Scalars['String']['output'];
  /** The ID of the view. */
  id: Scalars['ID']['output'];
  /** The human friendly label of the view. */
  label?: Maybe<Scalars['String']['output']>;
  /** The language code of the view. */
  langcode?: Maybe<Scalars['String']['output']>;
  /** Information about the page in the view. */
  pageInfo: ViewPageInfo;
  /** The results of the view. */
  results: Array<NodeUnion>;
  /** The machine name of the view. */
  view: Scalars['String']['output'];
};

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = MediaImage | MediaSvgImage | MediaVideo | NodeArticle | NodeLanding | NodePage | TermAuthor | TermTag;

/** Route outside of this website. */
export type RouteExternal = Route & {
  __typename?: 'RouteExternal';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route within this website. */
export type RouteInternal = Route & {
  __typename?: 'RouteInternal';
  /** Breadcrumb links for this route. */
  breadcrumbs?: Maybe<Array<Link>>;
  /** Content assigned to this route. */
  entity?: Maybe<RouteEntityUnion>;
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Redirect to another URL with status. */
export type RouteRedirect = Route & {
  __typename?: 'RouteRedirect';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean']['output'];
  /** Utility prop. Always true for redirects. */
  redirect: Scalars['Boolean']['output'];
  /** Suggested status for redirect. Eg 301. */
  status: Scalars['Int']['output'];
  /** URL of this route. */
  url: Scalars['String']['output'];
};

/** Route types that can exist in the system. */
export type RouteUnion = RouteExternal | RouteInternal | RouteRedirect;

/** A fragment representing a type within the schema. */
export type SchemaFragment = {
  __typename?: 'SchemaFragment';
  /** The bundle type of the fragment. */
  bundle?: Maybe<Scalars['String']['output']>;
  /** The base graphql type. */
  class: Scalars['String']['output'];
  /** The fragment content. */
  content?: Maybe<Scalars['String']['output']>;
  /** The list of fragments this fragment depends on. */
  dependencies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The entity type of the fragment. */
  entity?: Maybe<Scalars['String']['output']>;
  /** The name of the fragment. */
  name: Scalars['String']['output'];
  /** The scheme type of the fragment. */
  type: Scalars['String']['output'];
};

/** Schema information provided by the system. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** The schema description. */
  description?: Maybe<Scalars['String']['output']>;
  /** List of fragments available. */
  fragments: Array<SchemaFragment>;
  /** The internal path to the front page. */
  home?: Maybe<Scalars['String']['output']>;
  /** The schema version. */
  version?: Maybe<Scalars['String']['output']>;
};


/** Schema information provided by the system. */
export type SchemaInformationFragmentsArgs = {
  bundle?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  withDependencies?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Sort direction. */
export enum SortDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC'
}

/** The schema's entry-point for subscriptions. */
export type Subscription = {
  __typename?: 'Subscription';
  /** Placeholder for subscription extension. */
  _: Scalars['Boolean']['output'];
};

/** Content authors. */
export type TermAuthor = EdgeNode & MetaTagInterface & TermInterface & {
  __typename?: 'TermAuthor';
  /** The time that the term was last edited. */
  changed: DateTime;
  /** Description */
  description: Text;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The term language code. */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** The parents of this term. */
  parent?: Maybe<TermUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** The weight of this term in relation to other terms. */
  weight: Scalars['Int']['output'];
};

/** A paginated set of results for TermAuthor. */
export type TermAuthorConnection = Connection & {
  __typename?: 'TermAuthorConnection';
  edges: Array<TermAuthorEdge>;
  nodes: Array<TermAuthor>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for TermAuthor. */
export type TermAuthorEdge = Edge & {
  __typename?: 'TermAuthorEdge';
  cursor: Scalars['Cursor']['output'];
  node: TermAuthor;
};

/** Entity type taxonomy_term. */
export type TermInterface = {
  /** The time that the term was last edited. */
  changed: DateTime;
  /** Description */
  description: Text;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The term language code. */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** The parents of this term. */
  parent?: Maybe<TermUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** The weight of this term in relation to other terms. */
  weight: Scalars['Int']['output'];
};

/** Use tags to group articles on similar topics into categories. */
export type TermTag = EdgeNode & MetaTagInterface & TermInterface & {
  __typename?: 'TermTag';
  /** The time that the term was last edited. */
  changed: DateTime;
  /** Description */
  description: Text;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The term language code. */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String']['output'];
  /** The parents of this term. */
  parent?: Maybe<TermUnion>;
  /** URL alias */
  path: Scalars['String']['output'];
  /** Published */
  status: Scalars['Boolean']['output'];
  /** The weight of this term in relation to other terms. */
  weight: Scalars['Int']['output'];
};

/** A paginated set of results for TermTag. */
export type TermTagConnection = Connection & {
  __typename?: 'TermTagConnection';
  edges: Array<TermTagEdge>;
  nodes: Array<TermTag>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for TermTag. */
export type TermTagEdge = Edge & {
  __typename?: 'TermTagEdge';
  cursor: Scalars['Cursor']['output'];
  node: TermTag;
};

/** Entity type taxonomy_term. */
export type TermUnion = TermAuthor | TermTag;

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']['output']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']['output']>;
  /** The processed text summary. */
  summary?: Maybe<Scalars['Html']['output']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export type UnsupportedType = {
  __typename?: 'UnsupportedType';
  /** Unsupported type, always TRUE. */
  unsupported?: Maybe<Scalars['Boolean']['output']>;
};

/** Entity type user. */
export type User = EdgeNode & MetaTagInterface & UserInterface & {
  __typename?: 'User';
  /** The time that the user was last edited. */
  changed: DateTime;
  /** The time that the user was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The email of this user. */
  mail?: Maybe<Scalars['Email']['output']>;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** The name of this user. */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** The roles the user has. */
  roles?: Maybe<Array<Scalars['UserRoles']['output']>>;
  /** Whether the user is active or blocked. */
  status: UserStatus;
};

/** A paginated set of results for User. */
export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for User. */
export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['Cursor']['output'];
  node: User;
};

/** Entity type user. */
export type UserInterface = {
  /** The time that the user was last edited. */
  changed: DateTime;
  /** The time that the user was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID']['output'];
  /** The email of this user. */
  mail?: Maybe<Scalars['Email']['output']>;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** The name of this user. */
  name: Scalars['String']['output'];
  /** URL alias */
  path: Scalars['String']['output'];
  /** The roles the user has. */
  roles?: Maybe<Array<Scalars['UserRoles']['output']>>;
  /** Whether the user is active or blocked. */
  status: UserStatus;
};

/** Whether the user is active or blocked. */
export enum UserStatus {
  /** An active user is able to login on the platform and view content */
  Active = 'ACTIVE',
  /** A blocked user is unable to access the platform, although their content will still be visible until it's deleted. */
  Blocked = 'BLOCKED'
}

/** Entity type user. */
export type UserUnion = User;

/** Views represent collections of curated data from the CMS. */
export type View = {
  /** The description of the view. */
  description?: Maybe<Scalars['String']['output']>;
  /** The machine name of the display. */
  display: Scalars['String']['output'];
  /** The ID of the view. */
  id: Scalars['ID']['output'];
  /** The human friendly label of the view. */
  label?: Maybe<Scalars['String']['output']>;
  /** The language code of the view. */
  langcode?: Maybe<Scalars['String']['output']>;
  /** Information about the page in the view. */
  pageInfo: ViewPageInfo;
  /** The machine name of the view. */
  view: Scalars['String']['output'];
};

/** An exposed filter option for the view. */
export type ViewFilter = {
  __typename?: 'ViewFilter';
  /** The filter element attributes. */
  attributes: Scalars['UntypedStructuredData']['output'];
  /** The filter element description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The filter identifier. */
  id: Scalars['ID']['output'];
  /** The filter element label. */
  label?: Maybe<Scalars['String']['output']>;
  /** Whether the filter allows multiple values. */
  multiple: Scalars['Boolean']['output'];
  /** The filter element options if any are defined. */
  options?: Maybe<Scalars['UntypedStructuredData']['output']>;
  /** The filter plugin type. */
  plugin: Scalars['String']['output'];
  /** Whether the filter is required. */
  required: Scalars['Boolean']['output'];
  /** The filter field type. */
  type: Scalars['String']['output'];
  /** The value for the filter. Could be an array for multiple values. */
  value?: Maybe<Scalars['UntypedStructuredData']['output']>;
};

/** Information about the page in a view. */
export type ViewPageInfo = {
  __typename?: 'ViewPageInfo';
  /** Any result offset being used. */
  offset: Scalars['Int']['output'];
  /** The current page being returned. */
  page: Scalars['Int']['output'];
  /** How many results per page. */
  pageSize: Scalars['Int']['output'];
  /** How many results total. */
  total: Scalars['Int']['output'];
};

/** A reference to an embedded view */
export type ViewReference = {
  __typename?: 'ViewReference';
  /** The contextual filter values used. */
  contextualFilter?: Maybe<Array<Scalars['String']['output']>>;
  /** The machine name of the display. */
  display: Scalars['String']['output'];
  /** How many results per page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The name of the query used to fetch the data, if the view is a GraphQL display. */
  query?: Maybe<Scalars['String']['output']>;
  /** The machine name of the view. */
  view: Scalars['String']['output'];
};

/** All available view result types. */
export type ViewResultUnion = RecentCardsArticleCardsResult;

export type ParagraphTextFragmentFragment = { __typename?: 'ParagraphText', id: string, text: string };
