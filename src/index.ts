// // // see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-neptune/index.html
// const gremlin = require('gremlin');
// const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
// const Graph = gremlin.structure.Graph;

// const dc = new DriverRemoteConnection('wss://your-neptune-endpoint:8182/gremlin',{});

// const graph = new Graph();
// const g = graph.traversal().withRemote(dc);

// g.V().limit(1).count().next().
//     then((data: any) => {
//         console.log(data);
//         dc.close();
//     }).catch((error: any) => {
//         console.log('ERROR', error);
//         dc.close();
//     });

export { sayHello, sayGoodbye } from './ping'

export * from './company'
export * from './contract'
export * from './funding'
export * from './payment'
export * from './provider'