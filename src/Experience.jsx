import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Sphere from './Sphere'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper,HemisphereLightHelper, PointLightHelper, SpotLightHelper} from 'three'

import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import Cube from './Cube'

export default function Experience() {

    const directionalLightRef = useRef();
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    const spotLightRef = useRef();
    const rectAreaLightRef = useRef();

    useHelper(directionalLightRef, DirectionalLightHelper,1);
    useHelper(hemisphereLightRef, HemisphereLightHelper,1);
    useHelper(pointLightRef, PointLightHelper,1);
    useHelper(spotLightRef, SpotLightHelper,1);
    useHelper(rectAreaLightRef, RectAreaLightHelper,1);


    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        {
        //Lights
        }

        <ambientLight intensity={0.5} />

        {/* <directionalLight ref={directionalLightRef} castShadow={true} position={[0, 10, -10]} intensity={1.5} shadow-mapSize={[ 2048, 2048 ]} />  */}
        {/* <hemisphereLight ref={hemisphereLightRef} castShadow={true} position={[2, 5, -8]} intensity={1.2} /> */}
        {/* <pointLight ref={pointLightRef} castShadow={true} position={[-3, 4, -3]} intensity={1.5} shadow-mapSize={[ 2048, 2048 ]}/>  */}
        {/* <rectAreaLight ref={rectAreaLightRef} castShadow={true} position={[0, 4, 0]} intensity={7}/>  */}
        { <spotLight ref={spotLightRef} castShadow={true} position={[-2, 4, -4]} intensity={4} shadow-mapSize={[ 2048, 2048 ]}/> }

        <Door/>
        <Sphere/>
        <Cube/>
        <Floor/>
    </>
}