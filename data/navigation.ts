import { INavigationContext } from 'context/NavigationContext'

export const navigation: INavigationContext = {
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
    banner:
      'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/archive.jpg?alt=media&token=a1668206-b86e-4d8d-941d-278ab83e44dc'
  },
  blog: {
    _id: 'blog',
    title: 'Blogs',
    url: '/blog',
    seo: {
      title: 'Blog',
      description: 'Sharing My Thoughts.'
    },
    banner:
      'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
  },
  video: {
    _id: 'video',
    title: 'Videos',
    url: '/video',
    seo: {
      title: 'Videos',
      description: 'AMV | MAD | Motion Graphics'
    },
    banner:
      'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
  },
  about: {
    _id: 'about',
    title: 'About',
    url: '/about',
    seo: {
      title: 'About Me',
      description: 'A Software Engineer at Fabric.inc'
    },
    banner:
      'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/about_banner.jpg?alt=media&token=9d31d872-cc23-4789-8262-47bbbd98e0a1'
  }
}
