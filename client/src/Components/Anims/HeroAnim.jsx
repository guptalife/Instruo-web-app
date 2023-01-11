import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

const parameters = [
	[0.25, 0xff7700, 1],
	[0.5, 0xff9900, 1],
	[0.75, 0xffaa00, 0.75],
	[1, 0xffaa00, 0.5],
	[1.25, 0x000888, 0.8],
	[3.0, 0xaaaaaa, 0.75],
	[3.5, 0xffffff, 0.5],
	[4.5, 0xffffff, 0.25],
	[5.5, 0xffffff, 0.125],
]
const r = 450

function createGeometry() {
	const geometry = new THREE.BufferGeometry()
	const vertices = []

	const vertex = new THREE.Vector3()

	for (let i = 0; i < 1500; i++) {
		vertex.x = Math.random() * 2 - 1
		vertex.y = Math.random() * 2 - 1
		vertex.z = Math.random() * 2 - 1
		vertex.normalize()
		vertex.multiplyScalar(r)

		vertices.push(vertex.x, vertex.y, vertex.z)

		vertex.multiplyScalar(Math.random() * 0.09 + 1)

		vertices.push(vertex.x, vertex.y, vertex.z)
	}

	geometry.setAttribute(
		"position",
		new THREE.Float32BufferAttribute(vertices, 3)
	)

	return geometry
}

const HeroAnim = () => {
	const myMesh = useRef()

	useFrame((state) => {
		state.camera.position.y -= state.mouse.y * 15
		state.camera.position.y = THREE.MathUtils.clamp(
			state.camera.position.y,
			-400,
			400
		)
		state.camera.position.x -= state.mouse.x * 15
		state.camera.position.x = THREE.MathUtils.clamp(
			state.camera.position.x,
			-400,
			400
		)

		const time = Date.now() * 0.0001

		for (let i = 0; i < myMesh.current.children.length; i++) {
			const object = myMesh.current.children[i]

			if (object.isLine) {
				object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1)) * 0.5

				if (i < 5) {
					const scale =
						object.userData.originalScale *
						(i / 5 + 1) *
						(1 + 0.45 * Math.sin(7 * time))

					object.scale.x = object.scale.y = object.scale.z = scale
				}
			}
		}
	})
	return (
		<>
			<PerspectiveCamera
				makeDefault
				fov={75}
				position={[0, 0, 1000]}
				near={1}
				far={3000}
			/>
			<mesh ref={myMesh}>
				{parameters.map((p, i) => (
					<lineSegments
						key={i}
						scale={[p[0], p[0], p[0]]}
						userData={{ originalScale: p[0] }}
						rotateY={Math.random() * Math.PI}
						geometry={createGeometry()}>
						<lineBasicMaterial
							color={p[1]}
							opacity={p[2]}
							attach="material"
						/>
					</lineSegments>
				))}
			</mesh>
		</>
	)
}

export default HeroAnim
