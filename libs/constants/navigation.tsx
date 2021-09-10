import { SectionHeader } from 'components/molecules/SectionHeader'

export const NAVIGATION = {
  home: {
    _id: 'home',
    title: 'Home',
    url: '/',
    seo: {
      title: 'Hey! This is Yang',
      description: 'Hey! This is Yang. A passion driven Front-end Developer.'
    }
  },
  project: {
    _id: 'project',
    title: 'Projects',
    url: '/project',
    seo: {
      title: 'Projects',
      description: 'Learning By Doing.'
    },
    banner: {
      image: {
        url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/archive.jpg?alt=media&token=a1668206-b86e-4d8d-941d-278ab83e44dc'
      },
      element: <SectionHeader title="Projects" subtitle="Learning By Doing." />
    }
  },
  blog: {
    _id: 'blog',
    title: 'Blogs',
    url: '/blog',
    seo: {
      title: 'Blog',
      description: 'Sharing My Thoughts.'
    },
    banner: {
      image: {
        url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
      },
      element: <SectionHeader title="Blog" subtitle="Sharing My Thoughts." />
    }
  },
  video: {
    _id: 'video',
    title: 'Videos',
    url: '/video',
    seo: {
      title: 'Videos',
      description: 'AMV | MAD | Motion Graphics'
    },
    banner: {
      image: {
        url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
      },
      element: (
        <SectionHeader title="Videos" subtitle="AMV | MAD | Motion Graphics" />
      )
    }
  },
  about: {
    _id: 'about',
    title: 'About',
    url: '/about',
    seo: {
      title: 'About Me',
      description: 'A Software Engineer at Fabric.inc'
    },
    banner: {
      image: {
        url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/about_banner.jpg?alt=media&token=9d31d872-cc23-4789-8262-47bbbd98e0a1'
      },
      element: (
        <SectionHeader
          title="About Me"
          subtitle="A Software Engineer at Fabric.inc"
        />
      )
    }
  }
}
