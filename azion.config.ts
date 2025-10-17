/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

export default {
  build: {
    preset: 'typescript',
    polyfills: true,
    worker: true,
    entry: './src/index.ts'
  },
  functions: [
    {
      name: 'og-image',
      path: './functions/index.js'
    }
  ],
  applications: [
    {
      name: 'og-image',
      rules: {
        request: [
          {
            name: 'Execute Function',
            description: 'Execute function for all requests',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '^/'
                }
              ]
            ],
            behaviors: [
              {
                type: 'run_function',
                attributes: {
                  value: 'og-image'
                }
              }
            ]
          }
        ]
      },
      functionsInstances: [
        {
          name: 'og-image',
          ref: 'og-image'
        }
      ]
    }
  ],
  workloads: [
    {
      name: 'og-image',
      active: true,
      infrastructure: 1,
      protocols: {
        http: {
          versions: ['http1', 'http2'],
          httpPorts: [80],
          httpsPorts: [443],
          quicPorts: null
        }
      },
      deployments: [
        {
          name: 'og-image',
          current: true,
          active: true,
          strategy: {
            type: 'default',
            attributes: {
              application: 'og-image'
            }
          }
        }
      ]
    }
  ]
}
