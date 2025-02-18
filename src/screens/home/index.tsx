import { Dimensions, Text, View, TouchableOpacity, Pressable } from 'react-native'
import {GestureHandlerRootView,  ScrollView} from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
// import { pulse } from 'react-native-css-animations';
// import Animated from 'react-native-reanimated';
import {AvatarHeaderFlatList, AvatarHeaderScrollView} from 'react-native-sticky-parallax-header'
import { SafeAreaView } from 'react-native-safe-area-context';


const hedaerImageHeight = Dimensions.get('screen').height * 0.54;

export const HomeScreen = ()=>{

    return (
        <GestureHandlerRootView style={{backgroundColor: '#ffffff', flex: 1}} className='' >
            
            <ScrollView 
             showsVerticalScrollIndicator={false}

            >
                <View style={{height: hedaerImageHeight}} className='bg-gray-200 h-[500px] relative'>

                    <View className='absolute bottom-0 w-full px-4 py-6'>
                        <Text className='text-6xl font-bold'>
                            Fashion
                        </Text>
                        <Text className='text-6xl font-bold mb-4'>
                            sale
                        </Text>
                        <TouchableOpacity className='bg-red-500 w-32 py-2 rounded-full'>
                            <Text className='text-white text-center text-sm'>
                                Check it out
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View className='px-4 mt-6'>
                    <View className='mb-4'>
                        <Text className='text-4xl font-bold'>
                            New
                        </Text>
                        <View className='mt-2 flex flex-row justify-between'>
                            <Text className='text-sm text-gray-600'>
                                You are yet to see these!
                            </Text>

                            <TouchableOpacity className='flex-row items-center'>
                                <Text className='text-sm text-gray-800 font-medium'>
                                    View all
                                </Text>
                                <Ionicons name='chevron-forward' size={11} style={{marginTop: 2, marginLeft: 1}} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className='pr-10 py-4'
                        contentContainerClassName='gap-4'
                    >
                        {
                            [1,2,3,4,5,6,7.8].map((item, index)=>{
                                return (
                                    <Pressable key={index} className='bg-gray-200 h-64 w-56'>
                                        {/* <Animated.View className={'bg-gray-200 h-64 w-56'} style={[pulse]} /> */}
                                    </Pressable>
                                )
                            })
                        }
                    </ScrollView>

                    <View className='mb-4'>
                        <Text className='text-4xl font-bold'>
                            New
                        </Text>
                        <View className='mt-2 flex flex-row justify-between'>
                            <Text className='text-sm text-gray-600'>
                                You are yet to see these!
                            </Text>

                            <TouchableOpacity className='flex-row items-center'>
                                <Text className='text-sm text-gray-800 font-medium'>
                                    View all
                                </Text>
                                <Ionicons name='chevron-forward' size={11} style={{marginTop: 2, marginLeft: 1}} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className='pr-10 py-4'
                        contentContainerClassName='gap-4'
                    >
                        {
                            [1,2,3,4,5,6,7.8].map((item, index)=>{
                                return (
                                    <Pressable key={index} className='bg-gray-200 h-64 w-56'>
                                        {/* <Animated.View className={'bg-gray-200 h-64 w-56'} style={[pulse]} /> */}
                                    </Pressable>
                                )
                            })
                        }
                    </ScrollView>
                </View>

            </ScrollView>

        </GestureHandlerRootView>
    )
}