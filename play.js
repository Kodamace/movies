const data = {
  short: {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    url: 'https://www.imdb.com/title/tt0844441/',
    name: 'True Blood',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDVjZDQ2N2MtMzMxYy00ZjliLTg5YjAtNjk1OTUwYjVjNWQ0XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
    description:
      'Telepathic waitress Sookie Stackhouse encounters a strange new supernatural world when she meets the mysterious Bill Compton, a southern Louisiana gentleman and vampire.',
    review: {
      '@type': 'Review',
      itemReviewed: {
        '@type': 'TVSeries',
        url: 'https://www.imdb.com/title/tt0844441/',
      },
      author: {
        '@type': 'Person',
        name: 'yamaharacing16-124-656478',
      },
      dateCreated: '2019-07-19',
      inLanguage: 'English',
      name: 'Good show',
      reviewBody:
        'I loved this show when it first came out. I stuck with it for a while. I didn&apos;t like it got pretty weird and dragged on towards the later seasons.',
      reviewRating: {
        '@type': 'Rating',
        worstRating: 1,
        bestRating: 10,
        ratingValue: 7,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: 259369,
      bestRating: 10,
      worstRating: 1,
      ratingValue: 7.9,
    },
    contentRating: '12',
    genre: ['Drama', 'Fantasy', 'Mystery'],
    datePublished: '2008-12-23',
    keywords: 'human vampire relationship,vampire,shapeshifter,witch,blood',
    actor: [
      {
        '@type': 'Person',
        url: 'https://www.imdb.com/name/nm0001593/',
        name: 'Anna Paquin',
      },
      {
        '@type': 'Person',
        url: 'https://www.imdb.com/name/nm0610459/',
        name: 'Stephen Moyer',
      },
      {
        '@type': 'Person',
        url: 'https://www.imdb.com/name/nm0870794/',
        name: 'Sam Trammell',
      },
    ],
    creator: [
      {
        '@type': 'Organization',
        url: 'https://www.imdb.com/company/co0247237/',
      },
      {
        '@type': 'Organization',
        url: 'https://www.imdb.com/company/co0008693/',
      },
      {
        '@type': 'Person',
        url: 'https://www.imdb.com/name/nm0050332/',
        name: 'Alan Ball',
      },
    ],
    trailer: {
      '@type': 'VideoObject',
      name: 'Season 7',
      embedUrl: 'https://www.imdb.com/video/imdb/vi1494920473',
      thumbnail: {
        '@type': 'ImageObject',
        contentUrl:
          'https://m.media-amazon.com/images/M/MV5BOTgyNDcxMDkwOF5BMl5BanBnXkFtZTgwMDY4MjM4MTE@._V1_.jpg',
      },
      thumbnailUrl:
        'https://m.media-amazon.com/images/M/MV5BOTgyNDcxMDkwOF5BMl5BanBnXkFtZTgwMDY4MjM4MTE@._V1_.jpg',
      url: 'https://www.imdb.com/video/vi1494920473/',
      description:
        'Watch the full trailer for HBO&apos;s original series &quot;True Blood&quot;.',
      duration: 'PT1M36S',
      uploadDate: '2014-05-20T08:26:40Z',
    },
  },
  imdbId: 'tt0844441',
  top: {
    id: 'tt0844441',
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'pre_production',
            text: 'Pre-production',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'completed',
            text: 'Completed',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    canHaveEpisodes: true,
    series: null,
    titleText: {
      text: 'True Blood',
      __typename: 'TitleText',
    },
    titleType: {
      displayableProperty: {
        value: {
          plainText: 'TV Series',
          __typename: 'Markdown',
        },
        __typename: 'DisplayableTitleTypeProperty',
      },
      text: 'TV Series',
      id: 'tvSeries',
      isSeries: true,
      isEpisode: false,
      categories: [
        {
          value: 'tv',
          __typename: 'TitleTypeCategory',
        },
      ],
      canHaveEpisodes: true,
      __typename: 'TitleType',
    },
    originalTitleText: {
      text: 'True Blood',
      __typename: 'TitleText',
    },
    certificate: {
      rating: '12',
      __typename: 'Certificate',
    },
    releaseYear: {
      year: 2008,
      endYear: 2014,
      __typename: 'YearRange',
    },
    releaseDate: {
      day: 23,
      month: 12,
      year: 2008,
      __typename: 'ReleaseDate',
    },
    runtime: {
      seconds: 3300,
      displayableProperty: {
        value: {
          plainText: '55m',
          __typename: 'Markdown',
        },
        __typename: 'DisplayableTitleRuntimeProperty',
      },
      __typename: 'Runtime',
    },
    canRate: {
      isRatable: true,
      __typename: 'CanRate',
    },
    ratingsSummary: {
      aggregateRating: 7.9,
      voteCount: 259369,
      __typename: 'RatingsSummary',
    },
    meterRanking: {
      currentRank: 224,
      rankChange: {
        changeDirection: 'DOWN',
        difference: 21,
        __typename: 'MeterRankChange',
      },
      __typename: 'TitleMeterRanking',
    },
    primaryImage: {
      id: 'rm3383515648',
      width: 750,
      height: 1124,
      url: 'https://m.media-amazon.com/images/M/MV5BMDVjZDQ2N2MtMzMxYy00ZjliLTg5YjAtNjk1OTUwYjVjNWQ0XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
      caption: {
        plainText:
          'Anna Paquin, Ryan Kwanten, Stephen Moyer, Sam Trammell, Nelsan Ellis, and Rutina Wesley in True Blood (2008)',
        __typename: 'Markdown',
      },
      __typename: 'Image',
    },
    images: {
      total: 2249,
      edges: [
        {
          node: {
            id: 'rm9063680',
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    videos: {
      total: 43,
      __typename: 'TitleRelatedVideosConnection',
    },
    primaryVideos: {
      edges: [
        {
          node: {
            id: 'vi1494920473',
            createdDate: '2014-05-20T08:26:40Z',
            isMature: false,
            runtime: {
              value: 96,
              __typename: 'VideoRuntime',
            },
            name: {
              value: 'Season 7',
              language: 'en',
              __typename: 'LocalizedString',
            },
            description: {
              value:
                'Watch the full trailer for HBO\'s original series "True Blood".',
              language: 'en',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BOTgyNDcxMDkwOF5BMl5BanBnXkFtZTgwMDY4MjM4MTE@._V1_.jpg',
              height: 480,
              width: 640,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt0844441',
              titleText: {
                text: 'True Blood',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'True Blood',
                __typename: 'TitleText',
              },
              releaseYear: {
                year: 2008,
                __typename: 'YearRange',
              },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi1494920473/MV5BMjE3NDc3OTA1Ml5BMTFeQW1wNF5BbWU4MDA0ODIzODEx.mp4?Expires=1711293343&Signature=usFeYpexonj~K-PBvdyTYs6-JagwGHMUlktqA8h5EepceSB4rC7kWkeU~4rMhLqzPjgwV4XmoY2iOMIxlHVlk-U2BFTUGbp~GdhbeSyg3TsW~09NZfQRhVxUXRy98repPcl2ECGt1qLYPMxa3Vr5lpg8RftZRU5LGWrqzKNuZDVWVIQln03yWLpKo693p0uWrSPXFBh8z7581kj9PdUV-Ny6nkDih7FBBsYVQzSTWJ8fNNSX3i98Yf-FK-ydZxqYmTuQVDgwgnd6f63kvtqkZhaGRqgjUvPACuKUKBoOT5TbPjxsAwHhg~gQ7KQilvsJ1ZRelvZp1Y4j3-MGA9cppA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi1494920473/MV5BOTc1MzQzMzM3N15BMTFeQW1wNF5BbWU4MDczODIzODEx.mp4?Expires=1711293343&Signature=Szlx76B7coxapwX8VvzAr1Ako6ow0aU-2KSF9OspbtkLs-dm45pNWNwMKGWQMomU8F3GE~hGPyqJhmM-CvxOMsYkd64FcsUyoYwgqZpoFnNvH8C1jGYPMcobSCZzgKbFC4-iajfzJoPXj4zYtGzv4991YzeYVjZJ7jSv-Hul2URLFJ6XP8ngM7HYKHIl0lXk9zb5YKS8PQBO~WvfmwmHKvvcYaSP~anrU9FBfNGknabZy0aVEa4srv25qsbf8qHJBqhk3FMd1DBd7NeyBKkQElNTfbi4q9qeDmxFNuo2-s7emseG~QyuB-IPHNmE0ADhAHN-~eXgbGDJ8PtLbZz8yw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: {
                value: 'Trailer',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            previewURLs: [
              {
                displayName: {
                  value: 'AUTO',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'M3U8',
                videoDefinition: 'DEF_AUTO',
                url: 'https://imdb-video.media-imdb.com/vi1494920473/hls-preview-e3589273-3886-4940-bbdc-54604c48d959.m3u8?Expires=1711293343&Signature=pRNWVKj9BOO6iwd46O~TyDlzRHhE~vDTdTCLw9jRYBHQwHb78PrUn4ciAbRd-sJakOXu0vq3vMRejA~7TXmR5kVf8Ibp81Q3aXxg8z~3S1ZLqm2FQ8M458fJ7g2iTz5QEHKlRKzlphke-cAcburYrxwz4isRSvZ7sDtdY6S8DXuOOS5uBQq66~AeMHA8aU1ksPSc2wI13jPT2DuuZ~CgTs23p4lPfScJ4BakzJimXqJjjYuli2O8kd0UxfxkpWhMM3qcJdO4Q4jYEFHZjzL9MvDGMf2XEw5smq5WLg~Gdcqwzx2NniflACRf3xmBCpec9~HLuV23k84f0hqLNyiShg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1894231321',
            createdDate: '2014-04-22T09:44:16Z',
            isMature: false,
            runtime: {
              value: 35,
              __typename: 'VideoRuntime',
            },
            name: {
              value: 'Clip Tease',
              language: 'en',
              __typename: 'LocalizedString',
            },
            description: {
              value: 'Watch scene from the final season of "True Blood".',
              language: 'en',
              __typename: 'LocalizedString',
            },
            timedTextTracks: [],
            recommendedTimedTextTrack: null,
            thumbnail: {
              url: 'https://m.media-amazon.com/images/M/MV5BMTQyNTMyMTc5MF5BMl5BanBnXkFtZTgwODIwNTQ2MTE@._V1_.jpg',
              height: 480,
              width: 640,
              __typename: 'Thumbnail',
            },
            primaryTitle: {
              id: 'tt0844441',
              titleText: {
                text: 'True Blood',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'True Blood',
                __typename: 'TitleText',
              },
              releaseYear: {
                year: 2008,
                __typename: 'YearRange',
              },
              __typename: 'Title',
            },
            playbackURLs: [
              {
                displayName: {
                  value: '480p',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_480p',
                url: 'https://imdb-video.media-imdb.com/vi1894231321/MV5BNzA2MDc4NDgxOV5BMTFeQW1wNF5BbWU4MDI2NjQ0NjEx.mp4?Expires=1711293343&Signature=pTdY~5yEsyOuNtkIjOCVZOZtULxW1BYKj4AhEgDd~Pj01XZjcVM6tfrSz3Hlow256JMVfgULR-PdRvPKGCTSmruhT5njPcBfBUym1DCDXJTOTtPb0J5GvgD8uhsecyTFN95i1TqxM1Y3KqccOC5499xh2JSULttqcRHJEjZEUxfz7GnHK2Q3cOGESC36Ojm9qV3T8nDLLrjaHQUt8ldKj9tcVSoXOKyqfaJ~Nwt350O-mk2CZdrK2d2PaRPQObtTY488KOBgDDcGgNbh-AxMODMJBImorADqDkWxwg~WnAjlzDbeM8TY6YivEGT~~GN9KaJlB-oDDHZWni9w2sBneg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
              {
                displayName: {
                  value: 'SD',
                  language: 'en-US',
                  __typename: 'LocalizedString',
                },
                videoMimeType: 'MP4',
                videoDefinition: 'DEF_SD',
                url: 'https://imdb-video.media-imdb.com/vi1894231321/MV5BMTQ1NTIxOTc4NF5BMTFeQW1wNF5BbWU4MDg1NjQ0NjEx.mp4?Expires=1711293343&Signature=WOZiNRbPtJxWphmKEKqRGBXbKno8Zv-Lx632~TlFGFwX3PTb5-MaeaeclS4e8fy9HNYxBHWGCNr3VNqPhQxdSAdmlI72dcii282b1cdGB5vG4JSAcZ8XfXAOkH3-7vKpWTvlQ6bLnMLciQGgZIvwWZGhqpqQ1DYFA1y2jcCmRu8I0JQq4fTXkWJ5bnf8UvYQ-33FLfUYCFA8NvY7Syv0srOjV6nE2tefkkrXea~6a9RyY1bTQNJrUybxujRXI4kn45037nnsM1nV1ktNgn0BV1IhfrvcCBXrHnPuBMJjVXDsYmukpUaXowk2BQj5nKePJcv9l2~7Usbfr2bafH0rAQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
                __typename: 'PlaybackURL',
              },
            ],
            contentType: {
              id: 'amzn1.imdb.video.contenttype.trailer',
              displayName: {
                value: 'Trailer',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            previewURLs: [],
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    externalLinks: {
      total: 260,
      __typename: 'ExternalLinkConnection',
    },
    metacritic: null,
    keywords: {
      total: 176,
      edges: [
        {
          node: {
            text: 'human vampire relationship',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'vampire',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'shapeshifter',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'witch',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            text: 'blood',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
      ],
      __typename: 'TitleKeywordConnection',
    },
    genres: {
      genres: [
        {
          text: 'Drama',
          id: 'Drama',
          __typename: 'Genre',
        },
        {
          text: 'Fantasy',
          id: 'Fantasy',
          __typename: 'Genre',
        },
        {
          text: 'Mystery',
          id: 'Mystery',
          __typename: 'Genre',
        },
        {
          text: 'Romance',
          id: 'Romance',
          __typename: 'Genre',
        },
        {
          text: 'Thriller',
          id: 'Thriller',
          __typename: 'Genre',
        },
      ],
      __typename: 'Genres',
    },
    plot: {
      plotText: {
        plainText:
          'Telepathic waitress Sookie Stackhouse encounters a strange new supernatural world when she meets the mysterious Bill Compton, a southern Louisiana gentleman and vampire.',
        __typename: 'Markdown',
      },
      language: {
        id: 'en-US',
        __typename: 'DisplayableLanguage',
      },
      __typename: 'Plot',
    },
    plotContributionLink: {
      url: 'https://contribute.imdb.com/updates?update=tt0844441:outlines.add.1.locale~en-US',
      __typename: 'ContributionLink',
    },
    credits: {
      total: 3147,
      __typename: 'CreditConnection',
    },
    principalCredits: [
      {
        totalCredits: 2,
        category: {
          text: 'Creator',
          id: 'creator',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: {
                text: 'Alan Ball',
                __typename: 'NameText',
              },
              id: 'nm0050332',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
      {
        totalCredits: 839,
        category: {
          text: 'Stars',
          id: 'cast',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              nameText: {
                text: 'Anna Paquin',
                __typename: 'NameText',
              },
              id: 'nm0001593',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: {
                text: 'Stephen Moyer',
                __typename: 'NameText',
              },
              id: 'nm0610459',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
          {
            name: {
              nameText: {
                text: 'Sam Trammell',
                __typename: 'NameText',
              },
              id: 'nm0870794',
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Cast',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    reviews: {
      total: 418,
      __typename: 'ReviewsConnection',
    },
    criticReviewsTotal: {
      total: 197,
      __typename: 'ExternalLinkConnection',
    },
    triviaTotal: {
      total: 55,
      __typename: 'TriviaConnection',
    },
    engagementStatistics: {
      watchlistStatistics: {
        displayableCount: {
          text: 'Added by 237K users',
          __typename: 'LocalizedDisplayableCount',
        },
        __typename: 'WatchlistStatistics',
      },
      __typename: 'EngagementStatistics',
    },
    subNavCredits: {
      total: 3147,
      __typename: 'CreditConnection',
    },
    subNavReviews: {
      total: 418,
      __typename: 'ReviewsConnection',
    },
    subNavTrivia: {
      total: 55,
      __typename: 'TriviaConnection',
    },
    subNavFaqs: {
      total: 17,
      __typename: 'FaqConnection',
    },
    subNavTopQuestions: {
      total: 0,
      __typename: 'AlexaQuestionConnection',
    },
    titleGenres: {
      genres: [
        {
          genre: {
            text: 'Drama',
            __typename: 'GenreItem',
          },
          __typename: 'TitleGenre',
        },
        {
          genre: {
            text: 'Fantasy',
            __typename: 'GenreItem',
          },
          __typename: 'TitleGenre',
        },
        {
          genre: {
            text: 'Mystery',
            __typename: 'GenreItem',
          },
          __typename: 'TitleGenre',
        },
      ],
      __typename: 'TitleGenres',
    },
    meta: {
      canonicalId: 'tt0844441',
      publicationStatus: 'PUBLISHED',
      __typename: 'TitleMeta',
    },
    castPageTitle: {
      edges: [
        {
          node: {
            name: {
              id: 'nm0001593',
              nameText: {
                text: 'Anna Paquin',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0610459',
              nameText: {
                text: 'Stephen Moyer',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0870794',
              nameText: {
                text: 'Sam Trammell',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0477127',
              nameText: {
                text: 'Ryan Kwanten',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creatorsPageTitle: [
      {
        credits: [
          {
            name: {
              id: 'nm0050332',
              nameText: {
                text: 'Alan Ball',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    directorsPageTitle: [],
    countriesOfOrigin: {
      countries: [
        {
          id: 'US',
          __typename: 'CountryOfOrigin',
        },
      ],
      __typename: 'CountriesOfOrigin',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0247237',
              companyText: {
                text: 'Your Face Goes Here Entertainment',
                __typename: 'CompanyText',
              },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
        {
          node: {
            company: {
              id: 'co0008693',
              companyText: {
                text: 'Home Box Office (HBO)',
                __typename: 'CompanyText',
              },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            author: {
              nickName: 'yamaharacing16-124-656478',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'Good show',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plainText:
                  "I loved this show when it first came out. I stuck with it for a while. I didn't like it got pretty weird and dragged on towards the later seasons.",
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 7,
            submissionDate: '2019-07-19',
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    __typename: 'Title',
  },
  main: {
    id: 'tt0844441',
    wins: {
      total: 39,
      __typename: 'AwardNominationConnection',
    },
    nominations: {
      total: 158,
      __typename: 'AwardNominationConnection',
    },
    prestigiousAwardSummary: {
      nominations: 15,
      wins: 1,
      award: {
        text: 'Primetime Emmy',
        id: 'aw0002214',
        event: {
          id: 'ev0000223',
          __typename: 'AwardsEvent',
        },
        __typename: 'AwardDetails',
      },
      __typename: 'PrestigiousAwardSummary',
    },
    ratingsSummary: {
      topRanking: {
        id: 'topRatedTv:tt0844441:en_US',
        text: {
          value: 'Top Rated TV',
          __typename: 'LocalizedString',
        },
        rank: 999,
        __typename: 'TopRanking',
      },
      __typename: 'RatingsSummary',
    },
    episodes: {
      episodes: {
        total: 81,
        __typename: 'EpisodeConnection',
      },
      seasons: [
        {
          number: 1,
          __typename: 'EpisodesSeason',
        },
        {
          number: 2,
          __typename: 'EpisodesSeason',
        },
        {
          number: 3,
          __typename: 'EpisodesSeason',
        },
        {
          number: 4,
          __typename: 'EpisodesSeason',
        },
        {
          number: 5,
          __typename: 'EpisodesSeason',
        },
        {
          number: 6,
          __typename: 'EpisodesSeason',
        },
        {
          number: 7,
          __typename: 'EpisodesSeason',
        },
      ],
      years: [
        {
          year: 2008,
          __typename: 'EpisodesYear',
        },
        {
          year: 2009,
          __typename: 'EpisodesYear',
        },
        {
          year: 2010,
          __typename: 'EpisodesYear',
        },
        {
          year: 2011,
          __typename: 'EpisodesYear',
        },
        {
          year: 2012,
          __typename: 'EpisodesYear',
        },
        {
          year: 2013,
          __typename: 'EpisodesYear',
        },
        {
          year: 2014,
          __typename: 'EpisodesYear',
        },
      ],
      totalEpisodes: {
        total: 81,
        __typename: 'EpisodeConnection',
      },
      unknownSeasonEpisodes: {
        total: 0,
        __typename: 'EpisodeConnection',
      },
      topRated: {
        edges: [
          {
            node: {
              ratingsSummary: {
                aggregateRating: 8.8,
                __typename: 'RatingsSummary',
              },
              __typename: 'Title',
            },
            __typename: 'EpisodeEdge',
          },
        ],
        __typename: 'EpisodeConnection',
      },
      __typename: 'Episodes',
    },
    videos: {
      total: 43,
      __typename: 'TitleRelatedVideosConnection',
    },
    videoStrip: {
      edges: [
        {
          node: {
            id: 'vi971882009',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'What Roles Has Evan Rachel Wood Turned Down?',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 172,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BNzMwMmM3ZWEtNGI1NS00Mzc3LWFjNmEtZGFiNGE2ZDNmMzRkXkEyXkFqcGdeQWFybm8@._V1_.jpg',
              width: 1280,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2792991769',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Thank You',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 48,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BMjA3ODc5OTM0MF5BMl5BanBnXkFtZTgwNDA1MjAzMzE@._V1_.jpg',
              width: 1280,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi3708529689',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Love Is to Die',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 50,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BMTUwNzM0NzE0NF5BMl5BanBnXkFtZTgwODg1MTY0MjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi4129729561',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'May Be the Last Time',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 17,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTQ3NjQ2OF5BMl5BanBnXkFtZTgwMjEwOTAyMzE@._V1_.jpg',
              width: 1280,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi4090145817',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Episode 7',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 39,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BNjE3OTgxNjcxMl5BMl5BanBnXkFtZTgwNzA1OTcyMjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi333425689',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Return to Oz',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 37,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BMjI3MjU3Njk2M15BMl5BanBnXkFtZTgwNjE2NzMyMjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi1794681881',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Episode 3',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 34,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BMTkzOTAzMTg3Nl5BMl5BanBnXkFtZTgwMjM0NjkyMzE@._V1_.jpg',
              width: 1280,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi3734219801',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: '"Please, Let Me Help"',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 57,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BNzkzMDE0OTgwNF5BMl5BanBnXkFtZTgwOTk2OTQwMjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi3717442585',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: '"It\'s Because of My Blood, Right?',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 60,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BMjIzMTk1MTMyMV5BMl5BanBnXkFtZTgwNTg2OTQwMjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi3700665369',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: '"It\'s Not Safe Here"',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 23,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BMjA5ODY5MzU1N15BMl5BanBnXkFtZTgwNTk1OTQwMjE@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2127275289',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Sam Faces Bill',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 30,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BMTY4Mzg1MDA1M15BMl5BanBnXkFtZTgwMTA1MDkyMzE@._V1_.jpg',
              width: 1280,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
        {
          node: {
            id: 'vi2975965721',
            contentType: {
              displayName: {
                value: 'Clip',
                __typename: 'LocalizedString',
              },
              __typename: 'VideoContentType',
            },
            name: {
              value: 'Dinner with Arlene, Terry and Patrick',
              __typename: 'LocalizedString',
            },
            runtime: {
              value: 44,
              __typename: 'VideoRuntime',
            },
            thumbnail: {
              height: 480,
              url: 'https://m.media-amazon.com/images/M/MV5BMjI5MjE1ODgyNF5BMl5BanBnXkFtZTcwNjA4MDI5Nw@@._V1_.jpg',
              width: 640,
              __typename: 'Thumbnail',
            },
            __typename: 'Video',
          },
          __typename: 'VideoEdge',
        },
      ],
      __typename: 'VideoConnection',
    },
    titleMainImages: {
      total: 2249,
      edges: [
        {
          node: {
            id: 'rm9063680',
            url: 'https://m.media-amazon.com/images/M/MV5BNTE0NzMxMjU5MV5BMl5BanBnXkFtZTgwOTQzNjc0NTM@._V1_.jpg',
            caption: {
              plainText: 'Alexandra Breckenridge in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 2048,
            width: 1444,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2740583424',
            url: 'https://m.media-amazon.com/images/M/MV5BMzE1OTk5MTMyNF5BMl5BanBnXkFtZTgwOTcwODQxNDE@._V1_.jpg',
            caption: {
              plainText:
                'Alexander Skarsgård and Allan Hyde in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 5616,
            width: 3744,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2807692288',
            url: 'https://m.media-amazon.com/images/M/MV5BMTU0NjE5NTI1Nl5BMl5BanBnXkFtZTgwNjUwODQxNDE@._V1_.jpg',
            caption: {
              plainText: 'Allan Hyde in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 2100,
            width: 1400,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm283572736',
            url: 'https://m.media-amazon.com/images/M/MV5BMzU0OTE5Mjg2Ml5BMl5BanBnXkFtZTgwNzY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Anna Paquin in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm333904384',
            url: 'https://m.media-amazon.com/images/M/MV5BNTY4MjY2NDYyM15BMl5BanBnXkFtZTgwODY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Jessica Tuck in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm317127168',
            url: 'https://m.media-amazon.com/images/M/MV5BNDkzNjcwNzY0M15BMl5BanBnXkFtZTgwOTY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Anna Paquin in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm300349952',
            url: 'https://m.media-amazon.com/images/M/MV5BMjIzMDAxNzk3NV5BMl5BanBnXkFtZTgwMDc0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Jim Parrack in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm401013248',
            url: 'https://m.media-amazon.com/images/M/MV5BMTU2ODYyNTI1NV5BMl5BanBnXkFtZTgwNDY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Karolina Wydra in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm384236032',
            url: 'https://m.media-amazon.com/images/M/MV5BNzk5ODY5MTY1MV5BMl5BanBnXkFtZTgwNTY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Will Yun Lee in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm166132224',
            url: 'https://m.media-amazon.com/images/M/MV5BODE3MjA4Nzk0MV5BMl5BanBnXkFtZTgwMTY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Ashley Hinshaw in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm149355008',
            url: 'https://m.media-amazon.com/images/M/MV5BMTk1MjMwOTAyNF5BMl5BanBnXkFtZTgwMjY0NDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Kristin Bauer in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm3269786112',
            url: 'https://m.media-amazon.com/images/M/MV5BMTU5MDEzOTE0Nl5BMl5BanBnXkFtZTgwNTMwNDc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Ryan Kwanten in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
        {
          node: {
            id: 'rm2447636992',
            url: 'https://m.media-amazon.com/images/M/MV5BMTU3NzY3OTMyN15BMl5BanBnXkFtZTgwNzc1Mzc5MjE@._V1_.jpg',
            caption: {
              plainText: 'Nathan Parsons in True Blood (2008)',
              __typename: 'Markdown',
            },
            height: 375,
            width: 500,
            __typename: 'Image',
          },
          __typename: 'ImageEdge',
        },
      ],
      __typename: 'ImageConnection',
    },
    productionStatus: {
      currentProductionStage: {
        id: 'released',
        text: 'Released',
        __typename: 'ProductionStage',
      },
      productionStatusHistory: [
        {
          status: {
            id: 'pre_production',
            text: 'Pre-production',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'filming',
            text: 'Filming',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'completed',
            text: 'Completed',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
        {
          status: {
            id: 'released',
            text: 'Released',
            __typename: 'ProductionStatus',
          },
          __typename: 'ProductionStatusHistory',
        },
      ],
      restriction: null,
      __typename: 'ProductionStatusDetails',
    },
    primaryImage: {
      id: 'rm3383515648',
      __typename: 'Image',
    },
    imageUploadLink: {
      url: 'https://contribute.imdb.com/image/tt0844441/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    titleType: {
      id: 'tvSeries',
      canHaveEpisodes: true,
      __typename: 'TitleType',
    },
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm0001593',
              nameText: {
                text: 'Anna Paquin',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTcxNzM2NjMzNl5BMl5BanBnXkFtZTgwOTE2Njk0MjE@._V1_.jpg',
                width: 634,
                height: 482,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Sookie Stackhouse',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0610459',
              nameText: {
                text: 'Stephen Moyer',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNGI3ZGViMGQtMThmMS00MDQxLWI2MjYtOTU1Zjk5YjhlZTBkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
                width: 727,
                height: 989,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Bill Compton',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0870794',
              nameText: {
                text: 'Sam Trammell',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMmJkMWZiY2QtNWM0My00NmIzLTkxM2MtODFiNTUwOTRjYjBiXkEyXkFqcGdeQXVyNjQ3NDAwOTA@._V1_.jpg',
                width: 3030,
                height: 3876,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Sam Merlotte',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0477127',
              nameText: {
                text: 'Ryan Kwanten',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYjZlZTc2YTktM2IyZC00NjI2LWEyODQtY2IzYjA3OTI0ZjQ2XkEyXkFqcGdeQXVyNjY5NDgzNjQ@._V1_.jpg',
                width: 2187,
                height: 3072,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Jason Stackhouse',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0061777',
              nameText: {
                text: 'Chris Bauer',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjM5YmRkNTItNWY3Ny00NTc5LWFmOGMtYmQxNzUyMWZkZDY5XkEyXkFqcGdeQXVyOTY2MjIzMA@@._V1_.jpg',
                width: 3992,
                height: 5976,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Andy Bellefleur',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm1734700',
              nameText: {
                text: 'Nelsan Ellis',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjA1ODI2NDI5MV5BMl5BanBnXkFtZTcwNDY4NDk0Mg@@._V1_.jpg',
                width: 288,
                height: 400,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Lafayette Reynolds',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0696387',
              nameText: {
                text: 'Carrie Preston',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYWY5Y2M3YzAtY2U2NC00ZjcyLWI2YmUtNzZiNzQ5NzhiZDYwXkEyXkFqcGdeQXVyMTM3NDg0NDM@._V1_.jpg',
                width: 960,
                height: 1050,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Arlene Fowler',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 81,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm2179180',
              nameText: {
                text: 'Rutina Wesley',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTgyMTc2MjE1NV5BMl5BanBnXkFtZTcwNjkyMDI5Mg@@._V1_.jpg',
                width: 274,
                height: 400,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Tara Thornton',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 80,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0002907',
              nameText: {
                text: 'Alexander Skarsgård',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTY1MjQxNjEzOF5BMl5BanBnXkFtZTgwMTU5ODM2ODE@._V1_.jpg',
                width: 1360,
                height: 2048,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Eric Northman',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 76,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm2832695',
              nameText: {
                text: 'Deborah Ann Woll',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjE2NjA4NzYyMV5BMl5BanBnXkFtZTcwODEwNjQyMw@@._V1_.jpg',
                width: 336,
                height: 400,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Jessica Hamby',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 71,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0061877',
              nameText: {
                text: 'Kristin Bauer',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjE4NzE2MTgwOF5BMl5BanBnXkFtZTgwNDYxMjQwNDE@._V1_.jpg',
                width: 720,
                height: 1250,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Pam De Beaufort',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 67,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm1747924',
              nameText: {
                text: 'Jim Parrack',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTg4MTIwODQ5NF5BMl5BanBnXkFtZTcwMjQ5OTI5Nw@@._V1_.jpg',
                width: 1463,
                height: 2048,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Hoyt Fortenberry',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 66,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0523067',
              nameText: {
                text: 'Todd Lowe',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTM0MDAxMjgzM15BMl5BanBnXkFtZTcwNDM2Njc4Nw@@._V1_.jpg',
                width: 1329,
                height: 2048,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Terry Bellefleur',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 66,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0101242',
              nameText: {
                text: 'Lauren Bowles',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjAxMTg5ODc2NF5BMl5BanBnXkFtZTgwMDc1NTcwMDI@._V1_.jpg',
                width: 2400,
                height: 3600,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Holly Cleary',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 48,
              yearRange: {
                year: 2010,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0542133',
              nameText: {
                text: 'Joe Manganiello',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BOWI2MDE4YzAtZjQ5MS00NzdjLWFiYTEtZDUyMmM2OTdkNDA4XkEyXkFqcGdeQXVyMjY2OTExNA@@._V1_.jpg',
                width: 620,
                height: 889,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Alcide Herveaux',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 42,
              yearRange: {
                year: 2010,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0761836',
              nameText: {
                text: 'William Sanderson',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjI0NjIxMjMwN15BMl5BanBnXkFtZTcwMDk1NzgzOQ@@._V1_.jpg',
                width: 811,
                height: 1050,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Sheriff Bud Dearborne',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 39,
              yearRange: {
                year: 2008,
                endYear: 2012,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0573354',
              nameText: {
                text: 'Michael McMillian',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTVjYjY5N2YtODExZS00MTY1LWIzYzItOTJlYWIzMzdlNDQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
                width: 2400,
                height: 3600,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actor',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Steve Newlin',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 38,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
        {
          node: {
            name: {
              id: 'nm0692013',
              nameText: {
                text: 'Adina Porter',
                __typename: 'NameText',
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjEyOTc1OTUyNF5BMl5BanBnXkFtZTgwOTgzOTgxNjM@._V1_.jpg',
                width: 1248,
                height: 702,
                __typename: 'Image',
              },
              __typename: 'Name',
            },
            attributes: null,
            category: {
              id: 'actress',
              __typename: 'CreditCategory',
            },
            characters: [
              {
                name: 'Lettie Mae Thornton',
                __typename: 'Character',
              },
            ],
            episodeCredits: {
              total: 32,
              yearRange: {
                year: 2008,
                endYear: 2014,
                __typename: 'YearRange',
              },
              __typename: 'EpisodeCastConnection',
            },
            __typename: 'Cast',
          },
          __typename: 'CreditEdge',
        },
      ],
      __typename: 'CreditConnection',
    },
    creators: [
      {
        totalCredits: 2,
        category: {
          text: 'Creator',
          __typename: 'CreditCategory',
        },
        credits: [
          {
            name: {
              id: 'nm0050332',
              nameText: {
                text: 'Alan Ball',
                __typename: 'NameText',
              },
              __typename: 'Name',
            },
            attributes: null,
            __typename: 'Crew',
          },
        ],
        __typename: 'PrincipalCreditsForCategory',
      },
    ],
    directors: [],
    writers: [],
    isAdult: false,
    moreLikeThisTitles: {
      edges: [
        {
          node: {
            id: 'tt1843230',
            titleText: {
              text: 'Once Upon a Time',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Once Upon a Time',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1938049536',
              width: 1944,
              height: 2880,
              url: 'https://m.media-amazon.com/images/M/MV5BNjBmZmI0ZDktODI2MS00MDU1LTk0NDYtNGE0MDc0OWVkYzcwXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg',
              caption: {
                plainText: 'Dania Ramirez in Once Upon a Time (2011)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2011,
              endYear: 2018,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.7,
              voteCount: 236374,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 3600,
              __typename: 'Runtime',
            },
            certificate: {
              rating: 'Tous publics',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Adventure',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Romance',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt0813715',
            titleText: {
              text: 'Heroes',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Heroes',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm65535488',
              width: 484,
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BMjI3ODU0OTQ1MV5BMl5BanBnXkFtZTgwNzI0MTQ2MzE@._V1_.jpg',
              caption: {
                plainText:
                  'Ali Larter, Hayden Panettiere, Sendhil Ramamurthy, Milo Ventimiglia, Noah Gray-Cabey, and James Kyson in Heroes (2006)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2006,
              endYear: 2010,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.5,
              voteCount: 250993,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2700,
              __typename: 'Runtime',
            },
            certificate: {
              rating: 'Tous publics',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Sci-Fi',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt1405406',
            titleText: {
              text: 'Vampire Diaries',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'The Vampire Diaries',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm291273984',
              width: 680,
              height: 1000,
              url: 'https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
              caption: {
                plainText:
                  'Ian Somerhalder, Paul Wesley, and Nina Dobrev in Vampire Diaries (2009)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2009,
              endYear: 2017,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.7,
              voteCount: 348095,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2580,
              __typename: 'Runtime',
            },
            certificate: {
              rating: '10',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Horror',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt0118276',
            titleText: {
              text: 'Buffy contre les vampires',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Buffy the Vampire Slayer',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm2126983424',
              width: 500,
              height: 735,
              url: 'https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
              caption: {
                plainText:
                  'Sarah Michelle Gellar in Buffy contre les vampires (1997)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 1997,
              endYear: 2003,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 8.3,
              voteCount: 159015,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2640,
              __typename: 'Runtime',
            },
            certificate: {
              rating: '10',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Action',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt2632424',
            titleText: {
              text: 'The Originals',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'The Originals',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3180033792',
              width: 1000,
              height: 1500,
              url: 'https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
              caption: {
                plainText:
                  'Daniel Gillies, Joseph Morgan, Charles Michael Davis, and Claire Holt in The Originals (2013)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2013,
              endYear: 2018,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 8.3,
              voteCount: 147132,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2700,
              __typename: 'Runtime',
            },
            certificate: {
              rating: '10',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Horror',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt7569592',
            titleText: {
              text: 'Les Nouvelles Aventures de Sabrina',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Chilling Adventures of Sabrina',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm2552264448',
              width: 1500,
              height: 2222,
              url: 'https://m.media-amazon.com/images/M/MV5BZTcxNjI4MjItMDBjZi00MDcxLThhZjgtZDM2NWQyNmFjMDVhXkEyXkFqcGdeQXVyODExNTExMTM@._V1_.jpg',
              caption: {
                plainText:
                  'Kiernan Shipka in Les Nouvelles Aventures de Sabrina (2018)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2018,
              endYear: 2020,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 107791,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 3600,
              __typename: 'Runtime',
            },
            certificate: {
              rating: '16',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Horror',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt0098525',
            titleText: {
              text: 'True Blood',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'movie',
              text: 'Movie',
              canHaveEpisodes: false,
              displayableProperty: {
                value: {
                  plainText: '',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'True Blood',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm2367054080',
              width: 538,
              height: 844,
              url: 'https://m.media-amazon.com/images/M/MV5BYWJlZWE0OTUtNDE0MS00Nzc1LWFiYjYtNTM1NGE4ODBjMTZhXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_.jpg',
              caption: {
                plainText:
                  'Sherilyn Fenn, Jeff Fahey, and Billy Drago in True Blood (1989)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 1989,
              endYear: null,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 5,
              voteCount: 566,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 6000,
              __typename: 'Runtime',
            },
            certificate: {
              rating: 'R',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Action',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: false,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt1830617',
            titleText: {
              text: 'Grimm',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Grimm',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3193438464',
              width: 424,
              height: 626,
              url: 'https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_.jpg',
              caption: {
                plainText: 'David Giuntoli in Grimm (2011)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2011,
              endYear: 2017,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.9,
              voteCount: 130143,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2700,
              __typename: 'Runtime',
            },
            certificate: {
              rating: 'Tous publics',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Crime',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt2628232',
            titleText: {
              text: 'Penny Dreadful',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Penny Dreadful',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1205333505',
              width: 2400,
              height: 3263,
              url: 'https://m.media-amazon.com/images/M/MV5BMTNiMDBmZWQtZDI4Ni00ZGViLWJlOWMtNTdkODNlMTFkZjc2XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg',
              caption: {
                plainText: 'Penny Dreadful (2014)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2014,
              endYear: 2016,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 8.2,
              voteCount: 130536,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 3600,
              __typename: 'Runtime',
            },
            certificate: {
              rating: '16',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Horror',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt0158552',
            titleText: {
              text: 'Charmed',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Charmed',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm1499738112',
              width: 680,
              height: 1000,
              url: 'https://m.media-amazon.com/images/M/MV5BNTIxNmUxMWQtNjc0Yy00NjM2LWFjMTMtNjA2MmEzOTFiMWRmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
              caption: {
                plainText:
                  'Alyssa Milano, Holly Marie Combs, and Shannen Doherty in Charmed (1998)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 1998,
              endYear: 2006,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.2,
              voteCount: 91137,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 2520,
              __typename: 'Runtime',
            },
            certificate: {
              rating: 'Tous publics',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Mystery',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt4028442',
            titleText: {
              text: "True Blood: Jessica's Blog",
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: "True Blood: Jessica's Blog",
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm3015190272',
              width: 1280,
              height: 720,
              url: 'https://m.media-amazon.com/images/M/MV5BNTQxYzUwOTYtN2RiOC00NGMzLWE5YWYtN2ExNDlkM2YxYWZkXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
              caption: {
                plainText:
                  "Deborah Ann Woll in True Blood: Jessica's Blog (2010)",
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2010,
              endYear: 2014,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 7.4,
              voteCount: 160,
              __typename: 'RatingsSummary',
            },
            runtime: {
              seconds: 240,
              __typename: 'Runtime',
            },
            certificate: null,
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Horror',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
        {
          node: {
            id: 'tt0411008',
            titleText: {
              text: 'Lost - Les disparus',
              __typename: 'TitleText',
            },
            titleType: {
              id: 'tvSeries',
              text: 'TV Series',
              canHaveEpisodes: true,
              displayableProperty: {
                value: {
                  plainText: 'TV Series',
                  __typename: 'Markdown',
                },
                __typename: 'DisplayableTitleTypeProperty',
              },
              __typename: 'TitleType',
            },
            originalTitleText: {
              text: 'Lost',
              __typename: 'TitleText',
            },
            primaryImage: {
              id: 'rm2512978432',
              width: 1000,
              height: 1545,
              url: 'https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
              caption: {
                plainText: 'Ken Leung in Lost - Les disparus (2004)',
                __typename: 'Markdown',
              },
              __typename: 'Image',
            },
            releaseYear: {
              year: 2004,
              endYear: 2010,
              __typename: 'YearRange',
            },
            ratingsSummary: {
              aggregateRating: 8.3,
              voteCount: 592169,
              __typename: 'RatingsSummary',
            },
            runtime: null,
            certificate: {
              rating: 'Tous publics',
              __typename: 'Certificate',
            },
            canRate: {
              isRatable: true,
              __typename: 'CanRate',
            },
            titleGenres: {
              genres: [
                {
                  genre: {
                    text: 'Adventure',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Drama',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
                {
                  genre: {
                    text: 'Fantasy',
                    __typename: 'GenreItem',
                  },
                  __typename: 'TitleGenre',
                },
              ],
              __typename: 'TitleGenres',
            },
            canHaveEpisodes: true,
            __typename: 'Title',
          },
          __typename: 'MoreLikeThisEdge',
        },
      ],
      __typename: 'MoreLikeThisConnection',
    },
    triviaTotal: {
      total: 55,
      __typename: 'TriviaConnection',
    },
    trivia: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'To shoot the title sequence, the production crew took a four day trip to Louisiana, Chicago (where the church was filmed), and Seattle (for the bar scenes and writhing bodies). They would jump out of their cars as soon as they saw something they liked, or got permission to shoot people&#39;s homes, like the man in the rocking chair. He later had a few beers with them. Executive Producer <a class="ipc-md-link ipc-md-link--entity" href="/name/nm3635834/?ref_=tt_trv_trv">Mark Bayshore</a> is the man dancing with the girl, her arm around him, and his sons are the boys with berry juice over their faces.',
              __typename: 'Markdown',
            },
            trademark: null,
            relatedNames: null,
            __typename: 'TitleTrivia',
          },
          __typename: 'TriviaEdge',
        },
      ],
      __typename: 'TriviaConnection',
    },
    goofsTotal: {
      total: 3,
      __typename: 'GoofConnection',
    },
    goofs: {
      edges: [
        {
          node: {
            text: {
              plaidHtml:
                'When Sookie is eating Adele&#39;s pie, the amount of pie on the fork keeps changing between shots.',
              __typename: 'Markdown',
            },
            __typename: 'Goof',
          },
          __typename: 'GoofEdge',
        },
      ],
      __typename: 'GoofConnection',
    },
    quotesTotal: {
      total: 25,
      __typename: 'TitleQuoteConnection',
    },
    quotes: {
      edges: [
        {
          node: {
            lines: [
              {
                characters: [
                  {
                    character: 'Pam',
                    name: {
                      id: 'nm0061877',
                      __typename: 'Name',
                    },
                    __typename: 'TitleQuoteCharacter',
                  },
                ],
                text: "To Arlene's children: You make me so happy I never had any of you.",
                stageDirection: null,
                __typename: 'TitleQuoteLine',
              },
              {
                characters: [
                  {
                    character: 'Eric Northman',
                    name: {
                      id: 'nm0002907',
                      __typename: 'Name',
                    },
                    __typename: 'TitleQuoteCharacter',
                  },
                ],
                text: "No, c'mon Pam, they're funny. They're like humans, but miniature. 'Teacup humans'.",
                stageDirection: null,
                __typename: 'TitleQuoteLine',
              },
            ],
            __typename: 'TitleQuote',
          },
          __typename: 'TitleQuoteEdge',
        },
      ],
      __typename: 'TitleQuoteConnection',
    },
    crazyCredits: {
      edges: [],
      __typename: 'CrazyCreditConnection',
    },
    alternateVersions: {
      total: 0,
      edges: [],
      __typename: 'AlternateVersionConnection',
    },
    connections: {
      edges: [
        {
          node: {
            associatedTitle: {
              id: 'tt1449003',
              releaseYear: {
                year: 2009,
                __typename: 'YearRange',
              },
              titleText: {
                text: 'Crafting an Action Figure',
                __typename: 'TitleText',
              },
              originalTitleText: {
                text: 'Crafting an Action Figure',
                __typename: 'TitleText',
              },
              series: {
                series: {
                  titleText: {
                    text: 'Science of the Movies',
                    __typename: 'TitleText',
                  },
                  originalTitleText: {
                    text: 'Science of the Movies',
                    __typename: 'TitleText',
                  },
                  __typename: 'Title',
                },
                __typename: 'Series',
              },
              __typename: 'Title',
            },
            category: {
              text: 'Featured in',
              __typename: 'TitleConnectionCategory',
            },
            __typename: 'TitleConnection',
          },
          __typename: 'TitleConnectionEdge',
        },
      ],
      __typename: 'TitleConnectionConnection',
    },
    soundtrack: {
      edges: [
        {
          node: {
            text: 'Bad Things',
            comments: [
              {
                plaidHtml: '(uncredited)',
                __typename: 'Markdown',
              },
              {
                plaidHtml:
                  'by <a class="ipc-md-link ipc-md-link--entity" href="/name/nm2172683/?ref_=tt_trv_snd">Jace Everett</a>',
                __typename: 'Markdown',
              },
            ],
            __typename: 'Track',
          },
          __typename: 'SoundtrackEdge',
        },
      ],
      __typename: 'SoundtrackConnection',
    },
    titleText: {
      text: 'True Blood',
      __typename: 'TitleText',
    },
    originalTitleText: {
      text: 'True Blood',
      __typename: 'TitleText',
    },
    releaseYear: {
      year: 2008,
      __typename: 'YearRange',
    },
    reviews: {
      total: 418,
      __typename: 'ReviewsConnection',
    },
    featuredReviews: {
      edges: [
        {
          node: {
            id: 'rw5004172',
            author: {
              nickName: 'yamaharacing16-124-656478',
              userId: 'ur55609756',
              __typename: 'UserProfile',
            },
            summary: {
              originalText: 'Good show',
              __typename: 'ReviewSummary',
            },
            text: {
              originalText: {
                plaidHtml:
                  'I loved this show when it first came out. I stuck with it for a while. I didn&#39;t like it got pretty weird and dragged on towards the later seasons.',
                __typename: 'Markdown',
              },
              __typename: 'ReviewText',
            },
            authorRating: 7,
            submissionDate: '2019-07-19',
            helpfulness: {
              upVotes: 30,
              downVotes: 7,
              __typename: 'ReviewHelpfulness',
            },
            __typename: 'Review',
          },
          __typename: 'ReviewEdge',
        },
      ],
      __typename: 'ReviewsConnection',
    },
    canRate: {
      isRatable: true,
      __typename: 'CanRate',
    },
    iframeAddReviewLink: {
      url: 'https://contribute.imdb.com/review/tt0844441/add?bus=imdb&return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&site=web',
      __typename: 'ContributionLink',
    },
    topQuestions: {
      total: 0,
      edges: [],
      __typename: 'AlexaQuestionConnection',
    },
    faqs: {
      total: 16,
      edges: [
        {
          node: {
            id: 'fq0135917',
            question: {
              plainText:
                'Would a synthetic substitute for Human blood ever be possible, viable, or cost-effective?',
              __typename: 'Markdown',
            },
            __typename: 'Faq',
          },
          __typename: 'FaqEdge',
        },
        {
          node: {
            id: 'fq0033595',
            question: {
              plainText: 'Is "True Blood" based on a book?',
              __typename: 'Markdown',
            },
            __typename: 'Faq',
          },
          __typename: 'FaqEdge',
        },
        {
          node: {
            id: 'fq0033591',
            question: {
              plainText: 'What does the title, "True Blood," mean?',
              __typename: 'Markdown',
            },
            __typename: 'Faq',
          },
          __typename: 'FaqEdge',
        },
      ],
      __typename: 'FaqConnection',
    },
    releaseDate: {
      day: 23,
      month: 12,
      year: 2008,
      country: {
        id: 'FR',
        text: 'France',
        __typename: 'LocalizedDisplayableCountry',
      },
      __typename: 'ReleaseDate',
    },
    countriesOfOrigin: {
      countries: [
        {
          id: 'US',
          text: 'United States',
          __typename: 'CountryOfOrigin',
        },
      ],
      __typename: 'CountriesOfOrigin',
    },
    detailsExternalLinks: {
      edges: [
        {
          node: {
            url: 'https://www.facebook.com/TrueBlood',
            label: 'Official Facebook',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
        {
          node: {
            url: 'http://www.hbo.com/true-blood',
            label: 'Official Site',
            externalLinkRegion: null,
            __typename: 'ExternalLink',
          },
          __typename: 'ExternalLinkEdge',
        },
      ],
      total: 2,
      __typename: 'ExternalLinkConnection',
    },
    spokenLanguages: {
      spokenLanguages: [
        {
          id: 'en',
          text: 'English',
          __typename: 'SpokenLanguage',
        },
        {
          id: 'de',
          text: 'German',
          __typename: 'SpokenLanguage',
        },
        {
          id: 'sv',
          text: 'Swedish',
          __typename: 'SpokenLanguage',
        },
        {
          id: 'ru',
          text: 'Russian',
          __typename: 'SpokenLanguage',
        },
      ],
      __typename: 'SpokenLanguages',
    },
    akas: {
      edges: [
        {
          node: {
            text: 'Thuần Huyết',
            __typename: 'Aka',
          },
          __typename: 'AkaEdge',
        },
      ],
      __typename: 'AkaConnection',
    },
    filmingLocations: {
      edges: [
        {
          node: {
            text: 'Shreveport, Louisiana, USA',
            location: 'Shreveport, Louisiana, USA',
            attributes: [
              {
                text: 'pilot',
                __typename: 'DisplayableAttribute',
              },
            ],
            __typename: 'FilmingLocation',
          },
          __typename: 'FilmingLocationEdge',
        },
      ],
      total: 21,
      __typename: 'FilmingLocationConnection',
    },
    production: {
      edges: [
        {
          node: {
            company: {
              id: 'co0247237',
              companyText: {
                text: 'Your Face Goes Here Entertainment',
                __typename: 'CompanyText',
              },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
        {
          node: {
            company: {
              id: 'co0008693',
              companyText: {
                text: 'Home Box Office (HBO)',
                __typename: 'CompanyText',
              },
              __typename: 'Company',
            },
            __typename: 'CompanyCredit',
          },
          __typename: 'CompanyCreditEdge',
        },
      ],
      __typename: 'CompanyCreditConnection',
    },
    companies: {
      total: 92,
      __typename: 'CompanyCreditConnection',
    },
    productionBudget: null,
    lifetimeGross: null,
    openingWeekendGross: null,
    worldwideGross: null,
    technicalSpecifications: {
      soundMixes: {
        items: [
          {
            id: 'dolby_digital',
            text: 'Dolby Digital',
            attributes: [],
            __typename: 'SoundMix',
          },
        ],
        __typename: 'SoundMixes',
      },
      aspectRatios: {
        items: [
          {
            aspectRatio: '1.78 : 1',
            attributes: [],
            __typename: 'AspectRatio',
          },
        ],
        __typename: 'AspectRatios',
      },
      colorations: {
        items: [
          {
            conceptId: 'color',
            text: 'Color',
            attributes: [],
            __typename: 'Coloration',
          },
        ],
        __typename: 'Colorations',
      },
      __typename: 'TechnicalSpecifications',
    },
    runtime: {
      seconds: 3300,
      __typename: 'Runtime',
    },
    series: null,
    canHaveEpisodes: true,
    contributionQuestions: {
      contributionLink: {
        url: 'https://contribute.imdb.com/answers',
        __typename: 'ContributionQuestionsLink',
      },
      edges: [],
      __typename: 'QuestionConnection',
    },
    __typename: 'Title',
  },
  fake: {
    '#TITLE': 'True Blood',
    '#YEAR': 2008,
    '#IMDB_ID': 'tt0844441',
    '#RANK': 436,
    '#ACTORS': 'Anna Paquin, Stephen Moyer',
    '#AKA': 'True Blood (2008) ',
    '#IMDB_URL': 'https://imdb.com/title/tt0844441',
    '#IMDB_IV':
      'https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0844441&rhash=77ed0696a538f4',
    '#IMG_POSTER':
      'https://m.media-amazon.com/images/M/MV5BMDVjZDQ2N2MtMzMxYy00ZjliLTg5YjAtNjk1OTUwYjVjNWQ0XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg',
    photo_width: 750,
    photo_height: 1124,
  },
  storyLine: {
    id: 'tt0844441',
    summaries: {
      edges: [
        {
          node: {
            plotText: {
              plaidHtml:
                'Set in modern times, vampires roam the Earth and are humans&#39; mortal enemies. However, a substitute has been found for human blood, a substitute that vampires can consume with the same effect as human blood. This is True Blood. Now humans and vampires can co-exist in harmony, and even form relationships. But there will always be rogue elements on both sides ready to exploit the uneasy truce.',
              __typename: 'Markdown',
            },
            experimental_translatedPlotText: null,
            author: 'grantss',
            __typename: 'Plot',
          },
          __typename: 'PlotEdge',
        },
      ],
      __typename: 'PlotConnection',
    },
    outlines: {
      edges: [
        {
          node: {
            plotText: {
              plaidHtml:
                'Telepathic waitress Sookie Stackhouse encounters a strange new supernatural world when she meets the mysterious Bill Compton, a southern Louisiana gentleman and vampire.',
              __typename: 'Markdown',
            },
            experimental_translatedPlotText: null,
            __typename: 'Plot',
          },
          __typename: 'PlotEdge',
        },
      ],
      __typename: 'PlotConnection',
    },
    synopses: {
      edges: [],
      __typename: 'PlotConnection',
    },
    storylineKeywords: {
      edges: [
        {
          node: {
            legacyId: 'human-vampire-relationship',
            text: 'human vampire relationship',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            legacyId: 'vampire',
            text: 'vampire',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            legacyId: 'shapeshifter',
            text: 'shapeshifter',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            legacyId: 'witch',
            text: 'witch',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
        {
          node: {
            legacyId: 'blood',
            text: 'blood',
            __typename: 'TitleKeyword',
          },
          __typename: 'TitleKeywordEdge',
        },
      ],
      total: 176,
      __typename: 'TitleKeywordConnection',
    },
    taglines: {
      edges: [
        {
          node: {
            text: "You Know You're Hooked (Season 4)",
            experimental_translatedText: null,
            __typename: 'Tagline',
          },
          __typename: 'TaglineEdge',
        },
      ],
      total: 13,
      __typename: 'TaglineConnection',
    },
    genres: {
      genres: [
        {
          id: 'Drama',
          text: 'Drama',
          __typename: 'Genre',
        },
        {
          id: 'Fantasy',
          text: 'Fantasy',
          __typename: 'Genre',
        },
        {
          id: 'Mystery',
          text: 'Mystery',
          __typename: 'Genre',
        },
        {
          id: 'Romance',
          text: 'Romance',
          __typename: 'Genre',
        },
        {
          id: 'Thriller',
          text: 'Thriller',
          __typename: 'Genre',
        },
      ],
      __typename: 'Genres',
    },
    certificate: {
      rating: 'TV-MA',
      ratingReason: null,
      ratingsBody: null,
      __typename: 'Certificate',
    },
    parentsGuide: {
      guideItems: {
        total: 17,
        __typename: 'ParentsGuideConnection',
      },
      __typename: 'ParentsGuide',
    },
    __typename: 'Title',
  },
};
