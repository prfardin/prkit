<script setup lang="ts">
import { ref } from 'vue'

// components
import PrIcon from '@c/core/PrIcon.vue'
import PrGrid from '@c/core/PrGrid.vue'
import { useI18n } from 'vue-i18n'
import router from '@/router'

// i18n
const { t } = useI18n()

interface Options {
  icon: string
  title: string
  description: string
  isSelected?: boolean
}

const options = ref<Options[]>([
  {
    icon: 'home-alt',
    title: 'auth.step.two.options.one.title',
    description: 'auth.step.two.options.one.description',
    isSelected: false,
  },
  {
    icon: 'box',
    title: 'auth.step.two.options.two.title',
    description: 'auth.step.two.options.two.description',
    isSelected: false,
  },
])

function select(index: number) {
  options.value.forEach((item, i) => {
    if (i !== index) {
      item.isSelected = false
    }
  })
  options.value[index].isSelected = !options.value[index].isSelected
  setTimeout(() => {
    router.push({ name: 'businessDetails' })
  }, 500)
}
</script>

<template>
  <div class="uk-width-1-1 uk-position-relative">
    <pr-grid small class="uk-child-width-1-1">
      <div v-for="(item, index) in options" :key="index">
        <div
          tabindex="0"
          class="pr-select-card uk-width-1-1 uk-width-large@s uk-animation-toggle"
          :class="{ 'uk-active': item.isSelected }"
          @click="select(index)"
        >
          <pr-grid small class="uk-flex-middle">
            <div class="uk-width-1-2 uk-width-auto@s">
              <div class="type pr-select-card-icon">
                <pr-icon :icon="item.icon" ratio="1.3"></pr-icon>
              </div>
            </div>
            <div
              v-if="item.isSelected"
              class="uk-width-1-2 uk-width-auto@s uk-text-left uk-flex-last@s uk-animation-slide-left-small"
            >
              <pr-icon icon="line-arrow-right" style="color: #045cfa"></pr-icon>
            </div>
            <div class="uk-width-1-1 uk-flex-1@s">
              <h6 class="uk-margin-remove-bottom uk-text-bold pr-margin-xsmall-left">
                {{ t(item.title) }}
              </h6>
              <p class="uk-margin-remove-top pr-select-card-description">
                {{ t(item.description) }}
              </p>
            </div>
          </pr-grid>
        </div>
      </div>
    </pr-grid>
  </div>
</template>

<style lang="less">
.type.pr-select-card-icon .uk-icon {
  .pr-icon-primary {
    color: rgba(4, 93, 255, 0.13);
    transition: color 0.2s;
  }

  .pr-icon-secondary {
    color: rgba(4, 93, 255, 0.19);
    transition: color 0.2s;
  }

  .pr-icon-tertiary {
    color: rgba(4, 93, 255, 0.24);
    transition: color 0.2s;
  }

  .pr-icon-quaternary {
    color: rgba(4, 93, 255, 0.15);
    transition: color 0.2s;
  }
}

.pr-select-card.uk-active .type.pr-select-card-icon .uk-icon,
.pr-select-card:hover .type.pr-select-card-icon {
  .pr-icon-primary {
    color: #4d8bff;
  }

  .pr-icon-secondary {
    color: #ccdeff;
  }

  .pr-icon-tertiary {
    color: #ffffff;
  }

  .pr-icon-quaternary {
    color: #b3cdff;
  }
}

.pr-select-card {
  padding: 20px 25px;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s;
}

.pr-select-card:hover {
  background-color: #edf4ff;
  border: 2px solid #576cb5;
  cursor: pointer;
}

.pr-select-card.uk-active {
  background-color: #edf4ff;
  border: 2px solid #576cb5;
}

.pr-select-card-icon {
  border-radius: 8px;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border: 2px solid #bbc7dd;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border;
  transition-duration: 0.2s;
}

.pr-select-card:hover .pr-select-card-icon {
  border: 2px solid #045dff;
  background-color: #045dff;
}

.pr-select-card.uk-active .pr-select-card-icon {
  background-color: #045dff;
  border: 2px solid #045dff;
}

.pr-select-card-description {
  margin-left: 5px;
  font-size: 13px;
  color: #868d9a;
  font-weight: 600;
  margin-top: 3px !important;
}
</style>
