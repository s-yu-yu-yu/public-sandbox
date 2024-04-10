<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";

const canvas = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!canvas.value) return;

  const width = canvas.value.clientWidth;
  const height = canvas.value.clientHeight;

  // Create a Scene
  const scene = new THREE.Scene();

  // Create a Camera
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 1, -5);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Create a Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1);
  console.log(canvas.value);
  canvas.value.appendChild(renderer.domElement);
  // Create a Control
  const controls = new OrbitControls(camera, renderer.domElement);

  // ライトの生成
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(0, 0, -5);
  scene.add(light);

  // Load a VRM model
  const loader = new GLTFLoader();
  // Install GLTFLoader plugin
  loader.register((parser) => {
    return new VRMLoaderPlugin(parser);
  });
  loader.load(
    "/MyAvatar.vrm",
    (gltf) => {
      // retrieve a VRM instance from gltf
      const vrm = gltf.userData.vrm;

      // add the loaded vrm to the scene
      scene.add(vrm.scene);

      // deal with vrm features
      console.log(vrm);
    },
    // called while loading is progressing
    (progress) =>
      console.log(
        "Loading model...",
        100.0 * (progress.loaded / progress.total),
        "%"
      ),

    // called when loading has errors
    (error) => console.error(error)
  );

  // フレーム毎に呼ばれる
  const update = () => {
    requestAnimationFrame(update);
    controls.update();
    renderer.render(scene, camera);
  };
  update();
});
</script>

<template>
  <div ref="canvas" class="canvas" />
</template>

<style scoped>
.canvas {
  width: 100vw;
  height: 100vh;
}
</style>
