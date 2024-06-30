// import type { ConfigFile } from '@rtk-query/codegen-openapi'

// const config: ConfigFile = {
//     schemaFile: 'http://127.0.0.1:8000/?format=openapi',
//     apiFile: './src/store/emptyApi.ts',
//     outputFiles: {
//       './src/store/products.ts': {
//         filterEndpoints: [/products/i],
//       },
//     //   './src/store/order.ts': {
//     //     filterEndpoints: [/order/i],
//     //   },
//     //   './src/store/pet.ts': {
//     //     filterEndpoints: [/pet/i],
//     //   },
//     },
//   }

// import type { ConfigFile } from '@rtk-query/codegen-openapi'

// const config: ConfigFile = {
//     schemaFile: 'http://127.0.0.1:8000/?format=openapi',
//     apiFile: './src/store/emptyApi.ts',
//     //   apiImport: 'thronesApi',
//     outputFiles: {
//         './src/store/products.ts': {
//             filterEndpoints: [/products/i],
//         },
//     },
//     //    exportName: 'thronesApi',
//     hooks: true,
// }

// export default config

import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'http://127.0.0.1:8000/?format=openapi',
  apiFile: './src/services/api/thronesApiSlice.ts',
  apiImport: 'thronesApi',
  outputFile: './src/services/api/endpoints/thronesApi.ts',
  exportName: 'thronesApi',
  hooks: true,
}

export default config