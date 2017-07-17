### Command line arguments not working in OSX

From the terminal run:
`node ./scaffold/index.js --name=whatever`

Outputs:

```
  '--name=whatever' ] { name: 'whatever',
  argv: 
   { remain: [],
     cooked: [ '--name', 'whatever' ],
     original: [ '--name=whatever' ] } } 'whatever'
```

Contrast this with:

`npm run scaffold --name=whatever`

Outputs:

```
 '/usr/local/bin/node',
  '/Users/simon/Desktop/stackoverflow/scaffold/index.js',
  '--' ] { argv: { remain: [], cooked: [ '--' ], original: [ '--' ] } } undefined
```