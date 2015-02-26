So there's an `app` that uses `babel-node` as its runtime. See `app/bin`.

If launched through its binary `./app/bin` or through the main launcher `./launcher` it works fine.

If it's a node module inside another app, like in `use-app`, its launcher fails as if the script
would never be processed through `babel-node`.

```
(function (exports, require, module, __filename, __dirname) { let somethingEls
                                                              ^^^
SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:427:25)
    at Module._extensions..js (module.js:462:10)
    at Object.require.extensions.(anonymous function) [as .js] (/usr/local/lib/node_modules/babel/lib/babel/api/register/node.js:113:7)
    at Module.load (module.js:339:32)
    at Function.Module._load (module.js:294:12)
    at Module.require (module.js:349:17)
    at require (module.js:368:17)
    at Object.<anonymous> (/Users/craverod/opensource/babel-launcher/use-app/node_modules/app/bin:3:1)
    at Module._compile (module.js:444:26)
```
