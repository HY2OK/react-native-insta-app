import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postInfo = [
  {
    postTitle: '짱구',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: true,
  },
  {
    postTitle: '철수',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 333,
    isLiked: false,
  },
  {
    postTitle: '영희',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 243,
    isLiked: false,
  },
  {
    postTitle: '맹구',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 987,
    isLiked: true,
  },
];

const Posts = () => {
  return (
    <View>
      {postInfo.map((data, index) => (
        <PostItem key={index} data={data} />
      ))}
    </View>
  );
};

export default Posts;
