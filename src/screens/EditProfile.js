import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 16, fontWeight: 'bold'}}>프로필 수정</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: '#3493D9'}}>완료</Text>
        </TouchableOpacity>
      </View>

      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text style={{color: '#3493D9', marginTop: 10}}>
          프로필 사진 바꾸기
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
