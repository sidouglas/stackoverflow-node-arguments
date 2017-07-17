const nopt = require('nopt')
const path = require('path')
const fs = require('fs')
const args = nopt()

console.log(process.argv, args, args.name)
process.exit();



// const kebabCase = function (string) {
//   return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
// }

// const pascalCase = function (str) {
//   return str.replace(/\b([a-z])/g, function (_, initial) {
//     return initial.toUpperCase();
//   });
// }

// Handlebars.registerHelper('kebabCase', function (name) {
//   return kebabCase(name)
// })

// Handlebars.registerHelper('pascalCase', function (name) {
//   return pascalCase(name)
// })

// fs.readFile(path.join(__dirname, VUE_TEMPLATE_FILE), {encoding: 'utf-8'}, (err, template) => {

//   if (args.name && !fs.existsSync(`${DESTINATION_FOLDER}/${args.name}`)) {

//     let folderName = kebabCase(args.name)
//     let parsedVue = Handlebars.compile(template)(args)

//     fs.mkdirSync(`${DESTINATION_FOLDER}/${folderName}`)

//     // create vue component
//     fs.writeFile(`${DESTINATION_FOLDER}/${folderName}/index.vue`, parsedVue, (err) => {
//       if (err) {
//         console.log('no dice')
//       }
//     })
//   } else {
//     console.log('Folder exists. Nothing else generated')
//   }

//   fs.readFile(path.join(__dirname, VUE_SCSS_FILE), {encoding: 'utf-8'}, (err, template) => {

//     let folderName = kebabCase(args.name)
//     let parsedScss = Handlebars.compile(template)(args)

//     fs.writeFile(`${DESTINATION_FOLDER}/${folderName}/index.scss`, parsedScss, (err) => {
//       if (err) {
//         console.log('no dice')
//       }
//     })
//   })
// })


