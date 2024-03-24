export interface Movie {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
}

export interface Credit {
  name: {
    id: string;
    nameText: {
      text: string;
      __typename: string;
    };
    __typename: string;
  };
  attributes: any;
  __typename: string;
}

export interface Creator {
  totalCredits: number;
  credits: Credit[];
  __typename: string;
}

export interface Actor {
  '@type': string;
  url: string;
  name: string;
}

export interface Creator {
  '@type': string;
  url: string;
  name?: string;
}

export interface Short {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: {
    '@type': string;
    itemReviewed: {
      '@type': string;
      url: string;
    };
    author: {
      '@type': string;
      name: string;
    };
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    reviewRating: {
      '@type': string;
      worstRating: 1;
      bestRating: 10;
      ratingValue: 9;
    };
  };
  aggregateRating: {
    '@type': string;
    ratingCount: 651212;
    bestRating: 10;
    worstRating: 1;
    ratingValue: 8.9;
  };
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  actor: Actor[];
  creator: Creator[];
  trailer: {
    '@type': string;
    name: string;
    embedUrl: string;
    thumbnail: {
      '@type': string;
      contentUrl: string;
    };
    thumbnailUrl: string;
    url: string;
    description: string;
    duration: string;
    uploadDate: string;
  };
}

export interface MovieInfoData {
  fake: {
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#RANK': number;
    '#ACTORS': string;
    '#AKA': string;
    '#IMDB_URL': string;
    '#IMDB_IV': string;
    '#IMG_POSTER': string;
    photo_width: number;
    photo_height: number;
  };
  imbdId: string;
  main: Main;
  titleText: {
    text: string;
    __typename: string;
  };
  short: Short;
}

export interface Season {
  number: number;
  __typename: string;
}

export interface Year {
  year: number;
  __typename: string;
}

