<script setup lang="ts">
import { useCustomizerStore } from '@/stores/customizer';
const customizer = useCustomizerStore();
</script>

<template>
  <v-container fluid class="bg-containerBg construction-bg align-center pa-0" style="min-height: 100vh">
    <v-container no-gutters>
      <v-row class="align-center" :class="customizer.isRtl === true ? 'flex-row-reverse' : 'row'" style="min-height: calc(100vh - 10px)">
        <v-col cols="12" md="6" class="text-center">
          <h1 class="text-md-h1 text-h2 mt-9 mb-3">Under Construction</h1>
          <p class="text-h6 text-lightText constructionContent mb-7">
            Hey! Please check out this site later. We are doing some maintenance on it right now.
          </p>
          <v-btn variant="flat" rounded="md" color="primary" to="/">Back To Home</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <div class="constructionWrapper">
            <img src="@/assets/images/maintenance/img-cunstruct-1.svg" alt="under construction" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<style lang="scss">
.construction-bg {
  background-image: url('@/assets/images/maintenance/img-cunstruct-1-bg.png');
  background-position: top right;
  background-size: 100%;
  background-repeat: no-repeat;
}
.constructionWrapper {
  text-align: center;
  img {
    height: 400px;
    @media (max-width: 991px) {
      height: 300px;
      margin-inline: auto;
    }
    @media (max-width: 575px) {
      height: 250px;
    }
  }
}
.constructionContent {
  width: 83%;
  margin-inline: auto;
}
</style>
