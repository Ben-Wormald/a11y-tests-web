module.exports = {
  options: {
    hide: ['orb', 'bbccookies-prompt', '/html/head/iframe', 'smphtml5iframebbcMediaPlayer', "tvip-channels-stream-inner"],
    skip: [
      'Title attributes: Title attributes only on inputs',
      'Tables: Use tables for data'
    ]
  },
  baseUrl: 'https://www.bbc.co.uk',
  paths: [
    "/iplayer",
    "/bbcone",
    "/bbctwo",
    "/tv/bbcthree",
    "/bbcfour",
    "/tv/radio1",
    "/tv/cbbc",
    "/tv/cbeebies",
    "/tv/bbcnews",
    "/tv/bbcparliament",
    "/tv/bbcalba",
    "/tv/s4c",
    "/iplayer/episode/p04qh1gk/face-to-face-dame-edith-sitwell",
    "/iplayer/categories/arts/highlights",
    "/iplayer/categories/arts/all?sort=atoz",
    "/iplayer/categories/arts/all?sort=dateavailable",
    "/iplayer/categories/drama-sci-fi-and-fantasy/highlights",
    "/iplayer/categories/drama-sci-fi-and-fantasy/all?sort=atoz",
    "/iplayer/categories/drama-sci-fi-and-fantasy/all?sort=dateavailable",
    "/iplayer/a-z/a",
    "/iplayer/guide",
    "/iplayer/watching",
    "/iplayer/group/most-popular",
    "/bbcfour/collections",
    "/iplayer/features/accessibility",
    "/iplayer/features/downloads",
    "/iplayer/features/iplayer-kids",
    "/iplayer/features/my-programmes",
    "/iplayer/features/sign-in",
    "/iplayer/features/30-days",
    "/iplayer/features/downloads-beta",
    "/tv"
  ],
  signedInPaths: [
    "/iplayer",
    "/iplayer/recommendations",
    "/iplayer/watching",
    "/iplayer/added"
  ]
};