export interface VideoStripEdge {
  node: {
    id: string;
    contentType: {
      displayName: {
        value: string;
        __typename: string;
      };
      __typename: string;
    };
    name: {
      value: string;
      __typename: string;
    };
    runtime: {
      value: number;
      __typename: string;
    };
    thumbnail: {
      height: number;
      url: string;
      width: number;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface TopMainImagesEdge {
  node: {
    id: string;
    url: string;
    caption: {
      plainText: string;
      __typename: string;
    };
    height: number;
    width: number;
    __typename: string;
  };
  __typename: string;
}

export interface ProductionStatusEdge {
  status: {
    id: string;
    text: string;
    __typename: string;
  };
  __typename: string;
}

export interface CastEdge {
  node: {
    name: {
      id: string;
      nameText: {
        text: string;
        __typename: string;
      };
      primaryImage: {
        url: string;
        width: number;
        height: number;
        __typename: string;
      };
      __typename: string;
    };
    attributes: null;
    category: {
      id: string;
      __typename: string;
    };
    characters: [
      {
        name: string;
        __typename: string;
      }
    ];
    episodeCredits: {
      total: number;
      yearRange: {
        year: number;
        endYear: number;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface MoreLikeThisEdge {
  node: {
    id: string;
    titleText: {
      text: string;
      __typename: string;
    };
    titleType: {
      id: string;
      text: string;
      canHaveEpisodes: true;
      displayableProperty: {
        value: {
          plainText: string;
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    originalTitleText: {
      text: string;
      __typename: string;
    };
    primaryImage: {
      id: string;
      width: number;
      height: number;
      url: string;
      caption: {
        plainText: string;
        __typename: string;
      };
      __typename: string;
    };
    releaseYear: {
      year: number;
      endYear: number;
      __typename: string;
    };
    ratingsSummary: {
      aggregateRating: number;
      voteCount: number;
      __typename: string;
    };
    runtime: {
      seconds: number;
      __typename: string;
    };
    certificate: {
      rating: string;
      __typename: string;
    };
    canRate: {
      isRatable: true;
      __typename: string;
    };
    titleGenres: {
      genres: [
        {
          genre: {
            text: string;
            __typename: string;
          };
          __typename: string;
        },
        {
          genre: {
            text: string;
            __typename: string;
          };
          __typename: string;
        },
        {
          genre: {
            text: string;
            __typename: string;
          };
          __typename: string;
        }
      ];
      __typename: string;
    };
    canHaveEpisodes: boolean;
    __typename: string;
  };
  __typename: string;
}

export interface FeaturedReviewEdge {
  node: {
    id: string;
    author: {
      nickName: string;
      userId: string;
      __typename: string;
    };
    summary: {
      originalText: string;
      __typename: string;
    };
    text: {
      originalText: {
        plaidHtml: string;
        __typename: string;
      };
      __typename: string;
    };
    authorRating: number;
    submissionDate: string;
    helpfulness: {
      upVotes: number;
      downVotes: number;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface TopRatedEdge {
  node: {
    ratingsSummary: {
      aggregateRating: number;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface CreatorMain {
  totalCredits: number;
  category: {
    text: string;
    __typename: string;
  };
  credits: Credit[];
  __typename: string;
}

export interface TriviaEdge {
  node: {
    text: {
      plaidHtml: string;
      __typename: string;
    };
    trademark: unknown;
    relatedNames: unknown;
    __typename: string;
  };
  __typename: string;
}

export interface GoofEdge {
  node: {
    text: {
      plaidHtml: string;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface Character {
  character: string;
  name: {
    id: string;
    __typename: string;
  };
  __typename: string;
}

export interface Line {
  characters: Character[];
  text: string;
  stageDirection: unknown;
  __typename: string;
}

export interface QuoteEdge {
  node: {
    lines: Line[];
    __typename: string;
  };
  __typename: string;
}

export interface ConnectionEdge {
  node: {
    associatedTitle: {
      id: string;
      releaseYear: {
        year: number;
        __typename: string;
      };
      titleText: {
        text: string;
        __typename: string;
      };
      originalTitleText: {
        text: string;
        __typename: string;
      };
      series: {
        series: {
          titleText: {
            text: string;
            __typename: string;
          };
          originalTitleText: {
            text: string;
            __typename: string;
          };
          __typename: string;
        };
        __typename: string;
      };
      __typename: string;
    };
    category: {
      text: string;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface SoundtrackEdge {
  node: {
    text: string;
    comments: {
      plaidHtml: string;
      __typename: string;
    }[];
    __typename: string;
  };
  __typename: string;
}

export interface FaqsEdge {
  node: {
    id: string;
    question: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface DetailsExternalLinksEdge {
  node: {
    url: string;
    label: string;
    externalLinkRegion: unknown;
    __typename: string;
  };
  __typename: string;
}

export interface SpokenLanguage {
  id: string;
  text: string;
  __typename: string;
}

export interface AkasEdge {
  node: {
    text: string;
    __typename: string;
  };
  __typename: string;
}

export interface FilmingLocationEdge {
  node: {
    text: string;
    location: string;
    attributes: [
      {
        text: string;
        __typename: string;
      }
    ];
    __typename: string;
  };
  __typename: string;
}

export interface ProductionEdge {
  node: {
    company: {
      id: string;
      companyText: {
        text: string;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
}

export interface TechnicalSpecs {
  soundMixes: {
    items: [
      {
        id: string;
        text: string;
        attributes: unknown[];
        __typename: string;
      }
    ];
    __typename: string;
  };
  aspectRatios: {
    items: [
      {
        aspectRatio: string;
        attributes: [];
        __typename: string;
      }
    ];
    __typename: string;
  };
  colorations: {
    items: [
      {
        conceptId: string;
        text: string;
        attributes: unknown[];
        __typename: string;
      }
    ];
    __typename: string;
  };
  __typename: string;
}

export interface Country {
  id: string;
  text: string;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  country: {
    id: string;
    text: string;
    __typename: string;
  };
  __typename: string;
}

export interface Main {
  id: string;
  wins: {
    total: number;
    __typename: string;
  };
  nominations: {
    total: number;
    __typename: string;
  };
  prestigiousAwardSummary: {
    nominations: number;
    wins: number;
    award: {
      text: string;
      id: string;
      event: {
        id: string;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  };
  ratingsSummary: {
    topRanking: {
      id: string;
      text: {
        value: string;
        __typename: string;
      };
      rank: number;
      __typename: string;
    };
    __typename: string;
  };
  episodes: {
    episodes: {
      total: number;
      __typename: string;
    };
    seasons: Season[];
    years: Year[];
    totalEpisodes: {
      total: number;
      __typename: string;
    };
    unknownSeasonEpisodes: {
      total: number;
      __typename: string;
    };
    topRated: {
      edges: TopRatedEdge[];
      __typename: string;
    };
    __typename: string;
  };
  videos: {
    total: number;
    __typename: string;
  };
  videoStrip: {
    edges: VideoStripEdge[];
    __typename: string;
  };
  titleMainImages: {
    total: number;
    edges: TopMainImagesEdge[];
    __typename: string;
  };
  productionStatus: {
    currentProductionStage: {
      id: string;
      text: string;
      __typename: string;
    };
    productionStatusHistory: ProductionStatusEdge[];
    restriction: any;
    __typename: string;
  };
  primaryImage: {
    id: string;
    __typename: string;
  };
  imageUploadLink: {
    url: string;
    __typename: string;
  };
  titleType: {
    id: string;
    canHaveEpisodes: boolean;
    __typename: string;
  };
  cast: {
    edges: CastEdge[];
    __typename: string;
  };
  creators: CreatorMain[];
  directors: unknown[];
  writers: unknown[];
  isAdult: boolean;
  moreLikeThisTitles: {
    edges: MoreLikeThisEdge[];
    __typename: string;
  };
  triviaTotal: {
    total: number;
    __typename: string;
  };
  trivia: {
    edges: TriviaEdge[];
    __typename: string;
  };
  goofsTotal: {
    total: number;
    __typename: string;
  };
  goofs: {
    edges: GoofEdge[];
    __typename: string;
  };
  quotesTotal: {
    total: number;
    __typename: string;
  };
  quotes: {
    edges: QuoteEdge[];
    __typename: string;
  };
  crazyCredits: {
    edges: unknown[];
    __typename: string;
  };
  alternateVersions: {
    total: number;
    edges: unknown[];
    __typename: string;
  };
  connections: {
    edges: ConnectionEdge[];
    __typename: string;
  };
  soundtrack: {
    edges: SoundtrackEdge[];
    __typename: string;
  };
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear: {
    year: number;
    __typename: string;
  };
  reviews: {
    total: number;
    __typename: string;
  };
  featuredReviews: {
    edges: FeaturedReviewEdge[];
    __typename: string;
  };
  canRate: {
    isRatable: true;
    __typename: string;
  };
  iframeAddReviewLink: {
    url: string;
    __typename: string;
  };
  topQuestions: {
    total: number;
    edges: unknown[];
    __typename: string;
  };
  faqs: {
    total: 16;
    edges: FaqsEdge[];
    __typename: string;
  };
  releaseDate: ReleaseDate;
  countriesOfOrigin: {
    countries: Country[];
    __typename: string;
  };
  detailsExternalLinks: {
    edges: DetailsExternalLinksEdge[];
    total: 2;
    __typename: string;
  };
  spokenLanguages: {
    spokenLanguages: SpokenLanguage[];
    __typename: string;
  };
  akas: {
    edges: AkasEdge[];
    __typename: string;
  };
  filmingLocations: {
    edges: FilmingLocationEdge[];
    total: 21;
    __typename: string;
  };
  production: {
    edges: ProductionEdge[];
    __typename: string;
  };
  companies: {
    total: 92;
    __typename: string;
  };
  productionBudget: unknown;
  lifetimeGross: unknown;
  openingWeekendGross: unknown;
  worldwideGross: unknown;
  technicalSpecifications: TechnicalSpecs;
}
