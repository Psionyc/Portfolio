export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/hugorcd/15min',
    available: true,
  },
  profile: {
    name: 'Samuel Ige',
    job: 'Fullstack Developer',
    email: 'sione.xy@gmail.com',
    phone: '(+234) ',
    picture: 'https://avatars.githubusercontent.com/u/102559775?v=4',
  },
  socials: {
    github: 'https://github.com/Psionyc',
    twitter: 'https://twitter.com/Ione_xy',
    linkedin: 'https://www.linkedin.com/in/the-samuel-ione/',
    // instagram: 'https://www.instagram.com/hugo.rcd_',
    // spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  seo: {
    title: 'Psyone: Fullstack Engineer & Web3 Innovator',
    description: 'Explore the portfolio of Psyone—a fullstack engineer building innovative Web3 solutions and creative digital experiences. Racing and football fan, gym goer, and budding videographer making tech and design run in sync.',
    url: 'https://psyone.xyz',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
