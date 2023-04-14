import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Cube() {
    const PATH = "/static/textures/cube/"
    const props = useTexture({
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
    })
    return (
        <mesh castShadow={true}  rotation-y={Math.PI / 12} position={[2,0,-3]}>
            <boxGeometry />
            <meshStandardMaterial {...props}  side={DoubleSide} />
        </mesh>
    )
}