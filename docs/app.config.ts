export default defineAppConfig({
  docus: {
    title: 'Vue Breaking News Ticker',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'emrex99',
      github: 'yeg2799',
      medium: '@yeg2799',
      npm: {
        label: 'Npm',
        icon: 'simple-icons:npm',
        href: 'https://www.npmjs.com/package/v-breaking-news-ticker'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
