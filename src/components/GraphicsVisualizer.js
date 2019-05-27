import { View as GraphicsView } from "expo-graphics";
import ExpoTHREE, { loadObjAsync, THREE } from "expo-three";
import React from "react";
// import console = require("console");

export default class App extends React.Component {
  componentWillMount() {
    THREE.suppressExpoWarnings();
  }

  render() {
    // Create an `ExpoGraphics.View` covering the whole screen, tell it to call our
    // `onContextCreate` function once it's initialized.
    return (
      <GraphicsView
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
    );
  }

  // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    canvas,
    width,
    height,
    scale: pixelRatio
  }) => {
    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0xffffff, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000
    });

    // const obj = await loadAsync(
    //   [, ],
    //   null,
    //   imageName => resources[imageName]
    // );

    const mesh = await loadObjAsync({
      asset: require("@/assets/pizza2.obj")
    });

    let mate = new THREE.MeshPhongMaterial({
      ambient: 0x050505,
      color: 0x0033ff,
      specular: 0x555555,
      shininess: 30
    });

    this.cube = new THREE.Mesh(geometry, material);
    // mesh.rotation.x = -10;
    this.mesh = mesh;

    this.scene.add(mesh);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    // this.mesh.rotation.z += 3.5 * delta;
    this.mesh.rotation.y += 2 * delta;
    this.renderer.render(this.scene, this.camera);
  };
}
