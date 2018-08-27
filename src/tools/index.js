import TOOL_TYPES from './types';

const { web, dep, ci, cli, framework } = TOOL_TYPES;

export default {
  accessibility: {
    title: 'Accessibility',
    subtitle:
      'Visualize, audit and test accessibility parameters in your project',
    tools: [
      {
        description: 'An accessibility visualization toolkit',
        link: 'https://github.com/Khan/tota11y',
        title: 'tota11y',
        type: [dep]
      },
      {
        description:
          "CSS file that provides warnings for possible risks and mistakes and can help evaluate a site's quality",
        link: 'https://github.com/ffoodd/a11y.css',
        title: 'a11y.css',
        type: [dep]
      },
      {
        description: 'Color combination contrast tester',
        link: 'https://colorable.jxnblk.com/',
        title: 'Colorable',
        type: [web]
      },
      {
        description: 'Automated accessibility testing using HTML CodeSniffer',
        link: 'https://github.com/pa11y/pa11y',
        title: 'Pa11y',
        type: [dep, cli]
      },
      {
        description:
          'Warns about potential accessibility issues with your React elements',
        link: 'https://github.com/reactjs/react-a11y',
        title: 'React A11y',
        type: [dep, framework]
      },
      {
        description:
          'A library of accessibility-related testing and utility code',
        link: 'https://github.com/GoogleChrome/accessibility-developer-tools',
        title: 'Accessibility Developer Tools',
        type: [dep]
      },
      {
        description:
          'An automated accessibility testing tool which crawls and tests pages to produce detailed reports',
        link: 'https://github.com/liip/TheA11yMachine',
        title: 'TheA11yMachine',
        type: [dep]
      }
    ]
  },
  auditing: {
    title: 'Performance auditing',
    subtitle: 'Audit and test the performance of your web page',
    tools: [
      {
        description:
          'Run speed tests on actual devices from multiple locations using different browsers or connection speeds',
        link: 'https://www.webpagetest.org/',
        title: 'WebPageTest',
        type: [dep]
      },
      {
        description:
          'An open-source auditing tool that you can use to test and improve your webpage',
        link: 'https://developers.google.com/web/tools/lighthouse/',
        title: 'Lighthouse',
        type: [dep]
      },
      {
        description:
          'Track and monitor performance of webpages during ongoing development',
        link: 'https://calibreapp.com/',
        title: 'Calibre',
        type: [dep]
      },
      {
        description:
          'A devtool for inspecting the performance of React Components',
        link: 'https://github.com/nitin42/react-perf-devtool',
        title: 'React Performance Devtool',
        type: [dep]
      },
      {
        description:
          'Monitor web performance and how real users experience your site',
        link: 'https://speedcurve.com/',
        title: 'Speedcurve',
        type: [dep]
      },
      {
        description:
          'Service by Netlify that rates your site based on its initial global load times and its security settings',
        link: 'https://testmysite.io/',
        title: 'Testmysite.io',
        type: [dep]
      },
      {
        description:
          'An easy way to measure site performances across devices powered by WebPageTest',
        link: 'https://testmysite.withgoogle.com/',
        title: 'Test My Site',
        type: [dep]
      },
      {
        description:
          'Get speed field data and suggestions for optimization improvements',
        link: 'https://developers.google.com/speed/pagespeed/insights/',
        title: 'PageSpeed Insights',
        type: [dep]
      },
      {
        description:
          'Compare your mobile site speed with 10 other domains as well as estimate your revenue impact',
        link: 'https://www.thinkwithgoogle.com/feature/mobile/',
        title: 'Speed Scorecard',
        type: [dep]
      },
      {
        description:
          'Generate a node map visualization of all third-party interactions',
        link: 'http://requestmap.webperf.tools/',
        title: 'Request Map Generator',
        type: [dep]
      }
    ]
  },
  'bundle-analysis': {
    title: 'Bundle analysis',
    subtitle: 'Analyze and measure your bundle and package sizes',
    tools: [
      {
        description: 'Find the cost of adding a npm package to your bundle',
        link: 'https://bundlephobia.com/',
        title: 'Bundlephobia',
        type: [dep]
      },
      {
        description:
          'Visual Studio Code extension that displays the size of imported packages inline',
        link:
          'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        title: 'Import Cost',
        type: [dep]
      },
      {
        description:
          'Visualize the size of webpack output files with a treemap',
        link: 'https://www.npmjs.com/package/webpack-bundle-analyzer',
        title: 'Webpack Bundle Analyzer',
        type: [dep]
      },
      {
        description: 'Visualize the size of parcel output files with a treemap',
        link:
          'https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser',
        title: 'Parcel Plugin Bundle Analyzer',
        type: [dep]
      },
      {
        description: 'CLI dashboard for your webpack dev server',
        link: 'https://github.com/FormidableLabs/webpack-dashboard',
        title: 'Webpack Dashboard',
        type: [dep]
      },
      {
        description: 'Electron Desktop GUI for Webpack Dashboard',
        link: 'https://github.com/FormidableLabs/electron-webpack-dashboard',
        title: 'Electron Webpack Dashboard',
        type: [dep]
      },
      {
        description: 'An intelligent browser based Webpack dashboard',
        link: 'https://github.com/zouhir/jarvis',
        title: 'Jarvis',
        type: [dep]
      },
      {
        description: 'An online visualization tool for webpack bundles',
        link: 'https://chrisbateman.github.io/webpack-visualizer',
        title: 'Webpack Visualizer',
        type: [dep]
      },
      {
        description: 'Analyze and debug code bloat through source maps',
        link: 'https://github.com/danvk/source-map-explorer',
        title: 'Source Map Explorer',
        type: [dep]
      },
      {
        description:
          'Tool to help you find source code duplication across your javascript chunks/splits',
        link: 'https://github.com/samccone/bundle-buddy',
        title: 'Bundle Buddy',
        type: [dep]
      },
      {
        description:
          'Tool for monitoring webpack optimization metrics through the development process',
        link: 'https://github.com/webpackmonitor/webpackmonitor',
        title: 'Webpack Monitor',
        type: [dep]
      },
      {
        description: 'Interactive pie chart for webpack stats',
        link: 'https://github.com/alexkuz/webpack-chart',
        title: 'Webpack Chart',
        type: [dep]
      }
    ]
  },
  'bundle-budgets': {
    title: 'Bundle budgeting',
    subtitle: 'Set up budgets to keep your bundle sizes in check',
    tools: [
      {
        description:
          'A package that lets you keep an eye on your bundle size through a CI hook',
        link: 'https://github.com/siddharthkp/bundlesize',
        title: 'Bundlesize',
        type: [dep]
      },
      {
        description:
          'Prevent JS libraries bloat. If you accidentally add a massive dependency, Size Limit will throw an error.',
        link: 'https://github.com/ai/size-limit',
        title: 'size-limit',
        type: [dep]
      },
      {
        description:
          'Automatically track the size of your build artifacts with a CircleCI integration',
        link: 'https://buildsize.org/',
        title: 'BuildSize',
        type: [dep]
      }
    ]
  },
  'image-optimization': {
    title: 'Image optimization',
    subtitle: 'Optimize and compress images',
    tools: [
      {
        description: '2D image processing library with low memory needs',
        link: 'https://github.com/jcupitt/libvips',
        title: 'libvips',
        type: [dep]
      },
      {
        description: 'Minify images seamlessly',
        link: 'https://github.com/imagemin/imagemin',
        title: 'ImageMin',
        type: [dep]
      },
      {
        description:
          "Reduces JPEG image file sizes while retaining quality and compatibility with the majority of the world's deployed decoders",
        link: 'https://github.com/mozilla/mozjpeg',
        title: 'MozJPEG',
        type: [dep]
      },
      {
        description:
          'Saves disk space & bandwidth by compressing images without losing quality',
        link: 'https://imageoptim.com/api',
        title: 'ImageOptim',
        type: [dep]
      }
    ]
  },
  'lazy-loading': {
    title: 'Lazy loading',
    subtitle:
      'Asynchronously load elements (DOM nodes, images, components or routes) when needed',
    tools: [
      {
        description:
          'Higher order component for loading components with dynamic imports',
        link: 'https://github.com/jamiebuilds/react-loadable',
        title: 'React Loadable',
        type: [dep]
      },
      {
        description: 'A fast, flexible, and small image lazy loader',
        link: 'https://github.com/imagemin/imagemin',
        title: 'yall.js',
        type: [dep]
      },
      {
        description:
          'High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more',
        link: 'https://github.com/aFarkas/lazysizes',
        title: 'Lazysizes',
        type: [dep]
      },
      {
        description:
          'Browser API that provides a way to detect if a DOM element intersects with another element such as the document viewport',
        link:
          'https://www.w3.org/TR/intersection-observer/#intersection-observer-api',
        title: 'Intersection Observer',
        type: [dep]
      },
      {
        description:
          'Parcel provides zero configuration code splitting and lazy loading out of the box',
        link: 'https://parceljs.org/code_splitting.html',
        title: 'Parcel lazy loading',
        type: [dep]
      },
      {
        description:
          'With entry points or dynamic imports, webpack allows you to split bundles to allow for lazy loading',
        link: 'https://webpack.js.org/guides/code-splitting/',
        title: 'webpack lazy loading',
        type: [dep]
      }
    ]
  },
  'service-worker': {
    title: 'Service Worker',
    subtitle:
      'Cache static or dynamic assets for offline support using service workers',
    tools: [
      {
        description:
          'Set of libraries and node modules that make it easy to cache assets and take full advantage of features used to build PWAs',
        link: 'https://developers.google.com/web/tools/workbox/',
        title: 'Workbox',
        type: [dep]
      },
      {
        description:
          "Tiny JavaScript library that makes sure your users can always access your site's content",
        link: 'https://github.com/TalAter/UpUp',
        title: 'UpUp',
        type: [dep]
      },
      {
        description:
          'A webpack plugin that uses ServiceWorker (and AppCache under the hood) to provide an offline experience',
        link: 'https://developers.google.com/web/tools/workbox/',
        title: 'Offline Plugin',
        type: [dep]
      },
      {
        description:
          'Node module to generate service worker code that will precache specific resources so they work offline',
        link: 'https://github.com/GoogleChromeLabs/sw-precache',
        title: 'Service Worker Precache',
        type: [dep]
      },
      {
        description:
          'Collection of service worker tools for offlining runtime requests',
        link: 'https://github.com/GoogleChromeLabs/sw-toolbox',
        title: 'Service Worker Toolbox',
        type: [dep]
      }
    ]
  },
  fouc: {
    title: 'Flash of unstyled content (FOUC)',
    subtitle:
      'Tools to minimize unstyled content rendered to the webpage while external styles are still being fetched',
    tools: [
      {
        description:
          'Helps minimize flash of unstyled text by allowing you to compare between a fallback and an intended font',
        link: 'https://meowni.ca/font-style-matcher/',
        title: 'Font style matcher',
        type: [dep]
      }
    ]
  },
  ssr: {
    title: 'Server-side rendering/pre-rendering',
    subtitle: 'Send down static HTML to improve perceived load times and SEO',
    tools: [
      {
        description: 'Universal javascript support for Angular',
        link: 'https://github.com/angular/universal',
        title: 'Angular Universal',
        type: [dep]
      },
      {
        description:
          'Zero-configuration framework-agnostic static prerendering for SPAs',
        link: 'https://github.com/stereobooster/react-snap',
        title: 'react-snap',
        type: [dep]
      },
      {
        description:
          'React.js server-side rendering optimization with component memoization and templatization',
        link: 'https://github.com/walmartlabs/react-ssr-optimization',
        title: 'react-ssr-optimization',
        type: [dep]
      }
    ]
  }
};
