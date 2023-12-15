import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      md: (a) => {
        if(!a) return ''
        const r = markdown.renderInline(a)
        return r?r.replaceAll('&gt;','>').replaceAll('&lt;','<').replaceAll('&amp;','&'):''
      },
      isStringValid: (a) => {
        return a && a.length > 0 && a != '\\---'
      },
      isArrayValid: (a) => {
        return Array.isArray(a) && a.length > 0
      },
      isMobile() {
        return window.innerWidth < 768
      }
    }
  }
})