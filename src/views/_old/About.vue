<script setup lang="ts"></script>

<template>
  <div />
  <div style="margin-right: 368px">
    <div class="uk-section uk-section-default uk-height-1-1">
      <div class="uk-container">
        <div class="uk-flex-center uk-grid-small" uk-grid>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="post uk-width-1-4">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.post {
  height: 80px;
}
.post .avatar {
  float: right;
  width: 52px;
  height: 52px;
  background-color: #ccc;
  border-radius: 25%;
  margin: 8px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;
}
.post .line {
  float: right;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
}
.post .avatar + .line {
  margin-top: 11px;
  width: 100px;
}
.post .line ~ .line {
  background-color: #ddd;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%,
  100% {
    background-position: 208px;
  }
}
</style>
