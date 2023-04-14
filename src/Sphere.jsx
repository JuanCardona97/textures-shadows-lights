import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Sphere() {
    const PATH = "/static/textures/circle/"
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })
    return (
        <mesh castShadow={true}  rotation-y={Math.PI / 12} position={[-3,0,0]}>
            <sphereGeometry />
            <meshStandardMaterial {...props}  side={DoubleSide} />
        </mesh>
    )
}