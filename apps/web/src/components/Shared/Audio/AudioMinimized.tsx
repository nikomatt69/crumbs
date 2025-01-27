/* eslint-disable @typescript-eslint/no-unused-vars */

import type { FC, ReactNode } from 'react';
import React, { createRef, useRef, useState } from 'react';
import { useAppStore } from 'src/store/persisted/useAppStore';

import { useAppUtils } from '@huddle01/react/app-utils';
import toast from 'react-hot-toast';
import SpaceWindowHeader from '@components/Common/SpacesWindow/SpaceWindowHeader';
import type { HTMLAudioElementWithSetSinkId } from '@components/Common/SpacesWindow/SpacesTypes';
import Wrapper from '@components/Echos/Wrapper';
import type { APITypes } from 'plyr-react';
import type { PrimaryPublication } from '@lensshare/lens';
import AudioPlayer from '@components/Listen/AudioPlayer';


const AudioMinimized: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setDisplayName, changeAvatarUrl, sendData } = useAppUtils();

  const [showAcceptRequest, setShowAcceptRequest] = useState(false);
  const [requestedPeerId, setRequestedPeerId] = useState('');
  const { currentProfile } = useAppStore();

  const [requestType, setRequestType] = useState('');
 
  const [musicTrack, setMusicTrack] = useState('');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = createRef<HTMLAudioElementWithSetSinkId>();

  
  const playerRef = useRef<APITypes>(null);
  return (
    <div className="fixed inset-0 bottom-20 top-auto z-[100] mx-auto flex h-fit w-screen grow rounded-xl xl:bottom-14">
      <div className="max-w-screen relative mx-auto grow rounded-xl">
        <div className="absolute bottom-0 right-0 ml-auto rounded-xl  border-[1.5px] border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="flex justify-center" />
          <SpaceWindowHeader
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
          <div className="min-w-[22rem]">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioMinimized;
