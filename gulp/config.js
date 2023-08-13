const dist = 'dist'
const src = 'src'
const pagesSrc = `${src}/pages`

module.exports = {
  path: {
    dist: dist,
    src: {
      default: src,
      top: `${src}/index.+(html|ejs)`,
      pages: `${src}/pages/*.(html|ejs)`,
      css: `${src}/**/*.scss`,
      tailwind: `${src}/assets/css/tailwind.css`,
      img: `${src}/**/*.+(png|jpeg|jpg|gif|svg|ico)`,
      copy: `${src}/**/*.+(zip|md)`,
      video: `${src}/**/*.mp4`,
    },
  },
  setting: {
    server: {
      port: 2525,
    },
    template: {
      type: 'ejs',
      options: {},
      beautify: {
        end_with_newline: true,
        indent_size: 4,
        indent_inner_html: false,
        content_unformatted: ['script'],
        unformatted: ['i', 'b'],
      },
    },
    css: {
      type: 'scss', // sass, scss, or css
      options: {
        outputStyle: 'expanded',
        sourceMap: false,
        sourceComments: false,
      },
    },
  },
}
