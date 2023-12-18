import React, { useState } from 'react';
import { Heading, Stack, VStack, Text ,Button} from '@chakra-ui/react';

const videosArr = [];



const Videos = () => {
    const [videosrc, setVideosrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} alignItems={'flex-start'} p="8" overflowY={'auto'}>
        <video
          controls
          controlsList="nodownload"
          src={videosrc}
          style={{ width: '100%' }}
        ></video>
        <Heading>Video Title</Heading>
        <Text>This is the description of a sample Video</Text>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((video, index) => (
          <Button
            variant="ghost"
            colorScheme="purple"
            onClick={() => setVideosrc(video)}
            marginTop={'2'}
          >
            <Text>Lecture {index + 1}</Text>
          </Button>
        ))}
        ;
      </VStack>
    </Stack>
  );
};

export default Videos;
