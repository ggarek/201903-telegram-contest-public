import{createEventSource as e}from"./eventSource.js";export function asEventSourceProxy(t){const r=e();return new Proxy(t,{get(e,t){return"addEventListener"===t?r.addEventListener:"removeEventListener"===t?r.removeEventListener:Reflect.get(...arguments)},set(e,t,n){return r.dispatch(t,n),Reflect.set(...arguments)}})}