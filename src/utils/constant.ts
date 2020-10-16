export interface IMenuItem {
  key: string,
  path: string
}

export const APP_TITLE = 'Jun | Javascript and Rust Developer';

export const DEFAULT_CLASS_NAME_PREFIX = 'yyt';

export const APP_TITLE_BLOG = 'Jun | Blog';

export const APP_TITLE_ABOUT = 'Jun | About';

export const APP_TITLE_404 = 'Jun | 404';

export const APP_TITLE_PROJECTS = 'Jun | Projects';

export const APP_MENU_CONFIG: IMenuItem[] = [{
  key: 'Home',
  path: '/'
}, {
  key: 'Blog',
  path: '/blog'
}, {
  key: 'Projects',
  path: '/projects'
}, {
  key: 'About',
  path: '/about'
}];
