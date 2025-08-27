<script>
import { h } from 'vue'

export default {
  render() {
    return h(
      'div', // type
      { id: 'foo', class: 'bar' }, // props
      [
        /* children */
      ],
    )
  },
}
</script>
