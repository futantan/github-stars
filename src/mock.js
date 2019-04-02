const mock = [
  {
    name: 'normalize.css',
    url: 'https://github.com/necolas/normalize.css',
    language: 'CSS',
    starCount: 34521
  },
  {
    name: 'dyson',
    url: 'https://github.com/webpro/dyson',
    language: 'JavaScript',
    starCount: 756
  },
  {
    name: 'night-owl-vscode-theme',
    url: 'https://github.com/sdras/night-owl-vscode-theme',
    language: null,
    starCount: 1172
  },
  {
    name: 'jsdiff',
    url: 'https://github.com/kpdecker/jsdiff',
    language: 'JavaScript',
    starCount: 3905
  },
  {
    name: 'prism',
    url: 'https://github.com/PrismJS/prism',
    language: 'JavaScript',
    starCount: 6544
  },
  {
    name: 'howtographql',
    url: 'https://github.com/howtographql/howtographql',
    language: 'TypeScript',
    starCount: 4979
  },
  {
    name: 'browserslist',
    url: 'https://github.com/browserslist/browserslist',
    language: 'JavaScript',
    starCount: 5341
  },
  {
    name: 'storybook',
    url: 'https://github.com/storybooks/storybook',
    language: 'JavaScript',
    starCount: 36009
  },
  {
    name: 'react-styleguidist',
    url: 'https://github.com/styleguidist/react-styleguidist',
    language: 'JavaScript',
    starCount: 6795
  },
  {
    name: 'Hands-On-Functional-Programming-in-Rust',
    url:
      'https://github.com/PacktPublishing/Hands-On-Functional-Programming-in-Rust',
    language: 'Rust',
    starCount: 43
  },
  {
    name: 'awesome-fp-js',
    url: 'https://github.com/stoeffel/awesome-fp-js',
    language: null,
    starCount: 4004
  },
  {
    name: 'mermaid',
    url: 'https://github.com/knsv/mermaid',
    language: 'JavaScript',
    starCount: 22888
  },
  {
    name: 'vscode-tips-and-tricks',
    url: 'https://github.com/Microsoft/vscode-tips-and-tricks',
    language: null,
    starCount: 7314
  },
  {
    name: 'awesome-vscode',
    url: 'https://github.com/viatsko/awesome-vscode',
    language: 'JavaScript',
    starCount: 14349
  },
  {
    name: 'nodeppt',
    url: 'https://github.com/ksky521/nodeppt',
    language: 'JavaScript',
    starCount: 6409
  },
  {
    name: 'awesome-personal-blogs',
    url: 'https://github.com/jkup/awesome-personal-blogs',
    language: null,
    starCount: 1970
  },
  {
    name: 'reselect',
    url: 'https://github.com/reduxjs/reselect',
    language: 'JavaScript',
    starCount: 14335
  },
  {
    name: 'learn-rxjs',
    url: 'https://github.com/btroncone/learn-rxjs',
    language: 'TypeScript',
    starCount: 2488
  },
  {
    name: 'mdx',
    url: 'https://github.com/mdx-js/mdx',
    language: 'JavaScript',
    starCount: 6121
  },
  {
    name: 'personal-website',
    url: 'https://github.com/github/personal-website',
    language: 'HTML',
    starCount: 4571
  },
  {
    name: 'create-react-blog',
    url: 'https://github.com/frontarm/create-react-blog',
    language: 'JavaScript',
    starCount: 337
  },
  {
    name: 'awesome-actions',
    url: 'https://github.com/sdras/awesome-actions',
    language: 'HCL',
    starCount: 3168
  },
  {
    name: 'scrcpy',
    url: 'https://github.com/Genymobile/scrcpy',
    language: 'C',
    starCount: 11592
  },
  {
    name: 'code-server',
    url: 'https://github.com/codercom/code-server',
    language: 'TypeScript',
    starCount: 13395
  },
  {
    name: 'papers-we-love',
    url: 'https://github.com/papers-we-love/papers-we-love',
    language: null,
    starCount: 33999
  },
  {
    name: 'karma',
    url: 'https://github.com/karma-runner/karma',
    language: 'JavaScript',
    starCount: 10604
  },
  {
    name: 'jasmine',
    url: 'https://github.com/jasmine/jasmine',
    language: 'JavaScript',
    starCount: 14256
  },
  {
    name: 'vscode-ayu',
    url: 'https://github.com/ayu-theme/vscode-ayu',
    language: 'TypeScript',
    starCount: 194
  },
  {
    name: 'ayu',
    url: 'https://github.com/dempfi/ayu',
    language: 'TypeScript',
    starCount: 3284
  },
  {
    name: 'node-config',
    url: 'https://github.com/lorenwest/node-config',
    language: 'JavaScript',
    starCount: 4058
  },
  {
    name: 'jest-coverage-ratchet',
    url: 'https://github.com/Koleok/jest-coverage-ratchet',
    language: 'JavaScript',
    starCount: 21
  },
  {
    name: 'Awesome-Design-Tools',
    url: 'https://github.com/LisaDziuba/Awesome-Design-Tools',
    language: 'JavaScript',
    starCount: 8813
  },
  {
    name: 'angular',
    url: 'https://github.com/angular/angular',
    language: 'TypeScript',
    starCount: 46710
  },
  {
    name: 'zsh-autosuggestions',
    url: 'https://github.com/zsh-users/zsh-autosuggestions',
    language: 'Shell',
    starCount: 8725
  },
  {
    name: 'autojump',
    url: 'https://github.com/wting/autojump',
    language: 'Python',
    starCount: 9201
  },
  {
    name: 'vscode-leetcode',
    url: 'https://github.com/jdneo/vscode-leetcode',
    language: 'TypeScript',
    starCount: 3171
  },
  {
    name: 'parcel',
    url: 'https://github.com/parcel-bundler/parcel',
    language: 'JavaScript',
    starCount: 30752
  },
  {
    name: 'react-window',
    url: 'https://github.com/bvaughn/react-window',
    language: 'JavaScript',
    starCount: 4211
  },
  {
    name: 'developer-roadmap',
    url: 'https://github.com/kamranahmedse/developer-roadmap',
    language: null,
    starCount: 77619
  },
  {
    name: 'youtube-dl',
    url: 'https://github.com/ytdl-org/youtube-dl',
    language: 'Python',
    starCount: 48772
  },
  {
    name: 'svg-term-cli',
    url: 'https://github.com/marionebl/svg-term-cli',
    language: 'TypeScript',
    starCount: 1220
  },
  {
    name: 'ink',
    url: 'https://github.com/vadimdemedes/ink',
    language: 'JavaScript',
    starCount: 10482
  },
  {
    name: 'git-history',
    url: 'https://github.com/pomber/git-history',
    language: 'JavaScript',
    starCount: 10360
  },
  {
    name: 'react-devtools',
    url: 'https://github.com/facebook/react-devtools',
    language: 'JavaScript',
    starCount: 9472
  },
  {
    name: 'swc',
    url: 'https://github.com/swc-project/swc',
    language: 'Rust',
    starCount: 5405
  },
  {
    name: 'theia',
    url: 'https://github.com/theia-ide/theia',
    language: 'TypeScript',
    starCount: 3591
  },
  {
    name: 'jscodeshift',
    url: 'https://github.com/facebook/jscodeshift',
    language: 'JavaScript',
    starCount: 4150
  },
  {
    name: 'cypress',
    url: 'https://github.com/cypress-io/cypress',
    language: 'CoffeeScript',
    starCount: 11052
  },
  {
    name: 'cz-cli',
    url: 'https://github.com/commitizen/cz-cli',
    language: 'JavaScript',
    starCount: 5596
  },
  {
    name: 'ice',
    url: 'https://github.com/alibaba/ice',
    language: 'JavaScript',
    starCount: 12023
  },
  {
    name: 'loupe',
    url: 'https://github.com/latentflip/loupe',
    language: 'JavaScript',
    starCount: 1524
  },
  {
    name: 'react-beautiful-dnd',
    url: 'https://github.com/atlassian/react-beautiful-dnd',
    language: 'JavaScript',
    starCount: 13547
  },
  {
    name: 'react-native-web',
    url: 'https://github.com/necolas/react-native-web',
    language: 'JavaScript',
    starCount: 13097
  },
  {
    name: 'act',
    url: 'https://github.com/nektos/act',
    language: 'Go',
    starCount: 1649
  },
  {
    name: 'dva',
    url: 'https://github.com/dvajs/dva',
    language: 'JavaScript',
    starCount: 12760
  },
  {
    name: 'faker.js',
    url: 'https://github.com/Marak/faker.js',
    language: 'JavaScript',
    starCount: 18233
  },
  {
    name: 'anime',
    url: 'https://github.com/juliangarnier/anime',
    language: 'JavaScript',
    starCount: 30487
  },
  {
    name: 'Han',
    url: 'https://github.com/ethantw/Han',
    language: 'CSS',
    starCount: 1610
  },
  {
    name: 'react-sketchapp',
    url: 'https://github.com/airbnb/react-sketchapp',
    language: 'JavaScript',
    starCount: 13283
  },
  {
    name: 'xstate',
    url: 'https://github.com/davidkpiano/xstate',
    language: 'TypeScript',
    starCount: 5169
  },
  {
    name: 'reactjs.org',
    url: 'https://github.com/reactjs/reactjs.org',
    language: 'JavaScript',
    starCount: 3306
  },
  {
    name: 'restful-api-design-references',
    url: 'https://github.com/aisuhua/restful-api-design-references',
    language: null,
    starCount: 3645
  },
  {
    name: 'blog',
    url: 'https://github.com/aooy/blog',
    language: null,
    starCount: 474
  },
  {
    name: 'yoga',
    url: 'https://github.com/facebook/yoga',
    language: 'C++',
    starCount: 11589
  },
  {
    name: 'alfred-bear',
    url: 'https://github.com/chrisbro/alfred-bear',
    language: 'Python',
    starCount: 166
  },
  {
    name: 'css-animation-101',
    url: 'https://github.com/cssanimation/css-animation-101',
    language: 'CSS',
    starCount: 3842
  },
  {
    name: 'Inquirer.js',
    url: 'https://github.com/SBoudrias/Inquirer.js',
    language: 'JavaScript',
    starCount: 9773
  },
  {
    name: 'enquirer',
    url: 'https://github.com/enquirer/enquirer',
    language: 'JavaScript',
    starCount: 4029
  },
  {
    name: 'commander.js',
    url: 'https://github.com/tj/commander.js',
    language: 'JavaScript',
    starCount: 14644
  },
  {
    name: 'chalk',
    url: 'https://github.com/chalk/chalk',
    language: 'JavaScript',
    starCount: 11769
  },
  {
    name: 'didact',
    url: 'https://github.com/pomber/didact',
    language: 'JavaScript',
    starCount: 1464
  },
  {
    name: 'Leetcode',
    url: 'https://github.com/Cee/Leetcode',
    language: 'Java',
    starCount: 48
  },
  {
    name: 'testdouble.js',
    url: 'https://github.com/testdouble/testdouble.js',
    language: 'JavaScript',
    starCount: 1020
  },
  {
    name: 'folktale',
    url: 'https://github.com/origamitower/folktale',
    language: 'JavaScript',
    starCount: 1476
  },
  {
    name: 'fantasy-land',
    url: 'https://github.com/fantasyland/fantasy-land',
    language: 'JavaScript',
    starCount: 6714
  },
  {
    name: 'recompose',
    url: 'https://github.com/acdlite/recompose',
    language: 'JavaScript',
    starCount: 13594
  },
  {
    name: 'milewski-ctfp-pdf',
    url: 'https://github.com/hmemcpy/milewski-ctfp-pdf',
    language: 'TeX',
    starCount: 5017
  },
  {
    name: 'the-super-tiny-compiler',
    url: 'https://github.com/jamiebuilds/the-super-tiny-compiler',
    language: 'JavaScript',
    starCount: 12672
  },
  {
    name: 'http-server',
    url: 'https://github.com/indexzero/http-server',
    language: 'JavaScript',
    starCount: 8171
  },
  {
    name: 'rematch',
    url: 'https://github.com/rematch/rematch',
    language: 'JavaScript',
    starCount: 5186
  },
  {
    name: 'nvm',
    url: 'https://github.com/creationix/nvm',
    language: 'Shell',
    starCount: 33801
  },
  {
    name: 'react-helmet',
    url: 'https://github.com/nfl/react-helmet',
    language: 'JavaScript',
    starCount: 10067
  },
  {
    name: 'proposal-pipeline-operator',
    url: 'https://github.com/tc39/proposal-pipeline-operator',
    language: 'HTML',
    starCount: 4024
  },
  {
    name: 'react',
    url: 'https://github.com/facebook/react',
    language: 'JavaScript',
    starCount: 126270
  },
  {
    name: 'Functional-Light-JS',
    url: 'https://github.com/getify/Functional-Light-JS',
    language: 'JavaScript',
    starCount: 10571
  },
  {
    name: 'How-To-Ask-Questions-The-Smart-Way',
    url: 'https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way',
    language: 'JavaScript',
    starCount: 5416
  },
  {
    name: 'swifty-enum',
    url: 'https://github.com/futantan/swifty-enum',
    language: 'JavaScript',
    starCount: 3
  },
  {
    name: 'redux-ecosystem-links',
    url: 'https://github.com/markerikson/redux-ecosystem-links',
    language: null,
    starCount: 4115
  },
  {
    name: 'nocode',
    url: 'https://github.com/kelseyhightower/nocode',
    language: 'Dockerfile',
    starCount: 27661
  },
  {
    name: 'mpvue',
    url: 'https://github.com/Meituan-Dianping/mpvue',
    language: 'JavaScript',
    starCount: 16695
  },
  {
    name: 'wepy',
    url: 'https://github.com/Tencent/wepy',
    language: 'JavaScript',
    starCount: 17172
  },
  {
    name: 'react-motion',
    url: 'https://github.com/chenglou/react-motion',
    language: 'JavaScript',
    starCount: 16355
  },
  {
    name: 'CS-Interview-Knowledge-Map',
    url: 'https://github.com/InterviewMap/CS-Interview-Knowledge-Map',
    language: null,
    starCount: 15184
  },
  {
    name: 'core-js',
    url: 'https://github.com/zloirock/core-js',
    language: 'JavaScript',
    starCount: 7813
  },
  {
    name: 'lerna',
    url: 'https://github.com/lerna/lerna',
    language: 'JavaScript',
    starCount: 15753
  },
  {
    name: 'mostly-adequate-guide',
    url: 'https://github.com/MostlyAdequate/mostly-adequate-guide',
    language: 'JavaScript',
    starCount: 15684
  },
  {
    name: 'open-source-mac-os-apps',
    url: 'https://github.com/serhii-londar/open-source-mac-os-apps',
    language: 'Swift',
    starCount: 16360
  },
  {
    name: 'prisma',
    url: 'https://github.com/prisma/prisma',
    language: 'Scala',
    starCount: 13403
  },
  {
    name: 'taro',
    url: 'https://github.com/NervJS/taro',
    language: 'JavaScript',
    starCount: 17158
  },
  {
    name: 'docz',
    url: 'https://github.com/pedronauck/docz',
    language: 'TypeScript',
    starCount: 14099
  },
  {
    name: 'vim-vinegar',
    url: 'https://github.com/tpope/vim-vinegar',
    language: 'Vim script',
    starCount: 1324
  },
  {
    name: 'rxjs',
    url: 'https://github.com/ReactiveX/rxjs',
    language: 'TypeScript',
    starCount: 17765
  },
  {
    name: 'ramda',
    url: 'https://github.com/ramda/ramda',
    language: 'JavaScript',
    starCount: 15830
  },
  {
    name: 'plugin-directory',
    url: 'https://github.com/sketchplugins/plugin-directory',
    language: 'Ruby',
    starCount: 3193
  },
  {
    name: 'react-virtualized',
    url: 'https://github.com/bvaughn/react-virtualized',
    language: 'JavaScript',
    starCount: 15026
  },
  {
    name: 'redux',
    url: 'https://github.com/reduxjs/redux',
    language: 'JavaScript',
    starCount: 47816
  },
  {
    name: 'svgr',
    url: 'https://github.com/smooth-code/svgr',
    language: 'JavaScript',
    starCount: 4408
  },
  {
    name: 'lodash',
    url: 'https://github.com/lodash/lodash',
    language: 'JavaScript',
    starCount: 38324
  },
  {
    name: 'react-native-macos',
    url: 'https://github.com/ptmt/react-native-macos',
    language: 'JavaScript',
    starCount: 10938
  },
  {
    name: 'react-native-snap-carousel',
    url: 'https://github.com/archriss/react-native-snap-carousel',
    language: 'JavaScript',
    starCount: 4944
  },
  {
    name: 'react-navigation',
    url: 'https://github.com/react-navigation/react-navigation',
    language: 'JavaScript',
    starCount: 15132
  },
  {
    name: 'fastclick',
    url: 'https://github.com/ftlabs/fastclick',
    language: 'HTML',
    starCount: 17303
  },
  {
    name: 'react-native-sqlite-storage',
    url: 'https://github.com/andpor/react-native-sqlite-storage',
    language: 'Java',
    starCount: 1672
  },
  {
    name: 'alfred-fkill',
    url: 'https://github.com/SamVerschueren/alfred-fkill',
    language: 'JavaScript',
    starCount: 282
  },
  {
    name: 'docsify',
    url: 'https://github.com/docsifyjs/docsify',
    language: 'JavaScript',
    starCount: 9287
  },
  {
    name: 'react-native-animatable',
    url: 'https://github.com/oblador/react-native-animatable',
    language: 'JavaScript',
    starCount: 6493
  },
  {
    name: 'phoenix',
    url: 'https://github.com/phoenixframework/phoenix',
    language: 'Elixir',
    starCount: 13566
  },
  {
    name: 'prettier',
    url: 'https://github.com/prettier/prettier',
    language: 'JavaScript',
    starCount: 31188
  },
  {
    name: 'elixir',
    url: 'https://github.com/elixir-lang/elixir',
    language: 'Elixir',
    starCount: 14986
  },
  {
    name: 'nightwatch',
    url: 'https://github.com/nightwatchjs/nightwatch',
    language: 'JavaScript',
    starCount: 9087
  },
  {
    name: 'react-sortable-hoc',
    url: 'https://github.com/clauderic/react-sortable-hoc',
    language: 'JavaScript',
    starCount: 6356
  },
  {
    name: 'public-apis',
    url: 'https://github.com/toddmotto/public-apis',
    language: 'Python',
    starCount: 54480
  },
  {
    name: 'css-in-js',
    url: 'https://github.com/MicheleBertoli/css-in-js',
    language: 'JavaScript',
    starCount: 4189
  },
  {
    name: 'elixir-china-companies',
    url: 'https://github.com/elixir-cn/elixir-china-companies',
    language: null,
    starCount: 134
  },
  {
    name: 'normalizr',
    url: 'https://github.com/paularmstrong/normalizr',
    language: 'JavaScript',
    starCount: 16239
  },
  {
    name: 'material-theme',
    url: 'https://github.com/equinusocio/material-theme',
    language: 'Python',
    starCount: 10820
  },
  {
    name: 'styled-components',
    url: 'https://github.com/styled-components/styled-components',
    language: 'JavaScript',
    starCount: 22968
  },
  {
    name: 'nativefier',
    url: 'https://github.com/jiahaog/nativefier',
    language: 'JavaScript',
    starCount: 19179
  },
  {
    name: 'puppeteer',
    url: 'https://github.com/GoogleChrome/puppeteer',
    language: 'JavaScript',
    starCount: 47459
  },
  {
    name: 'redux-logger',
    url: 'https://github.com/LogRocket/redux-logger',
    language: 'JavaScript',
    starCount: 4429
  },
  {
    name: 'eslint-plugin-compat',
    url: 'https://github.com/amilajack/eslint-plugin-compat',
    language: 'JavaScript',
    starCount: 2140
  },
  {
    name: 'husky',
    url: 'https://github.com/typicode/husky',
    language: 'JavaScript',
    starCount: 13074
  },
  {
    name: 'RxJS',
    url: 'https://github.com/Reactive-Extensions/RxJS',
    language: 'JavaScript',
    starCount: 19595
  },
  {
    name: 'redux-actions',
    url: 'https://github.com/redux-utilities/redux-actions',
    language: 'JavaScript',
    starCount: 5978
  },
  {
    name: 'enzyme',
    url: 'https://github.com/airbnb/enzyme',
    language: 'JavaScript',
    starCount: 16841
  },
  {
    name: 'next.js',
    url: 'https://github.com/zeit/next.js',
    language: 'JavaScript',
    starCount: 36190
  },
  {
    name: 'glamor',
    url: 'https://github.com/threepointone/glamor',
    language: 'JavaScript',
    starCount: 3464
  },
  {
    name: 'Semantic-UI',
    url: 'https://github.com/Semantic-Org/Semantic-UI',
    language: 'JavaScript',
    starCount: 44970
  },
  {
    name: 'tamperchrome',
    url: 'https://github.com/google/tamperchrome',
    language: 'JavaScript',
    starCount: 3549
  },
  {
    name: 'quill',
    url: 'https://github.com/quilljs/quill',
    language: 'JavaScript',
    starCount: 22140
  },
  {
    name: 'Spring-Boot_ManageSystem',
    url: 'https://github.com/byhieg/Spring-Boot_ManageSystem',
    language: 'HTML',
    starCount: 22
  },
  {
    name: 'promises-book',
    url: 'https://github.com/liubin/promises-book',
    language: 'JavaScript',
    starCount: 1925
  },
  {
    name: 'CocoaLumberjack',
    url: 'https://github.com/CocoaLumberjack/CocoaLumberjack',
    language: 'Objective-C',
    starCount: 11122
  },
  {
    name: 'mocha',
    url: 'https://github.com/mochajs/mocha',
    language: 'JavaScript',
    starCount: 17519
  },
  {
    name: 'solved-by-flexbox',
    url: 'https://github.com/philipwalton/solved-by-flexbox',
    language: 'JavaScript',
    starCount: 11642
  },
  {
    name: 'Dollar',
    url: 'https://github.com/ankurp/Dollar',
    language: 'Swift',
    starCount: 3937
  },
  {
    name: 'UESTCthesis',
    url: 'https://github.com/shifujun/UESTCthesis',
    language: 'TeX',
    starCount: 365
  },
  {
    name: 'refresher',
    url: 'https://github.com/jcavar/refresher',
    language: 'Swift',
    starCount: 880
  },
  {
    name: 'weui-wxss',
    url: 'https://github.com/Tencent/weui-wxss',
    language: 'JavaScript',
    starCount: 9173
  },
  {
    name: 'SDCycleScrollView',
    url: 'https://github.com/gsdios/SDCycleScrollView',
    language: 'Objective-C',
    starCount: 5382
  },
  {
    name: 'coding-interview-university',
    url: 'https://github.com/jwasham/coding-interview-university',
    language: null,
    starCount: 75991
  },
  {
    name: 'machine-learning-for-software-engineers',
    url: 'https://github.com/ZuzooVn/machine-learning-for-software-engineers',
    language: null,
    starCount: 21454
  },
  {
    name: 'mas',
    url: 'https://github.com/mas-cli/mas',
    language: 'Swift',
    starCount: 5932
  },
  {
    name: 'js-stack-from-scratch',
    url: 'https://github.com/verekia/js-stack-from-scratch',
    language: 'JavaScript',
    starCount: 17889
  },
  {
    name: 'wept',
    url: 'https://github.com/chemzqm/wept',
    language: 'JavaScript',
    starCount: 2123
  },
  {
    name: 'R.swift',
    url: 'https://github.com/mac-cain13/R.swift',
    language: 'Swift',
    starCount: 6102
  },
  {
    name: 'TheList',
    url: 'https://github.com/Awesome-Server-Side-Swift/TheList',
    language: 'Swift',
    starCount: 838
  },
  {
    name: 'swiftenv',
    url: 'https://github.com/kylef/swiftenv',
    language: 'Shell',
    starCount: 1656
  },
  {
    name: 'reactjs101',
    url: 'https://github.com/kdchang/reactjs101',
    language: 'JavaScript',
    starCount: 3115
  },
  {
    name: 'hub',
    url: 'https://github.com/github/hub',
    language: 'Go',
    starCount: 15221
  },
  {
    name: 'cupertino',
    url: 'https://github.com/nomad/cupertino',
    language: 'Ruby',
    starCount: 2667
  },
  {
    name: 'RxMarbles',
    url: 'https://github.com/RxSwiftCommunity/RxMarbles',
    language: 'Swift',
    starCount: 338
  },
  {
    name: 'javascript-in-one-pic',
    url: 'https://github.com/coodict/javascript-in-one-pic',
    language: null,
    starCount: 5907
  },
  {
    name: 'simplenote-ios',
    url: 'https://github.com/Automattic/simplenote-ios',
    language: 'Objective-C',
    starCount: 1564
  },
  {
    name: 'analyze',
    url: 'https://github.com/draveness/analyze',
    language: 'Objective-C',
    starCount: 6799
  },
  {
    name: 'functional-programming-jargon',
    url: 'https://github.com/hemanth/functional-programming-jargon',
    language: null,
    starCount: 12715
  },
  {
    name: 'weex',
    url: 'https://github.com/alibaba/weex',
    language: null,
    starCount: 17435
  },
  {
    name: 'Reachability',
    url: 'https://github.com/tonymillion/Reachability',
    language: 'Objective-C',
    starCount: 6795
  },
  {
    name: 'pngpaste',
    url: 'https://github.com/jcsalterego/pngpaste',
    language: 'Objective-C',
    starCount: 217
  },
  {
    name: 'SQLite.swift',
    url: 'https://github.com/stephencelis/SQLite.swift',
    language: 'Swift',
    starCount: 5938
  },
  {
    name: 'flatbuffers',
    url: 'https://github.com/google/flatbuffers',
    language: 'C++',
    starCount: 11720
  },
  {
    name: 'html5-boilerplate',
    url: 'https://github.com/h5bp/html5-boilerplate',
    language: 'JavaScript',
    starCount: 42550
  },
  {
    name: 'PhoneNumberKit',
    url: 'https://github.com/marmelroy/PhoneNumberKit',
    language: 'Swift',
    starCount: 2820
  },
  {
    name: 'CryptoSwift',
    url: 'https://github.com/krzyzanowskim/CryptoSwift',
    language: 'Swift',
    starCount: 6752
  },
  {
    name: 'faraday',
    url: 'https://github.com/lostisland/faraday',
    language: 'Ruby',
    starCount: 4368
  },
  {
    name: 'nezha',
    url: 'https://github.com/mycolorway/nezha',
    language: 'Ruby',
    starCount: 1
  },
  {
    name: 'gson',
    url: 'https://github.com/google/gson',
    language: 'Java',
    starCount: 15178
  },
  {
    name: 'JSON-java',
    url: 'https://github.com/stleary/JSON-java',
    language: 'Java',
    starCount: 3228
  },
  {
    name: 'AsyncDisplayKit',
    url: 'https://github.com/facebookarchive/AsyncDisplayKit',
    language: 'Objective-C++',
    starCount: 13083
  },
  {
    name: 'eidolon',
    url: 'https://github.com/artsy/eidolon',
    language: 'Swift',
    starCount: 2437
  },
  {
    name: 'SwiftTheme',
    url: 'https://github.com/wxxsw/SwiftTheme',
    language: 'Swift',
    starCount: 1573
  },
  {
    name: 'fantastic-ios-animation',
    url: 'https://github.com/onmyway133/fantastic-ios-animation',
    language: null,
    starCount: 3933
  },
  {
    name: 'incubator-heron',
    url: 'https://github.com/apache/incubator-heron',
    language: 'Java',
    starCount: 3337
  },
  {
    name: 'resume',
    url: 'https://github.com/billryan/resume',
    language: 'TeX',
    starCount: 2381
  },
  {
    name: 'OcticonsIOS',
    url: 'https://github.com/jacksonh/OcticonsIOS',
    language: 'Objective-C',
    starCount: 50
  },
  {
    name: 'electronic-wechat',
    url: 'https://github.com/geeeeeeeeek/electronic-wechat',
    language: 'JavaScript',
    starCount: 12339
  },
  {
    name: 'Chameleon',
    url: 'https://github.com/viccalexander/Chameleon',
    language: 'Objective-C',
    starCount: 11955
  },
  {
    name: 'RxSwiftExamples',
    url: 'https://github.com/DroidsOnRoids/RxSwiftExamples',
    language: 'Swift',
    starCount: 801
  },
  {
    name: 'RxSwiftPlayer',
    url: 'https://github.com/scotteg/RxSwiftPlayer',
    language: 'Swift',
    starCount: 95
  },
  {
    name: 'PromiseKit',
    url: 'https://github.com/mxcl/PromiseKit',
    language: 'Swift',
    starCount: 11174
  },
  {
    name: 'json-server',
    url: 'https://github.com/typicode/json-server',
    language: 'JavaScript',
    starCount: 39255
  },
  {
    name: 'gitsome',
    url: 'https://github.com/donnemartin/gitsome',
    language: 'Python',
    starCount: 6366
  },
  {
    name: 'SugarRecord',
    url: 'https://github.com/modo-studio/SugarRecord',
    language: 'Swift',
    starCount: 2074
  },
  {
    name: 'SwiftNotificationCenter',
    url: 'https://github.com/100mango/SwiftNotificationCenter',
    language: 'Swift',
    starCount: 557
  },
  {
    name: 'rxmarbles',
    url: 'https://github.com/staltz/rxmarbles',
    language: 'JavaScript',
    starCount: 3381
  },
  {
    name: 'Swift-AI',
    url: 'https://github.com/Swift-AI/Swift-AI',
    language: 'Swift',
    starCount: 5547
  },
  {
    name: 'RxGitHubAPI',
    url: 'https://github.com/FengDeng/RxGitHubAPI',
    language: 'Swift',
    starCount: 77
  },
  {
    name: 'LearnRxSwift',
    url: 'https://github.com/DianQK/LearnRxSwift',
    language: 'Swift',
    starCount: 493
  },
  {
    name: 'MVVMReactiveCocoa',
    url: 'https://github.com/leichunfeng/MVVMReactiveCocoa',
    language: 'Objective-C',
    starCount: 3621
  },
  {
    name: 'quick-look-plugins',
    url: 'https://github.com/sindresorhus/quick-look-plugins',
    language: null,
    starCount: 12948
  },
  {
    name: 'leiningen',
    url: 'https://github.com/technomancy/leiningen',
    language: 'Clojure',
    starCount: 6304
  },
  {
    name: 'programming-clojure',
    url: 'https://github.com/stuarthalloway/programming-clojure',
    language: 'Clojure',
    starCount: 552
  },
  {
    name: 'storm-kafka-plus-qch',
    url: 'https://github.com/quchunhui/storm-kafka-plus-qch',
    language: 'Java',
    starCount: 3
  },
  {
    name: 'YLProgressBar',
    url: 'https://github.com/yannickl/YLProgressBar',
    language: 'Objective-C',
    starCount: 1178
  },
  {
    name: 'Quick',
    url: 'https://github.com/Quick/Quick',
    language: 'Swift',
    starCount: 8061
  },
  {
    name: 'hubot',
    url: 'https://github.com/hubotio/hubot',
    language: 'JavaScript',
    starCount: 14842
  },
  {
    name: 'hubot-scripts',
    url: 'https://github.com/github/hubot-scripts',
    language: 'CoffeeScript',
    starCount: 3512
  },
  {
    name: 'hubot-slack',
    url: 'https://github.com/slackapi/hubot-slack',
    language: 'CoffeeScript',
    starCount: 2139
  },
  {
    name: 'leetcode-0x01',
    url: 'https://github.com/liaohuqiu/leetcode-0x01',
    language: null,
    starCount: 21
  },
  {
    name: 'Kingfisher',
    url: 'https://github.com/onevcat/Kingfisher',
    language: 'Swift',
    starCount: 13854
  },
  {
    name: 'pop',
    url: 'https://github.com/facebook/pop',
    language: 'Objective-C++',
    starCount: 19583
  },
  {
    name: 'OAuthSwift',
    url: 'https://github.com/OAuthSwift/OAuthSwift',
    language: 'Swift',
    starCount: 2274
  },
  {
    name: 'Argo',
    url: 'https://github.com/thoughtbot/Argo',
    language: 'Swift',
    starCount: 3440
  },
  {
    name: 'Design-Patterns-In-Swift',
    url: 'https://github.com/ochococo/Design-Patterns-In-Swift',
    language: 'Swift',
    starCount: 10442
  },
  {
    name: 'injectionforxcode',
    url: 'https://github.com/johnno1962/injectionforxcode',
    language: 'Objective-C',
    starCount: 5983
  },
  {
    name: 'JSPatch',
    url: 'https://github.com/bang590/JSPatch',
    language: 'Objective-C',
    starCount: 10828
  },
  {
    name: 'DTCoreText',
    url: 'https://github.com/Cocoanetics/DTCoreText',
    language: 'Objective-C',
    starCount: 5718
  },
  {
    name: 'hpple',
    url: 'https://github.com/topfunky/hpple',
    language: 'Objective-C',
    starCount: 2668
  },
  {
    name: 'YYText',
    url: 'https://github.com/ibireme/YYText',
    language: 'Objective-C',
    starCount: 7847
  },
  {
    name: 'appledoc',
    url: 'https://github.com/tomaz/appledoc',
    language: 'Objective-C',
    starCount: 3983
  },
  {
    name: 'YYKit',
    url: 'https://github.com/ibireme/YYKit',
    language: 'Objective-C',
    starCount: 12914
  },
  {
    name: 'SwiftLint',
    url: 'https://github.com/realm/SwiftLint',
    language: 'Swift',
    starCount: 11468
  },
  {
    name: 'Kitura',
    url: 'https://github.com/IBM-Swift/Kitura',
    language: 'Swift',
    starCount: 6944
  },
  {
    name: 'AlamofireObjectMapper',
    url: 'https://github.com/tristanhimmelman/AlamofireObjectMapper',
    language: 'Swift',
    starCount: 2440
  },
  {
    name: 'fmdb',
    url: 'https://github.com/ccgus/fmdb',
    language: 'Objective-C',
    starCount: 12953
  },
  {
    name: 'ObjectMapper',
    url: 'https://github.com/tristanhimmelman/ObjectMapper',
    language: 'Swift',
    starCount: 7938
  },
  {
    name: 'SnapKit',
    url: 'https://github.com/SnapKit/SnapKit',
    language: 'Swift',
    starCount: 14684
  },
  {
    name: 'Async',
    url: 'https://github.com/duemunk/Async',
    language: 'Swift',
    starCount: 4378
  },
  {
    name: 'AppStoreSketch',
    url: 'https://github.com/MengTo/AppStoreSketch',
    language: null,
    starCount: 1612
  },
  {
    name: 'Kanna',
    url: 'https://github.com/tid-kijyun/Kanna',
    language: 'Swift',
    starCount: 1774
  },
  {
    name: 'Carthage',
    url: 'https://github.com/Carthage/Carthage',
    language: 'Swift',
    starCount: 12670
  },
  {
    name: 'Mantle',
    url: 'https://github.com/Mantle/Mantle',
    language: 'Objective-C',
    starCount: 11176
  },
  {
    name: 'UITableView-FDTemplateLayoutCell',
    url: 'https://github.com/forkingdog/UITableView-FDTemplateLayoutCell',
    language: 'Objective-C',
    starCount: 9472
  },
  {
    name: 'KMNavigationBarTransition',
    url: 'https://github.com/MoZhouqi/KMNavigationBarTransition',
    language: 'Objective-C',
    starCount: 2843
  },
  {
    name: 'vapor',
    url: 'https://github.com/vapor/vapor',
    language: 'Swift',
    starCount: 16177
  },
  {
    name: 'RxSwift',
    url: 'https://github.com/ReactiveX/RxSwift',
    language: 'Swift',
    starCount: 15983
  },
  {
    name: 'react-native',
    url: 'https://github.com/facebook/react-native',
    language: 'JavaScript',
    starCount: 75669
  },
  {
    name: 'react-native-lesson',
    url: 'https://github.com/vczero/react-native-lesson',
    language: 'HTML',
    starCount: 4053
  },
  {
    name: 'MaterialKit',
    url: 'https://github.com/nghialv/MaterialKit',
    language: 'Swift',
    starCount: 2537
  },
  {
    name: 'C4iOS',
    url: 'https://github.com/C4Labs/C4iOS',
    language: 'Swift',
    starCount: 920
  },
  {
    name: 'Swifton',
    url: 'https://github.com/sauliusgrigaitis/Swifton',
    language: 'Swift',
    starCount: 2033
  },
  {
    name: 'JSQMessagesViewController',
    url: 'https://github.com/jessesquires/JSQMessagesViewController',
    language: 'Objective-C',
    starCount: 11209
  },
  {
    name: 'OLImageView',
    url: 'https://github.com/dtorres/OLImageView',
    language: 'Objective-C',
    starCount: 876
  },
  {
    name: 'Moya',
    url: 'https://github.com/Moya/Moya',
    language: 'Swift',
    starCount: 10443
  },
  {
    name: 'JGProgressHUD',
    url: 'https://github.com/JonasGessner/JGProgressHUD',
    language: 'Objective-C',
    starCount: 2497
  },
  {
    name: 'Masonry',
    url: 'https://github.com/SnapKit/Masonry',
    language: 'Objective-C',
    starCount: 17211
  },
  {
    name: 'awesome-ios',
    url: 'https://github.com/vsouza/awesome-ios',
    language: 'Swift',
    starCount: 30794
  },
  {
    name: 'Bond',
    url: 'https://github.com/DeclarativeHub/Bond',
    language: 'Swift',
    starCount: 3800
  },
  {
    name: 'parse-server',
    url: 'https://github.com/parse-community/parse-server',
    language: 'JavaScript',
    starCount: 16233
  },
  {
    name: 'cv-maker',
    url: 'https://github.com/awalgarg/cv-maker',
    language: 'JavaScript',
    starCount: 1017
  },
  {
    name: 'MonkeyKing',
    url: 'https://github.com/nixzhu/MonkeyKing',
    language: 'Swift',
    starCount: 2300
  },
  {
    name: 'Yep',
    url: 'https://github.com/CatchChat/Yep',
    language: 'Swift',
    starCount: 5818
  },
  {
    name: 'Knuff',
    url: 'https://github.com/KnuffApp/Knuff',
    language: 'Objective-C',
    starCount: 4419
  },
  {
    name: 'blog.swift',
    url: 'https://github.com/NSNotFound/blog.swift',
    language: 'JavaScript',
    starCount: 301
  },
  {
    name: 'Neon',
    url: 'https://github.com/mamaral/Neon',
    language: 'Swift',
    starCount: 4494
  },
  {
    name: 'SDWebImage',
    url: 'https://github.com/SDWebImage/SDWebImage',
    language: 'Objective-C',
    starCount: 21239
  },
  {
    name: 'VWInstantRun',
    url: 'https://github.com/wangshengjia/VWInstantRun',
    language: 'Swift',
    starCount: 1052
  },
  {
    name: 'botkit',
    url: 'https://github.com/howdyai/botkit',
    language: 'JavaScript',
    starCount: 9061
  },
  {
    name: 'Perfect',
    url: 'https://github.com/PerfectlySoft/Perfect',
    language: 'Swift',
    starCount: 13358
  },
  {
    name: 'Dic-scraper',
    url: 'https://github.com/futantan/Dic-scraper',
    language: 'Python',
    starCount: 6
  },
  {
    name: 'build-web-application-with-golang',
    url: 'https://github.com/astaxie/build-web-application-with-golang',
    language: 'Go',
    starCount: 28911
  },
  {
    name: 'httpie',
    url: 'https://github.com/jakubroztocil/httpie',
    language: 'Python',
    starCount: 40508
  },
  {
    name: 'synx',
    url: 'https://github.com/venmo/synx',
    language: 'Ruby',
    starCount: 5902
  },
  {
    name: 'MBMotion',
    url: 'https://github.com/mmoaay/MBMotion',
    language: 'Swift',
    starCount: 446
  },
  {
    name: 'HMSegmentedControl',
    url: 'https://github.com/HeshamMegid/HMSegmentedControl',
    language: 'Objective-C',
    starCount: 3552
  },
  {
    name: 'swift',
    url: 'https://github.com/apple/swift',
    language: 'C++',
    starCount: 47225
  },
  {
    name: 'Fluid-for-Sketch',
    url: 'https://github.com/matt-curtis/Fluid-for-Sketch',
    language: 'Objective-C',
    starCount: 2437
  },
  {
    name: 'firefox-ios',
    url: 'https://github.com/mozilla-mobile/firefox-ios',
    language: 'Swift',
    starCount: 8576
  },
  {
    name: 'ExSwift',
    url: 'https://github.com/pNre/ExSwift',
    language: 'Swift',
    starCount: 3380
  },
  {
    name: 'kana',
    url: 'https://github.com/bigfa/kana',
    language: 'CSS',
    starCount: 46
  },
  {
    name: 'Overcoat',
    url: 'https://github.com/Overcoat/Overcoat',
    language: 'Objective-C',
    starCount: 1125
  },
  {
    name: 'SCCinemaAnimation',
    url: 'https://github.com/SergioChan/SCCinemaAnimation',
    language: 'Objective-C',
    starCount: 238
  },
  {
    name: 'ganchai',
    url: 'https://github.com/openproject/ganchai',
    language: 'JavaScript',
    starCount: 237
  },
  {
    name: 'droptogif',
    url: 'https://github.com/mortenjust/droptogif',
    language: 'Swift',
    starCount: 2384
  },
  {
    name: 'squall',
    url: 'https://github.com/epfldata/squall',
    language: 'Java',
    starCount: 266
  },
  {
    name: 'YTKNetwork',
    url: 'https://github.com/yuantiku/YTKNetwork',
    language: 'Objective-C',
    starCount: 5784
  },
  {
    name: 'FuzzyAutocompletePlugin',
    url: 'https://github.com/FuzzyAutocomplete/FuzzyAutocompletePlugin',
    language: 'Objective-C',
    starCount: 3337
  },
  {
    name: 'storm',
    url: 'https://github.com/apache/storm',
    language: 'Java',
    starCount: 5618
  },
  {
    name: 'realm-cocoa',
    url: 'https://github.com/realm/realm-cocoa',
    language: 'Objective-C',
    starCount: 13064
  },
  {
    name: 'SVProgressHUD',
    url: 'https://github.com/SVProgressHUD/SVProgressHUD',
    language: 'Objective-C',
    starCount: 11575
  },
  {
    name: 'SwiftyJSON',
    url: 'https://github.com/SwiftyJSON/SwiftyJSON',
    language: 'Swift',
    starCount: 18217
  },
  {
    name: 'Swifter',
    url: 'https://github.com/mattdonnelly/Swifter',
    language: 'Swift',
    starCount: 1977
  },
  {
    name: 'STTwitter',
    url: 'https://github.com/nst/STTwitter',
    language: 'Objective-C',
    starCount: 1016
  },
  {
    name: 'iOS9AdaptationTips',
    url: 'https://github.com/ChenYilong/iOS9AdaptationTips',
    language: 'Objective-C',
    starCount: 4568
  },
  {
    name: 'SwiftyUserDefaults',
    url: 'https://github.com/radex/SwiftyUserDefaults',
    language: 'Swift',
    starCount: 3691
  },
  {
    name: 'MJRefresh',
    url: 'https://github.com/CoderMJLee/MJRefresh',
    language: 'Objective-C',
    starCount: 12625
  },
  {
    name: 'simditor',
    url: 'https://github.com/mycolorway/simditor',
    language: 'JavaScript',
    starCount: 4277
  },
  {
    name: 'clang-user-manual',
    url: 'https://github.com/oxnz/clang-user-manual',
    language: null,
    starCount: 276
  },
  {
    name: 'MHTabBarController',
    url: 'https://github.com/hollance/MHTabBarController',
    language: 'Objective-C',
    starCount: 513
  },
  {
    name: 'the-art-of-command-line',
    url: 'https://github.com/jlevy/the-art-of-command-line',
    language: null,
    starCount: 39732
  },
  {
    name: 'SWRevealViewController',
    url: 'https://github.com/John-Lluch/SWRevealViewController',
    language: 'Objective-C',
    starCount: 4567
  },
  {
    name: 'nylas-mail',
    url: 'https://github.com/nylas/nylas-mail',
    language: 'JavaScript',
    starCount: 24299
  },
  {
    name: 'FLAnimatedImage',
    url: 'https://github.com/Flipboard/FLAnimatedImage',
    language: 'Objective-C',
    starCount: 7114
  },
  {
    name: 'ResumeSample',
    url: 'https://github.com/geekcompany/ResumeSample',
    language: null,
    starCount: 17316
  },
  {
    name: 'KSImageNamed-Xcode',
    url: 'https://github.com/ksuther/KSImageNamed-Xcode',
    language: 'Objective-C',
    starCount: 4260
  },
  {
    name: 'iOSAppReverseEngineering',
    url: 'https://github.com/iosre/iOSAppReverseEngineering',
    language: null,
    starCount: 3766
  },
  {
    name: 'TimLiu-iOS',
    url: 'https://github.com/Tim9Liu9/TimLiu-iOS',
    language: null,
    starCount: 9189
  },
  {
    name: 'upterm',
    url: 'https://github.com/railsware/upterm',
    language: 'TypeScript',
    starCount: 19598
  },
  {
    name: 'Twinkle',
    url: 'https://github.com/piemonte/Twinkle',
    language: 'Swift',
    starCount: 500
  },
  {
    name: 'JSONExport',
    url: 'https://github.com/Ahmed-Ali/JSONExport',
    language: 'Swift',
    starCount: 3810
  },
  {
    name: 'zen',
    url: 'https://github.com/100mango/zen',
    language: null,
    starCount: 2520
  },
  {
    name: 'SwiftGuide',
    url: 'https://github.com/ipader/SwiftGuide',
    language: 'Swift',
    starCount: 14219
  },
  {
    name: 'dev-blog',
    url: 'https://github.com/nixzhu/dev-blog',
    language: null,
    starCount: 3767
  },
  {
    name: 'DevArticles',
    url: 'https://github.com/ameizi/DevArticles',
    language: 'Java',
    starCount: 1468
  },
  {
    name: 'ReactiveCocoa',
    url: 'https://github.com/ReactiveCocoa/ReactiveCocoa',
    language: 'Swift',
    starCount: 19430
  },
  {
    name: 'RazzleDazzle',
    url: 'https://github.com/IFTTT/RazzleDazzle',
    language: 'Swift',
    starCount: 3122
  },
  {
    name: 'SwiftStructures',
    url: 'https://github.com/waynewbishop/SwiftStructures',
    language: 'Swift',
    starCount: 1945
  },
  {
    name: 'Alamofire',
    url: 'https://github.com/Alamofire/Alamofire',
    language: 'Swift',
    starCount: 30537
  },
  {
    name: 'AFNetworking',
    url: 'https://github.com/AFNetworking/AFNetworking',
    language: 'Objective-C',
    starCount: 32028
  },
  {
    name: 'ParkedTextField',
    url: 'https://github.com/gmertk/ParkedTextField',
    language: 'Swift',
    starCount: 844
  },
  {
    name: 'ios-good-practices',
    url: 'https://github.com/oa414/ios-good-practices',
    language: null,
    starCount: 427
  },
  {
    name: 'ios-good-practices',
    url: 'https://github.com/futurice/ios-good-practices',
    language: null,
    starCount: 8853
  },
  {
    name: 'ioscreator',
    url: 'https://github.com/ioscreator/ioscreator',
    language: 'Swift',
    starCount: 2871
  },
  {
    name: 'MyLocations',
    url: 'https://github.com/futantan/MyLocations',
    language: 'Swift',
    starCount: 2
  },
  {
    name: 'iOS9-day-by-day',
    url: 'https://github.com/shinobicontrols/iOS9-day-by-day',
    language: 'Swift',
    starCount: 1433
  },
  {
    name: 'iOS8-day-by-day',
    url: 'https://github.com/shinobicontrols/iOS8-day-by-day',
    language: 'Swift',
    starCount: 2685
  },
  {
    name: 'WWDC',
    url: 'https://github.com/insidegui/WWDC',
    language: 'Swift',
    starCount: 6956
  },
  {
    name: 'the-swift-programming-language-in-chinese',
    url:
      'https://github.com/SwiftGGTeam/the-swift-programming-language-in-chinese',
    language: 'CSS',
    starCount: 18301
  },
  {
    name: 'swift-style-guide',
    url: 'https://github.com/raywenderlich/swift-style-guide',
    language: null,
    starCount: 9726
  },
  {
    name: 'manong-reading',
    url: 'https://github.com/icepy/manong-reading',
    language: 'Objective-C',
    starCount: 369
  },
  {
    name: 'leetcode',
    url: 'https://github.com/haoel/leetcode',
    language: 'C++',
    starCount: 9288
  },
  {
    name: 'go-best-practice',
    url: 'https://github.com/astaxie/go-best-practice',
    language: 'Go',
    starCount: 3013
  },
  {
    name: 'iOS-Core-Animation-Advanced-Techniques',
    url: 'https://github.com/qunten/iOS-Core-Animation-Advanced-Techniques',
    language: null,
    starCount: 4128
  },
  {
    name: 'free-programming-books',
    url: 'https://github.com/EbookFoundation/free-programming-books',
    language: null,
    starCount: 120649
  },
  {
    name: 'awesome-swift',
    url: 'https://github.com/matteocrippa/awesome-swift',
    language: 'Swift',
    starCount: 16888
  },
  {
    name: 'awesome-ios-ui',
    url: 'https://github.com/cjwirth/awesome-ios-ui',
    language: null,
    starCount: 10640
  },
  {
    name: 'Onboard',
    url: 'https://github.com/mamaral/Onboard',
    language: 'Objective-C',
    starCount: 6387
  },
  {
    name: 'HCOS',
    url: 'https://github.com/skidxjq/HCOS',
    language: 'Python',
    starCount: 4
  },
  {
    name: 'PythonTask',
    url: 'https://github.com/futantan/PythonTask',
    language: 'Python',
    starCount: 5
  },
  {
    name: 'do-ikev1',
    url: 'https://github.com/lexrus/do-ikev1',
    language: null,
    starCount: 85
  },
  {
    name: 'rust-notes',
    url: 'https://github.com/photino/rust-notes',
    language: null,
    starCount: 105
  },
  {
    name: 'home',
    url: 'https://github.com/rime/home',
    language: 'HTML',
    starCount: 1444
  },
  {
    name: 'electron',
    url: 'https://github.com/electron/electron',
    language: 'C++',
    starCount: 71722
  },
  {
    name: 'objective-c-style-guide',
    url: 'https://github.com/raywenderlich/objective-c-style-guide',
    language: null,
    starCount: 2942
  },
  {
    name: 'Spring',
    url: 'https://github.com/MengTo/Spring',
    language: 'Swift',
    starCount: 13040
  },
  {
    name: 'flask',
    url: 'https://github.com/pallets/flask',
    language: 'Python',
    starCount: 43026
  },
  {
    name: 'Ghost',
    url: 'https://github.com/TryGhost/Ghost',
    language: 'JavaScript',
    starCount: 29452
  },
  {
    name: 'impress.js',
    url: 'https://github.com/impress/impress.js',
    language: 'JavaScript',
    starCount: 34639
  },
  {
    name: 'osfs00',
    url: 'https://github.com/yyu/osfs00',
    language: null,
    starCount: 358
  },
  {
    name: 'resume.github.com',
    url: 'https://github.com/resume/resume.github.com',
    language: 'JavaScript',
    starCount: 40138
  }
];
export default mock;
