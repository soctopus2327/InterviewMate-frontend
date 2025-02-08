// import React, { useEffect, useRef } from 'react'
// import { useGraph, extend } from '@react-three/fiber';
// import { useAnimations, useGLTF, useFBX } from '@react-three/drei'
// import { SkeletonUtils } from 'three-stdlib'
// import { Group, SkinnedMesh, Skeleton, Material} from 'three';

// interface AvatarProps {
//   [key: string]: any
// }

// interface CustomSkinnedMesh extends SkinnedMesh {
//   geometry: SkinnedMesh["geometry"]
//   skeleton: Skeleton
//   morphTargetDictionary?: { [key: string]: number }
//   morphTargetInfluences?: number[]
// }

// export function Avatar(props: AvatarProps) {
//   const { scene } = useGLTF('models/67a0b4f6747ce2670d1491c7.glb')
//   const clone = React.useMemo(() => SkeletonUtils.clone(scene) as Group, [scene])
//   const { nodes, materials } = useGraph(clone)

//   return (
//     <group {...props} dispose={null}>
//       <primitive object={nodes.Hips} />
//       <skinnedMesh 
//         geometry={(nodes.Wolf3D_Hair as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Hair} 
//         skeleton={(nodes.Wolf3D_Hair as CustomSkinnedMesh).skeleton} 
//       />
//       <skinnedMesh 
//         geometry={(nodes.Wolf3D_Body as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Body} 
//         skeleton={(nodes.Wolf3D_Body as CustomSkinnedMesh).skeleton} 
//       />
//       <skinnedMesh 
//         geometry={(nodes.Wolf3D_Outfit_Bottom as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Outfit_Bottom} 
//         skeleton={(nodes.Wolf3D_Outfit_Bottom as CustomSkinnedMesh).skeleton} 
//       />
//       <skinnedMesh 
//         geometry={(nodes.Wolf3D_Outfit_Footwear as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Outfit_Footwear} 
//         skeleton={(nodes.Wolf3D_Outfit_Footwear as CustomSkinnedMesh).skeleton} 
//       />
//       <skinnedMesh 
//         geometry={(nodes.Wolf3D_Outfit_Top as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Outfit_Top} 
//         skeleton={(nodes.Wolf3D_Outfit_Top as CustomSkinnedMesh).skeleton} 
//       />
//       <skinnedMesh 
//         name="EyeLeft" 
//         geometry={(nodes.EyeLeft as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Eye} 
//         skeleton={(nodes.EyeLeft as CustomSkinnedMesh).skeleton} 
//         morphTargetDictionary={(nodes.EyeLeft as CustomSkinnedMesh).morphTargetDictionary} 
//         morphTargetInfluences={(nodes.EyeLeft as CustomSkinnedMesh).morphTargetInfluences} 
//       />
//       <skinnedMesh 
//         name="EyeRight" 
//         geometry={(nodes.EyeRight as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Eye} 
//         skeleton={(nodes.EyeRight as CustomSkinnedMesh).skeleton} 
//         morphTargetDictionary={(nodes.EyeRight as CustomSkinnedMesh).morphTargetDictionary} 
//         morphTargetInfluences={(nodes.EyeRight as CustomSkinnedMesh).morphTargetInfluences} 
//       />
//       <skinnedMesh 
//         name="Wolf3D_Head" 
//         geometry={(nodes.Wolf3D_Head as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Skin} 
//         skeleton={(nodes.Wolf3D_Head as CustomSkinnedMesh).skeleton} 
//         morphTargetDictionary={(nodes.Wolf3D_Head as CustomSkinnedMesh).morphTargetDictionary} 
//         morphTargetInfluences={(nodes.Wolf3D_Head as CustomSkinnedMesh).morphTargetInfluences} 
//       />
//       <skinnedMesh 
//         name="Wolf3D_Teeth" 
//         geometry={(nodes.Wolf3D_Teeth as CustomSkinnedMesh).geometry} 
//         material={materials.Wolf3D_Teeth} 
//         skeleton={(nodes.Wolf3D_Teeth as CustomSkinnedMesh).skeleton} 
//         morphTargetDictionary={(nodes.Wolf3D_Teeth as CustomSkinnedMesh).morphTargetDictionary} 
//         morphTargetInfluences={(nodes.Wolf3D_Teeth as CustomSkinnedMesh).morphTargetInfluences} 
//       />
//     </group>
//   )
// }

// useGLTF.preload('models/67a0b4f6747ce2670d1491c7.glb')


import { useEffect, useRef, useMemo } from "react";
import { Group, AnimationClip, Object3D } from "three";
import { useGraph, GroupProps } from "@react-three/fiber";
import { useAnimations, useGLTF, useFBX } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";


interface AvatarProps extends GroupProps {}


export function Avatar(props: AvatarProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("models/67a0b4f6747ce2670d1491c7.glb");

  const clonedScene = useMemo(() => SkeletonUtils.clone(scene) as Object3D, [scene]);
  const { nodes } = useGraph(clonedScene);

  const { animations: meetAnimation } = useFBX("animations/Having A Meeting, Female.fbx");
  const clonedAnimation = useMemo(
    () => meetAnimation.map((clip) => clip.clone() as AnimationClip),
    [meetAnimation]
  );

  clonedAnimation.forEach((clip) => {
    clip.tracks = clip.tracks.filter((track) => 
      !track.name.includes("Eye") && !track.name.includes("eye")
    );
    
    clip.tracks = clip.tracks.map((track) => {
      if (track.name.includes("mixamorig")) {
        track.name = track.name.replace("mixamorig", ""); 
      }
      return track;
    });

 
  });

  console.log("Available nodes:", Object.keys(nodes));

  if (clonedAnimation.length > 0) {
    clonedAnimation[0].name = "Meet";
  }

  const { actions } = useAnimations(clonedAnimation, clonedScene);

  useEffect(() => {
    if (actions?.Meet) {
      actions.Meet.reset().fadeIn(0.5).play();
    } else {
      console.warn("Animation 'Meet' not found in actions:", actions);
    }
  }, [actions]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("models/67a0b4f6747ce2670d1491c7.glb");
