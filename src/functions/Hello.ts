import { app, HttpRequest, HttpResponse, InvocationContext } from "@azure/functions";


export async function Hello(context: InvocationContext,request: HttpRequest): Promise<HttpResponse> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('Hello', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: Hello
});
