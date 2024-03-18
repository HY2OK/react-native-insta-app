import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileBody from '../components/ProfileBody';

const Profile = () => {
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="jun"
          accountName="Jun"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following="35"
          post="458"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
