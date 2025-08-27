<script setup lang="ts">
// image
import Avatar from '@i/avatar.png'

// component
import PrAvatar from '@c/core/PrAvatar.vue'
import PrGrid from '@c/core/PrGrid.vue'
import PrButton from '@c/core/PrButton.vue'
import PrCard from '@c/core/PrCard.vue'
import PrIcon from '@c/core/PrIcon.vue'
</script>

<template>
  <div>
    <div class="uk-margin-medium-bottom">
      <pr-grid class="uk-flex-between uk-flex-middle uk-child-width-auto@m">
        <div>
          <div class="uk-flex uk-flex-middle">
            <pr-avatar large circle cls="pr-cream-b-c">
              <img :src="Avatar" alt="" />
            </pr-avatar>
            <div class="uk-margin-left">
              <h2 class="uk-h4 uk-margin-remove">Welcome back, Fardin</h2>
              <span>Happy to see you again on your dashboard.</span>
            </div>
          </div>
        </div>
        <div>
          <pr-grid small>
            <div>
              <pr-button to="/" default>lorem lorem</pr-button>
            </div>
            <div>
              <pr-button to="/" primary>lorem lorem</pr-button>
            </div>
          </pr-grid>
        </div>
      </pr-grid>
    </div>
    <div>
      <pr-grid small match>
        <div class="uk-width-1-2@m">
          <pr-card body border default class="uk-border-rounded">
            <h3 class="uk-card-title">Default</h3>
            <div>
              <pr-grid small class="uk-child-width-1-2@m">
                <div>
                  <pr-card body muted small class="uk-border-rounded">
                    <div class="uk-flex uk-flex-middle">
                      <pr-avatar circle medium>
                        <pr-icon icon="cog" />
                      </pr-avatar>
                      <div class="uk-margin-small-left">
                        <div class="uk-h4 uk-margin-remove">131</div>
                        <span>lorem lorem lorem</span>
                      </div>
                    </div>
                  </pr-card>
                </div>
                <div>
                  <pr-card body muted small class="uk-border-rounded">
                    <div class="uk-flex uk-flex-middle">
                      <pr-avatar circle medium>
                        <pr-icon icon="moneybag-alt" />
                      </pr-avatar>
                      <div class="uk-margin-small-left">
                        <div class="uk-h4 uk-margin-remove">131</div>
                        <span>lorem lorem lorem</span>
                      </div>
                    </div>
                  </pr-card>
                </div>
                <div>
                  <pr-card body muted small class="uk-border-rounded">
                    <div class="uk-flex uk-flex-middle">
                      <pr-avatar circle medium>
                        <pr-icon icon="comparison" />
                      </pr-avatar>
                      <div class="uk-margin-small-left">
                        <div class="uk-h4 uk-margin-remove">131</div>
                        <span>lorem lorem lorem</span>
                      </div>
                    </div>
                  </pr-card>
                </div>
                <div>
                  <pr-card body muted small class="uk-border-rounded">
                    <div class="uk-flex uk-flex-middle">
                      <pr-avatar circle medium>
                        <pr-icon icon="award" />
                      </pr-avatar>
                      <div class="uk-margin-small-left">
                        <div class="uk-h4 uk-margin-remove">131</div>
                        <span>lorem lorem lorem</span>
                      </div>
                    </div>
                  </pr-card>
                </div>
              </pr-grid>
            </div>
          </pr-card>
        </div>
        <div class="uk-width-1-2@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card primary body default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-2@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card primary body default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-2@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card primary body default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
        <div class="uk-width-1-3@m">
          <pr-card body border default>
            <h3 class="uk-card-title">Default</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </pr-card>
        </div>
      </pr-grid>
    </div>
  </div>
</template>

<style scoped></style>
