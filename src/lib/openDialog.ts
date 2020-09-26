import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = options => {
  const { title, content, ok = () => true, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = (parent, child) => {
    parent.unmount(child)
    child.remove()
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': newVisible => {
            if (newVisible === false) {
              close(app, div)
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      )
    },
  })
  app.mount(div)
}
