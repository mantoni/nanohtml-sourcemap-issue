Reproduces an issue with the [nanohtml][] browserify transform and sourcemaps.

How to verify:

```bash
npm run build
open index.html
```

Open dev tools and see that instead of `lib/hello.js` and `lib/world.js` there
is only `lib/input.js` with the content of `lib/world.js`.

[nanohtml]: https://github.com/choojs/nanohtml
