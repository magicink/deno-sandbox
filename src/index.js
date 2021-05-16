import yargs from 'https://deno.land/x/yargs/deno.ts'
import { Arguments } from 'https://deno.land/x/yargs/deno-types.ts'
import { serve } from 'https://deno.land/std@0.95.0/http/server.ts'
const s = serve({ port: 8090 })
console.log('http://localhost:8090/')
for await (const req of s) {
  req.respond({ body: 'Hello World\n' })
}
