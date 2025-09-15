<script>
import { defineComponent, h } from 'vue'
import { buttonCls } from '@bs/scripts/util/classes'

export default defineComponent({
  name: 'pr-link',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    to: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    default: {
      type: Boolean,
    },
    primary: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
    muted: {
      type: Boolean,
    },
    xSmall: {
      type: Boolean,
    },
    rounded: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    collapse: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    ratio: {
      type: Number,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.tag,
        {
          class: buttonCls(props),
        },
        [slots.default()],
      )
  },
})
</script>
