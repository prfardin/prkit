<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UIkit from 'uikit'

const test1 = ref<any>(null)

const dropdown = ref<any>(null)

function showDropdown(e: any) {
  e.target.classList.add('uk-active')
  dropdown.value.show()
}

onMounted(() => {
  dropdown.value = UIkit.dropdown(test1.value, {
    container: false,
    target: '.test > li > a.uk-active',
  })
  UIkit.util.on(test1.value, 'beforeshow', (e: any) => {
    console.log(e)
  })
})
</script>

<template>
  <ul class="test">
    <li>
      <a href="#" @click="(e) => showDropdown(e)">Drop 1</a>
    </li>
    <li>
      <a href="#">Drop 2</a>
    </li>
    <li>
      <a href="#">Drop 3</a>
    </li>
    <li>
      <div ref="test1">
        <ul class="uk-nav uk-dropdown-nav">
          <li class="uk-active"><a href="#">Active</a></li>
          <li><a href="#">Item</a></li>
          <li class="uk-nav-header">Header</li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li class="uk-nav-divider"></li>
          <li><a href="#">Item</a></li>
        </ul>
      </div>
    </li>
  </ul>
</template>
