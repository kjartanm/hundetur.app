import template from '../src/template.html';

export async function onRequest(context) {

    let segments = context.request.url.split('/');
    let lastSegment = segments.pop();
    let cache = caches.default;

    console.log("test", lastSegment, cache)
    try {
        //return new Response(template, { status: 200, headers: {'content-type': 'text/html'} });
        return await context.next();
    } catch (err) {
      return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
  }