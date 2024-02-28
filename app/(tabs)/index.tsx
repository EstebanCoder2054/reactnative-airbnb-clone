import { View } from 'react-native'
import React, { useState, useMemo } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import ListingsData from '@/assets/data/airbnb-listings.json';

const Page = () => {

  const [category, setCategory] = useState('Tiny homes'); // The first item
  const items = useMemo(() => {
    // Filter out items without a medium_url
    return ListingsData.filter(item => item.medium_url);
  }, [ListingsData]);

  const onDataChanged = (category: string) => {
    console.log('CHANGED: ', category);
    setCategory(category);
  }

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChange={onDataChanged}/>
      }}/>

      <Listings listings={items} category={category}/>
    </View>
  )
}

export default Page