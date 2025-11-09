import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ' ',
  description: 'High-Productivity Application Platform for Developers, Software Vendors and Enterprises',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'codbex - High-Productivity Application Platform' }],
    ['meta', { property: 'og:description', content: 'High-Productivity Application Platform for Developers, Software Vendors and Enterprises to design, develop and deliver their industry solutions' }],
    ['meta', { property: 'og:image', content: 'https://www.codbex.com/social-card.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'codbex - High-Productivity Application Platform' }],
    ['meta', { name: 'twitter:description', content: 'High-Productivity Application Platform for Developers, Software Vendors and Enterprises to design, develop and deliver their industry solutions' }],
    ['meta', { name: 'twitter:image', content: 'https://www.codbex.com/social-card.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-QWPZ5B9RH8',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-QWPZ5B9RH8');",
    ],
  ],
  base: '/',
  sitemap: {
    hostname: 'https://www.codbex.com/'
  },
  cleanUrls: true,
  appearance: {
    // @ts-expect-error not fully supported yet
    initialValue: 'light'
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products' },
      { text: 'Pricing', link: '/pricing' },
      { text: 'Documentation', link: '/documentation' },
      {
        text: 'Updates',
        items: [
          { text: 'News', link: '/news' },
          { text: 'Marketing', link: '/marketing' },
          { text: 'Technology', link: '/technology' },
        ]
      },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: {
      '/products': [
        {
          text: 'Products',
          items: [
            { text: 'Atlas', link: '/products/atlas' },
            { text: 'Helios', link: '/products/helios' },
            { text: 'Hades', link: '/products/hades' },
            { text: 'Oceanus', link: '/products/oceanus' },
            { text: 'Hyperion', link: '/products/hyperion' },
            { text: 'Iapetus', link: '/products/iapetus' },
            { text: 'Rhea', link: '/products/rhea' },
            { text: 'Kronos', link: '/products/kronos' },
            { text: 'Phoebe', link: '/products/phoebe' },
          ]
        }
      ],
      '/pricing': [
        {
          text: 'Pricing',
          items: [
            { text: 'Community', link: '/pricing/community' },
            { text: 'Starter', link: '/pricing/starter' },
            { text: 'Professional', link: '/pricing/professional' },
            { text: 'Enterprise', link: '/pricing/enterprise' },
            {
              text: 'Services',
              link: '/pricing/services',
              items: [
                { text: 'Development', link: '/pricing/services/development' },
                { text: 'Consulting', link: '/pricing/services/consulting' },
              ]
            },
          ]
        }
      ],
      '/legal': [
        {
          text: 'Legal',
          items: [
            { text: 'Privacy Policy', link: '/legal/privacy-policy' },
            { text: 'Terms of Service', link: '/legal/terms-of-service' },
            { text: 'Code of Business Conduct', link: '/legal/code-of-conduct' },
            { text: 'e-Communication Policy', link: '/legal/e-communications-policy' },
            { text: 'Vendor Terms', link: '/legal/vendor-terms' },
          ]
        }
      ],
      '/news': [
        {
          text: 'News',
          items: [
            { text: 'Introducing the New Pricing Model', link: '/news/2025/07/01/new-flat-pricing-model' },
            { text: 'We Turn Three - A Journey of Stability, Growth, and Innovation', link: '/news/2025/04/01/codbex-three-years' },
            { text: 'Our Products Now Available on Open Telekom Cloud Marketplace', link: '/news/2025/03/24/codbex-on-otc-marketplace' },
            { text: 'HackTUES 11 - Empowering Young Innovators', link: '/news/2025/03/22/hacktues-11-empowering-young-innovators' },
            { text: 'Kronos Now Available on the Snowflake Marketplace', link: '/news/2025/01/10/kronos-on-snowflake-marketplace' },
            { text: 'jPrime 2024 - Innovation, Community, and Open Source', link: '/news/2024/05/29/jprime-2024-innovation-community-and-open-source' },
            { text: 'Celebrating Two Years of Excellence', link: '/news/2024/04/01/codbex-two-years' },
            { text: 'HackTUES X - Celebrating a Decade of Innovation', link: '/news/2024/03/16/hacktues-x-celebrating-a-decade-of-innovation' },
            { text: 'First Anniversary', link: '/news/2023/04/01/first-anniversary' },
            { text: 'Company Dedicated to Developers Productivity', link: '/news/2022/04/01/codbex-established' },
          ]
        }
      ],
      '/marketing': [
        {
          text: 'Marketing',
          items: [
            { text: 'Why Modern Architectures Need Orchestration', link: '/marketing/2025/07/04/why-modern-architectures-need-orchestration' },
            { text: 'Migrating SAP BW with Kronos - From Legacy to Flexibility', link: '/marketing/2025/06/10/kronos-bw-migration' },
            { text: 'Hades Now Available on AWS Marketplace', link: '/marketing/2025/01/10/hades-on-aws' },
            { text: 'Kronos is Now Live on Snowflake Marketplace', link: '/marketing/2025/01/10/kronos-snowflake-marketplace' },
            { text: 'Building Apps with Atlas on Snowflake', link: '/marketing/2024/12/23/building-apps-with-atlas-on-snowflake' },
            { text: 'Rhea - Low-Code Solution for Digital Transformation', link: '/marketing/2024/12/19/rhea-low-code-solution-for-digital-transformation' },
            { text: 'Kronos - Timeless Solution for Modern Challenges', link: '/marketing/2024/06/05/kronos-timeless-solution' },
            { text: 'Unleash Service Integrations with Iapetus', link: '/marketing/2024/03/26/iapetus-unleash-service-integration' },
            { text: 'Unlocking Enterprise Efficiency with Hyperion', link: '/marketing/2024/03/20/hyperion-unlocking-enterprise-efficiency' },
            { text: 'Dive into Innovation with Oceanus', link: '/marketing/2024/01/23/oceanus-dive-into-innovation' },
            { text: 'Explore and Manage Databases in the Cloud', link: '/marketing/2023/10/11/hades-explore-and-manage-databases-in-the-cloud' },
            { text: 'Ultimate Cloud IDE for JavaScript and TypeScript', link: '/marketing/2023/09/26/helios-ultimate-cloud-ide-for-javascript-and-typescript' },
            { text: 'The Titans of Low Code', link: '/marketing/2023/06/07/the-titans-of-low-code' },
            { text: 'What is Low Code Platform', link: '/marketing/2022/04/01/what-is-low-code' },
            { text: `How the 'White-Label' Business Model Works?`, link: '/marketing/2022/07/14/how-white-label-works' },
          ]
        }
      ],
      '/technology': [
        {
          text: 'Technology',
          items: [
            { text: 'Visualizing Kronos Data on Snowflake with Power BI: A Hands-On Guide', link: '/technology/2025/09/bw-migration-bi' },
            { text: 'Migrating SAP BW to Kronos: A Hands-On Guide', link: '/technology/2025/08/kronos-bw-migration' },
            { text: 'Building a Simple ETL Workflow with Phoebe and Apache Airflow', link: '/technology/2025/06/phoebe-airflow-etl' },
            { text: 'NoSQL Database Management Simplified', link: '/technology/2025/05/16/use-hades-on-aws-docdb' },
            { text: 'Onboarding Process Tutorial 6 - Completing Onboarding Process', link: '/technology/2025/05/13/onboarding-process-6-final-steps' },
            { text: 'Onboarding Process Tutorial 5 - Configuring Subprocess', link: '/technology/2025/05/12/onboarding-process-5-subprocess' },
            { text: 'Onboarding Process Tutorial 4 - User Task Definition and Logical Gateways', link: '/technology/2025/05/11/onboarding-process-4-user-task-logcal-gateways' },
            { text: 'Onboarding Process Tutorial 3 - SMTP Connection', link: '/technology/2025/05/10/onboarding-process-3-smtp' },
            { text: 'Onboarding Process Tutorial 2 - BPMN Configuration - Service Task Definition', link: '/technology/2025/05/09/onboarding-process-2-service-task' },
            { text: 'Onboarding Process Tutorial 1 - EDM Configuration', link: '/technology/2025/05/08/onboarding-process-1-edm-configuration' },
            { text: 'How "Depends On" feature in Rhea Simplifies App Development', link: '/technology/2025/03/18/rhea-depends-on' },
            { text: 'Migration to VitePress from Jekyll and Material for MkDocs', link: '/technology/2024/12/17/migration-to-vitepress' },
            { text: 'Building and Releasing Docker Image for codbex Applications', link: '/technology/2024/11/18/build-and-release-docker-image-for-codbex-applications' },
            { text: 'Migrate BW Query (BEx) with ABAP to Snowflake with Tableau', link: '/technology/2024/10/27/migrate-bex-abap-snowflake-tableau' },
            { text: 'Implement Snowflake UDF for leave request days calculation', link: '/technology/2024/09/18/snowflake-udf-leave-days' },
            { text: 'Deploy codbex products on Snowflake', link: '/technology/2024/09/11/deploy-codbex-products-on-snowflake' },
            { text: 'Iapetus - Implement ETL for Sales Orders', link: '/technology/2024/08/15/orders-etl' },
            { text: 'Hyperion - Implement a BPM application for leave requests', link: '/technology/2024/07/17/leave-request-bpm-app' },
            { text: 'Kronos - Run easily ABAP code for free in 5 minutes', link: '/technology/2024/06/25/run-abap-for-free' },
            { text: 'Snowflake and Helios - A Harmonious Tale of Data and Development', link: '/technology/2024/04/03/snowflake-and-helios' },
            { text: 'The Technology Stack behind Our Products', link: '/technology/2022/06/15/technology-stack-behind-our-products' },
          ]
        }
      ],

      '/documentation': [
        {
          text: 'Documentation',
          items: [
            { text: 'Documentation Portal', link: '/documentation/' },
            { text: 'Getting Started', link: '/documentation/getting-started' },
            { text: 'Low-Code Development', link: '/documentation/low-code-development' },
            {
              text: 'Configurations',
              link: '/documentation/configurations/',
              collapsed: true,
              items: [
                {
                  text: 'Basic Authentication',
                  link: '/documentation/configurations/basic-auth',
                },
                {
                  text: 'Cognito Authentication',
                  link: '/documentation/configurations/cognito-auth',
                },
                {
                  text: 'Keycloak Authentication',
                  link: '/documentation/configurations/keycloak-auth',
                },
                {
                  text: 'Client Registration',
                  link: '/documentation/configurations/client-registration',
                }
              ]
            },
            {
              text: 'Migrations',
              link: '/documentation/migrations/',
              collapsed: true,
              items: [
                {
                  text: 'ABAP Code Migration',
                  link: '/documentation/migrations/abap-migration.md',
                },
                {
                  text: 'SAP HANA XS Classic Migration',
                  link: '/documentation/migrations/xsc-migration.md',
                }
              ]
            },
          ]
        },
        {
          text: 'Platform',
          items: [
            { text: 'Platform', link: '/documentation/platform/' },
            { text: 'Languages', link: '/documentation/platform/languages/' },
            {
              text: 'Engines',
              link: '/documentation/platform/engines/',
              collapsed: true,
              items: [
                { text: 'JavaScript', link: '/documentation/platform/engines/javascript' },
                { text: 'TypeScript', link: '/documentation/platform/engines/typescript' },
                { text: 'Python', link: '/documentation/platform/engines/python' },
                { text: 'Command', link: '/documentation/platform/engines/command' },
                { text: 'Jobs', link: '/documentation/platform/engines/jobs' },
                { text: 'Listeners', link: '/documentation/platform/engines/listeners' },
                { text: 'Web', link: '/documentation/platform/engines/web' },
                { text: 'Wiki', link: '/documentation/platform/engines/wiki' },
                { text: 'WebSockets', link: '/documentation/platform/engines/websockets' },
                { text: 'Security', link: '/documentation/platform/engines/security' },
                { text: 'OpenAPI', link: '/documentation/platform/engines/openapi' },
                { text: 'OData', link: '/documentation/platform/engines/odata' },
                { text: 'Templates', link: '/documentation/platform/engines/templates' },
                { text: 'CMS', link: '/documentation/platform/engines/cms' },
                { text: 'BPM', link: '/documentation/platform/engines/bpm' },
                { text: 'Integrations', link: '/documentation/platform/engines/integrations' },
                { text: 'FTP', link: '/documentation/platform/engines/ftp' },
                { text: 'SFTP', link: '/documentation/platform/engines/sftp' }
              ]
            },
            {
              text: 'Artefacts',
              link: '/documentation/platform/artefacts/',
              collapsed: true,
              items: [
                { text: 'Access', link: '/documentation/platform/artefacts/access' },
                { text: 'BPMN', link: '/documentation/platform/artefacts/bpmn' },
                { text: 'Camel', link: '/documentation/platform/artefacts/camel' },
                { text: 'Command', link: '/documentation/platform/artefacts/command' },
                { text: 'Confluence', link: '/documentation/platform/artefacts/confluence' },
                { text: 'CSV', link: '/documentation/platform/artefacts/csv' },
                { text: 'CSVIM', link: '/documentation/platform/artefacts/csvim' },
                { text: 'Datasource', link: '/documentation/platform/artefacts/datasource' },
                { text: 'DSM', link: '/documentation/platform/artefacts/dsm' },
                { text: 'EDM', link: '/documentation/platform/artefacts/edm' },
                { text: 'Entity', link: '/documentation/platform/artefacts/entity' },
                { text: 'Exposes', link: '/documentation/platform/artefacts/exposes' },
                { text: 'Extension', link: '/documentation/platform/artefacts/extension' },
                { text: 'Extension Point', link: '/documentation/platform/artefacts/extensionpoint' },
                { text: 'Form', link: '/documentation/platform/artefacts/form' },
                { text: 'HTML', link: '/documentation/platform/artefacts/html' },
                { text: 'Job', link: '/documentation/platform/artefacts/job' },
                { text: 'JavaScript', link: '/documentation/platform/artefacts/js' },
                { text: 'Listener', link: '/documentation/platform/artefacts/listener' },
                { text: 'Markdown', link: '/documentation/platform/artefacts/markdown' },
                { text: 'Model', link: '/documentation/platform/artefacts/model' },
                { text: 'OData', link: '/documentation/platform/artefacts/odata' },
                { text: 'OpenAPI', link: '/documentation/platform/artefacts/openapi' },
                { text: 'Python', link: '/documentation/platform/artefacts/python' },
                { text: 'Role', link: '/documentation/platform/artefacts/role' },
                { text: 'Schema', link: '/documentation/platform/artefacts/schema' },
                { text: 'Table', link: '/documentation/platform/artefacts/table' },
                { text: 'Template', link: '/documentation/platform/artefacts/template' },
                { text: 'TypeScript', link: '/documentation/platform/artefacts/ts' },
                { text: 'View', link: '/documentation/platform/artefacts/view' },
                { text: 'WebSocket', link: '/documentation/platform/artefacts/websocket' },
                {
                  text: 'Additions',
                  link: '/documentation/platform/artefacts/additions',
                  items: [
                    { text: 'ABAP', link: '/documentation/platform/artefacts/additions/abap' }
                  ]
                }
              ]
            },
            {
              text: 'SDK',
              link: '/documentation/platform/sdk/',
              collapsed: true,
              items: [{
                "text": "BPM",
                "link": "/documentation/platform/sdk/bpm/",
                "collapsed": true,
                "items": [{
                  "text": "Deployer",
                  "link": "/documentation/platform/sdk/bpm/deployer"
                }, {
                  "text": "Process",
                  "link": "/documentation/platform/sdk/bpm/process"
                }, {
                  "text": "Tasks",
                  "link": "/documentation/platform/sdk/bpm/tasks"
                }, {
                  "text": "Values",
                  "link": "/documentation/platform/sdk/bpm/values"
                }]
              }, {
                "text": "CACHE",
                "link": "/documentation/platform/sdk/cache/",
                "collapsed": true,
                "items": [{
                  "text": "Cache",
                  "link": "/documentation/platform/sdk/cache/cache"
                }]
              }, {
                "text": "CMS",
                "link": "/documentation/platform/sdk/cms/",
                "collapsed": true,
                "items": [{
                  "text": "Cmis",
                  "link": "/documentation/platform/sdk/cms/cmis"
                }]
              }, {
                "text": "COMPONENT",
                "link": "/documentation/platform/sdk/component/",
                "collapsed": true,
                "items": [{
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/component/decorators"
                }]
              }, {
                "text": "CORE",
                "link": "/documentation/platform/sdk/core/",
                "collapsed": true,
                "items": [{
                  "text": "Configurations",
                  "link": "/documentation/platform/sdk/core/configurations"
                }, {
                  "text": "Context",
                  "link": "/documentation/platform/sdk/core/context"
                }, {
                  "text": "Env",
                  "link": "/documentation/platform/sdk/core/env"
                }, {
                  "text": "Globals",
                  "link": "/documentation/platform/sdk/core/globals"
                }]
              }, {
                "text": "DB",
                "link": "/documentation/platform/sdk/db/",
                "collapsed": true,
                "items": [{
                  "text": "Dao",
                  "link": "/documentation/platform/sdk/db/dao"
                }, {
                  "text": "Database",
                  "link": "/documentation/platform/sdk/db/database"
                }, {
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/db/decorators"
                }, {
                  "text": "Insert",
                  "link": "/documentation/platform/sdk/db/insert"
                }, {
                  "text": "Orm",
                  "link": "/documentation/platform/sdk/db/orm"
                }, {
                  "text": "Ormstatements",
                  "link": "/documentation/platform/sdk/db/ormstatements"
                }, {
                  "text": "Procedure",
                  "link": "/documentation/platform/sdk/db/procedure"
                }, {
                  "text": "Query",
                  "link": "/documentation/platform/sdk/db/query"
                }, {
                  "text": "Repository",
                  "link": "/documentation/platform/sdk/db/repository"
                }, {
                  "text": "Sequence",
                  "link": "/documentation/platform/sdk/db/sequence"
                }, {
                  "text": "Sql",
                  "link": "/documentation/platform/sdk/db/sql"
                }, {
                  "text": "Store",
                  "link": "/documentation/platform/sdk/db/store"
                }, {
                  "text": "Translator",
                  "link": "/documentation/platform/sdk/db/translator"
                }, {
                  "text": "Update",
                  "link": "/documentation/platform/sdk/db/update"
                }]
              }, {
                "text": "ERRORS",
                "link": "/documentation/platform/sdk/errors/",
                "collapsed": true,
                "items": [{
                  "text": "ForbiddenError",
                  "link": "/documentation/platform/sdk/errors/ForbiddenError"
                }, {
                  "text": "ValidationError",
                  "link": "/documentation/platform/sdk/errors/ValidationError"
                }]
              }, {
                "text": "ETCD",
                "link": "/documentation/platform/sdk/etcd/",
                "collapsed": true,
                "items": [{
                  "text": "Client",
                  "link": "/documentation/platform/sdk/etcd/client"
                }]
              }, {
                "text": "EXTENSIONS",
                "link": "/documentation/platform/sdk/extensions/",
                "collapsed": true,
                "items": [{
                  "text": "Extensions",
                  "link": "/documentation/platform/sdk/extensions/extensions"
                }]
              }, {
                "text": "GIT",
                "link": "/documentation/platform/sdk/git/",
                "collapsed": true,
                "items": [{
                  "text": "Client",
                  "link": "/documentation/platform/sdk/git/client"
                }]
              }, {
                "text": "HTTP",
                "link": "/documentation/platform/sdk/http/",
                "collapsed": true,
                "items": [{
                  "text": "Client-async",
                  "link": "/documentation/platform/sdk/http/client-async"
                }, {
                  "text": "Client",
                  "link": "/documentation/platform/sdk/http/client"
                }, {
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/http/decorators"
                }, {
                  "text": "Errors",
                  "link": "/documentation/platform/sdk/http/errors"
                }, {
                  "text": "Request",
                  "link": "/documentation/platform/sdk/http/request"
                }, {
                  "text": "Response",
                  "link": "/documentation/platform/sdk/http/response"
                }, {
                  "text": "Rs",
                  "link": "/documentation/platform/sdk/http/rs"
                }, {
                  "text": "Session",
                  "link": "/documentation/platform/sdk/http/session"
                }, {
                  "text": "Upload",
                  "link": "/documentation/platform/sdk/http/upload"
                }, {
                  "text": "Utils",
                  "link": "/documentation/platform/sdk/http/utils"
                }]
              }, {
                "text": "INDEXING",
                "link": "/documentation/platform/sdk/indexing/",
                "collapsed": true,
                "items": [{
                  "text": "Searcher",
                  "link": "/documentation/platform/sdk/indexing/searcher"
                }, {
                  "text": "Writer",
                  "link": "/documentation/platform/sdk/indexing/writer"
                }]
              }, {
                "text": "INTEGRATIONS",
                "link": "/documentation/platform/sdk/integrations/",
                "collapsed": true,
                "items": [{
                  "text": "Integrations",
                  "link": "/documentation/platform/sdk/integrations/integrations"
                }]
              }, {
                "text": "IO",
                "link": "/documentation/platform/sdk/io/",
                "collapsed": true,
                "items": [{
                  "text": "Bytes",
                  "link": "/documentation/platform/sdk/io/bytes"
                }, {
                  "text": "Files",
                  "link": "/documentation/platform/sdk/io/files"
                }, {
                  "text": "Image",
                  "link": "/documentation/platform/sdk/io/image"
                }, {
                  "text": "Streams",
                  "link": "/documentation/platform/sdk/io/streams"
                }, {
                  "text": "Zip",
                  "link": "/documentation/platform/sdk/io/zip"
                }]
              }, {
                "text": "JOB",
                "link": "/documentation/platform/sdk/job/",
                "collapsed": true,
                "items": [{
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/job/decorators"
                }, {
                  "text": "Scheduler",
                  "link": "/documentation/platform/sdk/job/scheduler"
                }]
              }, {
                "text": "JUNIT",
                "link": "/documentation/platform/sdk/junit/",
                "collapsed": true,
                "items": [{
                  "text": "Junit",
                  "link": "/documentation/platform/sdk/junit/junit"
                }]
              }, {
                "text": "KAFKA",
                "link": "/documentation/platform/sdk/kafka/",
                "collapsed": true,
                "items": [{
                  "text": "Consumer",
                  "link": "/documentation/platform/sdk/kafka/consumer"
                }, {
                  "text": "Producer",
                  "link": "/documentation/platform/sdk/kafka/producer"
                }]
              }, {
                "text": "LOG",
                "link": "/documentation/platform/sdk/log/",
                "collapsed": true,
                "items": [{
                  "text": "Logging",
                  "link": "/documentation/platform/sdk/log/logging"
                }]
              }, {
                "text": "MAIL",
                "link": "/documentation/platform/sdk/mail/",
                "collapsed": true,
                "items": [{
                  "text": "Client",
                  "link": "/documentation/platform/sdk/mail/client"
                }]
              }, {
                "text": "MESSAGING",
                "link": "/documentation/platform/sdk/messaging/",
                "collapsed": true,
                "items": [{
                  "text": "Consumer",
                  "link": "/documentation/platform/sdk/messaging/consumer"
                }, {
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/messaging/decorators"
                }, {
                  "text": "Producer",
                  "link": "/documentation/platform/sdk/messaging/producer"
                }]
              }, {
                "text": "MONGODB",
                "link": "/documentation/platform/sdk/mongodb/",
                "collapsed": true,
                "items": [{
                  "text": "Client",
                  "link": "/documentation/platform/sdk/mongodb/client"
                }, {
                  "text": "Dao",
                  "link": "/documentation/platform/sdk/mongodb/dao"
                }]
              }, {
                "text": "NET",
                "link": "/documentation/platform/sdk/net/",
                "collapsed": true,
                "items": [{
                  "text": "Soap",
                  "link": "/documentation/platform/sdk/net/soap"
                }, {
                  "text": "Websockets",
                  "link": "/documentation/platform/sdk/net/websockets"
                }]
              }, {
                "text": "PDF",
                "link": "/documentation/platform/sdk/pdf/",
                "collapsed": true,
                "items": [{
                  "text": "Pdf",
                  "link": "/documentation/platform/sdk/pdf/pdf"
                }]
              }, {
                "text": "PLATFORM",
                "link": "/documentation/platform/sdk/platform/",
                "collapsed": true,
                "items": [{
                  "text": "Command",
                  "link": "/documentation/platform/sdk/platform/command"
                }, {
                  "text": "Engines",
                  "link": "/documentation/platform/sdk/platform/engines"
                }, {
                  "text": "Lifecycle",
                  "link": "/documentation/platform/sdk/platform/lifecycle"
                }, {
                  "text": "Os",
                  "link": "/documentation/platform/sdk/platform/os"
                }, {
                  "text": "Problems",
                  "link": "/documentation/platform/sdk/platform/problems"
                }, {
                  "text": "Registry",
                  "link": "/documentation/platform/sdk/platform/registry"
                }, {
                  "text": "Repository",
                  "link": "/documentation/platform/sdk/platform/repository"
                }, {
                  "text": "Workspace",
                  "link": "/documentation/platform/sdk/platform/workspace"
                }]
              }, {
                "text": "QLDB",
                "link": "/documentation/platform/sdk/qldb/",
                "collapsed": true,
                "items": [{
                  "text": "Qldb",
                  "link": "/documentation/platform/sdk/qldb/qldb"
                }]
              }, {
                "text": "RABBITMQ",
                "link": "/documentation/platform/sdk/rabbitmq/",
                "collapsed": true,
                "items": [{
                  "text": "Consumer",
                  "link": "/documentation/platform/sdk/rabbitmq/consumer"
                }, {
                  "text": "Producer",
                  "link": "/documentation/platform/sdk/rabbitmq/producer"
                }]
              }, {
                "text": "REDIS",
                "link": "/documentation/platform/sdk/redis/",
                "collapsed": true,
                "items": [{
                  "text": "Client",
                  "link": "/documentation/platform/sdk/redis/client"
                }]
              }, {
                "text": "RS",
                "link": "/documentation/platform/sdk/rs/",
                "collapsed": true,
                "items": [{
                  "text": "Resource-common",
                  "link": "/documentation/platform/sdk/rs/resource-common"
                }, {
                  "text": "Resource-http-controller",
                  "link": "/documentation/platform/sdk/rs/resource-http-controller"
                }, {
                  "text": "Resource-mappings",
                  "link": "/documentation/platform/sdk/rs/resource-mappings"
                }, {
                  "text": "Resource-method",
                  "link": "/documentation/platform/sdk/rs/resource-method"
                }, {
                  "text": "Resource",
                  "link": "/documentation/platform/sdk/rs/resource"
                }]
              }, {
                "text": "SECURITY",
                "link": "/documentation/platform/sdk/security/",
                "collapsed": true,
                "items": [{
                  "text": "Decorators",
                  "link": "/documentation/platform/sdk/security/decorators"
                }, {
                  "text": "Oauth",
                  "link": "/documentation/platform/sdk/security/oauth"
                }, {
                  "text": "User",
                  "link": "/documentation/platform/sdk/security/user"
                }]
              }, {
                "text": "TEMPLATE",
                "link": "/documentation/platform/sdk/template/",
                "collapsed": true,
                "items": [{
                  "text": "Engines",
                  "link": "/documentation/platform/sdk/template/engines"
                }]
              }, {
                "text": "UTILS",
                "link": "/documentation/platform/sdk/utils/",
                "collapsed": true,
                "items": [{
                  "text": "Alphanumeric",
                  "link": "/documentation/platform/sdk/utils/alphanumeric"
                }, {
                  "text": "Base64",
                  "link": "/documentation/platform/sdk/utils/base64"
                }, {
                  "text": "Converter",
                  "link": "/documentation/platform/sdk/utils/converter"
                }, {
                  "text": "Digest",
                  "link": "/documentation/platform/sdk/utils/digest"
                }, {
                  "text": "Escape",
                  "link": "/documentation/platform/sdk/utils/escape"
                }, {
                  "text": "Hex",
                  "link": "/documentation/platform/sdk/utils/hex"
                }, {
                  "text": "Jsonpath",
                  "link": "/documentation/platform/sdk/utils/jsonpath"
                }, {
                  "text": "Qrcode",
                  "link": "/documentation/platform/sdk/utils/qrcode"
                }, {
                  "text": "Url",
                  "link": "/documentation/platform/sdk/utils/url"
                }, {
                  "text": "Utf8",
                  "link": "/documentation/platform/sdk/utils/utf8"
                }, {
                  "text": "Uuid",
                  "link": "/documentation/platform/sdk/utils/uuid"
                }, {
                  "text": "Xml",
                  "link": "/documentation/platform/sdk/utils/xml"
                }]
              }, {
                "text": "WRAPPERS",
                "link": "/documentation/platform/sdk/wrappers/",
                "collapsed": true,
                "items": [{
                  "text": "OnClose",
                  "link": "/documentation/platform/sdk/wrappers/onClose"
                }, {
                  "text": "OnError",
                  "link": "/documentation/platform/sdk/wrappers/onError"
                }, {
                  "text": "OnMessage",
                  "link": "/documentation/platform/sdk/wrappers/onMessage"
                }, {
                  "text": "OnOpen",
                  "link": "/documentation/platform/sdk/wrappers/onOpen"
                }]
              }]
            },
            // { text: 'Widgets', link: '/documentation/platform/widgets', target: '_blank' },
            // { text: 'Services', link: '/documentation/platform/services', target: '_blank' }
            { text: 'Widgets', link: '/widgets/blimp.html', target: '_blank' },
            { text: 'Services', link: '/swagger/swagger.html', target: '_blank' }
            // { text: 'Templates', link: '/documentation/platform/templates' }
          ]
        },
        {
          text: 'Tooling',
          items: [
            { text: 'Tooling', link: '/documentation/tooling/' },
            {
              text: 'Workbench',
              link: '/documentation/tooling/workbench/',
              collapsed: true,
              items: [
                { text: 'Projects', link: '/documentation/tooling/workbench/projects' },
                { text: 'Import', link: '/documentation/tooling/workbench/import' },
                { text: 'Search', link: '/documentation/tooling/workbench/search' },
                { text: 'Properties', link: '/documentation/tooling/workbench/properties' },
                { text: 'Console', link: '/documentation/tooling/workbench/console' },
                { text: 'Preview', link: '/documentation/tooling/workbench/preview' },
                { text: 'Problems', link: '/documentation/tooling/workbench/problems' },
                { text: 'Logs', link: '/documentation/tooling/workbench/logs' },
                { text: 'Loggers', link: '/documentation/tooling/workbench/loggers' },
                { text: 'Code Editor', link: '/documentation/tooling/workbench/code-editor' }
              ]
            },
            {
              text: 'Git',
              link: '/documentation/tooling/git/',
              collapsed: true,
              items: [
                { text: 'Git Projects', link: '/documentation/tooling/git/git-projects' },
                { text: 'Local Branches', link: '/documentation/tooling/git/local-branches' },
                { text: 'Remote Branches', link: '/documentation/tooling/git/remote-branches' },
                { text: 'Staging', link: '/documentation/tooling/git/staging' },
                { text: 'History', link: '/documentation/tooling/git/history' },
                { text: 'Diff Editor', link: '/documentation/tooling/git/diff-editor' }
              ]
            },
            { text: 'Debugger', link: '/documentation/tooling/debugger/' },
            {
              text: 'Databases',
              link: '/documentation/tooling/databases/',
              collapsed: true,
              items: [
                { text: 'Explorer', link: '/documentation/tooling/databases/explorer' },
                { text: 'SQL', link: '/documentation/tooling/databases/sql' },
                { text: 'NoSQL', link: '/documentation/tooling/databases/nosql' },
                { text: 'Result', link: '/documentation/tooling/databases/result' },
                { text: 'Databases', link: '/documentation/tooling/databases/databases' },
                { text: 'Transfer', link: '/documentation/tooling/databases/transfer' },
                { text: 'Export & Import', link: '/documentation/tooling/databases/export-import' },
                { text: 'Anonymization', link: '/documentation/tooling/databases/data-anonymization' }
              ]
            },
            {
              text: 'Documents',
              link: '/documentation/tooling/documents/',
              collapsed: true,
              items: [
                { text: 'Explorer', link: '/documentation/tooling/documents/explorer' },
                { text: 'Preview', link: '/documentation/tooling/documents/preview' }
              ]
            },
            {
              text: 'Processes',
              link: '/documentation/tooling/processes/',
              collapsed: true,
              items: [
                { text: 'Definitions', link: '/documentation/tooling/processes/definitions' },
                { text: 'Instances', link: '/documentation/tooling/processes/instances' },
                { text: 'Context', link: '/documentation/tooling/processes/context' },
                { text: 'Dead-Letter Jobs', link: '/documentation/tooling/processes/dead-letter-jobs' },
                { text: 'Viewer', link: '/documentation/tooling/processes/viewer' },
                { text: 'Inbox', link: '/documentation/tooling/processes/inbox' },
                { text: 'Modeler', link: '/documentation/tooling/processes/modeler' }
              ]
            },
            { text: 'Integrations', link: '/documentation/tooling/integrations/' },
            { text: 'Operations', link: '/documentation/tooling/operations/' },
            { text: 'Terminal', link: '/documentation/tooling/terminal/' },
            {
              text: 'Modeling',
              link: '/documentation/tooling/modeling/',
              collapsed: true,
              items: [
                { text: 'EDM', link: '/documentation/tooling/modeling/edm' },
                { text: 'Form', link: '/documentation/tooling/modeling/form' }
              ]
            },
            { text: 'Extensibility', link: '/documentation/tooling/extensibility' },
            { text: 'Compatibility', link: '/documentation/tooling/compatibility' },
            { text: 'Multitenancy', link: '/documentation/tooling/multitenancy' }
          ]
        },
        {
          text: 'Modules',
          items: [
            { text: 'Modules', link: '/documentation/modules/' },
            {
              text: 'Sales',
              link: '/documentation/modules/sales/',
              collapsed: true,
              items: [
                { text: 'Lead', link: '/documentation/modules/sales/lead' },
                { text: 'Opportunity', link: '/documentation/modules/sales/opportunity' },
                { text: 'Quotation', link: '/documentation/modules/sales/quotation' },
                { text: 'Sales Order', link: '/documentation/modules/sales/sales-order' },
                { text: 'Sales Invoice', link: '/documentation/modules/sales/sales-invoice' },
                { text: 'Customer Payment', link: '/documentation/modules/sales/customer-payment' }
              ]
            },
            {
              text: 'Purchasing',
              link: '/documentation/modules/purchasing/',
              collapsed: true,
              items: [
                { text: 'Purchase Requisition', link: '/documentation/modules/purchasing/purchase-requisition' },
                { text: 'Purchase Order', link: '/documentation/modules/purchasing/purchase-order' },
                { text: 'Request for Quotation', link: '/documentation/modules/purchasing/request-for-quotation' },
                { text: 'Quotation Comparison', link: '/documentation/modules/purchasing/quotation-comparison' },
                { text: 'Supplier Agreement', link: '/documentation/modules/purchasing/supplier-agreement' },
                { text: 'Debit Note', link: '/documentation/modules/purchasing/debit-note' },
                { text: 'Purchase Invoice', link: '/documentation/modules/purchasing/purchase-invoice' },
                { text: 'Supplier Payment', link: '/documentation/modules/purchasing/supplier-payment' }
              ]
            },
            {
              text: 'Inventory',
              link: '/documentation/modules/inventory/',
              collapsed: true,
              items: [
                { text: 'Goods Receipt', link: '/documentation/modules/inventory/goods-receipt' },
                { text: 'Goods Issue', link: '/documentation/modules/inventory/goods-issue' },
                { text: 'Stock Transfer', link: '/documentation/modules/inventory/stock-transfer' },
                { text: 'Stock Return', link: '/documentation/modules/inventory/stock-return' },
                { text: 'Stock Record', link: '/documentation/modules/inventory/stock-record' },
                { text: 'Stock Adjustment', link: '/documentation/modules/inventory/stock-adjustment' },
                { text: 'SKU Listing', link: '/documentation/modules/inventory/sku-listing' },
                { text: 'Store', link: '/documentation/modules/inventory/store' }
              ]
            },
            {
              text: 'Reference Data', link: '/documentation/modules/reference-data/',
              collapsed: true,
              items: [
                { text: 'Units of Measures', link: '/documentation/modules/reference-data/uom' }
              ]
            }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@codbex7089/videos' },
      { icon: 'github', link: 'https://github.com/codbex/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/codbex/' },
    ],

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: undefined,
      }
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

    editLink: {
      pattern: 'https://github.com/codbex/codbex.github.io/edit/main/docs/:path',
    },

    footer: {
      copyright: 'Copyright © 2022-present codbex ltd.',
      message: `<a href='legal/terms-of-service'>Terms</a> & <a href='legal/privacy-policy'>Privacy</a>`
    },

    externalLinkIcon: true
  }
})
